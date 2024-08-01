import { Injectable } from '@nestjs/common';
import { CreateCardInput } from './dto/create-card.input';
import { UpdateCardInput } from './dto/update-card.input';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  PaginatedResult,
  PaginateFunction,
  paginator,
} from 'src/prisma/paginator';
import { Card, Prisma } from '@prisma/client';

const paginate: PaginateFunction = paginator({ perPage: 10 });

@Injectable()
export class CardService {
  constructor(private prisma: PrismaService) {}

  create(createCardInput: CreateCardInput) {
    return this.prisma.card.create({
      data: {
        ...createCardInput,
        attacks: {
          create: createCardInput.attacks,
        },
      },
    });
  }

  findAll({
    where,
    orderBy,
    page,
  }: {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    page?: number;
  }): Promise<PaginatedResult<Card>> {
    return paginate(
      this.prisma.card,
      {
        where,
        orderBy,
      },
      {
        page,
      },
    );
  }

  async findOne(id: string) {
    return this.prisma.card.findUnique({
      where: {
        id,
      },
      include: {
        attacks: true,
      },
    });
  }

  update(id: string, updateCardInput: UpdateCardInput) {
    return this.prisma.card.update({
      where: {
        id,
      },
      data: {
        ...updateCardInput,
        attacks: {
          create: updateCardInput.attacks,
        },
      },
    });
  }

  remove(id: string) {
    return this.prisma.card.delete({
      where: {
        id,
      },
    });
  }
}
