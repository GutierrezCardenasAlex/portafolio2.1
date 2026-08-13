"use client";

import { aboutStats } from "@/data/about";
import { SlideUp, StaggerContainer, staggerItem } from "@/components/animations/motion-primitives";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="sobre-mi" className="relative bg-[#0D1424]/82 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <SlideUp>
            <div>
              <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Build • Ship • Scale
              </p>
              <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
                Transformando problemas en soluciones digitales
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                AxisSoft Dev se enfoca en crear productos reales: aplicaciones, sistemas y plataformas que resuelven procesos concretos con una base técnica preparada para crecer.
              </p>
              <p className="mt-5 max-w-2xl leading-8 text-slate-400">
                Trabajo desde la idea hasta el lanzamiento, combinando frontend, mobile, backend, bases de datos y geolocalización para convertir necesidades complejas en experiencias claras, rápidas y mantenibles.
              </p>
            </div>
          </SlideUp>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {aboutStats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="relative overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <span className="absolute right-4 top-4 h-8 w-8 border-r border-t border-blue-400/25" aria-hidden />
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
