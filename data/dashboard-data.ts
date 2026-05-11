import {
    Sun, Zap, TrendingUp, Activity as ActivityIcon,
    ShieldCheck, Star, Package, Battery, Users
} from "lucide-react";
import { Stat, Installation, Activity, Quote } from "@/types/dashboard";


export const stats: Stat[] = [
    { label: "Energy Output", value: "12.4 kWh", change: "+18%", up: true, icon: Zap, color: "#10B981", bg: "bg-emerald-50", iconBg: "bg-gradient-to-br from-emerald-400 to-[#065F46]", sub: "vs last month" },
    { label: "Active Installations", value: "3", change: "+1 new", up: true, icon: Sun, color: "#F59E0B", bg: "bg-amber-50", iconBg: "bg-gradient-to-br from-amber-400 to-amber-600", sub: "this month" },
    { label: "Cost Savings", value: "₦84,200", change: "+22%", up: true, icon: TrendingUp, color: "#065F46", bg: "bg-[#F0FDF4]", iconBg: "bg-gradient-to-br from-[#10B981] to-[#065F46]", sub: "vs grid cost" },
    { label: "CO₂ Avoided", value: "2.1 t", change: "-5%", up: false, icon: ActivityIcon, color: "#6366F1", bg: "bg-indigo-50", iconBg: "bg-gradient-to-br from-indigo-400 to-indigo-600", sub: "vs last quarter" },
];

export const installations: Installation[] = [
    { id: 1, name: "Main Residence", location: "Lekki, Lagos", status: "active", output: "8.2 kWh", capacity: "10 kW", installer: "BrightSun Solar", rating: 4.9, since: "Mar 2024", health: 94 },
    { id: 2, name: "Office Complex", location: "Victoria Island, Lagos", status: "active", output: "3.6 kWh", capacity: "5 kW", installer: "GreenWatt Solutions", rating: 4.7, since: "Jan 2024", health: 87 },
    { id: 3, name: "Warehouse Unit", location: "Ikeja, Lagos", status: "maintenance", output: "0 kWh", capacity: "8 kW", installer: "SolarPro NG", rating: 4.5, since: "Nov 2023", health: 42 },
];

export const recentActivity: Activity[] = [
    { icon: ShieldCheck, text: "BrightSun Solar verified via blockchain", time: "2h ago", color: "#10B981" },
    { icon: Star, text: "Your review on GreenWatt was published", time: "1d ago", color: "#F59E0B" },
    { icon: Package, text: "New quote received from SolarPro NG", time: "2d ago", color: "#065F46" },
    { icon: Battery, text: "Warehouse inverter flagged for maintenance", time: "3d ago", color: "#EF4444" },
];

export const quotes: Quote[] = [
    { company: "EcoWatts Ltd", location: "Surulere, Lagos", amount: "₦1,240,000", panels: "12 panels · 6 kW", rating: 4.8, badge: "Best Value" },
    { company: "SunForce NG", location: "Yaba, Lagos", amount: "₦1,380,000", panels: "14 panels · 7 kW", rating: 4.6, badge: "Top Rated" },
];

