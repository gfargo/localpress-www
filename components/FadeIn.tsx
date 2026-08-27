"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  /** Delay in ms before animation starts after entering viewport */
  delay?: number;
  /** Direction to fade from: up (default), down, left, right, none (opacity only) */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** Custom className to apply to the wrapper */
  className?: string;
  /** How far the element travels in px (default 24) */
  distance?: number;
  /** IntersectionObserver threshold (default 0.1) */
  threshold?: number;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  distance = 24,
  threshold = 0.1,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion / missing IO: reveal immediately.
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    // If the element is already within the viewport on mount, reveal right away.
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);

    // Safety net: never leave content stuck at opacity 0.
    const fallback = window.setTimeout(() => setIsVisible(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [threshold]);

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "none" : translateMap[direction],
        transition: `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

/**
 * Stagger multiple children with incremental delays.
 * Wrap each child in a FadeIn with increasing delay.
 */
export function StaggerChildren({
  children,
  staggerMs = 100,
  direction = "up",
  baseDelay = 0,
  className = "",
}: {
  children: ReactNode[];
  staggerMs?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  baseDelay?: number;
  className?: string;
}) {
  return (
    <>
      {children.map((child, i) => (
        <FadeIn
          key={i}
          delay={baseDelay + i * staggerMs}
          direction={direction}
          className={className}
        >
          {child}
        </FadeIn>
      ))}
    </>
  );
}
