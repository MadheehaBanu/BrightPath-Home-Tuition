/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white border-4 border-brand-purple rounded-3xl p-8 md:p-20 text-center relative overflow-hidden shadow-sm group" data-animation-on-scroll="">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 opacity-60 transition-transform duration-700 group-hover:scale-105">
            <img src="https://images.pexels.com/photos/20746513/pexels-photo-20746513.jpeg?w=1200&h=600&fit=crop" alt="Study environment" className="w-full h-full object-cover" />
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-white/60 z-[1]"></div>
          
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="font-primary text-3xl md:text-5xl font-bold leading-tight text-text-primary">
              Ready to see your child excel?
            </h2>
            <p className="text-text-primary text-lg md:text-xl font-bold leading-relaxed">
              Schedule a free assessment session today and start the path to academic confidence.
            </p>
            <div className="pt-6">
              <Link href="#contact" className="inline-block bg-brand-purple text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95">
                Book Free Assessment
              </Link>
            </div>
          </div>
          
          {/* Subtle Minimal Background Detail */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-brand-purple/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-48 h-48 bg-brand-green/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  )
}
