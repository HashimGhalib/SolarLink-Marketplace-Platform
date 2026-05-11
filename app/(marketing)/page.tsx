/**
 * page.tsx (or your root landing page)
 * Compose all sections in order below your Navbar.
 */

import Hero from "@/components/shared/Hero";
import AboutSection from "@/components/shared/AboutSection";
import HowItWorksSection from "@/components/shared/HowItWorksSection";
import WhoWeServeSection from "@/components/shared/WhoWeServeSection";
import TestimonialsSection from "@/components/shared/TestimonialsSection";
import CTASection from "@/components/shared/CTASection";
import Footer from "@/components/shared/Footer";

export default function LandingPage() {
  return (
    <>
      <main>
        <Hero />
        <AboutSection />
        <HowItWorksSection />
        <WhoWeServeSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
