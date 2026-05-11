"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "Company", href: "/company" },
];

function Logo({ onClick }: { onClick?: () => void }) {
    return (
        <Link
            href="/"
            onClick={onClick}
            className="flex items-center gap-2.5 select-none"
            aria-label="SolarLink Home"
        >
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-md shadow-emerald-200">
                <Sun className="h-4 w-4 text-white" strokeWidth={2.5} />
            </span>
            <span className="text-[15px] font-bold tracking-tight text-[#065F46] font-main">
                Solar<span className="text-[#10B981]">Link</span>
            </span>
        </Link>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        // Check if token exists on mount
        const token = localStorage.getItem("solarlink_token");
        setIsLoggedIn(!!token);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("solarlink_token");
        localStorage.removeItem("solarlink_user");
        setIsLoggedIn(false);
        router.push("/login");
    };

    return (
        <header
            className={[
                "fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-300 font-body",
                scrolled ? "pt-3" : "pt-5",
            ].join(" ")}
        >
            <nav
                className={[
                    "flex items-center justify-between gap-8 rounded-2xl px-4 py-2.5 transition-all duration-300",
                    scrolled
                        ? "w-[min(740px,calc(100vw-2rem))] border border-emerald-100 bg-[#F0FDF4]/90 shadow-[0_4px_24px_rgba(16,185,129,0.10)] backdrop-blur-xl"
                        : "w-[min(840px,calc(100vw-2rem))] border border-transparent bg-[#F0FDF4]/70 shadow-none backdrop-blur-md",
                ].join(" ")}
            >
                <Logo />

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-0.5">
                    {navLinks.map((link) => (
                        <Button
                            key={link.name}
                            variant="ghost"
                            size="sm"
                            className="text-[13.5px] font-medium text-[#065F46]/70 hover:text-[#065F46] hover:bg-emerald-50 rounded-lg transition-colors"
                            asChild
                        >
                            <Link href={link.href}>{link.name}</Link>
                        </Button>
                    ))}
                </div>

                {/* CTA + mobile trigger */}
                <div className="flex items-center gap-2">
                    {/* DESKTOP VIEW */}
                    {isLoggedIn ? (
                        <div className="hidden md:flex items-center gap-2">
                            <Button
                                variant="ghost"
                                size="sm"
                                className="rounded-xl text-[#065F46] hover:bg-emerald-50 font-medium"
                                asChild
                            >
                                <Link href="/dashboard">Dashboard</Link>
                            </Button>
                            <Button
                                size="sm"
                                onClick={handleLogout}
                                className="rounded-xl bg-red-50 text-[13px] font-bold text-red-600 border border-red-100 hover:bg-red-100 transition-all"
                            >
                                Logout
                            </Button>
                        </div>
                    ) : (
                        <Button
                            size="sm"
                            className="hidden md:inline-flex rounded-xl bg-[#F59E0B] text-[13px] font-bold text-white shadow-sm shadow-amber-200 hover:bg-amber-500 active:scale-[0.97] transition-all"
                            asChild
                        >
                            <Link href="/login">Get Started</Link>
                        </Button>
                    )}

                    {/* MOBILE VIEW TRIGGER */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden h-8 w-8 rounded-lg text-[#065F46] hover:bg-emerald-50"
                                aria-label="Toggle navigation menu"
                            >
                                <Menu className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>

                        <SheetContent
                            side="top"
                            aria-describedby={undefined}
                            className="mx-3 mt-3 rounded-2xl px-0 pt-0 shadow-2xl border border-emerald-100 bg-[#F0FDF4] md:hidden"
                        >
                            <SheetHeader className="flex-row items-center justify-between px-4 pt-4 pb-3">
                                <VisuallyHidden.Root>
                                    <SheetTitle>Navigation menu</SheetTitle>
                                </VisuallyHidden.Root>
                                <Logo onClick={() => setIsOpen(false)} />
                            </SheetHeader>

                            <Separator className="bg-emerald-100" />

                            <div className="flex flex-col px-2 py-2">
                                {navLinks.map((link) => (
                                    <Button
                                        key={link.name}
                                        variant="ghost"
                                        className="justify-start rounded-xl px-3 py-2.5 text-[14px] font-medium text-[#065F46]/70 hover:text-[#065F46] hover:bg-emerald-50"
                                        asChild
                                    >
                                        <Link href={link.href} onClick={() => setIsOpen(false)}>
                                            {link.name}
                                        </Link>
                                    </Button>
                                ))}

                                {/* Mobile Dashboard link if logged in */}
                                {isLoggedIn && (
                                    <Button
                                        variant="ghost"
                                        className="justify-start rounded-xl px-3 py-2.5 text-[14px] font-medium text-[#065F46]/70 hover:text-[#065F46] hover:bg-emerald-50"
                                        asChild
                                    >
                                        <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                                            Dashboard
                                        </Link>
                                    </Button>
                                )}
                            </div>

                            <div className="px-3 pb-4 pt-1">
                                {isLoggedIn ? (
                                    <Button
                                        onClick={() => {
                                            handleLogout();
                                            setIsOpen(false);
                                        }}
                                        className="w-full rounded-xl bg-red-500 text-[14px] font-bold text-white hover:bg-red-600 active:scale-[0.98]"
                                    >
                                        Logout
                                    </Button>
                                ) : (
                                    <Button
                                        className="w-full rounded-xl bg-[#F59E0B] text-[14px] font-bold text-white hover:bg-amber-500 active:scale-[0.98] shadow-sm shadow-amber-200"
                                        asChild
                                    >
                                        <Link href="/login" onClick={() => setIsOpen(false)}>
                                            Get Started
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}
