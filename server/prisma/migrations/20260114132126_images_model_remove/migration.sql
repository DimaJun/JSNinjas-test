/*
  Warnings:

  - You are about to drop the `images` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "images" DROP CONSTRAINT "images_heroId_fkey";

-- AlterTable
ALTER TABLE "superheros" ADD COLUMN     "images" TEXT[];

-- DropTable
DROP TABLE "images";
