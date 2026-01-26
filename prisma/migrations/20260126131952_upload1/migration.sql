/*
  Warnings:

  - You are about to alter the column `hight` on the `Tires` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `radius` on the `Tires` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `width` on the `Tires` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Tires" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "width" INTEGER NOT NULL,
    "hight" INTEGER NOT NULL,
    "radius" INTEGER NOT NULL
);
INSERT INTO "new_Tires" ("hight", "id", "radius", "width") SELECT "hight", "id", "radius", "width" FROM "Tires";
DROP TABLE "Tires";
ALTER TABLE "new_Tires" RENAME TO "Tires";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
