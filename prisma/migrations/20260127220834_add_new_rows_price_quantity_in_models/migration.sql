/*
  Warnings:

  - Added the required column `price` to the `SellTires` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `SellTires` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Tires` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Tires` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SellTires" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "radius" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL
);
INSERT INTO "new_SellTires" ("height", "id", "radius", "width") SELECT "height", "id", "radius", "width" FROM "SellTires";
DROP TABLE "SellTires";
ALTER TABLE "new_SellTires" RENAME TO "SellTires";
CREATE TABLE "new_Tires" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "radius" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL
);
INSERT INTO "new_Tires" ("height", "id", "radius", "width") SELECT "height", "id", "radius", "width" FROM "Tires";
DROP TABLE "Tires";
ALTER TABLE "new_Tires" RENAME TO "Tires";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
