import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
    const session = await auth();

    if (!session?.user) {
        redirect(`/login?callbackUrl=/dashboard`);
    }

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">
                Welcome, {session.user.name || session.user.email}
            </h1>
            <p className="mt-2 text-sm text-gray-600">
                This is a protected dashboard page.
            </p>
        </div>
    );
}
