import { useState } from "react";

type Option = { label: string; level: 1 | 2 | 3 };
type Question = { q: string; options: Option[] };

const questions: Question[] = [
  {
    q: "¿Cómo organizas el corte de patrones?",
    options: [
      { label: "Manual sobre la mesa", level: 1 },
      { label: "Con experiencia, sin sistema", level: 2 },
      { label: "Con software automático", level: 3 },
    ],
  },
  {
    q: "¿Controlas el desperdicio de tela?",
    options: [
      { label: "No lo medimos", level: 1 },
      { label: "Aproximado", level: 2 },
      { label: "Totalmente medido", level: 3 },
    ],
  },
  {
    q: "¿Qué tan rápido respondes pedidos urgentes?",
    options: [
      { label: "Lento / desorganizado", level: 1 },
      { label: "Regular", level: 2 },
      { label: "Rápido y controlado", level: 3 },
    ],
  },
];

function getResult(ans: (1 | 2 | 3)[]) {
  const c = { 1: 0, 2: 0, 3: 0 } as Record<1 | 2 | 3, number>;
  ans.forEach((a) => c[a]++);

  if (c[1] >= c[2] && c[1] >= c[3]) {
    return "Tu taller está perdiendo dinero sin control visible.";
  }

  if (c[2] >= c[1] && c[2] >= c[3]) {
    return "Tienes control medio, pero hay fugas importantes de eficiencia.";
  }

  return "Tienes buena operación, pero aún puedes optimizar costos.";
}

export default function CtaSection() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(1 | 2 | 3 | null)[]>(
    Array(questions.length).fill(null)
  );

  const reset = () => {
    setStep(0);
    setAnswers(Array(questions.length).fill(null));
  };

  const handleAnswer = (level: 1 | 2 | 3) => {
    const next = [...answers];
    next[step] = level;
    setAnswers(next);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(questions.length);
    }
  };

  const isDone =
    step === questions.length && answers.every((a) => a !== null);

  const result = isDone ? getResult(answers as (1 | 2 | 3)[]) : null;
  const current = step < questions.length ? questions[step] : null;

  return (
    <section className="py-24 flex flex-col items-center bg-gradient-to-b from-gray-950 to-black text-center">
      {/* BOTÓN PRINCIPAL */}
      <button
        onClick={() => {
          reset();
          setOpen(true);
        }}
        className="px-10 py-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-brand text-black font-bold text-lg shadow-xl hover:scale-105 transition"
      >
        Iniciar diagnóstico
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 z-50">
          <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 text-white">

            {/* PROGRESO */}
            <div className="h-2 bg-white/10 rounded-full mb-5 overflow-hidden">
              <div
                className="h-full bg-emerald-400 transition-all"
                style={{
                  width: `${(step / questions.length) * 100}%`,
                }}
              />
            </div>

            {/* PREGUNTA */}
            {!isDone && current && (
              <>
                <h2 className="text-xl font-semibold mb-6 leading-snug">
                  {current.q}
                </h2>

                <div className="space-y-3">
                  {current.options.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.level)}
                      className="w-full text-left p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-emerald-500/10 hover:border-emerald-400 transition"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>

                <p className="text-xs text-white/50 mt-5">
                  Pregunta {step + 1} de {questions.length}
                </p>
              </>
            )}

            {/* RESULTADO */}
            {isDone && result && (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4 text-emerald-400">
                  Diagnóstico listo
                </h2>

                <p className="text-white/80 bg-white/5 border border-white/10 p-5 rounded-xl">
                  {result}
                </p>

                <a
                  href="https://wa.me/525512895572"
                  target="_blank"
                  className="mt-6 inline-block px-6 py-3 rounded-xl bg-emerald-500 text-black font-bold hover:scale-105 transition"
                >
                  Hablar con especialista
                </a>
              </div>
            )}

            {/* CERRAR */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

