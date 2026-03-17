import React from "react";
import { cn } from "@/lib/utils";

type ScrollRevealVariant = "fade-up" | "scale-in" | "slide-left" | "slide-right";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  yOffset?: number;
  durationMs?: number;
  threshold?: number;
  once?: boolean;
  variant?: ScrollRevealVariant;
  staggerChildren?: boolean;
  staggerStepMs?: number;
  childDistance?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
}) => {
  return (
    <div
      data-reveal-visible="true"
      data-reveal-stagger="false"
      className={cn(className)}
    >
      {children}
    </div>
  );
};
