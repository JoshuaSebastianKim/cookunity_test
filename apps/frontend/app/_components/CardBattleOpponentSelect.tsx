import { gql, useApolloClient } from "@apollo/client";
import { AsyncPaginate } from "react-select-async-paginate";
import { PaginatedResult } from "../types/paginated-result";
import { forwardRef, Ref, useCallback, useRef } from "react";
import { Card, Prisma } from "@prisma/client";
import {
  GroupBase,
  OnChangeValue,
  OptionsOrGroups,
  SelectInstance,
} from "react-select";

export type Option = {
  value: string;
  label: string;
};

const GET_CARDS = gql`
  query GetCards($page: Int!, $where: CardWhereInput) {
    cards(page: $page, where: $where) {
      data {
        id
        name
      }
      meta {
        total
        perPage
        next
      }
    }
  }
`;

const mapCardDataToOptions = (cards: Card[]) =>
  cards.map((card) => ({
    value: card.id,
    label: card.name,
  }));

export default forwardRef(function CardBattleOpponetSelect(
  {
    filters = {},
    onOpponentSelect,
  }: {
    filters?: Prisma.CardWhereInput;
    onOpponentSelect: (opponent: string) => void;
  },
  ref: Ref<SelectInstance<Option>>
) {
  const client = useApolloClient();

  const handleOpponentSelect = (opponent: OnChangeValue<Option, false>) => {
    if (opponent) {
      onOpponentSelect(opponent.value);
    }
  };

  const handleLoadOptions = useCallback(
    async (
      _search: string,
      _loadedOptions: OptionsOrGroups<Option, GroupBase<Option>>,
      additional?: { page: number }
    ) => {
      if (!additional) {
        throw new Error("additional should be defined");
      }

      const { data } = await client.query<{
        cards: PaginatedResult<Card>;
      }>({
        query: GET_CARDS,
        variables: {
          page: additional.page,
          where: filters,
        },
      });
      return {
        options: mapCardDataToOptions(data.cards.data),
        hasMore: data.cards.meta.next !== null,
        additional: {
          page: additional.page + 1,
        },
      };
    },
    [client]
  );

  return (
    <AsyncPaginate
      defaultOptions
      loadOptions={handleLoadOptions}
      additional={{
        page: 1,
      }}
      onChange={handleOpponentSelect}
      selectRef={ref}
    />
  );
});
