// app/login/page.jsx (or whatever your file path is)
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const formData = new FormData(e.currentTarget);
        const email = String(formData.get("email"));
        const password = String(formData.get("password"));

        const res = await signIn("credentials", {
            email,
            password,
            callbackUrl,
            redirect: false,
        });

        setLoading(false);

        if (res?.error) {
            setError("Invalid email or password");
            return;
        }

        router.push(callbackUrl);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <form
                onSubmit={handleSubmit}
                className="card w-full max-w-sm bg-base-100 shadow-xl p-6 space-y-4"
            >
                <h1 className="text-2xl font-bold text-center">Login</h1>

                {error && (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                )}

                <label className="form-control">
                    <span className="label-text">Email</span>
                    <input
                        name="email"
                        type="email"
                        className="input input-bordered"
                        required
                    />
                </label>

                <label className="form-control">
                    <span className="label-text">Password</span>
                    <input
                        name="password"
                        type="password"
                        className="input input-bordered"
                        required
                    />
                </label>

                <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={loading}
                >
                    {loading ? "Signing in..." : "Sign in"}
                </button>
            </form>
        </div>
    );
}