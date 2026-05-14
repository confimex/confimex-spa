import { useState } from "react";

import productividadImg from "@/assets/productividad.jpg";
import ahorroTelaImg from "@/assets/ahorro-tela.jpg";
import escaladoTallasImg from "@/assets/escalado-tallas.jpg";
import produccionRapidaImg from "@/assets/produccion-rapida.jpg";
import patronesSegurosImg from "@/assets/patrones-seguros.jpg";
import retornoInversionImg from "@/assets/retorno-inversion.jpg";

import trazoVideo from "@/assets/trazo.mp4";
import cortadoraVideo from "@/assets/cortadora.mp4";
import graduacionVideo from "@/assets/graduacion.mp4";
import ploteoVideo from "@/assets/ploteo.mp4";

const benefits = [
  {
    icon: "📐",
    title: "Graduación instantánea de tallas",
    description:
      "El patrón base se ajusta y se replica automáticamente en todas las tallas sin redibujar.",
    image: escaladoTallasImg,
    imageAlt: "Escalado de tallas en sistema CAD",
    proofVideo: graduacionVideo,
    proofLabel: "Demostración",
  },
  {
    icon: "⚡",
    title: "Menos desperdicio de tela",
    description:
      "Optimización automática del trazo para reducir desperdicio de material.",
    image: ahorroTelaImg,
    imageAlt: "Optimización de tela en confección",
    proofVideo: trazoVideo,
    proofLabel: "Ver comprobación",
  },
  {
    icon: "⏱️",
    title: "Producción más rápida",
    description:
      "El proceso de trazo y corte se acelera hasta un 60%.",
    image: produccionRapidaImg,
    imageAlt: "Producción digital optimizada",
    proofVideo: ploteoVideo,
    proofLabel: "Ver ploteo",
  },
  {
    icon: "🎯",
    title: "Precisión en corte",
    description:
      "Cortes exactos sin variación humana en producción.",
    image: productividadImg,
    imageAlt: "Precisión en corte industrial",
    proofVideo: cortadoraVideo,
    proofLabel: "Ver video",
  },
  {
    icon: "🔒",
    title: "Orden y control",
    description:
      "Gestión digital de patrones sin pérdida de información.",
    image: patronesSegurosImg,
    imageAlt: "Gestión digital de patrones",
  },
  {
    icon: "💰",
    title: "Retorno rápido de inversión",
    description:
      "Ahorro en materiales y tiempo que acelera la rentabilidad.",
    image: retornoInversionImg,
    imageAlt: "Rentabilidad en confección",
  },
];

export default function BenefitsSection() {
  const [openProof, setOpenProof] = useState<string | null>(null);

  return (
    <section id="beneficios" className="bg-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            ¿POR QUÉ PATRONAJE DIGITAL?
          </span>

          <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
            Mejora tu producción
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Optimiza tiempos, reduce desperdicio y mejora la precisión en tu taller.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg"
            >
              <img
                src={b.image}
                alt={b.imageAlt ?? b.title}
                loading="lazy"
                className="h-44 w-full object-cover"
              />

              <div className="flex flex-1 flex-col p-8">
                <h3 className="text-lg font-bold text-card-foreground">
                  {b.title}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {b.description}
                </p>

                {b.proofVideo && (
                  <button
                    type="button"
                    onClick={() => setOpenProof(b.proofVideo)}
                    className="mt-auto pt-4 self-start"
                  >
                    <span className="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition hover:brightness-110">
                      {b.proofLabel}
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {openProof && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setOpenProof(null)}
        >
          <div
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={openProof}
              controls
              autoPlay
              playsInline
              className="w-full max-h-[80vh] object-contain rounded-lg bg-black"
            />

            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setOpenProof(null)}
                className="mt-4 rounded-lg bg-brand px-6 py-3 font-bold text-black transition hover:brightness-110"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}