/*
  Warnings:

  - You are about to drop the `superpowers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "superpowers" DROP CONSTRAINT "superpowers_heroId_fkey";

-- AlterTable
ALTER TABLE "superheros" ADD COLUMN     "superpowers" TEXT[];

-- DropTable
DROP TABLE "superpowers";
