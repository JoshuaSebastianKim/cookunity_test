"use client";

import { useContext } from "react";
import { CardContext } from "../_providers/CardProvider";

export default function CardList() {
  const { error, loading, cards } = useContext(CardContext);

  if (error) {
    return "Error";
  }

  if (loading) {
    return "Loading...";
  }

  return (
    <div>{cards?.map((card) => <div key={card.id}>{card.name}</div>)}</div>
  );
}
