import { Injectable } from '@nestjs/common';
import { Attack, Card } from '@prisma/client';
import { CardService } from './card.service';

export const WEAKNESS_MULTIPLIER = 2;
export const RESIST_AMOUNT = 30;

@Injectable()
export class BattleService {
  constructor(private cardService: CardService) {}

  static battle(attacker: Card, attack: Attack, defender: Card) {
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
    defender.healPoints = Math.max(0, defender.healPoints - finalDamage);

    return {
      attacker,
      defender,
    };
  }

  async battle(attackerId: string, attackId: string, defenderId: string) {
    const [attacker, attack, defender] = await Promise.all([
      this.cardService.findOne(attackerId),
      this.cardService.findAttack(attackId),
      this.cardService.findOne(defenderId),
    ]);

    return BattleService.battle(attacker, attack, defender);
  }
}
