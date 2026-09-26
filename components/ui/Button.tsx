import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "outline" | "outline-light";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-lime text-ink hover:bg-lime-dark active:bg-lime-dark focus-visible:outline-lime",
  secondary:
    "bg-forest text-cream hover:bg-forest-light active:bg-forest-light focus-visible:outline-forest",
  accent:
    "bg-clay text-cream hover:bg-clay-dark active:bg-clay-dark focus-visible:outline-clay",
  outline:
    "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/5 active:bg-ink/10 focus-visible:outline-ink",
  "outline-light":
    "border border-cream/40 text-cream hover:border-cream hover:bg-cream/10 active:bg-cream/15 focus-visible:outline-cream",
};

const baseClasses =
  "inline-flex touch-manipulation select-none items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 ease-out active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
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

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (isLink(props)) {
    return (
      <Link href={props.href} target={props.target} rel={props.rel} className={classes}>
        {children}
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
    </button>
  );
}
