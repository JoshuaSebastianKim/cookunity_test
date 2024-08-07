"use client";
import { useContext } from "react";
import { CardsContext } from "../_providers/CardsProvider";
import Link from "next/link";
import CardItem from "./CardItem";
import { AnimatePresence, motion } from "framer-motion";
import Loading from "./Loading";
import NoResults from "./NoResults";
import { fadeIn } from "../_animations/fadeIn";

export default function CardList() {
  const { error, loading, cards } = useContext(CardsContext);

  if (error) {
    throw error;
  }

  return (
    <AnimatePresence mode="popLayout">
      {loading && <Loading key="loading" />}
      {!loading && !cards?.length && <NoResults key="no-results" />}
      <div className="grid grid-cols-4 gap-6 items-start">
        {cards?.map((card, index) => (
          <motion.div
            key={`${card.id}-${index}`}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              delay: index * 0.03,
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
      </div>
    </AnimatePresence>
  );
}
