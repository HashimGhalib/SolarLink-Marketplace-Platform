"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Sun, Zap, TrendingUp, TrendingDown, Bell, Settings,
    Search, ChevronRight, MoreHorizontal, MapPin, Star,
    Battery, Activity, ArrowUpRight, Calendar, Users,
    ShieldCheck, Package, Plus, Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// ── Mock data ────────────────────────────────────────────────────────────────

const stats = [
    {
        label: "Energy Output",
        value: "12.4 kWh",
        change: "+18%",
        up: true,
        icon: Zap,
        color: "#10B981",
        bg: "bg-emerald-50",
        iconBg: "bg-gradient-to-br from-emerald-400 to-[#065F46]",
        sub: "vs last month",
    },
    {
        label: "Active Installations",
        value: "3",
        change: "+1 new",
        up: true,
        icon: Sun,
        color: "#F59E0B",
        bg: "bg-amber-50",
        iconBg: "bg-gradient-to-br from-amber-400 to-amber-600",
        sub: "this month",
    },
    {
        label: "Cost Savings",
        value: "₦84,200",
        change: "+22%",
        up: true,
        icon: TrendingUp,
        color: "#065F46",
        bg: "bg-[#F0FDF4]",
        iconBg: "bg-gradient-to-br from-[#10B981] to-[#065F46]",
        sub: "vs grid cost",
    },
    {
        label: "CO₂ Avoided",
        value: "2.1 t",
        change: "-5%",
        up: false,
        icon: Activity,
        color: "#6366F1",
        bg: "bg-indigo-50",
        iconBg: "bg-gradient-to-br from-indigo-400 to-indigo-600",
        sub: "vs last quarter",
    },
];

const installations = [
    {
        id: 1,
        name: "Main Residence",
        location: "Lekki, Lagos",
        status: "active",
        output: "8.2 kWh",
        capacity: "10 kW",
        installer: "BrightSun Solar",
        rating: 4.9,
        since: "Mar 2024",
        health: 94,
    },
    {
        id: 2,
        name: "Office Complex",
        location: "Victoria Island, Lagos",
        status: "active",
        output: "3.6 kWh",
        capacity: "5 kW",
        installer: "GreenWatt Solutions",
        rating: 4.7,
        since: "Jan 2024",
        health: 87,
    },
    {
        id: 3,
        name: "Warehouse Unit",
        location: "Ikeja, Lagos",
        status: "maintenance",
        output: "0 kWh",
        capacity: "8 kW",
        installer: "SolarPro NG",
        rating: 4.5,
        since: "Nov 2023",
        health: 42,
    },
];

const recentActivity = [
    { icon: ShieldCheck, text: "BrightSun Solar verified via blockchain", time: "2h ago", color: "#10B981" },
    { icon: Star, text: "Your review on GreenWatt was published", time: "1d ago", color: "#F59E0B" },
    { icon: Package, text: "New quote received from SolarPro NG", time: "2d ago", color: "#065F46" },
    { icon: Battery, text: "Warehouse inverter flagged for maintenance", time: "3d ago", color: "#EF4444" },
    { icon: Users, text: "2 new companies matched your search profile", time: "5d ago", color: "#6366F1" },
];

