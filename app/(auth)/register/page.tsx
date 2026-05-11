"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2, Sun, Eye, EyeOff, ArrowRight, ShieldCheck, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useAuth } from "@/hooks/useAuth";

const roles = [
    { value: "customer", label: "Customer", sub: "Find & book solar installations" },
    { value: "installer", label: "Solar Installer", sub: "List services & manage leads" },
    { value: "wholesaler", label: "Equipment Wholesaler", sub: "Sell panels, inverters & batteries" },
];

const trustPoints = [
    { icon: ShieldCheck, text: "Blockchain-verified credentials" },
    { icon: Star, text: "Transparent, tamper-proof reviews" },
    { icon: Users, text: "2,400+ active companies on platform" },
];

export default function RegisterPage() {
    const { handleRegister, isLoading, error } = useAuth();

    const [role, setRole] = useState("");
    const [showPassword, setShowPassword] = useState(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        handleRegister(formData, role);

    };

    return (
        <div className="flex min-h-screen bg-[#F0FDF4] font-body ">

            {/* ── Left panel (decorative, desktop only) ── */}
            <div className="relative hidden lg:flex lg:w-[45%] flex-col justify-between overflow-hidden bg-gradient-to-br from-[#065F46] via-[#047857] to-[#10B981] p-12">

                {/* Dot grid */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.12]"
                    style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

                {/* Glow orbs */}
                <div aria-hidden="true" className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
                <div aria-hidden="true" className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#F59E0B]/20 blur-3xl" />

                {/* Logo */}
                <Link href="/" className="relative z-10 flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 shadow">
                        <Sun className="h-5 w-5 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="font-main text-xl font-bold text-white tracking-tight">
                        Solar<span className="text-[#F59E0B]">Link</span>
                    </span>
                </Link>

                {/* Main copy */}
                <div className="relative z-10">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
                        <span className="font-body text-xs font-semibold uppercase tracking-widest text-white/80">
                            Nigeria's Solar Marketplace
                        </span>
                    </div>

                    <h2 className="font-main text-3xl font-extrabold leading-tight text-white xl:text-4xl">
                        Connect. Install.<br />
                        <span className="text-[#F59E0B]">Power Nigeria.</span>
                    </h2>

                    <p className="font-body mt-4 text-sm leading-7 text-white/65 max-w-xs">
                        Join thousands of homeowners, installers, and wholesalers building Nigeria's clean energy future on one trusted platform.
                    </p>

                    {/* Trust points */}
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

                {/* Bottom quote */}
                <div className="relative z-10 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="font-body text-sm leading-6 text-white/80 italic">
                        "SolarLink cut our customer acquisition cost by 60%. The verified leads are genuinely ready to buy."
                    </p>
                    <div className="mt-3 flex items-center gap-2.5">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F59E0B] font-main text-xs font-bold text-white">EN</span>
                        <div>
                            <p className="font-main text-xs font-bold text-white">Emeka Nwosu</p>
                            <p className="font-body text-[11px] text-white/50">CEO, BrightSun Solar Ltd</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Right panel (form) ── */}
            <div className="flex flex-1 flex-col items-center justify-center px-6  py-14 sm:px-10 lg:px-16">

                {/* Mobile logo */}
                <Link href="/" className="lg:hidden flex items-center gap-2 mb-8">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-[#065F46] shadow-md">
                        <Sun className="h-4 w-4 text-white" strokeWidth={2.5} />
                    </span>
                    <span className="font-main text-lg font-bold text-[#065F46] tracking-tight">
                        Solar<span className="text-[#10B981]">Link</span>
                    </span>
                </Link>

                <div className="w-full max-w-sm">
                    {/* Heading */}
                    <div className="mb-8">
                        <h1 className="font-main text-2xl font-extrabold tracking-tight text-[#1F2937]">
                            Create your account
                        </h1>
                        <p className="font-body mt-1.5 text-sm text-[#1F2937]/55">
                            Get started on Nigeria's trusted solar marketplace.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Username */}
                        <div className="space-y-1.5">
                            <Label htmlFor="username" className="font-body text-xs font-semibold uppercase tracking-widest text-[#065F46]">
                                Username
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="e.g. johndoe"
                                required
                                disabled={isLoading}
                                className="rounded-xl border-emerald-100 bg-white focus-visible:ring-[#10B981]/40 focus-visible:border-[#10B981] text-[#1F2937] placeholder:text-[#1F2937]/30 font-body h-11"
                            />
                        </div>

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
                                className="rounded-xl border-emerald-100 bg-white focus-visible:ring-[#10B981]/40 focus-visible:border-[#10B981] text-[#1F2937] placeholder:text-[#1F2937]/30 font-body h-11"
                            />
                        </div>

                        {/* Role */}
                        <div className="space-y-1.5">
                            <Label className="font-body text-xs font-semibold uppercase tracking-widest text-[#065F46]">
                                I am a…
                            </Label>
                            <Select required onValueChange={setRole} disabled={isLoading}>
                                <SelectTrigger className="rounded-xl border-emerald-100 bg-white focus:ring-[#10B981]/40 font-body h-11 text-[#1F2937]">
                                    <SelectValue placeholder="Select your role" />
                                </SelectTrigger>
                                <SelectContent className="rounded-xl border-emerald-100 font-body">
                                    {roles.map((r) => (
                                        <SelectItem key={r.value} value={r.value} className="py-2.5">
                                            <div>
                                                <p className="text-sm font-semibold text-[#1F2937]">{r.label}</p>
                                                {/* <p className="text-xs text-[#1F2937]/50">{r.sub}</p> */}
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* Password */}
                        <div className="space-y-1.5">
                            <Label htmlFor="password" className="font-body text-xs font-semibold uppercase tracking-widest text-[#065F46]">
                                Password
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Min. 8 characters"
                                    required
                                    disabled={isLoading}
                                    className="rounded-xl border-emerald-100 bg-white focus-visible:ring-[#10B981]/40 focus-visible:border-[#10B981] text-[#1F2937] placeholder:text-[#1F2937]/30 font-body h-11 pr-10"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1F2937]/30 hover:text-[#10B981] transition-colors"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
                                </button>
                            </div>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="rounded-xl border border-red-100 bg-red-50 px-4 py-3">
                                <p className="font-body text-sm text-red-600">{error}</p>
                            </div>
                        )}

                        {/* Submit */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-11 rounded-xl bg-[#10B981] text-sm font-bold text-white shadow-md shadow-emerald-200 hover:bg-[#059669] active:scale-[0.98] transition-all mt-2"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Creating account…
                                </>
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>

                        {/* Terms */}
                        <p className="font-body text-center text-[11px] text-[#1F2937]/40 leading-5">
                            By signing up you agree to our{" "}
                            <Link href="#" className="text-[#10B981] hover:underline">Terms of Service</Link>
                            {" "}and{" "}
                            <Link href="#" className="text-[#10B981] hover:underline">Privacy Policy</Link>.
                        </p>
                    </form>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-3">
                        <div className="h-px flex-1 bg-emerald-100" />
                        <span className="font-body text-xs text-[#1F2937]/35">already have an account?</span>
                        <div className="h-px flex-1 bg-emerald-100" />
                    </div>

                    <Link
                        href="/login"
                        className="flex w-full items-center justify-center rounded-xl border border-emerald-200 bg-white py-2.5 text-sm font-bold text-[#065F46] hover:border-emerald-300 hover:bg-emerald-50 transition-all font-body"
                    >
                        Log in instead
                    </Link>
                </div>
            </div>
        </div>
    );
}
