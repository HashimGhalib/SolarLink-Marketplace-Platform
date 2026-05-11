import { ShieldCheck, Store, Star } from "lucide-react";

const pillars = [
    {
        icon: Store,
        title: "Digital Marketplace",
        body: "Browse verified solar companies and wholesalers across Nigeria — all in one trusted environment.",
    },
    {
        icon: ShieldCheck,
        title: "Blockchain Credentials",
        body: "Every listed company carries blockchain-backed credentials so you can trust who you're dealing with.",
    },
    {
        icon: Star,
        title: "Verified Reviews",
        body: "Transparent, tamper-proof review scores help customers choose the best installers and suppliers.",
    },
];

export default function AboutSection() {
    return (
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
            {/* Subtle emerald side accent */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-transparent via-[#10B981]/30 to-transparent"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

                    {/* Text block */}
                    <div>
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-[#F0FDF4] px-3.5 py-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                            <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#065F46]">
                                About SolarLink
                            </span>
                        </div>

                        <h2 className="font-main text-3xl font-extrabold leading-tight tracking-tight text-[#1F2937] sm:text-4xl lg:text-5xl">
                            Nigeria's trusted{" "}
                            <span className="text-[#10B981]">solar marketplace</span>
                        </h2>

                        <p className="font-body mt-6 text-base leading-8 text-[#1F2937]/65 max-w-xl">
                            SolarLink is a digital marketplace that connects residential and commercial
                            customers with verified solar companies and trusted wholesalers across Nigeria.
                            The platform enables customers to browse companies, request installation quotes,
                            compare offerings, and book installations — all in one trusted digital environment.
                        </p>

                        <p className="font-body mt-4 text-base leading-8 text-[#1F2937]/65 max-w-xl">
                            Solar companies and wholesalers can list products, manage leads, and build
                            reputations through verified reviews and blockchain-backed credentials.
                        </p>

                        {/* Stats row */}
                        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-emerald-100 pt-8">
                            {[
                                { value: "500+", label: "Verified Companies" },
                                { value: "36", label: "States Covered" },
                                { value: "₦2B+", label: "Installations Booked" },
                            ].map((s) => (
                                <div key={s.label}>
                                    <p className="font-main text-2xl font-extrabold text-[#10B981]">{s.value}</p>
                                    <p className="font-body mt-0.5 text-xs text-[#1F2937]/50">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pillar cards */}
                    <div className="flex flex-col gap-4">
                        {pillars.map((p) => (
                            <div
                                key={p.title}
                                className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-[#F0FDF4] p-5 transition-shadow hover:shadow-md hover:shadow-emerald-100"
                            >
                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-[#065F46] shadow-sm">
                                    <p.icon className="h-5 w-5 text-white" strokeWidth={2} />
                                </span>
                                <div>
                                    <h3 className="font-main text-base font-bold text-[#1F2937]">{p.title}</h3>
                                    <p className="font-body mt-1 text-sm leading-6 text-[#1F2937]/60">{p.body}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
