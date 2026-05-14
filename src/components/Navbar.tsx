import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo_confimex.png";

const WA_LINK = "https://wa.me/525512895572?text=Hola%2C%20quiero%20mi%20diagn%C3%B3stico%20GRATIS";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-40 w-full border-b border-navy-foreground/10 bg-navy/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/"><img src={logo} alt="CONFIMÉX" className="h-32" /></Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/servicios" className="text-sm font-medium text-navy-foreground/70 transition hover:text-brand" activeProps={{ className: "text-sm font-medium text-brand" }}>Servicios</Link>
          <Link to="/quienes-somos" className="text-sm font-medium text-navy-foreground/70 transition hover:text-brand" activeProps={{ className: "text-sm font-medium text-brand" }}>Quiénes somos</Link>
          <Link to="/testimonios" className="text-sm font-medium text-navy-foreground/70 transition hover:text-brand" activeProps={{ className: "text-sm font-medium text-brand" }}>Testimonios</Link>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground transition hover:brightness-110"
          >
            Diagnóstico GRATIS
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-navy-foreground" aria-label="Menú">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-navy-foreground/10 bg-navy px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/servicios" onClick={() => setOpen(false)} className="text-navy-foreground/70 hover:text-brand">Servicios</Link>
            <Link to="/quienes-somos" onClick={() => setOpen(false)} className="text-navy-foreground/70 hover:text-brand">Quiénes somos</Link>
            <Link to="/testimonios" onClick={() => setOpen(false)} className="text-navy-foreground/70 hover:text-brand">Testimonios</Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-lg bg-brand px-5 py-3 text-center font-bold text-brand-foreground"
            >
              Diagnóstico GRATIS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
