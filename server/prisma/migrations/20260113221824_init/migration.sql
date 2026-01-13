-- CreateTable
CREATE TABLE "superheros" (
    "id" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "realName" TEXT NOT NULL,
    "originDescription" TEXT NOT NULL,
    "catchPhrase" TEXT NOT NULL,

    CONSTRAINT "superheros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "superpowers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "heroId" TEXT NOT NULL,

    CONSTRAINT "superpowers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "heroId" TEXT NOT NULL,

    CONSTRAINT "images_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "superpowers" ADD CONSTRAINT "superpowers_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "superheros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "images" ADD CONSTRAINT "images_heroId_fkey" FOREIGN KEY ("heroId") REFERENCES "superheros"("id") ON DELETE CASCADE ON UPDATE CASCADE;
