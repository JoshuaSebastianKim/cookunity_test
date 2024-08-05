import { Card, CardType, Prisma } from "@prisma/client";
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

export const CardContext = createContext<{
  handleSetPage: (page: number) => void;
  handleSetTypeFilter: (typeFilter: CardType) => void;
  handleSetTextFilter: (textFilter: string) => void;
  typeFilter?: CardType;
  error?: ApolloError;
  loading?: boolean;
  cards?: Card[];
  meta?: Metadata;
  page: number;
}>({
  handleSetPage: () => {},
  handleSetTypeFilter: () => {},
  handleSetTextFilter: () => {},
  typeFilter: undefined,
  page: 1,
});

export function CardProvider({ children }: { children: React.ReactNode }) {
  const [page, setPage] = useState<number>(1);
  const handleSetPage = (page: number) => setPage(page);

  const [textFilter, setTextFilter] = useState<string>("");
  const handleSetTextFilter = debounce(
    setTextFilter,
    TEXT_FILTER_DEBOUNCE_WAIT
  );

  const [typeFilter, setTypeFilter] = useState<CardType>();
  const handleSetTypeFilter = (typeFilter: CardType) =>
    setTypeFilter(typeFilter);

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
    cards: PaginatedResult<Card>;
  }>(GET_CARDS, {
    variables: {
      page,
      where: filters,
    },
  });

  console.log("cards", data?.cards.data);
  console.log("meta", data?.cards.meta);

  return (
    <CardContext.Provider
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
    </CardContext.Provider>
  );
}
