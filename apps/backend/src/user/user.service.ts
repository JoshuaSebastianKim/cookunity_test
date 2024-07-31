// user.service.ts

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  findAll(where: Prisma.UserWhereInput) {
    return this.prisma.user.findMany({ where });
  }

  findOne(id: string) {
    return this.prisma.user.findUniqueOrThrow({ where: { id } });
  }

  remove(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
