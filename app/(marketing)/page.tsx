import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

import HeroImage from "@/assets/images/heroImage.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F0FDF4] pt-36 pb-24 lg:pt-44 lg:pb-32">

      {/* Radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(16,185,129,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Dot-grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, #10B981 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

          {/* Copy */}
          <div className="max-w-2xl text-center lg:text-left">

            {/* Eyebrow pill */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3.5 py-1.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-body text-xs font-semibold uppercase tracking-widest text-[#065F46]">
                Clean Energy Platform
              </span>
            </div>

            <h1 className="font-main text-4xl font-extrabold leading-[1.1] tracking-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
              Powering the future of{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#F59E0B]">Solar Connectivity.</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 12"
                  className="absolute -bottom-1 left-0 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 Q55 3 110 7 Q165 11 218 5"
                    stroke="#10B981"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="font-body mt-6 text-lg leading-8 text-[#1F2937]/65">
              SolarLink provides intelligent monitoring and distribution solutions for
              modern renewable energy grids. Manage your output, explore local providers,
              and scale your energy footprint.
            </p>

            <div className="font-body mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                href="/explore"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-[#10B981] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-200 hover:bg-[#059669] active:scale-[0.98] transition-all duration-150"
              >
                Explore Grids
                <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/company"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#065F46] hover:text-[#10B981] transition-colors"
              >
                Our Mission
                <span aria-hidden="true" className="text-[#F59E0B]">→</span>
              </Link>
            </div>

            {/* Social proof strip */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-xs text-[#1F2937]/50 font-body">
              <span className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-[#F59E0B]" />
                12 GWh monitored
              </span>
              <span className="h-3 w-px bg-emerald-200" />
              <span>2,400+ active grids</span>
              <span className="h-3 w-px bg-emerald-200" />
              <span>99.9% uptime</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl shadow-emerald-100 border border-emerald-100">
              <Image
                src={HeroImage}
                alt="Modern solar panel installation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#065F46]/10 via-transparent to-transparent" />
            </div>

            {/* Status badge */}
            <div className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2.5 rounded-2xl border border-emerald-100 bg-white px-4 py-3 shadow-xl shadow-emerald-100">
              <span className="h-2.5 w-2.5 rounded-full bg-[#10B981] animate-pulse shadow-[0_0_6px_2px_rgba(16,185,129,0.4)]" />
              <span className="font-body text-[11px] font-bold uppercase tracking-widest text-[#065F46]">
                System Active
              </span>
            </div>

            {/* Output stat badge */}
            <div className="absolute -bottom-5 -left-4 hidden sm:flex flex-col gap-0.5 rounded-2xl border border-amber-100 bg-white px-4 py-3 shadow-xl shadow-amber-50">
              <span className="font-main text-xl font-extrabold text-[#F59E0B]">↑ 34%</span>
              <span className="font-body text-[11px] font-medium text-[#1F2937]/50">Output this month</span>
            </div>

            {/* Blur orbs */}
            <div aria-hidden="true" className="absolute -bottom-8 -left-8 -z-10 h-56 w-56 rounded-full bg-[#F59E0B]/15 blur-3xl" />
            <div aria-hidden="true" className="absolute -top-8 -right-8 -z-10 h-48 w-48 rounded-full bg-[#10B981]/15 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
