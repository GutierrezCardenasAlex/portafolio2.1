import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Navigation, RadioTower } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/section-heading";
import { SlideUp } from "@/components/animations/motion-primitives";

export function Projects() {
  const [mainProject, ...secondaryProjects] = projects;

  return (
    <section id="proyectos" className="bg-[#0D1424]/82 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Proyectos" title="Productos, mapas y sistemas que resuelven procesos reales" description="Una selección de productos web, mobile, empresariales y GIS construidos con arquitectura Full Stack." />

        <SlideUp className="mt-12">
          <article className="group grid overflow-hidden rounded-3xl border border-blue-500/25 bg-[#111827] shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[1.04fr_0.96fr]">
            <div className="relative min-h-[360px] overflow-hidden border-b border-slate-800 bg-slate-950 lg:border-b-0 lg:border-r">
              <Image src={mainProject.image} alt={`Mockup visual de ${mainProject.title}`} fill priority sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
              <div className="absolute left-5 top-5 flex flex-wrap gap-2">
                {["REAL-TIME", "GPS", "MOBILE", "MAPS"].map((tag) => (
                  <span key={tag} className="rounded-full border border-cyan-300/25 bg-[#070B14]/70 px-3 py-1.5 text-xs font-semibold text-cyan-100 backdrop-blur">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-300/25 bg-cyan-300/8 px-3 py-1.5 text-xs font-semibold text-cyan-200">{mainProject.category}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/55 px-3 py-1.5 text-xs text-slate-300">
                  <RadioTower size={13} aria-hidden /> {mainProject.status}
                </span>
              </div>
              <h3 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">{mainProject.title}</h3>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{mainProject.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {mainProject.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-slate-700 bg-slate-950/35 px-3 py-1.5 text-xs text-slate-300">
                    {technology}
                  </span>
                ))}
              </div>
              <ul className="mt-7 grid gap-2 sm:grid-cols-2">
                {mainProject.features.slice(0, 8).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={16} aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-blue-500">
                  Ver caso <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={17} aria-hidden />
                </Link>
                <Link href="#contacto" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/50 hover:bg-slate-950/35">
                  Crear algo similar <Navigation size={17} aria-hidden />
                </Link>
              </div>
            </div>
          </article>
        </SlideUp>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {secondaryProjects.map((project, index) => (
            <SlideUp key={project.id} delay={index * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-blue-500/45">
                <div className="relative min-h-[220px] overflow-hidden border-b border-slate-800 bg-slate-950">
                  <Image src={project.image} alt={`Placeholder visual de ${project.title}`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.02]" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full border border-cyan-300/25 bg-cyan-300/8 px-3 py-1.5 text-xs font-semibold text-cyan-200">{project.category}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-slate-700 px-2.5 py-1.5 text-xs text-slate-300">
                        {technology}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-6 grid gap-2">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-slate-300">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={16} aria-hidden />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/projects" className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-cyan-200 transition group-hover:text-cyan-100">
                    Ver detalle <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={16} aria-hidden />
                  </Link>
                </div>
              </article>
            </SlideUp>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:bg-slate-900">
            Explorar todos los proyectos <ArrowUpRight size={17} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
