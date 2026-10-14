/**
 * Shared motion variants and easing constants.
 * Easing: [0.22, 1, 0.36, 1], 0.5-0.8s duration.
 */
import type { Variants } from 'motion/react'

export const EASE_REVEAL = [0.22, 1, 0.36, 1] as const
export const DURATION = 0.6
export const STAGGER = 0.08
export const VIEWPORT = { once: true, margin: '-80px' } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE_REVEAL },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION, ease: EASE_REVEAL },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER,
    },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION, ease: EASE_REVEAL },
  },
}

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION, ease: EASE_REVEAL },
  },
}

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION, ease: EASE_REVEAL },
  },
}
