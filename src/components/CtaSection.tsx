import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

type Option = { label: string; level: 1 | 2 | 3 };
type Question = { q: string; options: Option[] };

const questions: Question[] = [
  {
    q: "1. En tu proceso de corte… ¿Cómo decides la distribución de los patrones?",
    options: [
      { label: "Acomodamos manualmente sobre la tela", level: 1 },
      { label: "Ya tenemos experiencia, pero no usamos sistema", level: 2 },
      { label: "Usamos software de trazo automático", level: 3 },
    ],
  },
  {
    q: "2. ¿Sabes exactamente cuánto desperdicio de tela tienes por corte?",
    options: [
      { label: "No lo medimos", level: 1 },
      { label: "Lo estimamos", level: 2 },
      { label: "Sí lo tenemos controlado", level: 3 },
    ],
  },
  {
    q: "3. Cuando necesitas responder a un pedido urgente…",
    options: [
      { label: "Nos tardamos en organizar producción", level: 1 },
      { label: "Dependemos del personal", level: 2 },
      { label: "Respondemos rápido sin problema", level: 3 },
    ],
  },
  {
    q: "4. ¿Qué tan seguido repites errores en producción?",
    options: [
      { label: "Frecuentemente", level: 1 },
      { label: "A veces", level: 2 },
      { label: "Casi nunca", level: 3 },
    ],
  },
  {
    q: "5. ¿Tus patrones están digitalizados?",
    options: [
      { label: "No, todo es en cartón", level: 1 },
      { label: "Algunos", level: 2 },
      { label: "Sí, completamente", level: 3 },
    ],
  },
  {
    q: "6. ¿Tienes control real del consumo de tela por modelo?",
    options: [
      { label: "No", level: 1 },
      { label: "Parcial", level: 2 },
      { label: "Sí", level: 3 },
    ],
  },
  {
    q: "7. Si hoy tu producción aumentara 30%…",
    options: [
      { label: "No podríamos manejarlo", level: 1 },
      { label: "Nos costaría trabajo", level: 2 },
      { label: "Estamos listos", level: 3 },
    ],
  },
  {
    q: "8. ¿Te gustaría saber exactamente cuánto dinero estás perdiendo hoy en tu proceso?",
    options: [
      { label: "Sí, me interesa", level: 1 },
      { label: "Tal vez", level: 2 },
      { label: "No", level: 3 },
    ],
  },
];

function getResult(answers: (1 | 2 | 3)[]) {
  const counts = { 1: 0, 2: 0, 3: 0 } as Record<1 | 2 | 3, number>;
  answers.forEach((a) => counts[a]++);
  const max = Math.max(counts[1], counts[2], counts[3]);
  if (counts[1] === max) {
    return {
      title: "Resultado",
      message:
        "Tu planta está perdiendo dinero todos los días sin que lo estés viendo.",
      tone: "alto",
    };
  }
  if (counts[2] === max) {
    return {
      title: "Resultado",
      message:
        "Tienes áreas importantes de mejora que están limitando tu crecimiento.",
      tone: "medio",
    };
  }
  return {
    title: "Resultado",
    message:
      "Tu operación está bien estructurada, pero aún puedes optimizar costos y productividad.",
    tone: "bajo",
  };
}

export default function CtaSection() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<((1 | 2 | 3) | null)[]>(
    Array(questions.length).fill(null),
  );

  const reset = () => {
    setStep(0);
    setAnswers(Array(questions.length).fill(null));
  };

  const close = () => {
    setOpen(false);
    setTimeout(reset, 200);
  };

  const handleAnswer = (level: 1 | 2 | 3) => {
    const next = [...answers];
    next[step] = level;
    setAnswers(next);
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length); // results
    }
  };

  const isResults = step === questions.length && answers.every((a) => a !== null);
  const result = isResults ? getResult(answers as (1 | 2 | 3)[]) : null;
  const current = step < questions.length ? questions[step] : null;
  const progress = Math.round(
    (answers.filter((a) => a !== null).length / questions.length) * 100,
  );

  return (
    <section id="contacto" className="relative overflow-hidden bg-navy py-24">
      <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-extrabold text-navy-foreground sm:text-4xl lg:text-5xl">
          ¿Quieres saber <span className="text-brand">cuánto estás perdiendo hoy?</span>
        </h2>
        <p className="mt-6 text-lg text-navy-foreground/70">
          Un especialista de CONFIMÉX visitará tu taller en CDMX, analizará tu proceso actual y
          te mostrará cuánto puedes ahorrar con patronaje digital. Sin compromiso, te comprobamos 3 acciones donde tienes fuga de dinero.
        </p>

        <div className="mt-8 flex flex-col items-center gap-5">
          <button
            type="button"
            onClick={() => {
              reset();
              setOpen(true);
            }}
            className="inline-flex items-center gap-3 rounded-xl bg-brand px-10 py-5 text-xl font-bold text-brand-foreground shadow-xl transition hover:brightness-110 hover:scale-105"
          >
            Conoce en este momento tú situación
          </button>
          <a
            href="mailto:ventas@confimex.mx"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-navy-foreground/30 px-10 py-4 text-lg font-semibold text-navy-foreground transition hover:bg-navy-foreground/10"
          >
            ✉️ ventas@confimex.mx
          </a>
        </div>

        <p className="mt-6 text-sm text-navy-foreground/40">
          Respondemos en menos de 2 horas en horario laboral
        </p>
      </div>

      <Dialog open={open} onOpenChange={(o) => (o ? setOpen(true) : close())}>
        <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-auto bg-background">
          <DialogTitle className="text-xl font-bold text-foreground">
            {isResults ? "Tu diagnóstico" : "Diagnóstico rápido de tu taller"}
          </DialogTitle>
          <DialogDescription>
            {isResults
              ? "Esto es lo que indican tus respuestas."
              : "Responde 8 preguntas cortas. Toma menos de 2 minutos."}
          </DialogDescription>

          {!isResults && current && (
            <div className="mt-2">
              <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-brand transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Pregunta {step + 1} de {questions.length}
              </p>
              <h3 className="mb-5 text-lg font-semibold text-foreground">{current.q}</h3>
              <div className="flex flex-col gap-3">
                {current.options.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => handleAnswer(opt.level)}
                    className="rounded-lg border border-border bg-card px-4 py-3 text-left text-sm text-card-foreground transition hover:border-brand hover:bg-brand/5"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="mt-4 text-sm text-muted-foreground underline-offset-4 hover:underline"
                >
                  ← Pregunta anterior
                </button>
              )}
            </div>
          )}

          {isResults && result && (
            <div className="mt-2">
              <div className="rounded-xl border border-brand/30 bg-brand/5 p-6">
                <p className="text-base font-medium text-foreground">{result.message}</p>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-card-foreground transition hover:bg-muted"
                >
                  Volver a contestar
                </button>
                <a
                  href="https://wa.me/525512895572?text=Hola%2C%20acabo%20de%20hacer%20el%20diagn%C3%B3stico%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground shadow-sm transition hover:brightness-110"
                >
                  Quiero hablar con un especialista
                </a>
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={close}
            className="mt-4 inline-flex items-center justify-center self-center rounded-lg bg-muted px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted/70"
          >
            Cerrar y volver
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
}
