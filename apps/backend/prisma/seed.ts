import { PrismaClient } from '@prisma/client';
import { cardsData } from './cardData';

const prisma = new PrismaClient();

const main = async () => {
  console.log('start seeding …');

  for (const cardData of cardsData) {
    const card = await prisma.card.create({
      data: {
        ...cardData,
        attacks: {
          create: cardData.attacks,
        },
      },
    });
    console.log(`Created Card with id: ${card.id}`);
  }

  console.log('seeding done');
};

main()
  .catch((e) => {
    console.error('foo', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
