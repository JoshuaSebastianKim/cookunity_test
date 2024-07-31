-- CreateEnum
CREATE TYPE "CardType" AS ENUM ('COLORLESS', 'GRASS', 'FIRE', 'WATER', 'LIGHTNING', 'FIGHTING', 'PSYCHIC', 'DARKNESS', 'METAL', 'DRAGON', 'FAIRY');

-- CreateEnum
CREATE TYPE "Rarity" AS ENUM ('COMMON', 'UNCOMMON', 'RARE');

-- CreateTable
CREATE TABLE "Card" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "healPoints" INTEGER NOT NULL,
    "type" "CardType" NOT NULL,
    "resistance" "CardType",
    "weakness" "CardType",
    "rarity" "Rarity" NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "damage" INTEGER NOT NULL,
    "cardId" TEXT NOT NULL,

    CONSTRAINT "Attack_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Card_name_key" ON "Card"("name");

-- AddForeignKey
ALTER TABLE "Attack" ADD CONSTRAINT "Attack_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card"("id") ON DELETE CASCADE ON UPDATE CASCADE;
