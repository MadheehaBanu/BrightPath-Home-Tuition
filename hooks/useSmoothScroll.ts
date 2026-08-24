'use client'

import { useEffect } from 'react'

export function useSmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')
      
      if (!anchor) return
      
      const href = anchor.getAttribute('href')
      if (!href || href === '#') return
      
      const targetElement = document.querySelector(href)
      if (!targetElement) return
      
      e.preventDefault()
      
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])
}
