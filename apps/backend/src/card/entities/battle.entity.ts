import { ObjectType, Field } from '@nestjs/graphql';
import { Card } from './card.entity';

@ObjectType()
export class Battle {
  @Field(() => Card)
  attacker: Card;

  @Field(() => Card)
  defender: Card;
}
