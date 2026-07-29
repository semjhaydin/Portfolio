import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificatesSection from "@/components/CertificatesSection";
import MotorsportSection from "@/components/MotorsportSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#080B10] text-slate-100 overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <MotorsportSection />
      <ContactSection />

      {/* Legal Cookie Banner */}
      <CookieConsent />

      {/* Footer */}
      <Footer />
    </main>
  );
}
