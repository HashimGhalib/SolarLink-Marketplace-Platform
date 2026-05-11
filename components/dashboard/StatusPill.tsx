export function StatusPill({ status }: { status: string }) {
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