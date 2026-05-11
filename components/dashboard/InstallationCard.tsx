import { MapPin, MoreHorizontal, Star, ShieldCheck, ChevronRight } from "lucide-react";
import { Installation } from "@/types/dashboard";
import { StatusPill } from "./StatusPill";
import { HealthBar } from "./HealthBar";


export function InstallationCard({ inst }: { inst: Installation }) {
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="font-main text-base font-extrabold text-[#1F2937]">My Installations</h2>
                <button className="font-body text-xs font-semibold text-[#10B981] hover:underline">View all</button>
            </div>
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
        </>
    )
}