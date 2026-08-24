'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest('#mobile-menu') && !target.closest('#mobile-menu-toggle')) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-4">
      <nav className="max-w-7xl mx-auto bg-white/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between border border-neutral-200 shadow-sm">
        <Link href="/" className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-purple rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg md:text-xl">B</span>
          </div>
          <span className="font-primary font-bold text-xl md:text-2xl tracking-tight">BrightPath</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 font-medium">
          <Link href="#" className="hover:text-brand-purple transition-colors">Home</Link>
          <Link href="#about" className="hover:text-brand-purple transition-colors">About</Link>
          <Link href="#subjects" className="hover:text-brand-purple transition-colors">Subjects</Link>
          <Link href="#programs" className="hover:text-brand-purple transition-colors">Classes</Link>
          <Link href="#pricing" className="hover:text-brand-purple transition-colors">Pricing</Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <Link href="#contact" className="hidden md:flex bg-brand-purple text-white px-6 py-2.5 rounded-full font-semibold hover:bg-black transition-all">
            Book Consultation
          </Link>
          <button 
            id="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-text-primary"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`${isMobileMenuOpen ? 'block' : 'hidden'} absolute top-20 left-6 right-6 bg-white rounded-2xl shadow-2xl border border-neutral-100 p-6 lg:hidden z-[101]`}
      >
        <div className="flex flex-col gap-4 font-medium text-lg text-center">
          <Link href="#" onClick={closeMobileMenu} className="mobile-link py-3 border-b border-neutral-50 hover:text-brand-purple">Home</Link>
          <Link href="#about" onClick={closeMobileMenu} className="mobile-link py-3 border-b border-neutral-50 hover:text-brand-purple">About</Link>
          <Link href="#subjects" onClick={closeMobileMenu} className="mobile-link py-3 border-b border-neutral-50 hover:text-brand-purple">Subjects</Link>
          <Link href="#programs" onClick={closeMobileMenu} className="mobile-link py-3 border-b border-neutral-50 hover:text-brand-purple">Classes</Link>
          <Link href="#pricing" onClick={closeMobileMenu} className="mobile-link py-3 border-b border-neutral-50 hover:text-brand-purple">Pricing</Link>
          <div className="pt-2">
            <Link href="#contact" onClick={closeMobileMenu} className="mobile-link block bg-brand-purple text-white py-4 rounded-full font-bold shadow-lg">
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
