import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

export enum VerificationTokenScalarFieldEnum {
  identifier = 'identifier',
  token = 'token',
  expires = 'expires',
}

export enum UserScalarFieldEnum {
  id = 'id',
  name = 'name',
  email = 'email',
  emailVerified = 'emailVerified',
  image = 'image',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum SessionScalarFieldEnum {
  sessionToken = 'sessionToken',
  userId = 'userId',
  expires = 'expires',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum Rarity {
  COMMON = 'COMMON',
  UNCOMMON = 'UNCOMMON',
  RARE = 'RARE',
}

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

export enum NullsOrder {
  first = 'first',
  last = 'last',
}

export enum CardType {
  COLORLESS = 'COLORLESS',
  GRASS = 'GRASS',
  FIRE = 'FIRE',
  WATER = 'WATER',
  LIGHTNING = 'LIGHTNING',
  FIGHTING = 'FIGHTING',
  PSYCHIC = 'PSYCHIC',
  DARKNESS = 'DARKNESS',
  METAL = 'METAL',
  DRAGON = 'DRAGON',
  FAIRY = 'FAIRY',
}

export enum CardScalarFieldEnum {
  id = 'id',
  name = 'name',
  info = 'info',
  healPoints = 'healPoints',
  type = 'type',
  resistance = 'resistance',
  weakness = 'weakness',
  rarity = 'rarity',
}

export enum AuthenticatorScalarFieldEnum {
  credentialID = 'credentialID',
  userId = 'userId',
  providerAccountId = 'providerAccountId',
  credentialPublicKey = 'credentialPublicKey',
  counter = 'counter',
  credentialDeviceType = 'credentialDeviceType',
  credentialBackedUp = 'credentialBackedUp',
  transports = 'transports',
}

export enum AttackScalarFieldEnum {
  id = 'id',
  name = 'name',
  description = 'description',
  damage = 'damage',
  cardId = 'cardId',
}

export enum AccountScalarFieldEnum {
  userId = 'userId',
  type = 'type',
  provider = 'provider',
  providerAccountId = 'providerAccountId',
  refresh_token = 'refresh_token',
  access_token = 'access_token',
  expires_at = 'expires_at',
  token_type = 'token_type',
  scope = 'scope',
  id_token = 'id_token',
  session_state = 'session_state',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

registerEnumType(AccountScalarFieldEnum, {
  name: 'AccountScalarFieldEnum',
  description: undefined,
});
registerEnumType(AttackScalarFieldEnum, {
  name: 'AttackScalarFieldEnum',
  description: undefined,
});
registerEnumType(AuthenticatorScalarFieldEnum, {
  name: 'AuthenticatorScalarFieldEnum',
  description: undefined,
});
registerEnumType(CardScalarFieldEnum, {
  name: 'CardScalarFieldEnum',
  description: undefined,
});
registerEnumType(CardType, { name: 'CardType', description: undefined });
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined });
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(Rarity, { name: 'Rarity', description: undefined });
registerEnumType(SessionScalarFieldEnum, {
  name: 'SessionScalarFieldEnum',
  description: undefined,
});
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(TransactionIsolationLevel, {
  name: 'TransactionIsolationLevel',
  description: undefined,
});
registerEnumType(UserScalarFieldEnum, {
  name: 'UserScalarFieldEnum',
  description: undefined,
});
registerEnumType(VerificationTokenScalarFieldEnum, {
  name: 'VerificationTokenScalarFieldEnum',
  description: undefined,
});

@InputType()
export class AccountAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  expires_at?: keyof typeof SortOrder;
}

