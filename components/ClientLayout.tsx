'use client'

import { useEffect } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useScrollAnimation()
  useSmoothScroll()
  
  useEffect(() => {
    // Stats counter animation
    const counters = document.querySelectorAll('.counter')
    const speed = 100

    const startCounters = () => {
      counters.forEach(counter => {
        const updateCount = () => {
          const target = +(counter.getAttribute('data-target') || 0)
          const count = +(counter.textContent || 0)
          const inc = target / speed

          if (count < target) {
            counter.textContent = Math.ceil(count + inc).toString()
            setTimeout(updateCount, 20)
          } else {
            counter.textContent = target.toString()
          }
        }
        updateCount()
      })
    }

    // Trigger counters when in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounters()
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    const statsSection = document.querySelector('#about')
    if (statsSection) observer.observe(statsSection)

    return () => {
      if (statsSection) observer.unobserve(statsSection)
    }
  }, [])
  
  return <div className="font-secondary bg-neutral-background text-text-primary min-h-screen flex flex-col w-full relative overflow-x-hidden">{children}</div>
}
