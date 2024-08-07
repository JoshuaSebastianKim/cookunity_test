"use client";
import { useContext } from "react";
import { CardsContext } from "../_providers/CardsProvider";
import Link from "next/link";
import CardItem from "./CardItem";
import { AnimatePresence, motion } from "framer-motion";

export default function CardList() {
  const { error, loading, cards } = useContext(CardsContext);

  if (error) {
    throw error;
  }

  return (
    <div className="grid grid-cols-4 gap-6 items-start">
      <AnimatePresence mode="popLayout">
        {cards?.map((card, index) => (
          <motion.div
            key={`${card.id}-${index}`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                delay: index * 0.03,
              },
            }}
            exit={{
              opacity: 0,
            }}
            whileHover={{
              y: -10,
            }}
          >
            <Link href={`/card/${card.id}`} className="hover:shadow-lg">
              <CardItem card={card} />
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
