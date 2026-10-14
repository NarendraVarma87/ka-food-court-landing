import { useState, useEffect } from 'react'

/**
 * Tracks which section anchor is currently in the viewport.
 * Used by Navbar to highlight the active section link.
 */
export function useActiveSection(sectionIds: readonly string[]): string {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observers: IntersectionObserver[] = []

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id)
        }
      }
    }

    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) {
        const obs = new IntersectionObserver(handleIntersect, options)
        obs.observe(el)
        observers.push(obs)
      }
    }

    return () => observers.forEach((obs) => obs.disconnect())
  }, [sectionIds])

  return activeId
}
