import NextAuth, { getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import authConfig from "./auth.config";
import { db } from "./lib/db";

export const authOptions = {
    adapter: PrismaAdapter(db),
    session: { strategy: "database" },
    ...authConfig,
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;

export async function auth() {
    return getServerSession(authOptions);
}