@InputType()
export class AccountCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  refresh_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  access_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires_at?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token_type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  scope?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  id_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  session_state?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AccountCreateManyUserInputEnvelope {
  @Field(() => [AccountCreateManyUserInput], { nullable: false })
  @Type(() => AccountCreateManyUserInput)
  data!: Array<AccountCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class AccountCreateManyUserInput {
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AccountCreateManyInput {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AccountCreateNestedManyWithoutUserInput {
  @Field(() => [AccountCreateWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateWithoutUserInput)
  create?: Array<AccountCreateWithoutUserInput>;
  @Field(() => [AccountCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
  @Field(() => AccountCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<AccountWhereUniqueInput>;
}

@InputType()
export class AccountCreateOrConnectWithoutUserInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: InstanceType<typeof AccountWhereUniqueInput>;
  @Field(() => AccountCreateWithoutUserInput, { nullable: false })
  @Type(() => AccountCreateWithoutUserInput)
  create!: InstanceType<typeof AccountCreateWithoutUserInput>;
}

@InputType()
export class AccountCreateWithoutUserInput {
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AccountCreateInput {
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => UserCreateNestedOneWithoutAccountsInput, { nullable: false })
  user!: InstanceType<typeof UserCreateNestedOneWithoutAccountsInput>;
}

@InputType()
export class AccountListRelationFilter {
  @Field(() => AccountWhereInput, { nullable: true })
  every?: InstanceType<typeof AccountWhereInput>;
  @Field(() => AccountWhereInput, { nullable: true })
  some?: InstanceType<typeof AccountWhereInput>;
  @Field(() => AccountWhereInput, { nullable: true })
  none?: InstanceType<typeof AccountWhereInput>;
}

@InputType()
export class AccountMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  refresh_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  access_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires_at?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token_type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  scope?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  id_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  session_state?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AccountMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  refresh_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  access_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires_at?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token_type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  scope?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  id_token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  session_state?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class AccountOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class AccountOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  refresh_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  access_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  expires_at?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  token_type?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  scope?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  id_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  session_state?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => AccountCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AccountCountOrderByAggregateInput>;
  @Field(() => AccountAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof AccountAvgOrderByAggregateInput>;
  @Field(() => AccountMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AccountMaxOrderByAggregateInput>;
  @Field(() => AccountMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AccountMinOrderByAggregateInput>;
  @Field(() => AccountSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof AccountSumOrderByAggregateInput>;
}

@InputType()
export class AccountOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provider?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  refresh_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  access_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  expires_at?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  token_type?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  scope?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  id_token?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  session_state?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class AccountProviderProviderAccountIdCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
}

@InputType()
export class AccountScalarWhereWithAggregatesInput {
  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AccountScalarWhereWithAggregatesInput>;
  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AccountScalarWhereWithAggregatesInput>;
  @Field(() => [AccountScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AccountScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  type?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  provider?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  refresh_token?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  access_token?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  expires_at?: InstanceType<typeof IntNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  token_type?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  scope?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  id_token?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  session_state?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class AccountScalarWhereInput {
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  AND?: Array<AccountScalarWhereInput>;
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  OR?: Array<AccountScalarWhereInput>;
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  NOT?: Array<AccountScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  type?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  provider?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  refresh_token?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  access_token?: InstanceType<typeof StringNullableFilter>;
  @Field(() => IntNullableFilter, { nullable: true })
  expires_at?: InstanceType<typeof IntNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  token_type?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  scope?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  id_token?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  session_state?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class AccountSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  expires_at?: keyof typeof SortOrder;
}

@InputType()
export class AccountUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [AccountCreateWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateWithoutUserInput)
  create?: Array<AccountCreateWithoutUserInput>;
  @Field(() => [AccountCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
  @Field(() => AccountCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<AccountWhereUniqueInput>;
}

@InputType()
export class AccountUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AccountUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  type!: string;
  @Field(() => String, { nullable: false })
  provider!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: true })
  refresh_token?: string;
  @Field(() => String, { nullable: true })
  access_token?: string;
  @Field(() => Int, { nullable: true })
  expires_at?: number;
  @Field(() => String, { nullable: true })
  token_type?: string;
  @Field(() => String, { nullable: true })
  scope?: string;
  @Field(() => String, { nullable: true })
  id_token?: string;
  @Field(() => String, { nullable: true })
  session_state?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class AccountUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [AccountCreateWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateWithoutUserInput)
  create?: Array<AccountCreateWithoutUserInput>;
  @Field(() => [AccountCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
  @Field(() => [AccountUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AccountUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => AccountCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  set?: Array<AccountWhereUniqueInput>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  disconnect?: Array<AccountWhereUniqueInput>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  delete?: Array<AccountWhereUniqueInput>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<AccountWhereUniqueInput>;
  @Field(() => [AccountUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AccountUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [AccountUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => AccountUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  @Type(() => AccountScalarWhereInput)
  deleteMany?: Array<AccountScalarWhereInput>;
}

@InputType()
export class AccountUncheckedUpdateManyWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provider?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refresh_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  access_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  expires_at?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  token_type?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  scope?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  id_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  session_state?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AccountUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provider?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refresh_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  access_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  expires_at?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  token_type?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  scope?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  id_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  session_state?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AccountUncheckedUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provider?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refresh_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  access_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  expires_at?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  token_type?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  scope?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  id_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  session_state?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AccountUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provider?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refresh_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  access_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  expires_at?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  token_type?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  scope?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  id_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  session_state?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AccountUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provider?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refresh_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  access_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  expires_at?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  token_type?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  scope?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  id_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  session_state?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AccountUpdateManyWithWhereWithoutUserInput {
  @Field(() => AccountScalarWhereInput, { nullable: false })
  @Type(() => AccountScalarWhereInput)
  where!: InstanceType<typeof AccountScalarWhereInput>;
  @Field(() => AccountUpdateManyMutationInput, { nullable: false })
  @Type(() => AccountUpdateManyMutationInput)
  data!: InstanceType<typeof AccountUpdateManyMutationInput>;
}

@InputType()
export class AccountUpdateManyWithoutUserNestedInput {
  @Field(() => [AccountCreateWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateWithoutUserInput)
  create?: Array<AccountCreateWithoutUserInput>;
  @Field(() => [AccountCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => AccountCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AccountCreateOrConnectWithoutUserInput>;
  @Field(() => [AccountUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AccountUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<AccountUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => AccountCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AccountCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AccountCreateManyUserInputEnvelope>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  set?: Array<AccountWhereUniqueInput>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  disconnect?: Array<AccountWhereUniqueInput>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  delete?: Array<AccountWhereUniqueInput>;
  @Field(() => [AccountWhereUniqueInput], { nullable: true })
  @Type(() => AccountWhereUniqueInput)
  connect?: Array<AccountWhereUniqueInput>;
  @Field(() => [AccountUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AccountUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<AccountUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [AccountUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => AccountUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<AccountUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [AccountScalarWhereInput], { nullable: true })
  @Type(() => AccountScalarWhereInput)
  deleteMany?: Array<AccountScalarWhereInput>;
}

@InputType()
export class AccountUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: InstanceType<typeof AccountWhereUniqueInput>;
  @Field(() => AccountUpdateWithoutUserInput, { nullable: false })
  @Type(() => AccountUpdateWithoutUserInput)
  data!: InstanceType<typeof AccountUpdateWithoutUserInput>;
}

@InputType()
export class AccountUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provider?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refresh_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  access_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  expires_at?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  token_type?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  scope?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  id_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  session_state?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class AccountUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provider?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  refresh_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  access_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  expires_at?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  token_type?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  scope?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  id_token?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  session_state?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => UserUpdateOneRequiredWithoutAccountsNestedInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UserUpdateOneRequiredWithoutAccountsNestedInput>;
}

@InputType()
export class AccountUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: InstanceType<typeof AccountWhereUniqueInput>;
  @Field(() => AccountUpdateWithoutUserInput, { nullable: false })
  @Type(() => AccountUpdateWithoutUserInput)
  update!: InstanceType<typeof AccountUpdateWithoutUserInput>;
  @Field(() => AccountCreateWithoutUserInput, { nullable: false })
  @Type(() => AccountCreateWithoutUserInput)
  create!: InstanceType<typeof AccountCreateWithoutUserInput>;
}

@InputType()
export class AccountWhereUniqueInput {
  @Field(() => AccountProviderProviderAccountIdCompoundUniqueInput, {
    nullable: true,
  })
  provider_providerAccountId?: InstanceType<
    typeof AccountProviderProviderAccountIdCompoundUniqueInput
  >;
  @Field(() => [AccountWhereInput], { nullable: true })
  AND?: Array<AccountWhereInput>;
  @Field(() => [AccountWhereInput], { nullable: true })
  OR?: Array<AccountWhereInput>;
  @Field(() => [AccountWhereInput], { nullable: true })
  NOT?: Array<AccountWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  type?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  provider?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  refresh_token?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  access_token?: InstanceType<typeof StringNullableFilter>;
  @Field(() => IntNullableFilter, { nullable: true })
  expires_at?: InstanceType<typeof IntNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  token_type?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  scope?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  id_token?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  session_state?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class AccountWhereInput {
  @Field(() => [AccountWhereInput], { nullable: true })
  AND?: Array<AccountWhereInput>;
  @Field(() => [AccountWhereInput], { nullable: true })
  OR?: Array<AccountWhereInput>;
  @Field(() => [AccountWhereInput], { nullable: true })
  NOT?: Array<AccountWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  type?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  provider?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  refresh_token?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  access_token?: InstanceType<typeof StringNullableFilter>;
  @Field(() => IntNullableFilter, { nullable: true })
  expires_at?: InstanceType<typeof IntNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  token_type?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  scope?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  id_token?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  session_state?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class AttackAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  damage?: keyof typeof SortOrder;
}

@InputType()
export class AttackCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  damage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;
}

@InputType()
export class AttackCreateManyCardInputEnvelope {
  @Field(() => [AttackCreateManyCardInput], { nullable: false })
  @Type(() => AttackCreateManyCardInput)
  data!: Array<AttackCreateManyCardInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class AttackCreateManyCardInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  damage?: number;
}

@InputType()
export class AttackCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  damage?: number;
  @Field(() => String, { nullable: false })
  cardId!: string;
}

@InputType()
export class AttackCreateNestedManyWithoutCardInput {
  @Field(() => [AttackCreateWithoutCardInput], { nullable: true })
  @Type(() => AttackCreateWithoutCardInput)
  create?: Array<AttackCreateWithoutCardInput>;
  @Field(() => [AttackCreateOrConnectWithoutCardInput], { nullable: true })
  @Type(() => AttackCreateOrConnectWithoutCardInput)
  connectOrCreate?: Array<AttackCreateOrConnectWithoutCardInput>;
  @Field(() => AttackCreateManyCardInputEnvelope, { nullable: true })
  @Type(() => AttackCreateManyCardInputEnvelope)
  createMany?: InstanceType<typeof AttackCreateManyCardInputEnvelope>;
  @Field(() => [AttackWhereUniqueInput], { nullable: true })
  @Type(() => AttackWhereUniqueInput)
  connect?: Array<AttackWhereUniqueInput>;
}

@InputType()
export class AttackCreateOrConnectWithoutCardInput {
  @Field(() => AttackWhereUniqueInput, { nullable: false })
  @Type(() => AttackWhereUniqueInput)
  where!: InstanceType<typeof AttackWhereUniqueInput>;
  @Field(() => AttackCreateWithoutCardInput, { nullable: false })
  @Type(() => AttackCreateWithoutCardInput)
  create!: InstanceType<typeof AttackCreateWithoutCardInput>;
}

@InputType()
export class AttackCreateWithoutCardInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  damage?: number;
}

@InputType()
export class AttackCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  damage?: number;
  @Field(() => CardCreateNestedOneWithoutAttacksInput, { nullable: false })
  card!: InstanceType<typeof CardCreateNestedOneWithoutAttacksInput>;
}

@InputType()
export class AttackListRelationFilter {
  @Field(() => AttackWhereInput, { nullable: true })
  every?: InstanceType<typeof AttackWhereInput>;
  @Field(() => AttackWhereInput, { nullable: true })
  some?: InstanceType<typeof AttackWhereInput>;
  @Field(() => AttackWhereInput, { nullable: true })
  none?: InstanceType<typeof AttackWhereInput>;
}

@InputType()
export class AttackMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  damage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;
}

@InputType()
export class AttackMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  description?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  damage?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;
}

@InputType()
export class AttackOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class AttackOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  description?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  damage?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;
  @Field(() => AttackCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AttackCountOrderByAggregateInput>;
  @Field(() => AttackAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof AttackAvgOrderByAggregateInput>;
  @Field(() => AttackMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AttackMaxOrderByAggregateInput>;
  @Field(() => AttackMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AttackMinOrderByAggregateInput>;
  @Field(() => AttackSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof AttackSumOrderByAggregateInput>;
}

@InputType()
export class AttackOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  description?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  damage?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  cardId?: keyof typeof SortOrder;
  @Field(() => CardOrderByWithRelationInput, { nullable: true })
  card?: InstanceType<typeof CardOrderByWithRelationInput>;
}

@InputType()
export class AttackScalarWhereWithAggregatesInput {
  @Field(() => [AttackScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AttackScalarWhereWithAggregatesInput>;
  @Field(() => [AttackScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AttackScalarWhereWithAggregatesInput>;
  @Field(() => [AttackScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AttackScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  damage?: InstanceType<typeof IntNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  cardId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class AttackScalarWhereInput {
  @Field(() => [AttackScalarWhereInput], { nullable: true })
  AND?: Array<AttackScalarWhereInput>;
  @Field(() => [AttackScalarWhereInput], { nullable: true })
  OR?: Array<AttackScalarWhereInput>;
  @Field(() => [AttackScalarWhereInput], { nullable: true })
  NOT?: Array<AttackScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  description?: InstanceType<typeof StringNullableFilter>;
  @Field(() => IntNullableFilter, { nullable: true })
  damage?: InstanceType<typeof IntNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  cardId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class AttackSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  damage?: keyof typeof SortOrder;
}

@InputType()
export class AttackUncheckedCreateNestedManyWithoutCardInput {
  @Field(() => [AttackCreateWithoutCardInput], { nullable: true })
  @Type(() => AttackCreateWithoutCardInput)
  create?: Array<AttackCreateWithoutCardInput>;
  @Field(() => [AttackCreateOrConnectWithoutCardInput], { nullable: true })
  @Type(() => AttackCreateOrConnectWithoutCardInput)
  connectOrCreate?: Array<AttackCreateOrConnectWithoutCardInput>;
  @Field(() => AttackCreateManyCardInputEnvelope, { nullable: true })
  @Type(() => AttackCreateManyCardInputEnvelope)
  createMany?: InstanceType<typeof AttackCreateManyCardInputEnvelope>;
  @Field(() => [AttackWhereUniqueInput], { nullable: true })
  @Type(() => AttackWhereUniqueInput)
  connect?: Array<AttackWhereUniqueInput>;
}

@InputType()
export class AttackUncheckedCreateWithoutCardInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  damage?: number;
}

@InputType()
export class AttackUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => Int, { nullable: true })
  damage?: number;
  @Field(() => String, { nullable: false })
  cardId!: string;
}

@InputType()
export class AttackUncheckedUpdateManyWithoutCardNestedInput {
  @Field(() => [AttackCreateWithoutCardInput], { nullable: true })
  @Type(() => AttackCreateWithoutCardInput)
  create?: Array<AttackCreateWithoutCardInput>;
  @Field(() => [AttackCreateOrConnectWithoutCardInput], { nullable: true })
  @Type(() => AttackCreateOrConnectWithoutCardInput)
  connectOrCreate?: Array<AttackCreateOrConnectWithoutCardInput>;
  @Field(() => [AttackUpsertWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  @Type(() => AttackUpsertWithWhereUniqueWithoutCardInput)
  upsert?: Array<AttackUpsertWithWhereUniqueWithoutCardInput>;
  @Field(() => AttackCreateManyCardInputEnvelope, { nullable: true })
  @Type(() => AttackCreateManyCardInputEnvelope)
  createMany?: InstanceType<typeof AttackCreateManyCardInputEnvelope>;
  @Field(() => [AttackWhereUniqueInput], { nullable: true })
  @Type(() => AttackWhereUniqueInput)
  set?: Array<AttackWhereUniqueInput>;
  @Field(() => [AttackWhereUniqueInput], { nullable: true })
  @Type(() => AttackWhereUniqueInput)
  disconnect?: Array<AttackWhereUniqueInput>;
  @Field(() => [AttackWhereUniqueInput], { nullable: true })
  @Type(() => AttackWhereUniqueInput)
  delete?: Array<AttackWhereUniqueInput>;
  @Field(() => [AttackWhereUniqueInput], { nullable: true })
  @Type(() => AttackWhereUniqueInput)
  connect?: Array<AttackWhereUniqueInput>;
  @Field(() => [AttackUpdateWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  @Type(() => AttackUpdateWithWhereUniqueWithoutCardInput)
  update?: Array<AttackUpdateWithWhereUniqueWithoutCardInput>;
  @Field(() => [AttackUpdateManyWithWhereWithoutCardInput], { nullable: true })
  @Type(() => AttackUpdateManyWithWhereWithoutCardInput)
  updateMany?: Array<AttackUpdateManyWithWhereWithoutCardInput>;
  @Field(() => [AttackScalarWhereInput], { nullable: true })
  @Type(() => AttackScalarWhereInput)
  deleteMany?: Array<AttackScalarWhereInput>;
}

@InputType()
export class AttackUncheckedUpdateManyWithoutCardInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  damage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class AttackUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  damage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  cardId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class AttackUncheckedUpdateWithoutCardInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  damage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class AttackUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  damage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  cardId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class AttackUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  damage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class AttackUpdateManyWithWhereWithoutCardInput {
  @Field(() => AttackScalarWhereInput, { nullable: false })
  @Type(() => AttackScalarWhereInput)
  where!: InstanceType<typeof AttackScalarWhereInput>;
  @Field(() => AttackUpdateManyMutationInput, { nullable: false })
  @Type(() => AttackUpdateManyMutationInput)
  data!: InstanceType<typeof AttackUpdateManyMutationInput>;
}

@InputType()
export class AttackUpdateManyWithoutCardNestedInput {
  @Field(() => [AttackCreateWithoutCardInput], { nullable: true })
  @Type(() => AttackCreateWithoutCardInput)
  create?: Array<AttackCreateWithoutCardInput>;
  @Field(() => [AttackCreateOrConnectWithoutCardInput], { nullable: true })
  @Type(() => AttackCreateOrConnectWithoutCardInput)
  connectOrCreate?: Array<AttackCreateOrConnectWithoutCardInput>;
  @Field(() => [AttackUpsertWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  @Type(() => AttackUpsertWithWhereUniqueWithoutCardInput)
  upsert?: Array<AttackUpsertWithWhereUniqueWithoutCardInput>;
  @Field(() => AttackCreateManyCardInputEnvelope, { nullable: true })
  @Type(() => AttackCreateManyCardInputEnvelope)
  createMany?: InstanceType<typeof AttackCreateManyCardInputEnvelope>;
  @Field(() => [AttackWhereUniqueInput], { nullable: true })
  @Type(() => AttackWhereUniqueInput)
  set?: Array<AttackWhereUniqueInput>;
  @Field(() => [AttackWhereUniqueInput], { nullable: true })
  @Type(() => AttackWhereUniqueInput)
  disconnect?: Array<AttackWhereUniqueInput>;
  @Field(() => [AttackWhereUniqueInput], { nullable: true })
  @Type(() => AttackWhereUniqueInput)
  delete?: Array<AttackWhereUniqueInput>;
  @Field(() => [AttackWhereUniqueInput], { nullable: true })
  @Type(() => AttackWhereUniqueInput)
  connect?: Array<AttackWhereUniqueInput>;
  @Field(() => [AttackUpdateWithWhereUniqueWithoutCardInput], {
    nullable: true,
  })
  @Type(() => AttackUpdateWithWhereUniqueWithoutCardInput)
  update?: Array<AttackUpdateWithWhereUniqueWithoutCardInput>;
  @Field(() => [AttackUpdateManyWithWhereWithoutCardInput], { nullable: true })
  @Type(() => AttackUpdateManyWithWhereWithoutCardInput)
  updateMany?: Array<AttackUpdateManyWithWhereWithoutCardInput>;
  @Field(() => [AttackScalarWhereInput], { nullable: true })
  @Type(() => AttackScalarWhereInput)
  deleteMany?: Array<AttackScalarWhereInput>;
}

@InputType()
export class AttackUpdateWithWhereUniqueWithoutCardInput {
  @Field(() => AttackWhereUniqueInput, { nullable: false })
  @Type(() => AttackWhereUniqueInput)
  where!: InstanceType<typeof AttackWhereUniqueInput>;
  @Field(() => AttackUpdateWithoutCardInput, { nullable: false })
  @Type(() => AttackUpdateWithoutCardInput)
  data!: InstanceType<typeof AttackUpdateWithoutCardInput>;
}

@InputType()
export class AttackUpdateWithoutCardInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  damage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
}

@InputType()
export class AttackUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  damage?: InstanceType<typeof NullableIntFieldUpdateOperationsInput>;
  @Field(() => CardUpdateOneRequiredWithoutAttacksNestedInput, {
    nullable: true,
  })
  card?: InstanceType<typeof CardUpdateOneRequiredWithoutAttacksNestedInput>;
}

@InputType()
export class AttackUpsertWithWhereUniqueWithoutCardInput {
  @Field(() => AttackWhereUniqueInput, { nullable: false })
  @Type(() => AttackWhereUniqueInput)
  where!: InstanceType<typeof AttackWhereUniqueInput>;
  @Field(() => AttackUpdateWithoutCardInput, { nullable: false })
  @Type(() => AttackUpdateWithoutCardInput)
  update!: InstanceType<typeof AttackUpdateWithoutCardInput>;
  @Field(() => AttackCreateWithoutCardInput, { nullable: false })
  @Type(() => AttackCreateWithoutCardInput)
  create!: InstanceType<typeof AttackCreateWithoutCardInput>;
}

@InputType()
export class AttackWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => [AttackWhereInput], { nullable: true })
  AND?: Array<AttackWhereInput>;
  @Field(() => [AttackWhereInput], { nullable: true })
  OR?: Array<AttackWhereInput>;
  @Field(() => [AttackWhereInput], { nullable: true })
  NOT?: Array<AttackWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  description?: InstanceType<typeof StringNullableFilter>;
  @Field(() => IntNullableFilter, { nullable: true })
  damage?: InstanceType<typeof IntNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  cardId?: InstanceType<typeof StringFilter>;
  @Field(() => CardRelationFilter, { nullable: true })
  card?: InstanceType<typeof CardRelationFilter>;
}

@InputType()
export class AttackWhereInput {
  @Field(() => [AttackWhereInput], { nullable: true })
  AND?: Array<AttackWhereInput>;
  @Field(() => [AttackWhereInput], { nullable: true })
  OR?: Array<AttackWhereInput>;
  @Field(() => [AttackWhereInput], { nullable: true })
  NOT?: Array<AttackWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  description?: InstanceType<typeof StringNullableFilter>;
  @Field(() => IntNullableFilter, { nullable: true })
  damage?: InstanceType<typeof IntNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  cardId?: InstanceType<typeof StringFilter>;
  @Field(() => CardRelationFilter, { nullable: true })
  card?: InstanceType<typeof CardRelationFilter>;
}

@InputType()
export class AuthenticatorAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  counter?: keyof typeof SortOrder;
}

@InputType()
export class AuthenticatorCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  credentialID?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialPublicKey?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  counter?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialDeviceType?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialBackedUp?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  transports?: keyof typeof SortOrder;
}

@InputType()
export class AuthenticatorCreateManyUserInputEnvelope {
  @Field(() => [AuthenticatorCreateManyUserInput], { nullable: false })
  @Type(() => AuthenticatorCreateManyUserInput)
  data!: Array<AuthenticatorCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class AuthenticatorCreateManyUserInput {
  @Field(() => String, { nullable: false })
  credentialID!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: false })
  credentialPublicKey!: string;
  @Field(() => Int, { nullable: false })
  counter!: number;
  @Field(() => String, { nullable: false })
  credentialDeviceType!: string;
  @Field(() => Boolean, { nullable: false })
  credentialBackedUp!: boolean;
  @Field(() => String, { nullable: true })
  transports?: string;
}

@InputType()
export class AuthenticatorCreateManyInput {
  @Field(() => String, { nullable: false })
  credentialID!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: false })
  credentialPublicKey!: string;
  @Field(() => Int, { nullable: false })
  counter!: number;
  @Field(() => String, { nullable: false })
  credentialDeviceType!: string;
  @Field(() => Boolean, { nullable: false })
  credentialBackedUp!: boolean;
  @Field(() => String, { nullable: true })
  transports?: string;
}

@InputType()
export class AuthenticatorCreateNestedManyWithoutUserInput {
  @Field(() => [AuthenticatorCreateWithoutUserInput], { nullable: true })
  @Type(() => AuthenticatorCreateWithoutUserInput)
  create?: Array<AuthenticatorCreateWithoutUserInput>;
  @Field(() => [AuthenticatorCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuthenticatorCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AuthenticatorCreateOrConnectWithoutUserInput>;
  @Field(() => AuthenticatorCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AuthenticatorCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AuthenticatorCreateManyUserInputEnvelope>;
  @Field(() => [AuthenticatorWhereUniqueInput], { nullable: true })
  @Type(() => AuthenticatorWhereUniqueInput)
  connect?: Array<AuthenticatorWhereUniqueInput>;
}

@InputType()
export class AuthenticatorCreateOrConnectWithoutUserInput {
  @Field(() => AuthenticatorWhereUniqueInput, { nullable: false })
  @Type(() => AuthenticatorWhereUniqueInput)
  where!: InstanceType<typeof AuthenticatorWhereUniqueInput>;
  @Field(() => AuthenticatorCreateWithoutUserInput, { nullable: false })
  @Type(() => AuthenticatorCreateWithoutUserInput)
  create!: InstanceType<typeof AuthenticatorCreateWithoutUserInput>;
}

@InputType()
export class AuthenticatorCreateWithoutUserInput {
  @Field(() => String, { nullable: false })
  credentialID!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: false })
  credentialPublicKey!: string;
  @Field(() => Int, { nullable: false })
  counter!: number;
  @Field(() => String, { nullable: false })
  credentialDeviceType!: string;
  @Field(() => Boolean, { nullable: false })
  credentialBackedUp!: boolean;
  @Field(() => String, { nullable: true })
  transports?: string;
}

@InputType()
export class AuthenticatorCreateInput {
  @Field(() => String, { nullable: false })
  credentialID!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: false })
  credentialPublicKey!: string;
  @Field(() => Int, { nullable: false })
  counter!: number;
  @Field(() => String, { nullable: false })
  credentialDeviceType!: string;
  @Field(() => Boolean, { nullable: false })
  credentialBackedUp!: boolean;
  @Field(() => String, { nullable: true })
  transports?: string;
  @Field(() => UserCreateNestedOneWithoutAuthenticatorInput, {
    nullable: false,
  })
  user!: InstanceType<typeof UserCreateNestedOneWithoutAuthenticatorInput>;
}

@InputType()
export class AuthenticatorListRelationFilter {
  @Field(() => AuthenticatorWhereInput, { nullable: true })
  every?: InstanceType<typeof AuthenticatorWhereInput>;
  @Field(() => AuthenticatorWhereInput, { nullable: true })
  some?: InstanceType<typeof AuthenticatorWhereInput>;
  @Field(() => AuthenticatorWhereInput, { nullable: true })
  none?: InstanceType<typeof AuthenticatorWhereInput>;
}

@InputType()
export class AuthenticatorMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  credentialID?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialPublicKey?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  counter?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialDeviceType?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialBackedUp?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  transports?: keyof typeof SortOrder;
}

@InputType()
export class AuthenticatorMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  credentialID?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialPublicKey?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  counter?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialDeviceType?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialBackedUp?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  transports?: keyof typeof SortOrder;
}

@InputType()
export class AuthenticatorOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class AuthenticatorOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  credentialID?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialPublicKey?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  counter?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialDeviceType?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialBackedUp?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  transports?: InstanceType<typeof SortOrderInput>;
  @Field(() => AuthenticatorCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AuthenticatorCountOrderByAggregateInput>;
  @Field(() => AuthenticatorAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof AuthenticatorAvgOrderByAggregateInput>;
  @Field(() => AuthenticatorMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AuthenticatorMaxOrderByAggregateInput>;
  @Field(() => AuthenticatorMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AuthenticatorMinOrderByAggregateInput>;
  @Field(() => AuthenticatorSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof AuthenticatorSumOrderByAggregateInput>;
}

@InputType()
export class AuthenticatorOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  credentialID?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialPublicKey?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  counter?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialDeviceType?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  credentialBackedUp?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  transports?: InstanceType<typeof SortOrderInput>;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class AuthenticatorScalarWhereWithAggregatesInput {
  @Field(() => [AuthenticatorScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<AuthenticatorScalarWhereWithAggregatesInput>;
  @Field(() => [AuthenticatorScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<AuthenticatorScalarWhereWithAggregatesInput>;
  @Field(() => [AuthenticatorScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<AuthenticatorScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  credentialID?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  counter?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  transports?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class AuthenticatorScalarWhereInput {
  @Field(() => [AuthenticatorScalarWhereInput], { nullable: true })
  AND?: Array<AuthenticatorScalarWhereInput>;
  @Field(() => [AuthenticatorScalarWhereInput], { nullable: true })
  OR?: Array<AuthenticatorScalarWhereInput>;
  @Field(() => [AuthenticatorScalarWhereInput], { nullable: true })
  NOT?: Array<AuthenticatorScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  credentialID?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  counter?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringFilter>;
  @Field(() => BoolFilter, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  transports?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class AuthenticatorSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  counter?: keyof typeof SortOrder;
}

@InputType()
export class AuthenticatorUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [AuthenticatorCreateWithoutUserInput], { nullable: true })
  @Type(() => AuthenticatorCreateWithoutUserInput)
  create?: Array<AuthenticatorCreateWithoutUserInput>;
  @Field(() => [AuthenticatorCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuthenticatorCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AuthenticatorCreateOrConnectWithoutUserInput>;
  @Field(() => AuthenticatorCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AuthenticatorCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AuthenticatorCreateManyUserInputEnvelope>;
  @Field(() => [AuthenticatorWhereUniqueInput], { nullable: true })
  @Type(() => AuthenticatorWhereUniqueInput)
  connect?: Array<AuthenticatorWhereUniqueInput>;
}

@InputType()
export class AuthenticatorUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: false })
  credentialID!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: false })
  credentialPublicKey!: string;
  @Field(() => Int, { nullable: false })
  counter!: number;
  @Field(() => String, { nullable: false })
  credentialDeviceType!: string;
  @Field(() => Boolean, { nullable: false })
  credentialBackedUp!: boolean;
  @Field(() => String, { nullable: true })
  transports?: string;
}

@InputType()
export class AuthenticatorUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  credentialID!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  providerAccountId!: string;
  @Field(() => String, { nullable: false })
  credentialPublicKey!: string;
  @Field(() => Int, { nullable: false })
  counter!: number;
  @Field(() => String, { nullable: false })
  credentialDeviceType!: string;
  @Field(() => Boolean, { nullable: false })
  credentialBackedUp!: boolean;
  @Field(() => String, { nullable: true })
  transports?: string;
}

@InputType()
export class AuthenticatorUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [AuthenticatorCreateWithoutUserInput], { nullable: true })
  @Type(() => AuthenticatorCreateWithoutUserInput)
  create?: Array<AuthenticatorCreateWithoutUserInput>;
  @Field(() => [AuthenticatorCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuthenticatorCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AuthenticatorCreateOrConnectWithoutUserInput>;
  @Field(() => [AuthenticatorUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<AuthenticatorUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => AuthenticatorCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AuthenticatorCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AuthenticatorCreateManyUserInputEnvelope>;
  @Field(() => [AuthenticatorWhereUniqueInput], { nullable: true })
  @Type(() => AuthenticatorWhereUniqueInput)
  set?: Array<AuthenticatorWhereUniqueInput>;
  @Field(() => [AuthenticatorWhereUniqueInput], { nullable: true })
  @Type(() => AuthenticatorWhereUniqueInput)
  disconnect?: Array<AuthenticatorWhereUniqueInput>;
  @Field(() => [AuthenticatorWhereUniqueInput], { nullable: true })
  @Type(() => AuthenticatorWhereUniqueInput)
  delete?: Array<AuthenticatorWhereUniqueInput>;
  @Field(() => [AuthenticatorWhereUniqueInput], { nullable: true })
  @Type(() => AuthenticatorWhereUniqueInput)
  connect?: Array<AuthenticatorWhereUniqueInput>;
  @Field(() => [AuthenticatorUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<AuthenticatorUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [AuthenticatorUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuthenticatorUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<AuthenticatorUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [AuthenticatorScalarWhereInput], { nullable: true })
  @Type(() => AuthenticatorScalarWhereInput)
  deleteMany?: Array<AuthenticatorScalarWhereInput>;
}

@InputType()
export class AuthenticatorUncheckedUpdateManyWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialID?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  counter?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  transports?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class AuthenticatorUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialID?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  counter?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  transports?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class AuthenticatorUncheckedUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialID?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  counter?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  transports?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class AuthenticatorUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialID?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  counter?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  transports?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class AuthenticatorUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialID?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  counter?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  transports?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class AuthenticatorUpdateManyWithWhereWithoutUserInput {
  @Field(() => AuthenticatorScalarWhereInput, { nullable: false })
  @Type(() => AuthenticatorScalarWhereInput)
  where!: InstanceType<typeof AuthenticatorScalarWhereInput>;
  @Field(() => AuthenticatorUpdateManyMutationInput, { nullable: false })
  @Type(() => AuthenticatorUpdateManyMutationInput)
  data!: InstanceType<typeof AuthenticatorUpdateManyMutationInput>;
}

@InputType()
export class AuthenticatorUpdateManyWithoutUserNestedInput {
  @Field(() => [AuthenticatorCreateWithoutUserInput], { nullable: true })
  @Type(() => AuthenticatorCreateWithoutUserInput)
  create?: Array<AuthenticatorCreateWithoutUserInput>;
  @Field(() => [AuthenticatorCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuthenticatorCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<AuthenticatorCreateOrConnectWithoutUserInput>;
  @Field(() => [AuthenticatorUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<AuthenticatorUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => AuthenticatorCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => AuthenticatorCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof AuthenticatorCreateManyUserInputEnvelope>;
  @Field(() => [AuthenticatorWhereUniqueInput], { nullable: true })
  @Type(() => AuthenticatorWhereUniqueInput)
  set?: Array<AuthenticatorWhereUniqueInput>;
  @Field(() => [AuthenticatorWhereUniqueInput], { nullable: true })
  @Type(() => AuthenticatorWhereUniqueInput)
  disconnect?: Array<AuthenticatorWhereUniqueInput>;
  @Field(() => [AuthenticatorWhereUniqueInput], { nullable: true })
  @Type(() => AuthenticatorWhereUniqueInput)
  delete?: Array<AuthenticatorWhereUniqueInput>;
  @Field(() => [AuthenticatorWhereUniqueInput], { nullable: true })
  @Type(() => AuthenticatorWhereUniqueInput)
  connect?: Array<AuthenticatorWhereUniqueInput>;
  @Field(() => [AuthenticatorUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<AuthenticatorUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [AuthenticatorUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => AuthenticatorUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<AuthenticatorUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [AuthenticatorScalarWhereInput], { nullable: true })
  @Type(() => AuthenticatorScalarWhereInput)
  deleteMany?: Array<AuthenticatorScalarWhereInput>;
}

@InputType()
export class AuthenticatorUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => AuthenticatorWhereUniqueInput, { nullable: false })
  @Type(() => AuthenticatorWhereUniqueInput)
  where!: InstanceType<typeof AuthenticatorWhereUniqueInput>;
  @Field(() => AuthenticatorUpdateWithoutUserInput, { nullable: false })
  @Type(() => AuthenticatorUpdateWithoutUserInput)
  data!: InstanceType<typeof AuthenticatorUpdateWithoutUserInput>;
}

@InputType()
export class AuthenticatorUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialID?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  counter?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  transports?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class AuthenticatorUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialID?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  counter?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  transports?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => UserUpdateOneRequiredWithoutAuthenticatorNestedInput, {
    nullable: true,
  })
  user?: InstanceType<
    typeof UserUpdateOneRequiredWithoutAuthenticatorNestedInput
  >;
}

@InputType()
export class AuthenticatorUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => AuthenticatorWhereUniqueInput, { nullable: false })
  @Type(() => AuthenticatorWhereUniqueInput)
  where!: InstanceType<typeof AuthenticatorWhereUniqueInput>;
  @Field(() => AuthenticatorUpdateWithoutUserInput, { nullable: false })
  @Type(() => AuthenticatorUpdateWithoutUserInput)
  update!: InstanceType<typeof AuthenticatorUpdateWithoutUserInput>;
  @Field(() => AuthenticatorCreateWithoutUserInput, { nullable: false })
  @Type(() => AuthenticatorCreateWithoutUserInput)
  create!: InstanceType<typeof AuthenticatorCreateWithoutUserInput>;
}

@InputType()
export class AuthenticatorUserIdCredentialIDCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  credentialID!: string;
}

@InputType()
export class AuthenticatorWhereUniqueInput {
  @Field(() => String, { nullable: true })
  credentialID?: string;
  @Field(() => AuthenticatorUserIdCredentialIDCompoundUniqueInput, {
    nullable: true,
  })
  userId_credentialID?: InstanceType<
    typeof AuthenticatorUserIdCredentialIDCompoundUniqueInput
  >;
  @Field(() => [AuthenticatorWhereInput], { nullable: true })
  AND?: Array<AuthenticatorWhereInput>;
  @Field(() => [AuthenticatorWhereInput], { nullable: true })
  OR?: Array<AuthenticatorWhereInput>;
  @Field(() => [AuthenticatorWhereInput], { nullable: true })
  NOT?: Array<AuthenticatorWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  counter?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringFilter>;
  @Field(() => BoolFilter, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  transports?: InstanceType<typeof StringNullableFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class AuthenticatorWhereInput {
  @Field(() => [AuthenticatorWhereInput], { nullable: true })
  AND?: Array<AuthenticatorWhereInput>;
  @Field(() => [AuthenticatorWhereInput], { nullable: true })
  OR?: Array<AuthenticatorWhereInput>;
  @Field(() => [AuthenticatorWhereInput], { nullable: true })
  NOT?: Array<AuthenticatorWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  credentialID?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  providerAccountId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  credentialPublicKey?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  counter?: InstanceType<typeof IntFilter>;
  @Field(() => StringFilter, { nullable: true })
  credentialDeviceType?: InstanceType<typeof StringFilter>;
  @Field(() => BoolFilter, { nullable: true })
  credentialBackedUp?: InstanceType<typeof BoolFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  transports?: InstanceType<typeof StringNullableFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
  @Field(() => Boolean, { nullable: true })
  set?: boolean;
}

@InputType()
export class BoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class CardAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  healPoints?: keyof typeof SortOrder;
}

@InputType()
export class CardCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  info?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  healPoints?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  resistance?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weakness?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rarity?: keyof typeof SortOrder;
}

@InputType()
export class CardCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  info?: string;
  @Field(() => Int, { nullable: false })
  healPoints!: number;
  @Field(() => CardType, { nullable: false })
  type!: keyof typeof CardType;
  @Field(() => CardType, { nullable: true })
  resistance?: keyof typeof CardType;
  @Field(() => CardType, { nullable: true })
  weakness?: keyof typeof CardType;
  @Field(() => Rarity, { nullable: false })
  rarity!: keyof typeof Rarity;
}

@InputType()
export class CardCreateNestedOneWithoutAttacksInput {
  @Field(() => CardCreateWithoutAttacksInput, { nullable: true })
  @Type(() => CardCreateWithoutAttacksInput)
  create?: InstanceType<typeof CardCreateWithoutAttacksInput>;
  @Field(() => CardCreateOrConnectWithoutAttacksInput, { nullable: true })
  @Type(() => CardCreateOrConnectWithoutAttacksInput)
  connectOrCreate?: InstanceType<typeof CardCreateOrConnectWithoutAttacksInput>;
  @Field(() => CardWhereUniqueInput, { nullable: true })
  @Type(() => CardWhereUniqueInput)
  connect?: InstanceType<typeof CardWhereUniqueInput>;
}

@InputType()
export class CardCreateOrConnectWithoutAttacksInput {
  @Field(() => CardWhereUniqueInput, { nullable: false })
  @Type(() => CardWhereUniqueInput)
  where!: InstanceType<typeof CardWhereUniqueInput>;
  @Field(() => CardCreateWithoutAttacksInput, { nullable: false })
  @Type(() => CardCreateWithoutAttacksInput)
  create!: InstanceType<typeof CardCreateWithoutAttacksInput>;
}

@InputType()
export class CardCreateWithoutAttacksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  info?: string;
  @Field(() => Int, { nullable: false })
  healPoints!: number;
  @Field(() => CardType, { nullable: false })
  type!: keyof typeof CardType;
  @Field(() => CardType, { nullable: true })
  resistance?: keyof typeof CardType;
  @Field(() => CardType, { nullable: true })
  weakness?: keyof typeof CardType;
  @Field(() => Rarity, { nullable: false })
  rarity!: keyof typeof Rarity;
}

@InputType()
export class CardCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  info?: string;
  @Field(() => Int, { nullable: false })
  healPoints!: number;
  @Field(() => CardType, { nullable: false })
  type!: keyof typeof CardType;
  @Field(() => CardType, { nullable: true })
  resistance?: keyof typeof CardType;
  @Field(() => CardType, { nullable: true })
  weakness?: keyof typeof CardType;
  @Field(() => Rarity, { nullable: false })
  rarity!: keyof typeof Rarity;
  @Field(() => AttackCreateNestedManyWithoutCardInput, { nullable: true })
  attacks?: InstanceType<typeof AttackCreateNestedManyWithoutCardInput>;
}

@InputType()
export class CardMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  info?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  healPoints?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  resistance?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weakness?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rarity?: keyof typeof SortOrder;
}

@InputType()
export class CardMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  info?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  healPoints?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  resistance?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  weakness?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rarity?: keyof typeof SortOrder;
}

@InputType()
export class CardOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  info?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  healPoints?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  resistance?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  weakness?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  rarity?: keyof typeof SortOrder;
  @Field(() => CardCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof CardCountOrderByAggregateInput>;
  @Field(() => CardAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof CardAvgOrderByAggregateInput>;
  @Field(() => CardMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof CardMaxOrderByAggregateInput>;
  @Field(() => CardMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof CardMinOrderByAggregateInput>;
  @Field(() => CardSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof CardSumOrderByAggregateInput>;
}

@InputType()
export class CardOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  info?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  healPoints?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  resistance?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  weakness?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  rarity?: keyof typeof SortOrder;
  @Field(() => AttackOrderByRelationAggregateInput, { nullable: true })
  attacks?: InstanceType<typeof AttackOrderByRelationAggregateInput>;
}

@InputType()
export class CardRelationFilter {
  @Field(() => CardWhereInput, { nullable: true })
  is?: InstanceType<typeof CardWhereInput>;
  @Field(() => CardWhereInput, { nullable: true })
  isNot?: InstanceType<typeof CardWhereInput>;
}

@InputType()
export class CardScalarWhereWithAggregatesInput {
  @Field(() => [CardScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<CardScalarWhereWithAggregatesInput>;
  @Field(() => [CardScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<CardScalarWhereWithAggregatesInput>;
  @Field(() => [CardScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<CardScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  info?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  healPoints?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => EnumCardTypeWithAggregatesFilter, { nullable: true })
  type?: InstanceType<typeof EnumCardTypeWithAggregatesFilter>;
  @Field(() => EnumCardTypeNullableWithAggregatesFilter, { nullable: true })
  resistance?: InstanceType<typeof EnumCardTypeNullableWithAggregatesFilter>;
  @Field(() => EnumCardTypeNullableWithAggregatesFilter, { nullable: true })
  weakness?: InstanceType<typeof EnumCardTypeNullableWithAggregatesFilter>;
  @Field(() => EnumRarityWithAggregatesFilter, { nullable: true })
  rarity?: InstanceType<typeof EnumRarityWithAggregatesFilter>;
}

@InputType()
export class CardSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  healPoints?: keyof typeof SortOrder;
}

@InputType()
export class CardUncheckedCreateWithoutAttacksInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  info?: string;
  @Field(() => Int, { nullable: false })
  healPoints!: number;
  @Field(() => CardType, { nullable: false })
  type!: keyof typeof CardType;
  @Field(() => CardType, { nullable: true })
  resistance?: keyof typeof CardType;
  @Field(() => CardType, { nullable: true })
  weakness?: keyof typeof CardType;
  @Field(() => Rarity, { nullable: false })
  rarity!: keyof typeof Rarity;
}

@InputType()
export class CardUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: false })
  name!: string;
  @Field(() => String, { nullable: true })
  info?: string;
  @Field(() => Int, { nullable: false })
  healPoints!: number;
  @Field(() => CardType, { nullable: false })
  type!: keyof typeof CardType;
  @Field(() => CardType, { nullable: true })
  resistance?: keyof typeof CardType;
  @Field(() => CardType, { nullable: true })
  weakness?: keyof typeof CardType;
  @Field(() => Rarity, { nullable: false })
  rarity!: keyof typeof Rarity;
  @Field(() => AttackUncheckedCreateNestedManyWithoutCardInput, {
    nullable: true,
  })
  attacks?: InstanceType<
    typeof AttackUncheckedCreateNestedManyWithoutCardInput
  >;
}

@InputType()
export class CardUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  info?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  healPoints?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumCardTypeFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof EnumCardTypeFieldUpdateOperationsInput>;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  resistance?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  weakness?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => EnumRarityFieldUpdateOperationsInput, { nullable: true })
  rarity?: InstanceType<typeof EnumRarityFieldUpdateOperationsInput>;
}

@InputType()
export class CardUncheckedUpdateWithoutAttacksInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  info?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  healPoints?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumCardTypeFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof EnumCardTypeFieldUpdateOperationsInput>;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  resistance?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  weakness?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => EnumRarityFieldUpdateOperationsInput, { nullable: true })
  rarity?: InstanceType<typeof EnumRarityFieldUpdateOperationsInput>;
}

@InputType()
export class CardUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  info?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  healPoints?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumCardTypeFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof EnumCardTypeFieldUpdateOperationsInput>;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  resistance?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  weakness?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => EnumRarityFieldUpdateOperationsInput, { nullable: true })
  rarity?: InstanceType<typeof EnumRarityFieldUpdateOperationsInput>;
  @Field(() => AttackUncheckedUpdateManyWithoutCardNestedInput, {
    nullable: true,
  })
  attacks?: InstanceType<
    typeof AttackUncheckedUpdateManyWithoutCardNestedInput
  >;
}

@InputType()
export class CardUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  info?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  healPoints?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumCardTypeFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof EnumCardTypeFieldUpdateOperationsInput>;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  resistance?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  weakness?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => EnumRarityFieldUpdateOperationsInput, { nullable: true })
  rarity?: InstanceType<typeof EnumRarityFieldUpdateOperationsInput>;
}

@InputType()
export class CardUpdateOneRequiredWithoutAttacksNestedInput {
  @Field(() => CardCreateWithoutAttacksInput, { nullable: true })
  @Type(() => CardCreateWithoutAttacksInput)
  create?: InstanceType<typeof CardCreateWithoutAttacksInput>;
  @Field(() => CardCreateOrConnectWithoutAttacksInput, { nullable: true })
  @Type(() => CardCreateOrConnectWithoutAttacksInput)
  connectOrCreate?: InstanceType<typeof CardCreateOrConnectWithoutAttacksInput>;
  @Field(() => CardUpsertWithoutAttacksInput, { nullable: true })
  @Type(() => CardUpsertWithoutAttacksInput)
  upsert?: InstanceType<typeof CardUpsertWithoutAttacksInput>;
  @Field(() => CardWhereUniqueInput, { nullable: true })
  @Type(() => CardWhereUniqueInput)
  connect?: InstanceType<typeof CardWhereUniqueInput>;
  @Field(() => CardUpdateToOneWithWhereWithoutAttacksInput, { nullable: true })
  @Type(() => CardUpdateToOneWithWhereWithoutAttacksInput)
  update?: InstanceType<typeof CardUpdateToOneWithWhereWithoutAttacksInput>;
}

@InputType()
export class CardUpdateToOneWithWhereWithoutAttacksInput {
  @Field(() => CardWhereInput, { nullable: true })
  @Type(() => CardWhereInput)
  where?: InstanceType<typeof CardWhereInput>;
  @Field(() => CardUpdateWithoutAttacksInput, { nullable: false })
  @Type(() => CardUpdateWithoutAttacksInput)
  data!: InstanceType<typeof CardUpdateWithoutAttacksInput>;
}

@InputType()
export class CardUpdateWithoutAttacksInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  info?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  healPoints?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumCardTypeFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof EnumCardTypeFieldUpdateOperationsInput>;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  resistance?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  weakness?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => EnumRarityFieldUpdateOperationsInput, { nullable: true })
  rarity?: InstanceType<typeof EnumRarityFieldUpdateOperationsInput>;
}

@InputType()
export class CardUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  info?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  healPoints?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => EnumCardTypeFieldUpdateOperationsInput, { nullable: true })
  type?: InstanceType<typeof EnumCardTypeFieldUpdateOperationsInput>;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  resistance?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => NullableEnumCardTypeFieldUpdateOperationsInput, {
    nullable: true,
  })
  weakness?: InstanceType<
    typeof NullableEnumCardTypeFieldUpdateOperationsInput
  >;
  @Field(() => EnumRarityFieldUpdateOperationsInput, { nullable: true })
  rarity?: InstanceType<typeof EnumRarityFieldUpdateOperationsInput>;
  @Field(() => AttackUpdateManyWithoutCardNestedInput, { nullable: true })
  attacks?: InstanceType<typeof AttackUpdateManyWithoutCardNestedInput>;
}

@InputType()
export class CardUpsertWithoutAttacksInput {
  @Field(() => CardUpdateWithoutAttacksInput, { nullable: false })
  @Type(() => CardUpdateWithoutAttacksInput)
  update!: InstanceType<typeof CardUpdateWithoutAttacksInput>;
  @Field(() => CardCreateWithoutAttacksInput, { nullable: false })
  @Type(() => CardCreateWithoutAttacksInput)
  create!: InstanceType<typeof CardCreateWithoutAttacksInput>;
  @Field(() => CardWhereInput, { nullable: true })
  @Type(() => CardWhereInput)
  where?: InstanceType<typeof CardWhereInput>;
}

@InputType()
export class CardWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => [CardWhereInput], { nullable: true })
  AND?: Array<CardWhereInput>;
  @Field(() => [CardWhereInput], { nullable: true })
  OR?: Array<CardWhereInput>;
  @Field(() => [CardWhereInput], { nullable: true })
  NOT?: Array<CardWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  info?: InstanceType<typeof StringNullableFilter>;
  @Field(() => IntFilter, { nullable: true })
  healPoints?: InstanceType<typeof IntFilter>;
  @Field(() => EnumCardTypeFilter, { nullable: true })
  type?: InstanceType<typeof EnumCardTypeFilter>;
  @Field(() => EnumCardTypeNullableFilter, { nullable: true })
  resistance?: InstanceType<typeof EnumCardTypeNullableFilter>;
  @Field(() => EnumCardTypeNullableFilter, { nullable: true })
  weakness?: InstanceType<typeof EnumCardTypeNullableFilter>;
  @Field(() => EnumRarityFilter, { nullable: true })
  rarity?: InstanceType<typeof EnumRarityFilter>;
  @Field(() => AttackListRelationFilter, { nullable: true })
  attacks?: InstanceType<typeof AttackListRelationFilter>;
}

@InputType()
export class CardWhereInput {
  @Field(() => [CardWhereInput], { nullable: true })
  AND?: Array<CardWhereInput>;
  @Field(() => [CardWhereInput], { nullable: true })
  OR?: Array<CardWhereInput>;
  @Field(() => [CardWhereInput], { nullable: true })
  NOT?: Array<CardWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  name?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  info?: InstanceType<typeof StringNullableFilter>;
  @Field(() => IntFilter, { nullable: true })
  healPoints?: InstanceType<typeof IntFilter>;
  @Field(() => EnumCardTypeFilter, { nullable: true })
  type?: InstanceType<typeof EnumCardTypeFilter>;
  @Field(() => EnumCardTypeNullableFilter, { nullable: true })
  resistance?: InstanceType<typeof EnumCardTypeNullableFilter>;
  @Field(() => EnumCardTypeNullableFilter, { nullable: true })
  weakness?: InstanceType<typeof EnumCardTypeNullableFilter>;
  @Field(() => EnumRarityFilter, { nullable: true })
  rarity?: InstanceType<typeof EnumRarityFilter>;
  @Field(() => AttackListRelationFilter, { nullable: true })
  attacks?: InstanceType<typeof AttackListRelationFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
  @Field(() => Date, { nullable: true })
  set?: Date | string;
}

@InputType()
export class DateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeNullableFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeNullableWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class EnumCardTypeFieldUpdateOperationsInput {
  @Field(() => CardType, { nullable: true })
  set?: keyof typeof CardType;
}

@InputType()
export class EnumCardTypeFilter {
  @Field(() => CardType, { nullable: true })
  equals?: keyof typeof CardType;
  @Field(() => [CardType], { nullable: true })
  in?: Array<keyof typeof CardType>;
  @Field(() => [CardType], { nullable: true })
  notIn?: Array<keyof typeof CardType>;
  @Field(() => NestedEnumCardTypeFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumCardTypeFilter>;
}

@InputType()
export class EnumCardTypeNullableFilter {
  @Field(() => CardType, { nullable: true })
  equals?: keyof typeof CardType;
  @Field(() => [CardType], { nullable: true })
  in?: Array<keyof typeof CardType>;
  @Field(() => [CardType], { nullable: true })
  notIn?: Array<keyof typeof CardType>;
  @Field(() => NestedEnumCardTypeNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumCardTypeNullableFilter>;
}

@InputType()
export class EnumCardTypeNullableWithAggregatesFilter {
  @Field(() => CardType, { nullable: true })
  equals?: keyof typeof CardType;
  @Field(() => [CardType], { nullable: true })
  in?: Array<keyof typeof CardType>;
  @Field(() => [CardType], { nullable: true })
  notIn?: Array<keyof typeof CardType>;
  @Field(() => NestedEnumCardTypeNullableWithAggregatesFilter, {
    nullable: true,
  })
  not?: InstanceType<typeof NestedEnumCardTypeNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedEnumCardTypeNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumCardTypeNullableFilter>;
  @Field(() => NestedEnumCardTypeNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumCardTypeNullableFilter>;
}

@InputType()
export class EnumCardTypeWithAggregatesFilter {
  @Field(() => CardType, { nullable: true })
  equals?: keyof typeof CardType;
  @Field(() => [CardType], { nullable: true })
  in?: Array<keyof typeof CardType>;
  @Field(() => [CardType], { nullable: true })
  notIn?: Array<keyof typeof CardType>;
  @Field(() => NestedEnumCardTypeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumCardTypeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumCardTypeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumCardTypeFilter>;
  @Field(() => NestedEnumCardTypeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumCardTypeFilter>;
}

@InputType()
export class EnumRarityFieldUpdateOperationsInput {
  @Field(() => Rarity, { nullable: true })
  set?: keyof typeof Rarity;
}

@InputType()
export class EnumRarityFilter {
  @Field(() => Rarity, { nullable: true })
  equals?: keyof typeof Rarity;
  @Field(() => [Rarity], { nullable: true })
  in?: Array<keyof typeof Rarity>;
  @Field(() => [Rarity], { nullable: true })
  notIn?: Array<keyof typeof Rarity>;
  @Field(() => NestedEnumRarityFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRarityFilter>;
}

@InputType()
export class EnumRarityWithAggregatesFilter {
  @Field(() => Rarity, { nullable: true })
  equals?: keyof typeof Rarity;
  @Field(() => [Rarity], { nullable: true })
  in?: Array<keyof typeof Rarity>;
  @Field(() => [Rarity], { nullable: true })
  notIn?: Array<keyof typeof Rarity>;
  @Field(() => NestedEnumRarityWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRarityWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumRarityFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumRarityFilter>;
  @Field(() => NestedEnumRarityFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumRarityFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
  @Field(() => Int, { nullable: true })
  set?: number;
  @Field(() => Int, { nullable: true })
  increment?: number;
  @Field(() => Int, { nullable: true })
  decrement?: number;
  @Field(() => Int, { nullable: true })
  multiply?: number;
  @Field(() => Int, { nullable: true })
  divide?: number;
}

@InputType()
export class IntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntNullableFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntNullableWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedFloatNullableFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatNullableFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeNullableFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeNullableWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeNullableFilter>;
  @Field(() => NestedDateTimeNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeNullableFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedEnumCardTypeFilter {
  @Field(() => CardType, { nullable: true })
  equals?: keyof typeof CardType;
  @Field(() => [CardType], { nullable: true })
  in?: Array<keyof typeof CardType>;
  @Field(() => [CardType], { nullable: true })
  notIn?: Array<keyof typeof CardType>;
  @Field(() => NestedEnumCardTypeFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumCardTypeFilter>;
}

@InputType()
export class NestedEnumCardTypeNullableFilter {
  @Field(() => CardType, { nullable: true })
  equals?: keyof typeof CardType;
  @Field(() => [CardType], { nullable: true })
  in?: Array<keyof typeof CardType>;
  @Field(() => [CardType], { nullable: true })
  notIn?: Array<keyof typeof CardType>;
  @Field(() => NestedEnumCardTypeNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumCardTypeNullableFilter>;
}

@InputType()
export class NestedEnumCardTypeNullableWithAggregatesFilter {
  @Field(() => CardType, { nullable: true })
  equals?: keyof typeof CardType;
  @Field(() => [CardType], { nullable: true })
  in?: Array<keyof typeof CardType>;
  @Field(() => [CardType], { nullable: true })
  notIn?: Array<keyof typeof CardType>;
  @Field(() => NestedEnumCardTypeNullableWithAggregatesFilter, {
    nullable: true,
  })
  not?: InstanceType<typeof NestedEnumCardTypeNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedEnumCardTypeNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumCardTypeNullableFilter>;
  @Field(() => NestedEnumCardTypeNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumCardTypeNullableFilter>;
}

@InputType()
export class NestedEnumCardTypeWithAggregatesFilter {
  @Field(() => CardType, { nullable: true })
  equals?: keyof typeof CardType;
  @Field(() => [CardType], { nullable: true })
  in?: Array<keyof typeof CardType>;
  @Field(() => [CardType], { nullable: true })
  notIn?: Array<keyof typeof CardType>;
  @Field(() => NestedEnumCardTypeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumCardTypeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumCardTypeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumCardTypeFilter>;
  @Field(() => NestedEnumCardTypeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumCardTypeFilter>;
}

@InputType()
export class NestedEnumRarityFilter {
  @Field(() => Rarity, { nullable: true })
  equals?: keyof typeof Rarity;
  @Field(() => [Rarity], { nullable: true })
  in?: Array<keyof typeof Rarity>;
  @Field(() => [Rarity], { nullable: true })
  notIn?: Array<keyof typeof Rarity>;
  @Field(() => NestedEnumRarityFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRarityFilter>;
}

@InputType()
export class NestedEnumRarityWithAggregatesFilter {
  @Field(() => Rarity, { nullable: true })
  equals?: keyof typeof Rarity;
  @Field(() => [Rarity], { nullable: true })
  in?: Array<keyof typeof Rarity>;
  @Field(() => [Rarity], { nullable: true })
  notIn?: Array<keyof typeof Rarity>;
  @Field(() => NestedEnumRarityWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRarityWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumRarityFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumRarityFilter>;
  @Field(() => NestedEnumRarityFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumRarityFilter>;
}

@InputType()
export class NestedFloatFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => NestedFloatFilter, { nullable: true })
  not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedFloatNullableFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => NestedFloatNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedFloatNullableFilter>;
}

@InputType()
export class NestedIntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntNullableWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedFloatNullableFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatNullableFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableDateTimeFieldUpdateOperationsInput {
  @Field(() => Date, { nullable: true })
  set?: Date | string;
}

@InputType()
export class NullableEnumCardTypeFieldUpdateOperationsInput {
  @Field(() => CardType, { nullable: true })
  set?: keyof typeof CardType;
}

@InputType()
export class NullableIntFieldUpdateOperationsInput {
  @Field(() => Int, { nullable: true })
  set?: number;
  @Field(() => Int, { nullable: true })
  increment?: number;
  @Field(() => Int, { nullable: true })
  decrement?: number;
  @Field(() => Int, { nullable: true })
  multiply?: number;
  @Field(() => Int, { nullable: true })
  divide?: number;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class SessionCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  sessionToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SessionCreateManyUserInputEnvelope {
  @Field(() => [SessionCreateManyUserInput], { nullable: false })
  @Type(() => SessionCreateManyUserInput)
  data!: Array<SessionCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class SessionCreateManyUserInput {
  @Field(() => String, { nullable: false })
  sessionToken!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class SessionCreateManyInput {
  @Field(() => String, { nullable: false })
  sessionToken!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class SessionCreateNestedManyWithoutUserInput {
  @Field(() => [SessionCreateWithoutUserInput], { nullable: true })
  @Type(() => SessionCreateWithoutUserInput)
  create?: Array<SessionCreateWithoutUserInput>;
  @Field(() => [SessionCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => SessionCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
  @Field(() => SessionCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => SessionCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
  @Field(() => [SessionWhereUniqueInput], { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  connect?: Array<SessionWhereUniqueInput>;
}

@InputType()
export class SessionCreateOrConnectWithoutUserInput {
  @Field(() => SessionWhereUniqueInput, { nullable: false })
  @Type(() => SessionWhereUniqueInput)
  where!: InstanceType<typeof SessionWhereUniqueInput>;
  @Field(() => SessionCreateWithoutUserInput, { nullable: false })
  @Type(() => SessionCreateWithoutUserInput)
  create!: InstanceType<typeof SessionCreateWithoutUserInput>;
}

@InputType()
export class SessionCreateWithoutUserInput {
  @Field(() => String, { nullable: false })
  sessionToken!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class SessionCreateInput {
  @Field(() => String, { nullable: false })
  sessionToken!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => UserCreateNestedOneWithoutSessionsInput, { nullable: false })
  user!: InstanceType<typeof UserCreateNestedOneWithoutSessionsInput>;
}

@InputType()
export class SessionListRelationFilter {
  @Field(() => SessionWhereInput, { nullable: true })
  every?: InstanceType<typeof SessionWhereInput>;
  @Field(() => SessionWhereInput, { nullable: true })
  some?: InstanceType<typeof SessionWhereInput>;
  @Field(() => SessionWhereInput, { nullable: true })
  none?: InstanceType<typeof SessionWhereInput>;
}

@InputType()
export class SessionMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  sessionToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SessionMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  sessionToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class SessionOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class SessionOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  sessionToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SessionCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof SessionCountOrderByAggregateInput>;
  @Field(() => SessionMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof SessionMaxOrderByAggregateInput>;
  @Field(() => SessionMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof SessionMinOrderByAggregateInput>;
}

@InputType()
export class SessionOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  sessionToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class SessionScalarWhereWithAggregatesInput {
  @Field(() => [SessionScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<SessionScalarWhereWithAggregatesInput>;
  @Field(() => [SessionScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<SessionScalarWhereWithAggregatesInput>;
  @Field(() => [SessionScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<SessionScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  sessionToken?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class SessionScalarWhereInput {
  @Field(() => [SessionScalarWhereInput], { nullable: true })
  AND?: Array<SessionScalarWhereInput>;
  @Field(() => [SessionScalarWhereInput], { nullable: true })
  OR?: Array<SessionScalarWhereInput>;
  @Field(() => [SessionScalarWhereInput], { nullable: true })
  NOT?: Array<SessionScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  sessionToken?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class SessionUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [SessionCreateWithoutUserInput], { nullable: true })
  @Type(() => SessionCreateWithoutUserInput)
  create?: Array<SessionCreateWithoutUserInput>;
  @Field(() => [SessionCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => SessionCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
  @Field(() => SessionCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => SessionCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
  @Field(() => [SessionWhereUniqueInput], { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  connect?: Array<SessionWhereUniqueInput>;
}

@InputType()
export class SessionUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: false })
  sessionToken!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class SessionUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  sessionToken!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class SessionUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [SessionCreateWithoutUserInput], { nullable: true })
  @Type(() => SessionCreateWithoutUserInput)
  create?: Array<SessionCreateWithoutUserInput>;
  @Field(() => [SessionCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => SessionCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
  @Field(() => [SessionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => SessionUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => SessionCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => SessionCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
  @Field(() => [SessionWhereUniqueInput], { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  set?: Array<SessionWhereUniqueInput>;
  @Field(() => [SessionWhereUniqueInput], { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  disconnect?: Array<SessionWhereUniqueInput>;
  @Field(() => [SessionWhereUniqueInput], { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  delete?: Array<SessionWhereUniqueInput>;
  @Field(() => [SessionWhereUniqueInput], { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  connect?: Array<SessionWhereUniqueInput>;
  @Field(() => [SessionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => SessionUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [SessionUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => SessionUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [SessionScalarWhereInput], { nullable: true })
  @Type(() => SessionScalarWhereInput)
  deleteMany?: Array<SessionScalarWhereInput>;
}

@InputType()
export class SessionUncheckedUpdateManyWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sessionToken?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sessionToken?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUncheckedUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sessionToken?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sessionToken?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sessionToken?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUpdateManyWithWhereWithoutUserInput {
  @Field(() => SessionScalarWhereInput, { nullable: false })
  @Type(() => SessionScalarWhereInput)
  where!: InstanceType<typeof SessionScalarWhereInput>;
  @Field(() => SessionUpdateManyMutationInput, { nullable: false })
  @Type(() => SessionUpdateManyMutationInput)
  data!: InstanceType<typeof SessionUpdateManyMutationInput>;
}

@InputType()
export class SessionUpdateManyWithoutUserNestedInput {
  @Field(() => [SessionCreateWithoutUserInput], { nullable: true })
  @Type(() => SessionCreateWithoutUserInput)
  create?: Array<SessionCreateWithoutUserInput>;
  @Field(() => [SessionCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => SessionCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<SessionCreateOrConnectWithoutUserInput>;
  @Field(() => [SessionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => SessionUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<SessionUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => SessionCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => SessionCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof SessionCreateManyUserInputEnvelope>;
  @Field(() => [SessionWhereUniqueInput], { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  set?: Array<SessionWhereUniqueInput>;
  @Field(() => [SessionWhereUniqueInput], { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  disconnect?: Array<SessionWhereUniqueInput>;
  @Field(() => [SessionWhereUniqueInput], { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  delete?: Array<SessionWhereUniqueInput>;
  @Field(() => [SessionWhereUniqueInput], { nullable: true })
  @Type(() => SessionWhereUniqueInput)
  connect?: Array<SessionWhereUniqueInput>;
  @Field(() => [SessionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => SessionUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<SessionUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [SessionUpdateManyWithWhereWithoutUserInput], { nullable: true })
  @Type(() => SessionUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<SessionUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [SessionScalarWhereInput], { nullable: true })
  @Type(() => SessionScalarWhereInput)
  deleteMany?: Array<SessionScalarWhereInput>;
}

@InputType()
export class SessionUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => SessionWhereUniqueInput, { nullable: false })
  @Type(() => SessionWhereUniqueInput)
  where!: InstanceType<typeof SessionWhereUniqueInput>;
  @Field(() => SessionUpdateWithoutUserInput, { nullable: false })
  @Type(() => SessionUpdateWithoutUserInput)
  data!: InstanceType<typeof SessionUpdateWithoutUserInput>;
}

@InputType()
export class SessionUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sessionToken?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class SessionUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  sessionToken?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => UserUpdateOneRequiredWithoutSessionsNestedInput, {
    nullable: true,
  })
  user?: InstanceType<typeof UserUpdateOneRequiredWithoutSessionsNestedInput>;
}

@InputType()
export class SessionUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => SessionWhereUniqueInput, { nullable: false })
  @Type(() => SessionWhereUniqueInput)
  where!: InstanceType<typeof SessionWhereUniqueInput>;
  @Field(() => SessionUpdateWithoutUserInput, { nullable: false })
  @Type(() => SessionUpdateWithoutUserInput)
  update!: InstanceType<typeof SessionUpdateWithoutUserInput>;
  @Field(() => SessionCreateWithoutUserInput, { nullable: false })
  @Type(() => SessionCreateWithoutUserInput)
  create!: InstanceType<typeof SessionCreateWithoutUserInput>;
}

@InputType()
export class SessionWhereUniqueInput {
  @Field(() => String, { nullable: true })
  sessionToken?: string;
  @Field(() => [SessionWhereInput], { nullable: true })
  AND?: Array<SessionWhereInput>;
  @Field(() => [SessionWhereInput], { nullable: true })
  OR?: Array<SessionWhereInput>;
  @Field(() => [SessionWhereInput], { nullable: true })
  NOT?: Array<SessionWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class SessionWhereInput {
  @Field(() => [SessionWhereInput], { nullable: true })
  AND?: Array<SessionWhereInput>;
  @Field(() => [SessionWhereInput], { nullable: true })
  OR?: Array<SessionWhereInput>;
  @Field(() => [SessionWhereInput], { nullable: true })
  NOT?: Array<SessionWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  sessionToken?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => UserRelationFilter, { nullable: true })
  user?: InstanceType<typeof UserRelationFilter>;
}

@InputType()
export class SortOrderInput {
  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;
  @Field(() => NullsOrder, { nullable: true })
  nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class UserCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  image?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserCreateManyInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UserCreateNestedOneWithoutAccountsInput {
  @Field(() => UserCreateWithoutAccountsInput, { nullable: true })
  @Type(() => UserCreateWithoutAccountsInput)
  create?: InstanceType<typeof UserCreateWithoutAccountsInput>;
  @Field(() => UserCreateOrConnectWithoutAccountsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAccountsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutAccountsInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutAuthenticatorInput {
  @Field(() => UserCreateWithoutAuthenticatorInput, { nullable: true })
  @Type(() => UserCreateWithoutAuthenticatorInput)
  create?: InstanceType<typeof UserCreateWithoutAuthenticatorInput>;
  @Field(() => UserCreateOrConnectWithoutAuthenticatorInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAuthenticatorInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutAuthenticatorInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateNestedOneWithoutSessionsInput {
  @Field(() => UserCreateWithoutSessionsInput, { nullable: true })
  @Type(() => UserCreateWithoutSessionsInput)
  create?: InstanceType<typeof UserCreateWithoutSessionsInput>;
  @Field(() => UserCreateOrConnectWithoutSessionsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutSessionsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutSessionsInput
  >;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutAccountsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserCreateWithoutAccountsInput, { nullable: false })
  @Type(() => UserCreateWithoutAccountsInput)
  create!: InstanceType<typeof UserCreateWithoutAccountsInput>;
}

@InputType()
export class UserCreateOrConnectWithoutAuthenticatorInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserCreateWithoutAuthenticatorInput, { nullable: false })
  @Type(() => UserCreateWithoutAuthenticatorInput)
  create!: InstanceType<typeof UserCreateWithoutAuthenticatorInput>;
}

@InputType()
export class UserCreateOrConnectWithoutSessionsInput {
  @Field(() => UserWhereUniqueInput, { nullable: false })
  @Type(() => UserWhereUniqueInput)
  where!: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserCreateWithoutSessionsInput, { nullable: false })
  @Type(() => UserCreateWithoutSessionsInput)
  create!: InstanceType<typeof UserCreateWithoutSessionsInput>;
}

@InputType()
export class UserCreateWithoutAccountsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SessionCreateNestedManyWithoutUserInput, { nullable: true })
  sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
  @Field(() => AuthenticatorCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserCreateWithoutAuthenticatorInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
  @Field(() => SessionCreateNestedManyWithoutUserInput, { nullable: true })
  sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
}

@InputType()
export class UserCreateWithoutSessionsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
  @Field(() => AuthenticatorCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AccountCreateNestedManyWithoutUserInput, { nullable: true })
  accounts?: InstanceType<typeof AccountCreateNestedManyWithoutUserInput>;
  @Field(() => SessionCreateNestedManyWithoutUserInput, { nullable: true })
  sessions?: InstanceType<typeof SessionCreateNestedManyWithoutUserInput>;
  @Field(() => AuthenticatorCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  image?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  name?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  emailVerified?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  image?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  name?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  emailVerified?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  image?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
  @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
  @Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  name?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  email?: keyof typeof SortOrder;
  @Field(() => SortOrderInput, { nullable: true })
  emailVerified?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrderInput, { nullable: true })
  image?: InstanceType<typeof SortOrderInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => AccountOrderByRelationAggregateInput, { nullable: true })
  accounts?: InstanceType<typeof AccountOrderByRelationAggregateInput>;
  @Field(() => SessionOrderByRelationAggregateInput, { nullable: true })
  sessions?: InstanceType<typeof SessionOrderByRelationAggregateInput>;
  @Field(() => AuthenticatorOrderByRelationAggregateInput, { nullable: true })
  Authenticator?: InstanceType<
    typeof AuthenticatorOrderByRelationAggregateInput
  >;
}

@InputType()
export class UserRelationFilter {
  @Field(() => UserWhereInput, { nullable: true })
  is?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserWhereInput, { nullable: true })
  isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => [UserScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UserScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  name?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  email?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  emailVerified?: InstanceType<typeof DateTimeNullableWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  image?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutAccountsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  sessions?: InstanceType<
    typeof SessionUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutAuthenticatorInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  sessions?: InstanceType<
    typeof SessionUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateWithoutSessionsInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: false })
  email!: string;
  @Field(() => Date, { nullable: true })
  emailVerified?: Date | string;
  @Field(() => String, { nullable: true })
  image?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => AccountUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => SessionUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  sessions?: InstanceType<
    typeof SessionUncheckedCreateNestedManyWithoutUserInput
  >;
  @Field(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorUncheckedCreateNestedManyWithoutUserInput
  >;
}

@InputType()
export class UserUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUncheckedUpdateWithoutAccountsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  sessions?: InstanceType<
    typeof SessionUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutAuthenticatorInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  sessions?: InstanceType<
    typeof SessionUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateWithoutSessionsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AccountUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: InstanceType<
    typeof AccountUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => SessionUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  sessions?: InstanceType<
    typeof SessionUncheckedUpdateManyWithoutUserNestedInput
  >;
  @Field(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorUncheckedUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutAccountsNestedInput {
  @Field(() => UserCreateWithoutAccountsInput, { nullable: true })
  @Type(() => UserCreateWithoutAccountsInput)
  create?: InstanceType<typeof UserCreateWithoutAccountsInput>;
  @Field(() => UserCreateOrConnectWithoutAccountsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAccountsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutAccountsInput
  >;
  @Field(() => UserUpsertWithoutAccountsInput, { nullable: true })
  @Type(() => UserUpsertWithoutAccountsInput)
  upsert?: InstanceType<typeof UserUpsertWithoutAccountsInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserUpdateToOneWithWhereWithoutAccountsInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutAccountsInput)
  update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutAccountsInput>;
}

@InputType()
export class UserUpdateOneRequiredWithoutAuthenticatorNestedInput {
  @Field(() => UserCreateWithoutAuthenticatorInput, { nullable: true })
  @Type(() => UserCreateWithoutAuthenticatorInput)
  create?: InstanceType<typeof UserCreateWithoutAuthenticatorInput>;
  @Field(() => UserCreateOrConnectWithoutAuthenticatorInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutAuthenticatorInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutAuthenticatorInput
  >;
  @Field(() => UserUpsertWithoutAuthenticatorInput, { nullable: true })
  @Type(() => UserUpsertWithoutAuthenticatorInput)
  upsert?: InstanceType<typeof UserUpsertWithoutAuthenticatorInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserUpdateToOneWithWhereWithoutAuthenticatorInput, {
    nullable: true,
  })
  @Type(() => UserUpdateToOneWithWhereWithoutAuthenticatorInput)
  update?: InstanceType<
    typeof UserUpdateToOneWithWhereWithoutAuthenticatorInput
  >;
}

@InputType()
export class UserUpdateOneRequiredWithoutSessionsNestedInput {
  @Field(() => UserCreateWithoutSessionsInput, { nullable: true })
  @Type(() => UserCreateWithoutSessionsInput)
  create?: InstanceType<typeof UserCreateWithoutSessionsInput>;
  @Field(() => UserCreateOrConnectWithoutSessionsInput, { nullable: true })
  @Type(() => UserCreateOrConnectWithoutSessionsInput)
  connectOrCreate?: InstanceType<
    typeof UserCreateOrConnectWithoutSessionsInput
  >;
  @Field(() => UserUpsertWithoutSessionsInput, { nullable: true })
  @Type(() => UserUpsertWithoutSessionsInput)
  upsert?: InstanceType<typeof UserUpsertWithoutSessionsInput>;
  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: InstanceType<typeof UserWhereUniqueInput>;
  @Field(() => UserUpdateToOneWithWhereWithoutSessionsInput, { nullable: true })
  @Type(() => UserUpdateToOneWithWhereWithoutSessionsInput)
  update?: InstanceType<typeof UserUpdateToOneWithWhereWithoutSessionsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutAccountsInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutAccountsInput, { nullable: false })
  @Type(() => UserUpdateWithoutAccountsInput)
  data!: InstanceType<typeof UserUpdateWithoutAccountsInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutAuthenticatorInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutAuthenticatorInput, { nullable: false })
  @Type(() => UserUpdateWithoutAuthenticatorInput)
  data!: InstanceType<typeof UserUpdateWithoutAuthenticatorInput>;
}

@InputType()
export class UserUpdateToOneWithWhereWithoutSessionsInput {
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
  @Field(() => UserUpdateWithoutSessionsInput, { nullable: false })
  @Type(() => UserUpdateWithoutSessionsInput)
  data!: InstanceType<typeof UserUpdateWithoutSessionsInput>;
}

@InputType()
export class UserUpdateWithoutAccountsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => SessionUpdateManyWithoutUserNestedInput, { nullable: true })
  sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
  @Field(() => AuthenticatorUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUpdateWithoutAuthenticatorInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
  @Field(() => SessionUpdateManyWithoutUserNestedInput, { nullable: true })
  sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
}

@InputType()
export class UserUpdateWithoutSessionsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
  @Field(() => AuthenticatorUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  name?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  email?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  emailVerified?: InstanceType<
    typeof NullableDateTimeFieldUpdateOperationsInput
  >;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  image?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => AccountUpdateManyWithoutUserNestedInput, { nullable: true })
  accounts?: InstanceType<typeof AccountUpdateManyWithoutUserNestedInput>;
  @Field(() => SessionUpdateManyWithoutUserNestedInput, { nullable: true })
  sessions?: InstanceType<typeof SessionUpdateManyWithoutUserNestedInput>;
  @Field(() => AuthenticatorUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  Authenticator?: InstanceType<
    typeof AuthenticatorUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UserUpsertWithoutAccountsInput {
  @Field(() => UserUpdateWithoutAccountsInput, { nullable: false })
  @Type(() => UserUpdateWithoutAccountsInput)
  update!: InstanceType<typeof UserUpdateWithoutAccountsInput>;
  @Field(() => UserCreateWithoutAccountsInput, { nullable: false })
  @Type(() => UserCreateWithoutAccountsInput)
  create!: InstanceType<typeof UserCreateWithoutAccountsInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutAuthenticatorInput {
  @Field(() => UserUpdateWithoutAuthenticatorInput, { nullable: false })
  @Type(() => UserUpdateWithoutAuthenticatorInput)
  update!: InstanceType<typeof UserUpdateWithoutAuthenticatorInput>;
  @Field(() => UserCreateWithoutAuthenticatorInput, { nullable: false })
  @Type(() => UserCreateWithoutAuthenticatorInput)
  create!: InstanceType<typeof UserCreateWithoutAuthenticatorInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserUpsertWithoutSessionsInput {
  @Field(() => UserUpdateWithoutSessionsInput, { nullable: false })
  @Type(() => UserUpdateWithoutSessionsInput)
  update!: InstanceType<typeof UserUpdateWithoutSessionsInput>;
  @Field(() => UserCreateWithoutSessionsInput, { nullable: false })
  @Type(() => UserCreateWithoutSessionsInput)
  create!: InstanceType<typeof UserCreateWithoutSessionsInput>;
  @Field(() => UserWhereInput, { nullable: true })
  @Type(() => UserWhereInput)
  where?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;
  @Field(() => String, { nullable: true })
  email?: string;
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;
  @Field(() => StringNullableFilter, { nullable: true })
  name?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  emailVerified?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  image?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => AccountListRelationFilter, { nullable: true })
  accounts?: InstanceType<typeof AccountListRelationFilter>;
  @Field(() => SessionListRelationFilter, { nullable: true })
  sessions?: InstanceType<typeof SessionListRelationFilter>;
  @Field(() => AuthenticatorListRelationFilter, { nullable: true })
  Authenticator?: InstanceType<typeof AuthenticatorListRelationFilter>;
}

@InputType()
export class UserWhereInput {
  @Field(() => [UserWhereInput], { nullable: true })
  AND?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  OR?: Array<UserWhereInput>;
  @Field(() => [UserWhereInput], { nullable: true })
  NOT?: Array<UserWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  id?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  name?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  email?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeNullableFilter, { nullable: true })
  emailVerified?: InstanceType<typeof DateTimeNullableFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  image?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => AccountListRelationFilter, { nullable: true })
  accounts?: InstanceType<typeof AccountListRelationFilter>;
  @Field(() => SessionListRelationFilter, { nullable: true })
  sessions?: InstanceType<typeof SessionListRelationFilter>;
  @Field(() => AuthenticatorListRelationFilter, { nullable: true })
  Authenticator?: InstanceType<typeof AuthenticatorListRelationFilter>;
}

@InputType()
export class VerificationTokenCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  identifier?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenCreateManyInput {
  @Field(() => String, { nullable: false })
  identifier!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}

@InputType()
export class VerificationTokenCreateInput {
  @Field(() => String, { nullable: false })
  identifier!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}

@InputType()
export class VerificationTokenIdentifierTokenCompoundUniqueInput {
  @Field(() => String, { nullable: false })
  identifier!: string;
  @Field(() => String, { nullable: false })
  token!: string;
}

@InputType()
export class VerificationTokenMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  identifier?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  identifier?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  identifier?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
  @Field(() => VerificationTokenCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof VerificationTokenCountOrderByAggregateInput>;
  @Field(() => VerificationTokenMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof VerificationTokenMaxOrderByAggregateInput>;
  @Field(() => VerificationTokenMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof VerificationTokenMinOrderByAggregateInput>;
}

@InputType()
export class VerificationTokenOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  identifier?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;
}

@InputType()
export class VerificationTokenScalarWhereWithAggregatesInput {
  @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
  @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
  @Field(() => [VerificationTokenScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<VerificationTokenScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  identifier?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  token?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class VerificationTokenUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  identifier!: string;
  @Field(() => String, { nullable: false })
  token!: string;
  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}

@InputType()
export class VerificationTokenUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  identifier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VerificationTokenUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  identifier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VerificationTokenUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  identifier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VerificationTokenUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  identifier?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  token?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  expires?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class VerificationTokenWhereUniqueInput {
  @Field(() => VerificationTokenIdentifierTokenCompoundUniqueInput, {
    nullable: true,
  })
  identifier_token?: InstanceType<
    typeof VerificationTokenIdentifierTokenCompoundUniqueInput
  >;
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  AND?: Array<VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  OR?: Array<VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  NOT?: Array<VerificationTokenWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  identifier?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  token?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class VerificationTokenWhereInput {
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  AND?: Array<VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  OR?: Array<VerificationTokenWhereInput>;
  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  NOT?: Array<VerificationTokenWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  identifier?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  token?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  expires?: InstanceType<typeof DateTimeFilter>;
}
