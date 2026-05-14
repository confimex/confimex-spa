import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import BenefitsSection from "./components/BenefitsSection";
import ObjectionsSection from "./components/ObjectionsSection";
import CtaSection from "./components/CtaSection";
import FooterSection from "./components/FooterSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <BenefitsSection />
        <ObjectionsSection />
        <CtaSection />
      </main>

      <FooterSection />
      <FloatingWhatsApp />
    </>
  );
}