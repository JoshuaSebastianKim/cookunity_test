"use client";

import { useContext } from "react";
import { CardsContext } from "../_providers/CardsProvider";
import Link from "next/link";
import CardItem from "./CardItem";

export default function CardList() {
  const { error, loading, cards } = useContext(CardsContext);

  if (error) {
    throw error;
  }

  if (loading) {
    return (
      <div className="min-h-80 flex justify-center items-center">
        Loading...
      </div>
    );
  }

  if (!cards?.length) {
    return (
      <div className="min-h-80 flex justify-center items-center">
        No results
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-6 items-start">
      {cards?.map((card, index) => (
        <Link
          href={`/card/${card.id}`}
          key={card.id}
          className="transition-all hover:-translate-y-2 hover:shadow opacity-0 animate-fade"
          style={{
            animationDelay: `${50 * index}ms`,
            animationFillMode: "forwards",
          }}
        >
          <CardItem card={card} index={index} />
        </Link>
      ))}
    </div>
  );
}
