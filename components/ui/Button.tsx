import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type Variant = "accent" | "dark" | "outline" | "outline-light";

const variantClasses: Record<Variant, string> = {
  accent:
    "bg-clay text-cream hover:bg-clay-dark active:bg-clay-dark focus-visible:outline-clay",
  dark: "bg-ink text-cream hover:bg-forest active:bg-forest focus-visible:outline-ink",
  outline:
    "border border-ink/25 text-ink hover:border-ink active:bg-ink/5 focus-visible:outline-ink",
  "outline-light":
    "border border-cream/35 text-cream hover:border-cream active:bg-cream/10 focus-visible:outline-cream",
};

const baseClasses =
  "group inline-flex touch-manipulation select-none items-center justify-center gap-2.5 rounded-sm px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type ButtonAsButton = CommonProps & {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

function isLink(props: ButtonProps): props is ButtonAsLink {
  return "href" in props;
}

function Arrow() {
  return (
    <ArrowRight
      className="h-3.5 w-3.5 shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
      strokeWidth={2}
    />
  );
}

export function Button(props: ButtonProps) {
  const { children, variant = "accent", className = "", arrow = true } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (isLink(props)) {
    return (
      <Link href={props.href} target={props.target} rel={props.rel} className={classes}>
        {children}
        {arrow ? <Arrow /> : null}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      disabled={props.disabled}
      onClick={props.onClick}
      className={classes}
    >
      {children}
      {arrow ? <Arrow /> : null}
    </button>
  );
}
