import type { Variants } from "framer-motion"

/** Shared cubic-bezier easing constants used across all animations */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const
export const EASE_IN_OUT = [0.36, 0, 0.66, -0.56] as const
export const EASE_SMOOTH = [0.65, 0, 0.35, 1] as const

/** Staggered fade-up animation variant */
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      delay,
      ease: EASE_OUT,
    },
  }),
}

/** Reveal animation (slides text up from below) */
export const revealVariants: Variants = {
  hidden: {
    y: "100%",
  },
  visible: (delay: number = 0) => ({
    y: "0%",
    transition: {
      duration: 0.8,
      delay,
      ease: EASE_OUT,
    },
  }),
}

/** Card enter/exit animation for carousels */
export const cardVariants: Variants = {
  initial: {
    opacity: 0,
    y: 18,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: EASE_OUT,
    },
  },
  exit: {
    opacity: 0,
    y: -18,
    filter: "blur(8px)",
    transition: {
      duration: 0.35,
      ease: EASE_OUT,
    },
  },
}

/** Slide-in overlay animation for navigation menu */
export const overlayVariants: Variants = {
  closed: {
    clipPath: "circle(0% at calc(100% - 44px) 32px)",
    transition: {
      duration: 0.55,
      ease: EASE_OUT,
      delay: 0.15,
    },
  },
  open: {
    clipPath: "circle(150% at calc(100% - 44px) 32px)",
    transition: {
      duration: 0.65,
      ease: EASE_OUT,
    },
  },
}

/** Staggered nav items animation */
export const navItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: 40,
    filter: "blur(8px)",
  },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: 0.2 + i * 0.06,
      ease: EASE_OUT,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: -20,
    filter: "blur(6px)",
    transition: {
      duration: 0.3,
      delay: i * 0.03,
      ease: EASE_OUT,
    },
  }),
}
