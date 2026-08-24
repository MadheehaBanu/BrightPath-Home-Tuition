'use client'

import { useEffect } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-on-scroll-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    const elements = document.querySelectorAll('[data-animation-on-scroll]')
    
    elements.forEach((el) => {
      const animationType = el.getAttribute('data-animation-on-scroll')
      
      if (animationType === 'left') {
        el.classList.add('animate-from-left')
      } else if (animationType === 'right') {
        el.classList.add('animate-from-right')
      } else {
        el.classList.add('animate-on-scroll-hidden')
      }
      
      observer.observe(el)
    })

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])
}
