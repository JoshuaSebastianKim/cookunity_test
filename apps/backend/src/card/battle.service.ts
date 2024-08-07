import { Injectable } from '@nestjs/common';
import { Attack, Card } from '@prisma/client';
import { CardService } from './card.service';

export const WEAKNESS_MULTIPLIER = 2;
export const RESIST_AMOUNT = 30;

type CardWithCurrentHP = Card & {
  currentHealPoints?: number;
};

@Injectable()
export class BattleService {
  constructor(private cardService: CardService) {}

  static battle(attacker: Card, attack: Attack, defender: Card) {
    const defenderCopy = {
      ...defender,
      currentHealPoints: defender.healPoints,
    } as CardWithCurrentHP;
    const hasWeakness =
      defender.weakness && attacker.type === defender.weakness;
    const hasResistance =
      defender.resistance && attacker.type === defender.resistance;

    // Check damage modifiers
    let finalDamage = attack.damage;
    if (hasWeakness) {
      finalDamage = attack.damage * WEAKNESS_MULTIPLIER;
    }
    if (hasResistance) {
      finalDamage = attack.damage - RESIST_AMOUNT;
    }

    // Apply damage to defender
    defenderCopy.currentHealPoints = Math.max(
      0,
      defender.healPoints - finalDamage,
    );

    return {
      attacker,
      defender: defenderCopy,
    };
  }

  async battle(attackerId: string, defenderId: string, attackId?: string) {
    const [attacker, defender] = await Promise.all([
      this.cardService.findOne(attackerId),
      this.cardService.findOne(defenderId),
    ]);
    const findCardBestAttack = (card) =>
      card.attacks.reduce((prev, current) =>
        prev.damage > current.damage ? prev : current,
      );
    // Default attack to best attack if not provided
    const attack = attackId
      ? await this.cardService.findAttack(attackId)
      : findCardBestAttack(attacker);

    return BattleService.battle(attacker, attack, defender);
  }
}
