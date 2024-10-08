import { CardWithAttacks } from "../_providers/CardsProvider";

const typeColor = {
  COLORLESS: "#A8A77A",
  GRASS: "#7AC74C",
  FIRE: "#EE8130",
  WATER: "#6390F0",
  LIGHTNING: "#F7D02C",
  FIGHTING: "#C22E28",
  PSYCHIC: "#F95587",
  DARKNESS: "#705746",
  METAL: "#B7B7CE",
  DRAGON: "#6F35FC",
  FAIRY: "#D685AD",
};

const rarityicon = {
  COMMON: "●",
  UNCOMMON: "◆",
  RARE: "★",
};

export default function CardItem({ card }: { card: CardWithAttacks }) {
  return (
    <div
      className="border-4 border-black rounded p-2 bg-white"
      style={{
        borderColor: typeColor[card.type],
      }}
    >
      <div className="flex items-center">
        <div className="font-bold mr-auto">{card.name}</div>
        <div className="font-medium">
          <span className="text-xxs">HP</span>
          <span className="healPoints">{card.healPoints}</span>
        </div>
        <div
          className="ml-1 w-4 h-4 bg-black rounded-full"
          style={{ backgroundColor: typeColor[card.type] }}
        />
      </div>
      <div className="mt-1 aspect-video border border-black" />

      {card.info && (
        <div className="border border-black border-t-0 text-center text-xxs">
          {card.info}
        </div>
      )}
      <div className="min-h-32 py-2 flex flex-wrap items-center gap-2">
        {card.attacks.map((attack) => (
          <div key={`${card.id}-${attack.name}`} className="w-full">
            <div className="flex items-center justify-between">
              <div className="text-sm font-bold">{attack.name}</div>
              {attack.damage && (
                <div className="text-sm font-bold">{attack.damage}</div>
              )}
            </div>
            {attack.description && (
              <div className="mt-1 text-xxs">{attack.description}</div>
            )}
          </div>
        ))}
      </div>
      <div className="min-h-4 border-y flex items-baseline">
        <div className="text-xxs">
          Weakness{" "}
          {card.weakness && (
            <>
              <span
                className="ml-1 inline-block w-2 h-2 bg-black rounded-full"
                style={{ backgroundColor: typeColor[card.weakness] }}
              />
              <span className="text-xs">x2</span>
            </>
          )}
        </div>
        <div className="text-xxs ml-2">
          Resistance{" "}
          {card.resistance && (
            <>
              <span
                className="ml-1 inline-block w-2 h-2 bg-black rounded-full"
                style={{ backgroundColor: typeColor[card.resistance] }}
              />
              <span className="text-xs">-30</span>
            </>
          )}
        </div>
        <div className="ml-auto text-xs">{rarityicon[card.rarity]}</div>
      </div>
    </div>
  );
}
