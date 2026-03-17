import React, { useEffect, useRef, useState } from "react";
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

const getHiddenTransform = (variant: ScrollRevealVariant, yOffset: number) => {
  switch (variant) {
    case "scale-in":
      return `translate3d(0, ${Math.max(12, yOffset / 2)}px, 0) scale(0.94)`;
    case "slide-left":
      return `translate3d(${-Math.max(18, yOffset)}px, ${Math.max(8, yOffset / 4)}px, 0)`;
    case "slide-right":
      return `translate3d(${Math.max(18, yOffset)}px, ${Math.max(8, yOffset / 4)}px, 0)`;
    case "fade-up":
    default:
      return `translate3d(0, ${yOffset}px, 0)`;
  }
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  delayMs = 0,
  yOffset = 24,
  durationMs = 900,
  threshold = 0.16,
  once = true,
  variant = "fade-up",
  staggerChildren = false,
  staggerStepMs = 110,
  childDistance = 26,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal-visible={isVisible ? "true" : "false"}
      data-reveal-stagger={staggerChildren ? "true" : "false"}
      className={cn("will-change-transform", className)}
      style={{
        ["--reveal-delay" as string]: `${delayMs}ms`,
        ["--reveal-duration" as string]: `${durationMs}ms`,
        ["--stagger-step" as string]: `${staggerStepMs}ms`,
        ["--child-distance" as string]: `${childDistance}px`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : getHiddenTransform(variant, yOffset),
        transition: `opacity ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, transform ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms, filter ${durationMs}ms cubic-bezier(0.22, 1, 0.36, 1) ${delayMs}ms`,
        filter: isVisible ? "blur(0px)" : "blur(10px)",
      }}
    >
      {children}
    </div>
  );
};
