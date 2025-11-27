import Credentials from "next-auth/providers/credentials";
import { db } from "./lib/db";

const authConfig = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const email = credentials?.email ?? "";
                const password = credentials?.password ?? "";

                // Temporary check until real password hashing is added
                if (email !== "test@demo.com" || password !== "123456") {
                    return null;
                }

                const user = await db.user.upsert({
                    where: { email },
                    update: {},
                    create: {
                        email,
                        name: "Demo User",
                    },
                });

                return user;
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "database", // important to use Prisma (DB) sessions
    },
};

export default authConfig;
