"use client";
import { RefObject, useContext, useRef, useState } from "react";
import { CardContext } from "../_providers/CardProvider";
import CardItem from "./CardItem";
import CardBattleOpponetSelect from "./CardBattleOpponentSelect";
import { SelectInstance } from "react-select";
import Link from "next/link";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

type Option = {
  value: string;
  label: string;
};

export default function CardBattleLobby() {
  const [opponentId, setOpponentId] = useState<string>();
  const { error, card } = useContext(CardContext);

  const opponentRefs: { [name: string]: RefObject<SelectInstance<Option>> } = {
    opponent: useRef<SelectInstance<Option>>(null),
    weakness: useRef<SelectInstance<Option>>(null),
    resistance: useRef<SelectInstance<Option>>(null),
  };

  if (error) {
    throw error;
  }

  const handleOpponentSelect = (type: string) => (opponentId: string) => {
    const otherSelects = Object.fromEntries(
      Object.entries(opponentRefs).filter(([key]) => key !== type)
    );

    // reset values on other selects
    for (const select in otherSelects) {
      otherSelects[select].current?.clearValue();
    }

    setOpponentId(opponentId);
  };

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
          {card && <CardItem card={card} />}
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
          className="flex-1 flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          }}
        >
          {card && (
            <>
              <div className="text-center text-lg font-medium">
                Battle with:
              </div>
              <CardBattleOpponetSelect
                onOpponentSelect={handleOpponentSelect("opponent")}
                ref={opponentRefs.opponent}
              />
              <div className="text-center">Or against weak opponent:</div>
              <CardBattleOpponetSelect
                onOpponentSelect={handleOpponentSelect("weakness")}
                filters={{
                  weakness: {
                    equals: card.type,
                  },
                }}
                ref={opponentRefs.weakness}
              />
              <div className="text-center">Or against stronger opponent:</div>
              <CardBattleOpponetSelect
                onOpponentSelect={handleOpponentSelect("resistance")}
                filters={{
                  resistance: {
                    equals: card.type,
                  },
                }}
                ref={opponentRefs.resistance}
              />
              <Link
                href={`/battle/${card.id}/${opponentId}`}
                className={classNames(
                  "mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors text-center",
                  {
                    "opacity-50": opponentId === undefined,
                    "cursor-not-allowed": opponentId === undefined,
                    "pointer-events-none": opponentId === undefined,
                  }
                )}
              >
                BATTLE!
              </Link>
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
