"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
    Sun, TrendingUp, TrendingDown, Calendar,
    MapPin, Star, ArrowUpRight, ChevronRight,
    Package, Filter
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/shared/Navbar";
import { stats, recentActivity, quotes, installations } from "@/data/dashboard-data";
import { Sparkline } from "@/components/dashboard/Sparkline";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { InstallationCard } from "@/components/dashboard/InstallationCard";



export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState<"overview" | "quotes" | "activity">("overview");
    const [searchQuery, setSearchQuery] = useState("");

    // Search logic
    const filteredInstallations = useMemo(() => {
        return installations.filter((inst) =>
            inst.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            inst.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [searchQuery]);

    return (
        <>
            <Navbar />
            <section className="relative min-h-screen overflow-hidden bg-[#F0FDF4] pt-28 pb-24 lg:pt-32 lg:pb-32">

                {/* Background glows */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10"
                    style={{ background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 65%)" }} />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]"
                    style={{ backgroundImage: "radial-gradient(circle, #10B981 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

                <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    {/* ── Top bar ── */}
                    <DashboardHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

                    {/* ── Stat cards ── */}
                    <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((s) => (
                            <div key={s.label}
                                className={`relative overflow-hidden rounded-2xl border border-white/80 ${s.bg} p-5 shadow-sm`}>
                                <div className="flex items-start justify-between mb-3">
                                    <span className={`flex h-9 w-9 items-center justify-center rounded-xl ${s.iconBg} shadow-sm`}>
                                        <s.icon className="h-4 w-4 text-white" strokeWidth={2.5} />
                                    </span>
                                    <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-bold ${s.up ? "bg-emerald-100 text-emerald-700" : "bg-red-50 text-red-500"}`}>
                                        {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                                        {s.change}
                                    </span>
                                </div>
                                <p className="font-main text-2xl font-extrabold text-[#1F2937]">{s.value}</p>
                                <p className="font-body text-xs text-[#1F2937]/50 mt-0.5">{s.label} · {s.sub}</p>
                                <div className="mt-3">
                                    <Sparkline color={s.color} />
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* ── Tabs ── */}
                    <div className="mb-6 flex gap-1 rounded-xl border border-emerald-100 bg-white p-1 w-fit shadow-sm">
                        {(["overview", "quotes", "activity"] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`rounded-lg px-4 py-1.5 text-[13px] font-semibold capitalize transition-all font-body ${activeTab === tab
                                    ? "bg-[#10B981] text-white shadow-sm"
                                    : "text-[#1F2937]/50 hover:text-[#1F2937]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>


                    {/* ── Overview Tab ── */}
                    {activeTab === "overview" && (
                        <div className="grid gap-6 lg:grid-cols-3">

                            {/* Installations (2/3 width) */}
                            <div className="lg:col-span-2 space-y-4">

                                {/* My Installations header */}
                                <div className="flex items-center justify-between">
                                    <h2 className="font-main text-base font-extrabold text-[#1F2937]">My Installations</h2>
                                    <button className="font-body text-xs font-semibold text-[#10B981] hover:underline">View all</button>
                                </div>

                                {filteredInstallations.length > 0 ? (
                                    filteredInstallations.map((inst) => <InstallationCard key={inst.id} inst={inst} />)
                                ) : (
                                    <div className="p-12 text-center bg-white rounded-2xl border-2 border-dashed border-emerald-100">
                                        <p className="text-gray-400">No results for "{searchQuery}"</p>
                                    </div>
                                )}
                            </div>

                            {/* Right sidebar (1/3 width) */}
                            <div className="space-y-5">
                                {/* Monthly summary card */}
                                <div className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-[#065F46] to-[#10B981] p-5 text-white shadow-lg shadow-emerald-100">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <p className="font-body text-xs font-semibold uppercase tracking-widest text-white/60">May 2026</p>
                                            <p className="font-main text-xl font-extrabold mt-0.5">Monthly Report</p>
                                        </div>
                                        <Calendar className="h-8 w-8 text-white/20" />
                                    </div>
                                    <div className="space-y-3">
                                        {[
                                            { label: "Total Output", value: "12.4 kWh" },
                                            { label: "Grid Savings", value: "₦84,200" },
                                            { label: "Carbon Offset", value: "2.1 tonnes" },
                                        ].map((r) => (
                                            <div key={r.label} className="flex justify-between items-center border-t border-white/10 pt-2">
                                                <span className="font-body text-xs text-white/60">{r.label}</span>
                                                <span className="font-main text-sm font-extrabold">{r.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <button className="mt-5 w-full rounded-xl bg-white/15 py-2 text-[13px] font-bold hover:bg-white/20 transition-colors font-body">
                                        Download PDF
                                    </button>
                                </div>

                                {/* Quick actions */}
                                <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                                    <h3 className="font-main text-sm font-extrabold text-[#1F2937] mb-3">Quick Actions</h3>
                                    <div className="space-y-2">
                                        {[
                                            { label: "Request new quote", icon: ArrowUpRight, href: "/explore", color: "#10B981" },
                                            { label: "Find wholesalers", icon: Package, href: "/explore", color: "#065F46" },
                                            { label: "Schedule maintenance", icon: Calendar, href: "#", color: "#F59E0B" },
                                            { label: "View all companies", icon: Filter, href: "/explore", color: "#6366F1" },
                                        ].map((a) => (
                                            <Link
                                                key={a.label}
                                                href={a.href}
                                                className="flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-[#F0FDF4] transition-colors group"
                                            >
                                                <span className="flex h-7 w-7 items-center justify-center rounded-lg"
                                                    style={{ backgroundColor: `${a.color}15` }}>
                                                    <a.icon className="h-3.5 w-3.5" style={{ color: a.color }} />
                                                </span>
                                                <span className="font-body text-sm text-[#1F2937]/70 group-hover:text-[#1F2937] flex-1">{a.label}</span>
                                                <ChevronRight className="h-3.5 w-3.5 text-[#1F2937]/20 group-hover:text-[#10B981] transition-colors" />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* ── Quotes Tab ── */}
                    {activeTab === "quotes" && (
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <h2 className="font-main text-base font-extrabold text-[#1F2937]">Pending Quotes</h2>
                                <Badge className="bg-[#F59E0B]/15 text-amber-700 border-amber-200 font-body text-xs font-bold">
                                    {quotes.length} new
                                </Badge>
                            </div>

                            {quotes.map((q) => (
                                <div key={q.company}
                                    className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm hover:shadow-md hover:shadow-emerald-50 transition-shadow">
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="flex items-start gap-3">
                                            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-[#065F46] shrink-0 shadow-sm">
                                                <Sun className="h-5 w-5 text-white" strokeWidth={2} />
                                            </span>
                                            <div>
                                                <div className="flex items-center gap-2 flex-wrap">
                                                    <h3 className="font-main text-sm font-bold text-[#1F2937]">{q.company}</h3>
                                                    {q.badge && (
                                                        <span className="rounded-full bg-[#10B981]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#065F46]">
                                                            {q.badge}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="font-body text-xs text-[#1F2937]/50 mt-0.5 flex items-center gap-1">
                                                    <MapPin className="h-3 w-3" />{q.location}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="font-main text-lg font-extrabold text-[#1F2937]">{q.amount}</p>
                                            <p className="font-body text-xs text-[#1F2937]/40">{q.panels}</p>
                                        </div>
                                    </div>

                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="font-body text-xs text-[#1F2937]/50 flex items-center gap-1">
                                            <Star className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]" />
                                            {q.rating} · Verified installer
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <button className="rounded-xl border border-emerald-100 px-4 py-1.5 text-[13px] font-semibold text-[#1F2937]/60 hover:border-emerald-200 font-body transition-colors">
                                                Decline
                                            </button>
                                            <button className="rounded-xl bg-[#10B981] px-4 py-1.5 text-[13px] font-bold text-white hover:bg-[#059669] font-body transition-colors">
                                                Accept Quote
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ── Activity Tab ── */}
                    {activeTab === "activity" && (
                        <div className="rounded-2xl border border-emerald-100 bg-white shadow-sm overflow-hidden">
                            <div className="px-5 py-4 border-b border-emerald-50">
                                <h2 className="font-main text-base font-extrabold text-[#1F2937]">Recent Activity</h2>
                            </div>
                            <div className="divide-y divide-emerald-50">
                                {recentActivity.map((a, i) => (
                                    <div key={i} className="flex items-start gap-4 px-5 py-4 hover:bg-[#F0FDF4]/50 transition-colors">
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl"
                                            style={{ backgroundColor: `${a.color}15` }}>
                                            <a.icon className="h-4 w-4" style={{ color: a.color }} strokeWidth={2} />
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-body text-sm text-[#1F2937]">{a.text}</p>
                                        </div>
                                        <span className="font-body text-xs text-[#1F2937]/35 shrink-0 mt-0.5">{a.time}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </section>
        </>
    );
}
