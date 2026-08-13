"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/data/process";
import { SectionHeading } from "@/components/ui/section-heading";
import { SlideUp } from "@/components/animations/motion-primitives";

export function Process() {
  return (
    <section className="bg-[#0D1424]/82 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Proceso" title="De la idea al producto" description="Un flujo claro para convertir necesidades en software funcional y preparado para mejorar." />
        <div className="relative mt-14 grid gap-5 md:grid-cols-6">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-slate-800 md:block" aria-hidden />
          <motion.div
            className="absolute left-0 top-8 hidden h-px bg-gradient-to-r from-blue-600 to-cyan-300 md:block"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            aria-hidden
          />
          {processSteps.map((step, index) => (
            <SlideUp key={step} delay={index * 0.05} className="relative rounded-2xl border border-slate-800 bg-[#111827] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] md:min-h-36">
              <span className="grid size-10 place-items-center rounded-xl bg-blue-600 text-sm font-semibold text-white shadow-[0_0_26px_rgba(37,99,235,0.22)]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-base font-semibold text-white">{step}</h3>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
