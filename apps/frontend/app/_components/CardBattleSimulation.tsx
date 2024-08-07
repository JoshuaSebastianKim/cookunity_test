"use client";
import { useContext } from "react";
import CardItem from "./CardItem";
import { BattleContext } from "../_providers/BattleProvider";
import { AnimatePresence, motion } from "framer-motion";

export default function CardBattleSimulation() {
  const { error, loading, battle } = useContext(BattleContext);

  if (error) {
    throw error;
  }

  return (
    <div className="flex gap-6 items-center">
      <AnimatePresence mode="popLayout">
        <motion.div
          key="attacker"
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
          }}
        >
          {battle && <CardItem card={battle.attacker} />}
        </motion.div>
        <motion.div
          key="vs"
          className="text-3xl font-bold"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          }}
        >
          VS
        </motion.div>
        <motion.div
          key="defender"
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          }}
        >
          {battle && <CardItem card={battle.defender} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
