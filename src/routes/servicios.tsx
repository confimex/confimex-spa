import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BenefitsSection from "@/components/BenefitsSection";
import CtaSection from "@/components/CtaSection";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — CONFIMÉX | Patronaje Digital en CDMX" },
      { name: "description", content: "Conoce los servicios de patronaje digital, escalado y optimización de producción que ofrecemos a talleres de confección en CDMX." },
      { property: "og:title", content: "Servicios — CONFIMÉX" },
      { property: "og:description", content: "Patronaje digital, escalado y optimización para talleres de confección." },
    ],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Nuestros Servicios</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Soluciones de Patronaje y Trazo automático, optimiza tu producción con tecnología diseñada para reducir desperdicios, mejorar tiempos y aumentar la productividad de tu planta de confección.
          </p>
        </section>
        <BenefitsSection />
        <CtaSection />
      </main>
      <FooterSection />
      <FloatingWhatsApp />
    </>
  );
}
