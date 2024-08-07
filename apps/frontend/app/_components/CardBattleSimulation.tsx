"use client";
import { useContext, useEffect } from "react";
import CardItem from "./CardItem";
import { BattleContext } from "../_providers/BattleProvider";
import {
  AnimatePresence,
  AnimationSequence,
  cubicBezier,
  delay,
  motion,
  useAnimate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { fadeIn } from "../_animations/fadeIn";
import Loading from "./Loading";

export default function CardBattleSimulation() {
  const { error, loading, battle } = useContext(BattleContext);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    (async () => {
      const attackerDiv = document.getElementById("attacker");
      const defenderDiv = document.getElementById("defender");
      const hpDOM = defenderDiv?.querySelector(".healPoints");

      if (attackerDiv && defenderDiv && hpDOM && battle) {
        const attackerPosition = attackerDiv?.getBoundingClientRect() || {
          left: 0,
          width: 0,
        };
        const defenderPosition = defenderDiv?.getBoundingClientRect() || {
          left: 0,
        };
        const secuence: AnimationSequence = [
          [
            attackerDiv,
            {
              x: [
                0,
                -100,
                defenderPosition?.left -
                  attackerPosition?.left -
                  attackerPosition?.width / 2,
                0,
              ],
            },
            { delay: 0.5, duration: 1, ease: cubicBezier(0.34, 1.56, 0.64, 1) },
          ],
          [defenderDiv, { x: [0, 10, -10, 10, -10, 0] }],
        ];

        // animate attack motion
        await animate(secuence);
        // reduce hp on defender
        await animate(
          battle.defender.healPoints,
          battle.defender.currentHealPoints,
          {
            onUpdate(latest) {
              hpDOM.textContent = latest?.toFixed() || "0";
            },
          }
        );

        // animate death
        if (battle.defender.currentHealPoints === 0) {
          await animate(defenderDiv, { rotate: 60 }, { delay: 0.4 });
          await animate(defenderDiv, { opacity: 0.5 }, { delay: 0.4 });
        } else {
          //animate survive
          await animate(
            defenderDiv,
            { scale: [1, 1.1, 1] },
            { delay: 0.4, ease: cubicBezier(0.33, 1, 0.68, 1), duration: 1 }
          );
        }
      }
    })();
  });

  if (error) {
    throw error;
  }

  return (
    <AnimatePresence mode="popLayout">
      {loading && <Loading key="loading" />}
      <div className="flex items-center p-10" ref={scope}>
        <motion.div
          key="attacker"
          className="flex-1 z-10"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={fadeIn}
          id="attacker"
        >
          {battle && <CardItem card={battle.attacker} />}
        </motion.div>
        <motion.div
          key="vs"
          className="text-3xl font-bold mx-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{
            delay: 0.2,
          }}
        >
          VS
        </motion.div>
        <motion.div
          key="defender"
          className="flex-1"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{
            delay: 0.4,
          }}
          id="defender"
        >
          {battle && <CardItem card={battle.defender} />}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
