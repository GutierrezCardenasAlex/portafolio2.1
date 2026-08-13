"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Inicio", href: "#inicio", id: "inicio" },
  { label: "Sobre mí", href: "#sobre-mi", id: "sobre-mi" },
  { label: "Servicios", href: "#servicios", id: "servicios" },
  { label: "Proyectos", href: "#proyectos", id: "proyectos" },
  { label: "Stack", href: "#tecnologias", id: "tecnologias" },
  { label: "Contacto", href: "#contacto", id: "contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-22% 0px -58% 0px", threshold: [0.12, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 transition sm:px-5">
      <nav
        className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl px-3 transition duration-300 sm:px-4 lg:px-5 ${
          scrolled
            ? "border border-slate-800/90 bg-[#070B14]/82 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            : "border border-transparent bg-[#070B14]/10"
        }`}
        aria-label="Principal"
      >
        <Link href="#inicio" className="flex items-center gap-3 font-semibold text-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
          <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl border border-blue-500/40 bg-blue-600/15 text-sm text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <span className="absolute h-8 w-px rotate-45 bg-cyan-300/30" aria-hidden />
            <span className="absolute h-8 w-px -rotate-45 bg-blue-400/25" aria-hidden />
            AX
          </span>
          <span>AxisSoft Dev</span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-slate-800/80 bg-slate-950/30 p-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-3.5 py-2 text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${
                active === link.id ? "bg-slate-800/70 text-white" : "text-slate-400 hover:text-white"
              }`}
              aria-current={active === link.id ? "page" : undefined}
            >
              {link.label}
              <span
                className={`absolute inset-x-4 -bottom-1 h-px rounded-full bg-cyan-300 transition ${
                  active === link.id ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden
              />
            </Link>
          ))}
        </div>

        <Link href="#contacto" className="hidden rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.26)] transition hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 lg:inline-flex">
          Hablemos
        </Link>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-xl border border-slate-700 bg-slate-950/40 text-slate-100 lg:hidden"
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-slate-800 bg-[#070B14]/94 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-3 text-sm font-medium transition ${
                  active === link.id ? "bg-slate-800 text-white" : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contacto" onClick={() => setOpen(false)} className="mt-2 rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white">
              Hablemos
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
