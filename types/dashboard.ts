import { LucideIcon } from "lucide-react";

export interface Stat {
    label: string;
    value: string;
    change: string;
    up: boolean;
    icon: LucideIcon;
    color: string;
    bg: string;
    iconBg: string;
    sub: string;
}

export interface Installation {
    id: number;
    name: string;
    location: string;
    status: "active" | "maintenance";
    output: string;
    capacity: string;
    installer: string;
    rating: number;
    since: string;
    health: number;
}

export interface Quote {
    company: string;
    location: string;
    amount: string;
    panels: string;
    rating: number;
    badge: string | null;
}

export interface Activity {
    icon: LucideIcon;
    text: string;
    time: string;
    color: string;
}

export interface HeaderProps {
    searchQuery: string;
    setSearchQuery: (val: string) => void;
}