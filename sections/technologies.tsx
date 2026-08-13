import { technologies } from "@/data/technologies";
import { SectionHeading } from "@/components/ui/section-heading";
import { SlideUp } from "@/components/animations/motion-primitives";

const marqueeItems = ["Flutter", "React", "Node.js", "PostgreSQL", "Docker", "Next.js", "MapLibre", "TypeScript"];

export function Technologies() {
  return (
    <section id="tecnologias" className="overflow-hidden py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Stack" title="Mi Stack" description="Tecnologías que utilizo para convertir ideas en productos rápidos, escalables y mantenibles." />

        <div className="relative mt-10 overflow-hidden border-y border-slate-800 py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#070B14] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#070B14] to-transparent" />
          <div className="flex w-max animate-[axis-marquee_34s_linear_infinite] gap-8 motion-reduce:animate-none">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`} className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((group, index) => (
            <SlideUp key={group.category} delay={index * 0.04} className="rounded-2xl border border-slate-800 bg-[#111827] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <div className="flex items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <h3 className="text-lg font-semibold text-white">{group.category}</h3>
                <span className="h-px w-10 bg-gradient-to-r from-blue-500 to-cyan-300" aria-hidden />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-full border border-slate-800 bg-[#0D1424] px-3 py-2 text-sm text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
