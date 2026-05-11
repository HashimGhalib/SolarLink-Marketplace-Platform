import { Home, Building2, Sun, Package } from "lucide-react";
import Link from "next/link";

const audiences = [
    {
        icon: Home,
        tag: "For Homeowners",
        title: "Power your home with clean energy",
        body: "Find trusted installers near you, compare quotes, and make the switch to solar with full confidence. Track your system's performance in one dashboard.",
        cta: "Find Installers",
        href: "/explore",
        accent: "#10B981",
        bg: "bg-[#F0FDF4]",
        border: "border-emerald-100",
    },
    {
        icon: Building2,
        tag: "For Businesses",
        title: "Cut energy costs at scale",
        body: "Commercial properties can request bulk quotes, compare ROI across providers, and manage multi-site installations through a single account.",
        cta: "Get a Quote",
        href: "/explore",
        accent: "#065F46",
        bg: "bg-white",
        border: "border-emerald-100",
    },
    {
        icon: Sun,
        tag: "For Solar Companies",
        title: "Grow your customer pipeline",
        body: "List your services, receive verified leads, and build your reputation through blockchain-backed credentials and transparent customer reviews.",
        cta: "List Your Company",
        href: "/company",
        accent: "#F59E0B",
        bg: "bg-amber-50",
        border: "border-amber-100",
    },
    {
        icon: Package,
        tag: "For Wholesalers",
        title: "Connect with the right buyers",
        body: "Showcase panels, inverters, and batteries to a ready-to-buy network of installers and commercial clients across all 36 states.",
        cta: "Start Selling",
        href: "/company",
        accent: "#10B981",
        bg: "bg-[#F0FDF4]",
        border: "border-emerald-100",
    },
];

export default function WhoWeServeSection() {
    return (
        <section className="bg-white py-24 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[#F0FDF4] px-3.5 py-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                        <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#065F46]">
                            Who We Serve
                        </span>
                    </div>
                    <h2 className="font-main text-3xl font-extrabold tracking-tight text-[#1F2937] sm:text-4xl">
                        Built for every side of the <span className="text-[#F59E0B]">solar ecosystem</span>
                    </h2>
                    <p className="font-body mt-4 text-base leading-7 text-[#1F2937]/60">
                        Whether you're a homeowner going green, a business cutting costs, or a company building your brand — SolarLink has a place for you.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-5 sm:grid-cols-2">
                    {audiences.map((a) => (
                        <div
                            key={a.tag}
                            className={`group relative flex flex-col rounded-3xl border ${a.border} ${a.bg} p-7 transition-shadow hover:shadow-lg`}
                        >
                            {/* Tag */}
                            <span
                                className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest"
                                style={{ color: a.accent, backgroundColor: `${a.accent}15` }}
                            >
                                <a.icon className="h-3 w-3" strokeWidth={2.5} />
                                {a.tag}
                            </span>

                            <h3 className="font-main text-lg font-extrabold text-[#1F2937]">{a.title}</h3>
                            <p className="font-body mt-3 text-sm leading-7 text-[#1F2937]/60 flex-1">{a.body}</p>

                            <Link
                                href={a.href}
                                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                                style={{ color: a.accent }}
                            >
                                {a.cta}
                                <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
