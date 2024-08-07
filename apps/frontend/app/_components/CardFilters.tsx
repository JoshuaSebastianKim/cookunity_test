"use client";
import { useContext } from "react";
import { CardsContext } from "../_providers/CardsProvider";
import { CardType } from "@prisma/client";
import { motion } from "framer-motion";

export default function CardFilters() {
  const { handleSetTextFilter, handleSetTypeFilter } = useContext(CardsContext);

  return (
    <div className="flex justify-end gap-4 text-black">
      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <input
          type="text"
          placeholder="Search by Name"
          onChange={(event) => handleSetTextFilter(event.target.value)}
          className="block rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        />
      </motion.div>
      <motion.div
        className="flex"
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <select
          defaultValue=""
          onChange={(event) =>
            handleSetTypeFilter(event.target.value as CardType)
          }
          className="bg-white rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-900 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        >
          <option value="">Any</option>
          {Object.entries(CardType).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </motion.div>
    </div>
  );
}
