import { Search, Bell, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeaderProps } from "@/types/dashboard";


export function DashboardHeader({ searchQuery, setSearchQuery }: HeaderProps) {

    return (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="font-body text-xs font-semibold uppercase tracking-widest text-[#10B981] mb-1">
                    Welcome back, <span className="text-black">Ghalib</span> 👋
                </p>
                <h1 className="font-main text-3xl font-extrabold tracking-tight text-[#1F2937] lg:text-4xl">
                    Dashboard
                </h1>
            </div>

            <div className="flex items-center gap-2">
                {/* Search */}
                <div className="hidden sm:flex items-center gap-2 rounded-xl border border-emerald-100 bg-white px-3.5 py-2 shadow-sm">
                    <Search className="h-3.5 w-3.5 text-[#1F2937]/30" />
                    <input
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
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
    )
}