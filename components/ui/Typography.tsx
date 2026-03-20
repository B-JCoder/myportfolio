import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export function Heading({
  children,
  className = "",
  as: Component = "h2",
}: TypographyProps) {
  const styles = {
    h1: "text-5xl md:text-8xl mb-6",
    h2: "text-4xl md:text-6xl mb-4",
    h3: "text-3xl md:text-4xl mb-3",
    h4: "text-2xl md:text-3xl mb-2",
    h5: "text-xl md:text-2xl mb-2",
    h6: "text-lg md:text-xl mb-1",
    p: "",
    span: "",
  };

  return (
    <Component
      className={`font-heading ${styles[Component as keyof typeof styles] || ""} ${className}`}
    >
      {children}
    </Component>
  );
}

export function Text({
  children,
  className = "",
  as: Component = "p",
}: TypographyProps) {
  return (
    <Component
      className={`font-sans leading-relaxed text-white/80 ${className}`}
    >
      {children}
    </Component>
  );
}
