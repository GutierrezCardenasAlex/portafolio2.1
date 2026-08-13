"use client";

import { Database, Globe2, MapPinned, PanelsTopLeft, ServerCog, Smartphone } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";
import { StaggerContainer, staggerItem } from "@/components/animations/motion-primitives";

const icons = { Globe2, Smartphone, ServerCog, Database, MapPinned, PanelsTopLeft };

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Servicios" title="Software para crear, operar y escalar" description="Soluciones Full Stack con enfoque en producto, rendimiento y mantenibilidad." />
        <StaggerContainer className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon as keyof typeof icons];
            return (
              <motion.article key={service.title} variants={staggerItem} className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500/55 hover:shadow-[0_18px_50px_rgba(37,99,235,0.12)]">
                <span className="absolute right-5 top-5 h-7 w-7 border-r border-t border-slate-700/80 transition group-hover:border-cyan-300/40" aria-hidden />
                <div className="grid size-12 place-items-center rounded-xl border border-blue-500/30 bg-blue-600/12 text-cyan-200 transition group-hover:-translate-y-0.5 group-hover:border-cyan-300/45">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-400">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.stack.map((item) => (
                    <span key={item} className="rounded-full border border-slate-800 bg-slate-950/40 px-2.5 py-1.5 text-xs text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