const quotes = [
    { company: "EcoWatts Ltd", location: "Surulere, Lagos", amount: "₦1,240,000", panels: "12 panels · 6 kW", rating: 4.8, badge: "Best Value" },
    { company: "SunForce NG", location: "Yaba, Lagos", amount: "₦1,380,000", panels: "14 panels · 7 kW", rating: 4.6, badge: "Top Rated" },
    { company: "PureEnergy Co", location: "Ajah, Lagos", amount: "₦1,190,000", panels: "10 panels · 5 kW", rating: 4.4, badge: null },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function HealthBar({ value, color }: { value: number; color: string }) {
    return (
        <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
            <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${value}%`, backgroundColor: color }}
            />
        </div>
    );
}

function StatusPill({ status }: { status: string }) {
    if (status === "active")
        return (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-[#065F46]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] animate-pulse" />
                Active
            </span>
        );
    return (
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-700">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Maintenance
        </span>
    );
}

// ── Output sparkline (pure SVG) ───────────────────────────────────────────────

const sparkPoints = [30, 55, 40, 70, 60, 85, 75, 90, 80, 95, 88, 100];
function Sparkline({ color = "#10B981" }: { color?: string }) {
    const w = 120, h = 40;
    const max = Math.max(...sparkPoints);
    const pts = sparkPoints
        .map((v, i) => `${(i / (sparkPoints.length - 1)) * w},${h - (v / max) * h}`)
        .join(" ");
    const area = `M0,${h} L${pts.split(" ").map(p => p).join(" L")} L${w},${h} Z`;
    return (
        <svg viewBox={`0 0 ${w} ${h}`} className="w-24 h-8" preserveAspectRatio="none">
            <defs>
                <linearGradient id={`sg-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={color} stopOpacity="0.25" />
                    <stop offset="100%" stopColor={color} stopOpacity="0" />
                </linearGradient>
            </defs>
            <path d={area} fill={`url(#sg-${color.replace("#", "")})`} />
            <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState<"overview" | "quotes" | "activity">("overview");

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#F0FDF4] pt-28 pb-24 lg:pt-32 lg:pb-32">

            {/* Background glows */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10"
                style={{ background: "radial-gradient(ellipse 70% 45% at 50% 0%, rgba(16,185,129,0.10) 0%, transparent 65%)" }} />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[0.25]"
                style={{ backgroundImage: "radial-gradient(circle, #10B981 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* ── Top bar ── */}
                <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-1">
                            Welcome back, Amaka 👋
                        </p>
                        <h1 className="font-main text-3xl font-extrabold tracking-tight text-[#1F2937] lg:text-4xl">
                            Your Dashboard
                        </h1>
                    </div>

                    <div className="flex items-center gap-2">
                        {/* Search */}
                        <div className="hidden sm:flex items-center gap-2 rounded-xl border border-emerald-100 bg-white px-3.5 py-2 shadow-sm">
                            <Search className="h-3.5 w-3.5 text-[#1F2937]/30" />
                            <input
                                placeholder="Search installations…"
                                className="font-body w-44 text-sm bg-transparent outline-none placeholder:text-[#1F2937]/30 text-[#1F2937]"
                            />
                        </div>
                        {/* Notifications */}
                        <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-100 bg-white shadow-sm hover:border-emerald-200 transition-colors">
                            <Bell className="h-4 w-4 text-[#1F2937]/60" />
                            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#F59E0B] border-2 border-white" />
                        </button>
                        {/* Settings */}
                        <button className="flex h-9 w-9 items-center justify-center rounded-xl border border-emerald-100 bg-white shadow-sm hover:border-emerald-200 transition-colors">
                            <Settings className="h-4 w-4 text-[#1F2937]/60" />
                        </button>
                        <Button
                            size="sm"
                            className="rounded-xl bg-[#10B981] text-[13px] font-bold text-white shadow-sm shadow-emerald-200 hover:bg-[#059669]"
                            asChild
                        >
                            <Link href="/explore">
                                <Plus className="h-3.5 w-3.5 mr-1" />
                                New Quote
                            </Link>
                        </Button>
                    </div>
                </div>

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
                            <div className="flex items-center justify-between">
                                <h2 className="font-main text-base font-extrabold text-[#1F2937]">My Installations</h2>
                                <button className="font-body text-xs font-semibold text-[#10B981] hover:underline">View all</button>
                            </div>

                            {installations.map((inst) => (
                                <div key={inst.id}
                                    className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm hover:shadow-md hover:shadow-emerald-50 transition-shadow">
                                    <div className="flex items-start justify-between gap-3 mb-4">
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="font-main text-sm font-bold text-[#1F2937]">{inst.name}</h3>
                                                <StatusPill status={inst.status} />
                                            </div>
                                            <p className="font-body text-xs text-[#1F2937]/50 mt-0.5 flex items-center gap-1">
                                                <MapPin className="h-3 w-3" />{inst.location}
                                            </p>
                                        </div>
                                        <button className="flex h-7 w-7 items-center justify-center rounded-lg hover:bg-gray-50 text-[#1F2937]/30">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        {[
                                            { label: "Output", value: inst.output },
                                            { label: "Capacity", value: inst.capacity },
                                            { label: "Since", value: inst.since },
                                        ].map((m) => (
                                            <div key={m.label} className="rounded-xl bg-[#F0FDF4] px-3 py-2">
                                                <p className="font-body text-[10px] uppercase tracking-widest text-[#1F2937]/40">{m.label}</p>
                                                <p className="font-main text-sm font-bold text-[#1F2937] mt-0.5">{m.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Health bar */}
                                    <div className="flex items-center gap-3">
                                        <span className="font-body text-[11px] text-[#1F2937]/40 w-14 shrink-0">System health</span>
                                        <div className="flex-1">
                                            <HealthBar
                                                value={inst.health}
                                                color={inst.health > 80 ? "#10B981" : inst.health > 50 ? "#F59E0B" : "#EF4444"}
                                            />
                                        </div>
                                        <span className="font-main text-xs font-bold text-[#1F2937] w-8 text-right">{inst.health}%</span>
                                    </div>

                                    <div className="mt-3 flex items-center justify-between">
                                        <div className="flex items-center gap-1.5">
                                            <ShieldCheck className="h-3.5 w-3.5 text-[#10B981]" />
                                            <span className="font-body text-xs text-[#1F2937]/50">{inst.installer}</span>
                                            <span className="font-body text-xs text-[#F59E0B] flex items-center gap-0.5">
                                                <Star className="h-3 w-3 fill-[#F59E0B]" />{inst.rating}
                                            </span>
                                        </div>
                                        <button className="font-body text-xs font-semibold text-[#10B981] flex items-center gap-0.5 hover:underline">
                                            Details <ChevronRight className="h-3 w-3" />
                                        </button>
                                    </div>
                                </div>
                            ))}
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
    );
}
