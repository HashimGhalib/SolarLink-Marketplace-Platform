import Link from "next/link";
import { Sun, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    Platform: [
        { name: "Explore Companies", href: "/explore" },
        { name: "Request a Quote", href: "/explore" },
        { name: "Book Installation", href: "/explore" },
        { name: "Compare Providers", href: "/explore" },
    ],
    Company: [
        { name: "About SolarLink", href: "/company" },
        { name: "Our Mission", href: "/company" },
        { name: "List Your Business", href: "/company" },
        { name: "Blockchain Credentials", href: "/company" },
    ],
    Support: [
        { name: "Help Centre", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
    ],
};

const socials = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
    return (
        <footer className="bg-[#1F2937] text-white">
            {/* Main footer body */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">

                    {/* Brand column */}
                    <div>
                        {/* Logo */}
                        <Link href="/" className="inline-flex items-center gap-2.5 select-none">
                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-[#065F46] shadow-md">
                                <Sun className="h-4 w-4 text-white" strokeWidth={2.5} />
                            </span>
                            <span className="text-[15px] font-bold tracking-tight font-main">
                                Solar<span className="text-[#10B981]">Link</span>
                            </span>
                        </Link>

                        <p className="font-body mt-5 text-sm leading-7 text-white/55 max-w-xs">
                            Nigeria's trusted digital marketplace connecting customers with verified solar companies and wholesalers — from discovery to installation.
                        </p>

                        {/* Contact info */}
                        <div className="mt-7 space-y-3">
                            {[
                                { icon: Mail, text: "hello@solarlink.ng" },
                                { icon: Phone, text: "+234 800 SOLAR NG" },
                                { icon: MapPin, text: "Lagos · Abuja · Port Harcourt" },
                            ].map((c) => (
                                <div key={c.text} className="flex items-center gap-3">
                                    <c.icon className="h-4 w-4 shrink-0 text-[#10B981]" strokeWidth={2} />
                                    <span className="font-body text-sm text-white/55">{c.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* Socials */}
                        <div className="mt-8 flex items-center gap-3">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 hover:border-[#10B981]/50 hover:bg-[#10B981]/10 hover:text-[#10B981] transition-all"
                                >
                                    <s.icon className="h-4 w-4" strokeWidth={2} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([group, links]) => (
                        <div key={group}>
                            <h3 className="font-main text-[13px] font-bold uppercase tracking-widest text-white/30 mb-5">
                                {group}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((l) => (
                                    <li key={l.name}>
                                        <Link
                                            href={l.href}
                                            className="font-body text-sm text-white/55 hover:text-[#10B981] transition-colors"
                                        >
                                            {l.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Newsletter strip */}
                <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-5">
                    <div>
                        <p className="font-main text-sm font-bold text-white">Stay in the loop</p>
                        <p className="font-body text-xs text-white/50 mt-0.5">Get solar news, provider updates, and platform announcements.</p>
                    </div>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex w-full sm:w-auto gap-2"
                    >
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="font-body flex-1 sm:w-56 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#10B981]/60 focus:ring-1 focus:ring-[#10B981]/40 transition-all"
                        />
                        <button
                            type="submit"
                            className="rounded-xl bg-[#F59E0B] px-5 py-2.5 text-sm font-bold text-white hover:bg-amber-500 active:scale-[0.97] transition-all whitespace-nowrap"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="font-body text-xs text-white/30">
                        © {new Date().getFullYear()} SolarLink Technologies Ltd. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        <span className="font-body text-xs text-white/30">Blockchain-verified platform</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
