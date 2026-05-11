"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Sun, Eye, EyeOff, ArrowRight, ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const trustPoints = [
    { icon: ShieldCheck, text: "Secure, encrypted access" },
    { icon: Star, text: "Manage your solar projects" },
    { icon: Users, text: "Connect with verified partners" },
];

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        const formData = new FormData(e.currentTarget);
        const payload = {
            username: formData.get("email"), // dummyjson often uses username/email
            password: formData.get("password"),
        };

        try {
            // Using dummyjson login endpoint for demonstration
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Invalid credentials");

            const result = await response.json();
            localStorage.setItem("solarlink_token", result.token);
            router.push("/dashboard");
        } catch (err) {
            setError("Invalid email or password. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-[#F0FDF4] font-body ">

            {/* ── Left panel (decorative, desktop only) ── */}
            <div className="relative hidden lg:flex lg:w-[45%] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#065F46] via-[#047857] to-[#10B981] p-12">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.12]"
                    style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

                <div aria-hidden="true" className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div aria-hidden="true" className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#F59E0B]/20 blur-3xl" />

                <Link href="/" className="relative z-10 flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow">
                        <Sun className="h-5 w-5 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="font-main text-xl font-bold text-white tracking-tight">
                        Solar<span className="text-[#F59E0B]">Link</span>
                    </span>
                </Link>

                <div className="relative z-10">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
                        <span className="font-body text-xs font-semibold uppercase tracking-widest text-white/80">
                            Welcome Back
                        </span>
                    </div>

                    <h2 className="font-main text-3xl font-extrabold leading-tight text-white xl:text-4xl">
                        Log in to your<br />
                        <span className="text-[#F59E0B]">Solar Dashboard.</span>
                    </h2>

                    <div className="mt-8 space-y-3">
                        {trustPoints.map((t) => (
                            <div key={t.text} className="flex items-center gap-3">
                                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/15">
                                    <t.icon className="h-3.5 w-3.5 text-white" strokeWidth={2} />
                                </span>
                                <span className="font-body text-sm text-white/75">{t.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative z-10 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="font-body text-sm leading-6 text-white/80 italic">
                        "The fastest way to manage solar deployments across Nigeria."
                    </p>
                </div>
            </div>

            {/* ── Right panel (form) ── */}
            <div className="flex flex-1 flex-col items-center justify-center px-6 py-14 sm:px-10 lg:px-16">

                <Link href="/" className="lg:hidden flex items-center gap-2 mb-8">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-[#065F46] shadow-md">
                        <Sun className="h-4 w-4 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="font-main text-lg font-bold text-[#065F46] tracking-tight">
                        Solar<span className="text-[#10B981]">Link</span>
                    </span>
                </Link>

                <div className="w-full max-w-sm">
                    <div className="mb-8">
                        <h1 className="font-main text-2xl font-extrabold tracking-tight text-[#1F2937]">
                            Welcome back
                        </h1>
                        <p className="font-body mt-1.5 text-sm text-[#1F2937]/55">
                            Enter your credentials to access your account.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div className="space-y-1.5">
                            <Label htmlFor="email" className="font-body text-xs font-semibold uppercase tracking-widest text-[#065F46]">
                                Email Address
                            </Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                required
                                disabled={isLoading}
                                className="rounded-xl border-emerald-100 bg-white focus-visible:ring-[#10B981]/40 focus-visible:border-[#10B981] text-[#1F2937] h-11"
                            />
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="font-body text-xs font-semibold uppercase tracking-widest text-[#065F46]">
                                    Password
                                </Label>
                                <Link href="#" className="text-[11px] font-bold text-[#10B981] hover:underline">
                                    Forgot password?
                                </Link>
                            </div>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    required
                                    disabled={isLoading}
                                    className="rounded-xl border-emerald-100 bg-white focus-visible:ring-[#10B981]/40 focus-visible:border-[#10B981] text-[#1F2937] h-11 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1F2937]/30 hover:text-[#10B981]"
                                >
                                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                                <p className="font-body text-sm text-red-600">{error}</p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-11 rounded-xl bg-[#10B981] text-sm font-bold text-white shadow-md shadow-emerald-200 hover:bg-[#059669] active:scale-[0.98] transition-all"
                        >
                            {isLoading ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="my-8 flex items-center gap-3">
                        <div className="h-px flex-1 bg-emerald-100" />
                        <span className="font-body text-xs text-[#1F2937]/35">new to solarlink?</span>
                        <div className="h-px flex-1 bg-emerald-100" />
                    </div>

                    <Link
                        href="/register"
                        className="flex w-full items-center justify-center rounded-xl border border-emerald-200 bg-white py-2.5 text-sm font-bold text-[#065F46] hover:border-emerald-300 hover:bg-emerald-50 transition-all font-body"
                    >
                        Create an account
                    </Link>
                </div>
            </div>
        </div>
    );
}