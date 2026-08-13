import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ children, className = "", variant = "primary", ...props }: ButtonLinkProps) {
  const base =
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300";
  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white shadow-[0_14px_40px_rgba(37,99,235,0.28)] hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_18px_50px_rgba(37,99,235,0.34)]"
      : "border border-slate-700 bg-slate-950/30 text-slate-100 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-slate-900/80";

  return (
    <Link className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </Link>
  );
}
