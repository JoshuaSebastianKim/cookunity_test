"use client";
import { ApolloError, gql, useQuery } from "@apollo/client";
import { createContext } from "react";
import { CardWithAttacks } from "./CardsProvider";

const SIMULATE_BATTLE = gql`
  query SimulateBattle(
    $attackerId: String!
    $defenderId: String!
    $attackId: String
  ) {
    battle(
      attackerId: $attackerId
      defenderId: $defenderId
      attackId: $attackId
    ) {
      attacker {
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
      defender {
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
  }
`;

export const BattleContext = createContext<{
  error?: ApolloError;
  loading?: boolean;
  battle?: {
    attacker: CardWithAttacks;
    defender: CardWithAttacks;
  };
}>({});

export default function BattleProvider({
  children,
  attackerId,
  defenderId,
}: {
  children: React.ReactNode;
  attackerId: string;
  defenderId: string;
}) {
  const { error, loading, data } = useQuery<{
    battle: {
      attacker: CardWithAttacks;
      defender: CardWithAttacks;
    };
  }>(SIMULATE_BATTLE, {
    variables: {
      attackerId,
      defenderId,
    },
  });

  return (
    <BattleContext.Provider value={{ error, loading, battle: data?.battle }}>
      {children}
    </BattleContext.Provider>
  );
}
