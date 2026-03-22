"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

/**
 * Outer ring + inner dot with spring follow. Desktop fine pointer only.
 */
export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const [hoverInteractive, setHoverInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const lx = useMotionValue(-100);
  const ly = useMotionValue(-100);
  const sx = useSpring(lx, { stiffness: 320, damping: 28, mass: 0.4 });
  const sy = useSpring(ly, { stiffness: 320, damping: 28, mass: 0.4 });

  const checkInteractive = useCallback((el: EventTarget | null) => {
    if (!(el instanceof Element)) return false;
    return !!el.closest(
      'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor-pointer]',
    );
  }, []);

  useEffect(() => {
    if (reduceMotion) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (!fine || coarse) return;

    let cancelled = false;
    const raf = requestAnimationFrame(() => {
      if (cancelled) return;
      setActive(true);
      document.documentElement.classList.add("custom-cursor-active");
    });

    const move = (e: MouseEvent) => {
      lx.set(e.clientX);
      ly.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      setHoverInteractive(checkInteractive(e.target));
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const leave = () => setHoverInteractive(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over, true);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.body.addEventListener("mouseleave", leave);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over, true);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.body.removeEventListener("mouseleave", leave);
    };
  }, [reduceMotion, lx, ly, checkInteractive]);

  if (!active || reduceMotion) return null;

  const scale = pressed ? 0.88 : hoverInteractive ? 1.25 : 1;
  const ringOpacity = hoverInteractive ? 0.9 : 0.55;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10001] h-10 w-10 -ml-5 -mt-5"
        style={{ left: sx, top: sy }}
        animate={{ scale }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      >
        <div
          className="h-full w-full rounded-full border-2 border-primary/90 bg-primary/[0.07] shadow-[0_2px_12px_rgba(74,222,128,0.2)] backdrop-blur-[2px]"
          style={{ opacity: ringOpacity }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[10002] h-1.5 w-1.5 -ml-[3px] -mt-[3px] rounded-full bg-primary shadow-[0_0_10px_rgba(74,222,128,0.85)]"
        style={{ left: sx, top: sy }}
        animate={{ scale: pressed ? 0.65 : hoverInteractive ? 0.45 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
      />
    </>
  );
}
