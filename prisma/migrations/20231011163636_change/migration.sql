/*
  Warnings:

  - A unique constraint covering the columns `[parentId]` on the table `category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[categoryId]` on the table `post_category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `post_comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[parentId]` on the table `post_comment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[postId]` on the table `post_meta` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tagId]` on the table `post_tag` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `category_parentId_key` ON `category`(`parentId`);

-- CreateIndex
CREATE UNIQUE INDEX `post_category_categoryId_key` ON `post_category`(`categoryId`);

-- CreateIndex
CREATE UNIQUE INDEX `post_comment_postId_key` ON `post_comment`(`postId`);

-- CreateIndex
CREATE UNIQUE INDEX `post_comment_parentId_key` ON `post_comment`(`parentId`);

-- CreateIndex
CREATE UNIQUE INDEX `post_meta_postId_key` ON `post_meta`(`postId`);

-- CreateIndex
CREATE UNIQUE INDEX `post_tag_tagId_key` ON `post_tag`(`tagId`);
