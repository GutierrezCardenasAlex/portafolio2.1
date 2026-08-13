import Link from "next/link";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070B14]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="font-semibold text-white">AxisSoft Dev</p>
          <p className="mt-2 text-sm text-slate-400">Diseñando y desarrollando experiencias digitales.</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-400">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="text-sm text-slate-500 md:text-right">
          <p>© 2026 AxisSoft Dev.</p>
          <p className="mt-1">Built with Next.js + TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
