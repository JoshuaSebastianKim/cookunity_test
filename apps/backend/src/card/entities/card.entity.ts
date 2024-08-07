import { ObjectType, Field, Int, ID, registerEnumType } from '@nestjs/graphql';
import { Attack } from './attack.entity';
import { Paginated } from 'src/prisma/entities/paginated.entity';
import { CardType, Rarity } from 'src/@generated';

registerEnumType(CardType, {
  name: 'CardType',
  description: 'Types of the card',
});

registerEnumType(Rarity, {
  name: 'Rarity',
  description: 'Rarity of the card',
});

@ObjectType()
export class Card {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String, { nullable: true })
  info?: string;

  @Field(() => Int)
  healPoints: number;

  @Field(() => Int, { nullable: true })
  currentHealPoints?: number;

  @Field(() => [Attack])
  attacks: Attack[];

  @Field(() => CardType)
  type: CardType;

  @Field(() => CardType, { nullable: true })
  resistance?: CardType;

  @Field(() => CardType, { nullable: true })
  weakness?: CardType;

  @Field(() => Rarity)
  rarity: Rarity;
}

@ObjectType()
export class PaginatedCard extends Paginated(Card) {}
