import { Field, ObjectType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { Metadata } from './metadata.entity';

export function Paginated<T>(classRef: Type<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedType {
    @Field(() => [classRef], { nullable: true })
    data: T[];

    @Field(() => Metadata, { nullable: true })
    meta: Metadata;
  }
  return PaginatedType;
}
