import { CardType, Rarity } from '@prisma/client';
import { CreateCardInput } from 'src/card/dto/create-card.input';

export const cardsData: CreateCardInput[] = [
  {
    name: 'Pikachu',
    info: `N0. 025 Mouse Pokemon HT: 1'04" WT: 13.2 lbs.`,
    healPoints: 60,
    type: CardType.LIGHTNING,
    resistance: CardType.METAL,
    weakness: CardType.FIGHTING,
    attacks: [
      {
        name: 'Metal Tiem',
        description:
          'Flip a coiun until you get tails. For each heads, draw a card.',
      },
      {
        name: 'Gnaw',
        damage: 20,
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    name: 'Charizard EX',
    healPoints: 180,
    type: CardType.FIRE,
    weakness: CardType.WATER,
    attacks: [
      {
        name: 'Stoke',
        description:
          'Flip a coin. If heads, search your deck for up to 3 basic Energy cards and attach them to this Pokémon. Shuffle your deck afterward.',
      },
      {
        name: 'Fire Blast',
        description: 'Discard an Energy attached to this Pokémon.',
        damage: 120,
      },
    ],
    rarity: Rarity.RARE,
  },
  {
    name: 'Onix',
    healPoints: 90,
    type: CardType.FIGHTING,
    weakness: CardType.GRASS,
    attacks: [
      {
        name: 'Slam',
        description:
          'Flip 2 coins. This attack does 20 damage times the number of heads',
        damage: 20,
      },
      {
        name: 'Body Slam',
        description:
          'Flip a coin. If heads, the Defending Pokemon is now Paralized.',
        damage: 40,
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    name: 'Feraligatr',
    healPoints: 180,
    type: CardType.WATER,
    weakness: CardType.LIGHTNING,
    attacks: [
      {
        name: 'Giant Wave',
        description:
          'During your next turn, this Pokémon can’t use Giant Wave.',
        damage: 160,
      },
    ],
    rarity: Rarity.RARE,
  },
  {
    name: 'Sneasel',
    healPoints: 70,
    type: CardType.DARKNESS,
    weakness: CardType.GRASS,
    attacks: [
      {
        name: 'Dig Claws',
        damage: 20,
      },
    ],
    rarity: Rarity.COMMON,
  },
  {
    name: 'Scizor',
    healPoints: 120,
    type: CardType.METAL,
    resistance: CardType.PSYCHIC,
    weakness: CardType.FIRE,
    attacks: [
      {
        name: 'Special Blow',
        description:
          'If your opponent’s Active Pokémon has any Special Energy attached to it, this attack does 70 more damage.',
        damage: 60,
      },
    ],
    rarity: Rarity.RARE,
  },
  {
    name: 'Treecko',
    healPoints: 40,
    type: CardType.PSYCHIC,
    resistance: CardType.WATER,
    weakness: CardType.FIRE,
    attacks: [
      {
        name: 'Pound',
        damage: 10,
      },
      {
        name: 'Shining Claws',
        description:
          'Flip a coin. If heads, the Defending Pokémon is now Confused.',
        damage: 10,
      },
    ],
    rarity: Rarity.COMMON,
  },
];
