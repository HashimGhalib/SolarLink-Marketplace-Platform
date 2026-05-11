import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="bg-[#F0FDF4] py-24 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#10B981] via-[#059669] to-[#065F46] px-8 py-16 text-center shadow-2xl shadow-emerald-200 lg:px-20">

                    {/* Orbs */}
                    <div aria-hidden="true" className="absolute -top-12 -left-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                    <div aria-hidden="true" className="absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-[#F59E0B]/20 blur-2xl" />

                    <div className="relative z-10">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5">
                            <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-pulse" />
                            <span className="font-body text-xs font-semibold uppercase tracking-widest text-white/80">
                                Get Started Today
                            </span>
                        </div>

                        <h2 className="font-main text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                            Ready to go solar?
                        </h2>
                        <p className="font-body mx-auto mt-4 max-w-xl text-base leading-7 text-white/75">
                            Join thousands of Nigerians already using SolarLink to find verified installers, compare prices, and power their homes and businesses with clean energy.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/explore"
                                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-[#F59E0B] px-8 py-4 text-sm font-bold text-white shadow-lg hover:bg-amber-500 active:scale-[0.98] transition-all"
                            >
                                Explore Solar Companies
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                            <Link
                                href="/company"
                                className="inline-flex w-full sm:w-auto items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm"
                            >
                                List Your Business
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
