// lib/db.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis.globalForPrisma ?? { prisma: undefined };

export const db =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ["query", "error", "warn"],
    });

if (process.env.NODE_ENV !== "production") {
    globalThis.globalForPrisma = { prisma: db };
}
