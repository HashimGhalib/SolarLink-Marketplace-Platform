const testimonials = [
    {
        quote: "Within 48 hours of posting my project, I had five verified quotes. SolarLink made the whole process feel completely safe and transparent.",
        name: "Amaka Okonkwo",
        role: "Homeowner, Lagos",
        initials: "AO",
        color: "#10B981",
    },
    {
        quote: "As a solar company, our lead pipeline has tripled since listing on SolarLink. The blockchain credential system really builds customer trust.",
        name: "Emeka Nwosu",
        role: "CEO, BrightSun Solar Ltd",
        initials: "EN",
        color: "#065F46",
    },
    {
        quote: "We supply panels to installers in 12 states now — all through SolarLink. The platform pays for itself every month.",
        name: "Fatima Aliyu",
        role: "Operations Manager, GreenWatt Wholesale",
        initials: "FA",
        color: "#F59E0B",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="relative overflow-hidden bg-[#065F46] py-24 lg:py-32">
            {/* Decorative dot grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto mb-14 max-w-xl text-center">
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5">
                        <span className="h-2 w-2 rounded-full bg-[#F59E0B]" />
                        <span className="font-body text-xs font-semibold uppercase tracking-widest text-white/80">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="font-main text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                        Trusted by Nigerians<br />
                        <span className="text-[#F59E0B]">across the country</span>
                    </h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.07] p-7 backdrop-blur-sm"
                        >
                            {/* Quote marks */}
                            <svg aria-hidden="true" className="mb-4 h-7 w-7 opacity-40" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 21V13.5C3 8.806 6.806 5 11.5 5H12v4h-.5C9.57 9 8 10.57 8 12.5V13h4v8H3zm11 0V13.5C14 8.806 17.806 5 22.5 5H23v4h-.5C20.57 9 19 10.57 19 12.5V13h4v8h-9z" />
                            </svg>

                            <p className="font-body text-sm leading-7 text-white/80 flex-1">{t.quote}</p>

                            <div className="mt-6 flex items-center gap-3">
                                <span
                                    className="flex h-10 w-10 items-center justify-center rounded-full font-main text-sm font-extrabold text-white"
                                    style={{ backgroundColor: t.color }}
                                >
                                    {t.initials}
                                </span>
                                <div>
                                    <p className="font-main text-sm font-bold text-white">{t.name}</p>
                                    <p className="font-body text-xs text-white/50">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
