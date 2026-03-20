import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  variant?: "light" | "dark" | "asphalt";
  title?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  variant = "light",
  title,
  subtitle,
  centered = false,
}: SectionProps) {
  const variants = {
    light: "bg-off-white text-asphalt-900",
    dark: "bg-asphalt-900 text-white",
    asphalt: "bg-asphalt-800 text-white",
  };

  return (
    <section
      id={id}
      className={`py-20 md:py-32 ${variants[variant]} ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {(title || subtitle) && (
          <div className={`mb-16 ${centered ? "text-center mx-auto max-w-3xl" : ""}`}>
            {subtitle && (
              <span className="block font-heading font-black text-racing-red uppercase tracking-wider text-sm mb-4">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black tracking-tight mb-6">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
