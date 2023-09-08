-- CreateTable
CREATE TABLE "projects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "createdat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
