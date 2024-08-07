"use client";
import { Attack, Card, CardType, Prisma } from "@prisma/client";
import { createContext, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import { ApolloError, gql, useQuery } from "@apollo/client";
import { Metadata, PaginatedResult } from "../types/paginated-result";

const TEXT_FILTER_DEBOUNCE_WAIT = 500;

const GET_CARDS = gql`
  query GetCards($page: Int!, $where: CardWhereInput) {
    cards(page: $page, where: $where) {
      data {
        id
        name
        info
        healPoints
        type
        resistance
        weakness
        attacks {
          name
          description
          damage
        }
        rarity
      }
      meta {
        total
        perPage
        next
      }
    }
  }
`;

export type CardWithAttacks = Card & {
  attacks: Attack[];
  currentHealPoints?: number;
};

export const CardsContext = createContext<{
  handleSetPage: (page: number) => void;
  handleSetTypeFilter: (typeFilter: CardType) => void;
  handleSetTextFilter: (textFilter: string) => void;
  typeFilter?: CardType;
  error?: ApolloError;
  loading?: boolean;
  cards?: CardWithAttacks[];
  meta?: Metadata;
  page: number;
}>({
  handleSetPage: () => {},
  handleSetTypeFilter: () => {},
  handleSetTextFilter: () => {},
  typeFilter: undefined,
  page: 1,
});

export function CardsProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<number>(1);
  const handleSetPage = (page: number) => setPage(page);

  const [textFilter, setTextFilter] = useState<string>("");
  const handleSetTextFilter = debounce((text: string) => {
    setPage(1);
    setTextFilter(text);
  }, TEXT_FILTER_DEBOUNCE_WAIT);

  const [typeFilter, setTypeFilter] = useState<CardType>();
  const handleSetTypeFilter = (typeFilter: CardType) => {
    setPage(1);
    setTypeFilter(typeFilter);
  };

  const filters = useMemo(() => {
    const where: Prisma.CardWhereInput = {};

    // apply text filter
    if (textFilter) {
      where["name"] = {
        contains: textFilter,
        mode: "insensitive",
      };
    }

    // apply type filter
    if (typeFilter) {
      where["type"] = {
        equals: typeFilter,
      };
    }

    return where;
  }, [textFilter, typeFilter]);

  const { error, loading, data } = useQuery<{
    cards: PaginatedResult<CardWithAttacks>;
  }>(GET_CARDS, {
    variables: {
      page,
      where: filters,
    },
  });

  return (
    <CardsContext.Provider
      value={{
        error,
        loading,
        cards: data?.cards.data,
        meta: data?.cards.meta,
        page,
        handleSetPage,
        handleSetTextFilter,
        handleSetTypeFilter,
      }}
    >
      {children}
    </CardsContext.Provider>
  );
}
