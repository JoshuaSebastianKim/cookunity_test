import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Attack {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  damage: number;
}
