-- CreateTable
CREATE TABLE "Trip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "time" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "TripStory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tripId" INTEGER,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    CONSTRAINT "TripStory_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TripImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tripId" INTEGER,
    "title" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    CONSTRAINT "TripImage_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Catch" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fishermanId" INTEGER NOT NULL,
    "tripId" INTEGER,
    "kind" TEXT NOT NULL,
    "weight" REAL,
    "length" REAL,
    CONSTRAINT "Catch_fishermanId_fkey" FOREIGN KEY ("fishermanId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Catch_tripId_fkey" FOREIGN KEY ("tripId") REFERENCES "Trip" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CatchImage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "imageUrl" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "catchId" INTEGER NOT NULL,
    CONSTRAINT "CatchImage_catchId_fkey" FOREIGN KEY ("catchId") REFERENCES "Catch" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
