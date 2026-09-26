import { ReactNode } from "react";

const maxWidths = {
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  className = "",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: keyof typeof maxWidths;
}) {
  return (
    <div className={`mx-auto w-full px-5 sm:px-8 ${maxWidths[size]} ${className}`}>
      {children}
    </div>
  );
}
