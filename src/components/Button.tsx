import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-heading font-black uppercase tracking-widest transition-all duration-300 rounded-sm active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-racing-red text-white hover:bg-racing-red/90 hover:scale-105 shadow-lg shadow-racing-red/20",
    secondary: "bg-white text-asphalt-900 hover:bg-white/90 hover:scale-105",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-asphalt-900 hover:scale-105",
    gold: "bg-premium-gold text-white hover:bg-premium-gold/90 hover:scale-105 shadow-lg shadow-premium-gold/20",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-sm md:text-base",
    lg: "px-10 py-5 text-base md:text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
