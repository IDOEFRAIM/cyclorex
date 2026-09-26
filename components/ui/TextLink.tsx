import Link from "next/link";
import { ArrowRight } from "lucide-react";

const sizeClasses = {
  sm: "text-sm gap-2",
  lg: "text-2xl sm:text-3xl gap-4",
};

export function TextLink({
  href,
  children,
  className = "",
  dark = false,
  size = "sm",
}: {
  href: string;
  children: string;
  className?: string;
  dark?: boolean;
  size?: keyof typeof sizeClasses;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center font-medium ${sizeClasses[size]} ${
        dark ? "text-cream" : "text-ink"
      } ${className}`}
    >
      <span className="relative">
        {children}
        <span
          className={`absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-0 ${
            dark ? "bg-cream/40" : "bg-ink/30"
          }`}
        />
        <span className="absolute -bottom-0.5 right-0 h-px w-full origin-right scale-x-0 bg-clay transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
      </span>
      <ArrowRight
        className={`shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1 ${
          size === "lg" ? "h-6 w-6" : "h-3.5 w-3.5"
        }`}
        strokeWidth={size === "lg" ? 1.5 : 2}
      />
    </Link>
  );
}
