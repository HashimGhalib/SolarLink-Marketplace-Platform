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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [role, setRole] = useState("");
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
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password"),
            role,
        };

        try {
            const response = await fetch(
                "https://dummyjson.com/users/add",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(payload),
                }
            );

            if (!response.ok) {
                throw new Error("Registration failed");
            }

            const result = await response.json();

            console.log("User registered:", result);

            // Optional: Save mock token/user
            localStorage.setItem(
                "solarlink_user",
                JSON.stringify(payload)
            );

            // Redirect after success
            router.push("/dashboard");
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Try again.");
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
                        Create an account
                    </CardTitle>

                    <CardDescription className="font-body">
                        Join the marketplace connecting solar
                        energy professionals and customers.
                    </CardDescription>
                </CardHeader>

                <CardContent className="px-6">
                    <form
                        onSubmit={handleSubmit}
                        className="grid gap-4"
                    >
                        {/* Name */}
                        <div className="grid gap-2">
                            <Label htmlFor="name">
                                Full Name
                            </Label>

                            <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {/* Email */}
                        <div className="grid gap-2">
                            <Label htmlFor="email">
                                Email
                            </Label>

                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                disabled={isLoading}
                            />
                        </div>

                        {/* Role */}
                        <div className="grid gap-2">
                            <Label>I am a...</Label>

                            <Select
                                required
                                onValueChange={setRole}
                            >
                                <SelectTrigger>
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectItem value="customer">
                                        Customer
                                    </SelectItem>

                                    <SelectItem value="installer">
                                        Solar Installer
                                    </SelectItem>

                                    <SelectItem value="wholesaler">
                                        Equipment Wholesaler
                                    </SelectItem>
                                </SelectContent>
                            </Select>
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

                        <Button
                            type="submit"
                            className="w-full py-6 text-lg"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Signing Up...
                                </>
                            ) : (
                                "Sign Up"
                            )}
                        </Button>
                    </form>
                </CardContent>

                <CardFooter className="flex flex-col gap-4 pb-8">
                    <div className="text-sm text-muted-foreground text-center">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-yellow-600 hover:underline"
                        >
                            Log in
                        </Link>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}