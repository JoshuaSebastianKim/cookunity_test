import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Metadata {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  lastPage: number;

  @Field(() => Int)
  currentPage: number;

  @Field(() => Int)
  perPage: number;

  @Field(() => Int, { nullable: true })
  prev?: number;

  @Field(() => Int, { nullable: true })
  next?: number;
}
