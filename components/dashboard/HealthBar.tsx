export function HealthBar({ value, color }: { value: number; color: string }) {
    return (
        <div className="h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700"
                style={{ width: `${value}%`, backgroundColor: color }} />
        </div>
    );
}

