import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CardService } from './card.service';
import { Card, PaginatedCard } from './entities/card.entity';
import { CreateCardInput } from './dto/create-card.input';
import { UpdateCardInput } from './dto/update-card.input';
import { CardWhereInput } from 'src/@generated';

@Resolver(() => Card)
export class CardResolver {
  constructor(private readonly cardService: CardService) {}

  @Mutation(() => Card)
  createCard(@Args('createCardInput') createCardInput: CreateCardInput) {
    return this.cardService.create(createCardInput);
  }

  @Query(() => PaginatedCard, { name: 'cards' })
  findAll(
    @Args('page', { type: () => Int }) page: number,
    @Args('where', { type: () => CardWhereInput, nullable: true })
    where: CardWhereInput,
  ) {
    return this.cardService.findAll({
      page,
      where,
    });
  }

  @Query(() => Card, { name: 'card' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.cardService.findOne(id);
  }

  @Mutation(() => Card)
  updateCard(@Args('updateCardInput') updateCardInput: UpdateCardInput) {
    return this.cardService.update(updateCardInput.id, updateCardInput);
  }

  @Mutation(() => Card)
  removeCard(@Args('id', { type: () => String }) id: string) {
    return this.cardService.remove(id);
  }
}
