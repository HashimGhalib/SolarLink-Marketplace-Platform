import { Search, FileText, CalendarCheck, ThumbsUp } from "lucide-react";

const steps = [
    {
        icon: Search,
        step: "01",
        title: "Browse & Compare",
        body: "Search verified solar companies and wholesalers near you. Filter by rating, location, and product type.",
    },
    {
        icon: FileText,
        step: "02",
        title: "Request a Quote",
        body: "Submit your project details and receive tailored installation quotes directly from providers.",
    },
    {
        icon: CalendarCheck,
        step: "03",
        title: "Book Installation",
        body: "Choose your preferred company and schedule an installation date that works for you.",
    },
    {
        icon: ThumbsUp,
        step: "04",
        title: "Review & Verify",
        body: "After installation, leave a verified review. Your feedback builds the community's trust layer.",
    },
];

export default function HowItWorksSection() {
    return (
        <section className="relative overflow-hidden bg-[#F0FDF4] py-24 lg:py-32">
            {/* Diagonal stripe decoration */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
                style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #10B981 0, #10B981 1px, transparent 0, transparent 50%)",
                    backgroundSize: "20px 20px",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section header */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                        <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#065F46]">
                            How It Works
                        </span>
                    </div>
                    <h2 className="font-main text-3xl font-extrabold tracking-tight text-[#1F2937] sm:text-4xl">
                        Go solar in <span className="text-[#10B981]">four simple steps</span>
                    </h2>
                    <p className="font-body mt-4 text-base leading-7 text-[#1F2937]/60">
                        From discovery to a powered home — SolarLink makes the process transparent, fast, and stress-free.
                    </p>
                </div>

                {/* Steps grid */}
                <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Connector line (desktop) */}
                    <div
                        aria-hidden="true"
                        className="absolute top-10 left-[12.5%] right-[12.5%] hidden h-px bg-gradient-to-r from-emerald-200 via-[#F59E0B]/40 to-emerald-200 lg:block"
                    />

                    {steps.map((s) => (
                        <div key={s.step} className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                            {/* Step icon + number */}
                            <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-emerald-100 shadow-md shadow-emerald-50 z-10">
                                <s.icon className="h-6 w-6 text-[#10B981]" strokeWidth={2} />
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#F59E0B] font-main text-[10px] font-extrabold text-white shadow">
                                    {s.step}
                                </span>
                            </div>
                            <h3 className="font-main text-base font-bold text-[#1F2937]">{s.title}</h3>
                            <p className="font-body mt-2 text-sm leading-6 text-[#1F2937]/60">{s.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
