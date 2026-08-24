/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden relative" id="contact">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
        {/* Brand Info */}
        <div className="lg:col-span-4 space-y-8 text-center lg:text-left" data-animation-on-scroll="">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <span className="font-primary font-bold text-4xl">BrightPath</span>
          </div>
          <p className="text-gray-400 text-lg max-w-sm">
            Quality learning support from experienced tutors, delivered in a comfortable and focused environment. Helping students build strong foundations.
          </p>
          <div className="space-y-2 text-gray-300">
            <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
            <p><strong>WhatsApp:</strong> +91 XXXXX XXXXX</p>
          </div>
        </div>

        {/* Links */}
        <div className="lg:col-span-2 space-y-6" data-animation-on-scroll="">
          <h4 className="font-bold text-xl">Quick Links</h4>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="#subjects" className="hover:text-white transition-colors">Subjects</Link></li>
            <li><Link href="#programs" className="hover:text-white transition-colors">Classes</Link></li>
            <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-6" data-animation-on-scroll="">
          <h4 className="font-bold text-xl">Subjects</h4>
          <ul className="space-y-3 text-gray-400">
            <li><Link href="#" className="hover:text-white transition-colors">Mathematics</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Science</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">English</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Commerce</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Foundation</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div className="lg:col-span-4 space-y-6" data-animation-on-scroll="">
          <h4 className="font-bold text-xl">Follow Us</h4>
          <div className="flex gap-4">
            <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white transition-all group">
              <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/6a05de8903ea23be9e4b8813_Group%20(3).svg" alt="FB" className="w-5 group-hover:invert" />
            </Link>
            <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white transition-all group">
              <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/6a05de891e11debb0048a915_twitter%201%20(1).svg" alt="TW" className="w-5 group-hover:invert" />
            </Link>
            <Link href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white transition-all group">
              <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/6a05de89f459c1fc667f4758_linkedin%201%20(1).svg" alt="LI" className="w-5 group-hover:invert" />
            </Link>
          </div>
          <div className="pt-6 flex flex-col items-center lg:items-start">
            <h4 className="font-bold text-lg mb-4">Enrollment Query</h4>
            <Link href="https://wa.me/91XXXXXXXXXX" className="bg-brand-green text-black px-6 py-3 rounded-full font-bold flex items-center gap-2 w-fit hover:scale-105 transition-transform">
              <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69f87b2a45bedd0ee848facf_cbc5a83e31c4a7e307610aeb4d648234_Vector.svg" className="w-5 invert" alt="" />
              WhatsApp Us
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 relative z-10">
        <p>Copyright © 2024 BrightPath Home Tuition | All Rights Reserved</p>
        <p>Your Path to Academic Excellence</p>
        <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69f78ea43240816e1e42a6a6_6c1e597c209a2cdfb1bf8098bf2d54db_Vector%20%288%29.svg" className="absolute -bottom-24 -right-12 w-64 h-64 animation-spin-slow opacity-20 pointer-events-none" alt="" />
      </div>
    </footer>
  )
}
