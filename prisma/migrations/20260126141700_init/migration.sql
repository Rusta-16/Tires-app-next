/*
  Warnings:

  - You are about to drop the column `hight` on the `Tires` table. All the data in the column will be lost.
  - Added the required column `height` to the `Tires` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tires" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "radius" INTEGER NOT NULL
);
INSERT INTO "new_Tires" ("id", "radius", "width") SELECT "id", "radius", "width" FROM "Tires";
DROP TABLE "Tires";
ALTER TABLE "new_Tires" RENAME TO "Tires";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
