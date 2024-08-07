import { RefObject, useContext, useRef, useState } from "react";
import { CardContext } from "../_providers/CardProvider";
import CardItem from "./CardItem";
import CardBattleOpponetSelect from "./CardBattleOpponentSelect";
import { SelectInstance } from "react-select";

type Option = {
  value: string;
  label: string;
};

export default function CardBattleLobby() {
  const [opponentId, setOpponentId] = useState<string>();
  const { error, loading, card } = useContext(CardContext);

  const opponentRefs: { [name: string]: RefObject<SelectInstance<Option>> } = {
    opponent: useRef<SelectInstance<Option>>(null),
    weakness: useRef<SelectInstance<Option>>(null),
    resistance: useRef<SelectInstance<Option>>(null),
  };

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

  if (!card) {
    return (
      <div className="min-h-80 flex justify-center items-center">
        Card not found
      </div>
    );
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
      <div className="flex-1">
        <CardItem card={card} />
      </div>
      <div className="text-3xl font-bold">VS</div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="text-center text-lg font-medium">Battle with:</div>
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
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={opponentId === undefined}
        >
          BATTLE!
        </button>
      </div>
    </div>
  );
}
