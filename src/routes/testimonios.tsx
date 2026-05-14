import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CtaSection from "@/components/CtaSection";

export const Route = createFileRoute("/testimonios")({
  head: () => ({
    meta: [
      { title: "Testimonios — CONFIMÉX" },
      { name: "description", content: "Talleres de confección en CDMX comparten cómo CONFIMÉX les ayudó a ahorrar tela y mejorar su producción." },
      { property: "og:title", content: "Testimonios — CONFIMÉX" },
      { property: "og:description", content: "Resultados reales de talleres que digitalizaron su patronaje con CONFIMÉX." },
    ],
  }),
  component: TestimoniosPage,
});

const testimonios = [
  {
    nombre: "María G.",
    taller: "Taller Iztapalapa",
    texto: "En solo tres meses logramos reducir casi un 30% el desperdicio de tela. El respaldo y acompañamiento de CONFIMÉX hicieron toda la diferencia.",
  },
  {
    nombre: "Jorge R.",
    taller: "Confecciones del Valle",
    texto: "Optimizar la Graduación automática nos permitió reducir tiempos de trabajo drásticamente y aumentar nuestra capacidad de producción sin contratar más personal.",
  },
  {
    nombre: "Lucía M.",
    taller: "Moda CDMX",
    texto: "CONFIMÉX nos mostró con claridad dónde se generaban las pérdidas. Hoy producimos con más control, menos desperdicio y mejores resultados.",
  },
  {
    nombre: "Guadalupe M.",
    taller: "Uniformes Naroll",
    texto: "El acompañamiento de CONFIMÉX fue fundamental. Saber que siempre contaríamos con soporte y asesoría hizo que el proceso de aprendizaje y transición fuera mucho más sencillo.",
  },
];

function TestimoniosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="mx-auto max-w-6xl px-6 py-12">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">Testimonios</h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Lo que dicen los talleres que ya trabajan con CONFIMÉX.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonios.map((t) => (
              <div key={t.nombre} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <p className="text-card-foreground">"{t.texto}"</p>
                <div className="mt-4">
                  <p className="font-bold text-foreground">{t.nombre}</p>
                  <p className="text-sm text-muted-foreground">{t.taller}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <CtaSection />
      </main>
      <FooterSection />
      <FloatingWhatsApp />
    </>
  );
}
