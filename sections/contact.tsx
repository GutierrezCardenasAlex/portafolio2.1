import { Code2, LinkIcon, Mail, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { contactLinks } from "@/data/contact";
import { SlideUp } from "@/components/animations/motion-primitives";

const icons = { Email: Mail, GitHub: Code2, LinkedIn: LinkIcon, WhatsApp: MessageCircle };

export function Contact() {
  return (
    <section id="contacto" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <SlideUp>
          <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-[#111827] px-6 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:px-10 sm:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_34rem)]" aria-hidden />
            <div className="relative">
            <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/8 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              Disponible para proyectos freelance y colaboraciones
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">¿Tienes una idea? Construyámosla.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Cuéntame qué necesitas y transformemos tu idea en una solución digital.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="mailto:YOUR_EMAIL">Iniciar proyecto <Send size={18} aria-hidden /></ButtonLink>
              <ButtonLink href="https://wa.me/YOUR_WHATSAPP" variant="secondary">WhatsApp <MessageCircle size={18} aria-hidden /></ButtonLink>
            </div>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              {contactLinks.map((link) => {
                const Icon = icons[link.label as keyof typeof icons];
                return (
                  <Link key={link.label} href={link.href} className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-300/60 hover:text-white">
                    <Icon size={16} aria-hidden />
                    {link.label}
                  </Link>
                );
              })}
            </div>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
