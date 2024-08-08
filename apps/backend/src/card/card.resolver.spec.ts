import { Test, TestingModule } from '@nestjs/testing';
import { CardResolver } from './card.resolver';
import { CardService } from './card.service';
import { BattleService } from './battle.service';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

describe('CardResolver', () => {
  let resolver: CardResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CardResolver,
        CardService,
        BattleService,
        ConfigService,
        PrismaService,
      ],
    }).compile();

    resolver = module.get<CardResolver>(CardResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
