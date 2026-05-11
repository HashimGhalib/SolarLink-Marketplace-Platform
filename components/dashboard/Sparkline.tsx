
const sparkPoints = [30, 55, 40, 70, 60, 85, 75, 90, 80, 95, 88, 100];
export function Sparkline({ color = "#10B981" }: { color?: string }) {
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