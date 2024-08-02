import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { CreateAttackInput } from './create-attack.input';
import { CardType, Rarity } from 'src/@generated';

@InputType()
export class CreateCardInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, { nullable: true })
  info?: string;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int)
  healPoints: number;

  @IsNotEmpty()
  @IsArray()
  @Field(() => [CreateAttackInput])
  attacks: CreateAttackInput[];

  @IsNotEmpty()
  @IsEnum(CardType)
  @Field(() => CardType)
  type: CardType;

  @IsEnum(CardType)
  @Field(() => CardType, { nullable: true })
  resistance?: CardType;

  @IsEnum(CardType)
  @Field(() => CardType, { nullable: true })
  weakness: CardType;

  @IsNotEmpty()
  @IsEnum(Rarity)
  @Field(() => Rarity)
  rarity: Rarity;
}
