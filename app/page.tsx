import Header from "@/components/layout/header";
import HeroSection from "@/components/sections/herosection";
import AboutSection from "@/components/sections/aboutsection";
import MetricsSection from "@/components/sections/metricssection";
import CtaSection from "@/components/sections/ctasection";
import ContactSection from "@/components/sections/contactsection";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <main className="w-full relative">
        <Header />
        <HeroSection />
        <AboutSection />
        <MetricsSection />
        <CtaSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
