"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Sun, Eye, EyeOff } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setIsLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);

        const payload = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        console.log("Login Payload:", payload);

        try {
            // Get stored user
            const storedUser = localStorage.getItem("solarlink_user");

            // Check if user exists
            if (!storedUser) {
                throw new Error("No registered user found");
            }

            // Convert string back to object
            const parsedUser = JSON.parse(storedUser);

            // Compare credentials
            if (
                parsedUser.email !== payload.email ||
                parsedUser.password !== payload.password
            ) {
                throw new Error("Invalid credentials");
            }

            console.log("Login success:", parsedUser);

            // Optional: save logged in session
            localStorage.setItem(
                "solarlink_session",
                JSON.stringify(parsedUser)
            );

            // Redirect
            router.push("/dashboard");

        } catch (error) {
            console.error("Login failed:", (error as Error).message);

            setError(
                "Invalid email or password. Please try again."
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50/50 px-4 font-body">
            <Card className="w-full max-w-md border-slate-200 shadow-lg pt-8">
                <CardHeader className="space-y-1 text-center">
                    <div className="flex justify-center mb-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2"
                        >
                            <Sun className="h-8 w-8 text-yellow-500" />

                            <span className="text-2xl font-bold font-main tracking-tight">
                                SolarLink
                            </span>
                        </Link>
                    </div>

                    <CardTitle className="text-2xl font-main">
                        Welcome back
                    </CardTitle>

                    <CardDescription className="font-body">
                        Enter your email to sign in to your dashboard
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-6">
                    <form
                        onSubmit={handleSubmit}
                        className="grid gap-4"
                    >
                        {/* Email */}
                        <div className="grid gap-2">
                            <Label
                                htmlFor="email"
                                className="font-body"
                            >
                                Email
                            </Label>

                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                className="font-body"
                                required
                                disabled={isLoading}
                            />
                        </div>
                        {/* Password */}
                        <div className="grid gap-2">
                            <Label htmlFor="password">
                                Password
                            </Label>

                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    required
                                    disabled={isLoading}
                                    className="pr-10"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <p className="text-sm text-red-500">
                                {error}
                            </p>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            className="w-full py-6 text-lg"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Signing In...
                                </>
                            ) : (
                                "Sign In"
                            )}
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col gap-4 pb-8">
                    <div className="text-sm text-muted-foreground text-center font-body">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-yellow-600 hover:underline underline-offset-4"
                        >
                            Sign up
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}