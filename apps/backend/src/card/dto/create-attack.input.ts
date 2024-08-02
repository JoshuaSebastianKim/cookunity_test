import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateAttackInput {
  @IsNotEmpty()
  @IsString()
  @Field(() => String)
  name: string;

  @IsNotEmpty()
  @IsString()
  @Field(() => String, { nullable: true })
  description?: string;

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Int, { nullable: true })
  damage?: number;
}
