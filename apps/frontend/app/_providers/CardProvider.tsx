import { ApolloError, gql, useQuery } from "@apollo/client";
import { createContext } from "react";
import { CardWithAttacks } from "./CardsProvider";

const GET_CARD = gql`
  query GetCard($id: String!) {
    card(id: $id) {
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
  }
`;

export const CardContext = createContext<{
  error?: ApolloError;
  loading?: boolean;
  card?: CardWithAttacks;
}>({});

export function CardProvider({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) {
  const { error, loading, data } = useQuery<{
    card: CardWithAttacks;
  }>(GET_CARD, {
    variables: {
      id,
    },
  });

  return (
    <CardContext.Provider
      value={{
        error,
        loading,
        card: data?.card,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
