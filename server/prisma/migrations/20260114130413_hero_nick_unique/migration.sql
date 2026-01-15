/*
  Warnings:

  - A unique constraint covering the columns `[nickname]` on the table `superheros` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "superheros_nickname_key" ON "superheros"("nickname");
