import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardResolver } from './card.resolver';
import { BattleService } from './battle.service';

@Module({
  providers: [CardResolver, CardService, BattleService],
})
export class CardModule {}
