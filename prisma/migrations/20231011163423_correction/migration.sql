/*
  Warnings:

  - A unique constraint covering the columns `[authoorId]` on the table `post` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[parentId]` on the table `post` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `post_authoorId_key` ON `post`(`authoorId`);

-- CreateIndex
CREATE UNIQUE INDEX `post_parentId_key` ON `post`(`parentId`);
