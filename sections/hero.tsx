"use client";

import { ArrowRight, Boxes, Code2, Container, Database, Send, Smartphone } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { SlideUp } from "@/components/animations/motion-primitives";
import { HeroArchitecture } from "./hero-architecture";

const badges = [
  { label: "Flutter", icon: Smartphone },
  { label: "React", icon: Code2 },
  { label: "Node.js", icon: Boxes },
  { label: "PostgreSQL", icon: Database },
  { label: "Docker", icon: Container },
];

export function Hero() {
  const [halo, setHalo] = useState({ x: 68, y: 36 });

  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden pt-28 sm:pt-32"
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setHalo({
          x: ((event.clientX - rect.left) / rect.width) * 100,
          y: ((event.clientY - rect.top) / rect.height) * 100,
        });
      }}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(37,99,235,0.20),transparent_30rem),radial-gradient(circle_at_82%_18%,rgba(34,211,238,0.11),transparent_24rem)]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 hidden opacity-70 transition-[background] duration-300 [@media(pointer:fine)]:block"
        style={{
          background: `radial-gradient(circle at ${halo.x}% ${halo.y}%, rgba(59,130,246,0.13), transparent 18rem)`,
        }}
      />
      <div className="absolute left-1/2 top-28 -z-10 h-px w-[min(78rem,90vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 pb-20 sm:px-6 lg:grid-cols-[1.03fr_0.97fr] lg:px-8">
        <div className="max-w-[680px]">
          <SlideUp>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3.5 py-2 text-sm font-medium text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
              <span className="relative flex size-2.5" aria-hidden>
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-300 opacity-40" />
                <span className="relative inline-flex size-2.5 rounded-full bg-cyan-300" />
              </span>
              Disponible para nuevos proyectos
            </span>
          </SlideUp>
          <SlideUp delay={0.08}>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Construyo{" "}
              <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-300 bg-clip-text text-transparent">
                software
              </span>{" "}
              que transforma ideas en{" "}
              <span className="bg-gradient-to-r from-cyan-200 to-blue-400 bg-clip-text text-transparent">
                productos digitales.
              </span>
            </h1>
          </SlideUp>
          <SlideUp delay={0.16}>
            <p className="mt-6 max-w-[620px] text-base leading-8 text-slate-300 sm:text-lg">
              Desarrollo aplicaciones móviles, plataformas web, APIs y sistemas personalizados enfocados en rendimiento, escalabilidad y una excelente experiencia de usuario.
            </p>
          </SlideUp>
          <SlideUp delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#proyectos">Ver proyectos <ArrowRight className="transition group-hover:translate-x-1" size={18} aria-hidden /></ButtonLink>
              <ButtonLink href="#contacto" variant="secondary">Contactarme <Send size={18} aria-hidden /></ButtonLink>
            </div>
          </SlideUp>
          <SlideUp delay={0.32}>
            <div className="mt-8 flex flex-wrap gap-3">
              {badges.map(({ label, icon: Icon }) => (
                <span key={label} className="group inline-flex items-center gap-2 rounded-full border border-slate-700/90 bg-slate-950/45 px-3 py-2 text-sm text-slate-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-cyan-300/40 hover:text-white hover:shadow-[0_0_28px_rgba(34,211,238,0.08)]">
                  <Icon className="text-cyan-300/80 transition group-hover:text-cyan-200" size={15} aria-hidden />
                  {label}
                </span>
              ))}
            </div>
          </SlideUp>
        </div>
        <SlideUp delay={0.18}>
          <HeroArchitecture />
        </SlideUp>
      </div>
    </section>
  );
}
