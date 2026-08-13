"use client";

import { Code2, Database, Lightbulb, MapPinned, Rocket, ServerCog, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const nodes = [
  { label: "IDEA", icon: Lightbulb, className: "left-1/2 top-[6%] -translate-x-1/2" },
  { label: "CODE", icon: Code2, className: "left-1/2 top-[25%] -translate-x-1/2" },
  { label: "API", icon: ServerCog, className: "left-[19%] top-[45%] -translate-x-1/2" },
  { label: "MOBILE", icon: Smartphone, className: "left-[81%] top-[45%] -translate-x-1/2" },
  { label: "DATABASE", icon: Database, className: "left-[22%] top-[66%] -translate-x-1/2" },
  { label: "MAPS", icon: MapPinned, className: "left-[78%] top-[66%] -translate-x-1/2" },
  { label: "PRODUCT", icon: Rocket, className: "left-1/2 top-[84%] -translate-x-1/2" },
];

const paths = [
  "M215 63 V124",
  "M215 170 L110 218",
  "M215 170 L320 218",
  "M110 264 L116 315",
  "M320 264 L314 315",
  "M116 360 L215 402",
  "M314 360 L215 402",
];

export function HeroArchitecture() {
  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[460px] overflow-hidden rounded-3xl border border-slate-800/90 bg-[#0D1424]/92 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_74%_64%,rgba(34,211,238,0.10),transparent_30%)]" />
      <div className="absolute inset-6 rounded-[1.25rem] border border-slate-800/70" aria-hidden />
      <div className="absolute left-8 top-8 h-10 w-10 border-l border-t border-cyan-300/30" aria-hidden />
      <div className="absolute bottom-8 right-8 h-10 w-10 border-b border-r border-blue-400/30" aria-hidden />

      <svg viewBox="0 0 430 430" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="axisLine" x1="0" x2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        {paths.map((path) => (
          <path key={path} d={path} stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
        ))}
        {paths.map((path, index) => (
          <motion.path
            key={`${path}-active`}
            d={path}
            stroke="url(#axisLine)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeDasharray="14 24"
            className="motion-reduce:hidden"
            initial={false}
            animate={{ strokeDashoffset: [-20, -96], opacity: [0.28, 0.74, 0.28] }}
            transition={{ duration: 3.6 + index * 0.16, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>

      <div className="relative h-full">
        {nodes.map(({ label, icon: Icon, className }, index) => (
          <motion.div
            key={label}
            className={`absolute ${className}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <div className="group flex min-w-28 items-center gap-2 rounded-2xl border border-slate-700/80 bg-[#111827]/95 px-3 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:border-cyan-300/50">
              <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-blue-600/15 text-cyan-200">
                <Icon size={17} aria-hidden />
              </span>
              <span className="text-xs font-bold text-slate-100">{label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.span
        className="absolute left-1/2 top-[29%] size-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.7)] motion-reduce:hidden"
        animate={{ x: [0, -104, -99], y: [0, 48, 98], opacity: [0, 1, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.span
        className="absolute left-1/2 top-[29%] size-2 rounded-full bg-blue-300 shadow-[0_0_20px_rgba(59,130,246,0.7)] motion-reduce:hidden"
        animate={{ x: [0, 104, 99], y: [0, 48, 98], opacity: [0, 1, 0] }}
        transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        aria-hidden
      />
    </div>
  );
}
