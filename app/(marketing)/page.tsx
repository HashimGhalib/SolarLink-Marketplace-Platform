/**
 * page.tsx (or your root landing page)
 * Compose all sections in order below your Navbar.
 */

import Hero from "@/components/landing_page/Hero";
import AboutSection from "@/components/landing_page/AboutSection";
import HowItWorksSection from "@/components/landing_page/HowItWorksSection";
import WhoWeServeSection from "@/components/landing_page/WhoWeServeSection";
import TestimonialsSection from "@/components/landing_page/TestimonialsSection";
import CTASection from "@/components/landing_page/CTASection";
import Footer from "@/components/landing_page/Footer";
import { Navbar } from "@/components/shared/Navbar";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <HowItWorksSection />
        <WhoWeServeSection />
        <TestimonialsSection />
        <CTASection />
      </main >
      <Footer />
    </>
  );
}
