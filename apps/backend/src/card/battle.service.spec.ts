import { Test, TestingModule } from '@nestjs/testing';
import {
  BattleService,
  RESIST_AMOUNT,
  WEAKNESS_MULTIPLIER,
} from './battle.service';
import { cardsData } from 'prisma/cardData';
import { Attack, Card, CardType } from '@prisma/client';

// Combat list [Attacker vs Defender, OTK: One turn kill]
const combats: Array<[string, string, boolean]> = [
  ['Feraligatr', 'Charizard EX', true],
  ['Onix', 'Pikachu', true],
  ['Pikachu', 'Onix', false],
  ['Sneasel', 'Scizor', false],
  ['Scizor', 'Pickachu', false],
  ['Onix', 'Treecko', true],
];

describe('BattleService', () => {
  let service: BattleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BattleService],
    }).compile();

    service = module.get<BattleService>(BattleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Battle simulation', () => {
    combats.forEach(([attackerName, defenderName, OTK]) => {
      it(`attacker (${attackerName}) hits defender (${defenderName}) and should ${OTK ? '' : 'not '}OTK`, () => {
        const findCardByName = (cardName): Card =>
          ({
            id: attackerName,
            ...cardsData.find((card) => card.name === cardName),
          }) as Card;
        const findCardBestAttack = (card) =>
          card.attacks.reduce((prev, current) =>
            prev.damage > current.damage ? prev : current,
          );

        const attacker = findCardByName(attackerName);
        const attack = findCardBestAttack(attacker);
        const defender = findCardByName(defenderName);
        const result = BattleService.battle(attacker, attack, defender);
        const isDefenderKO = result.defender.healPoints === 0;

        expect(isDefenderKO).toBe(OTK);
      });
    });

    it('should aplly attacker damage to defender wiuthout modifiers', () => {
      const attacker = {
        name: 'test',
      };
      const defender = {
        healPoints: 100,
      };
      const attacks = [
        { damage: 10 },
        { damage: 20 },
        { damage: 30 },
        { damage: 40 },
        { damage: 50 },
      ];

      attacks.forEach((attack) => {
        const result = BattleService.battle(
          attacker as Card,
          attack as Attack,
          { ...defender } as Card, // create copy of defender
        );

        expect(result.defender.healPoints).toBe(
          defender.healPoints - attack.damage,
        );
      });
    });

    it('should apply weakness damage modifier when attacker type and defender weakness are the same', () => {
      const attacker = {
        type: CardType.COLORLESS,
      };
      const defender = {
        weakness: CardType.COLORLESS,
        healPoints: 100,
      };
      const attacks = [
        { damage: 10 },
        { damage: 20 },
        { damage: 30 },
        { damage: 40 },
        { damage: 50 },
      ];

      attacks.forEach((attack) => {
        const result = BattleService.battle(
          attacker as Card,
          attack as Attack,
          { ...defender } as Card, // create copy of defender
        );

        expect(result.defender.healPoints).toBe(
          defender.healPoints - attack.damage * WEAKNESS_MULTIPLIER,
        );
      });
    });

    it('should apply resistance damage modifier when attacker type and defender resistance are the same', () => {
      const attacker = {
        type: CardType.COLORLESS,
      };
      const defender = {
        resistance: CardType.COLORLESS,
        healPoints: 100,
      };
      const attacks = [
        { damage: 10 },
        { damage: 20 },
        { damage: 30 },
        { damage: 40 },
        { damage: 50 },
      ];

      attacks.forEach((attack) => {
        const result = BattleService.battle(
          attacker as Card,
          attack as Attack,
          { ...defender } as Card, // create copy of defender
        );

        expect(result.defender.healPoints).toBe(
          defender.healPoints - (attack.damage - RESIST_AMOUNT),
        );
      });
    });
  });
});
