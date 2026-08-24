/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:py-32 overflow-hidden bg-neutral-background">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gamboge/15 -skew-x-12 translate-x-32 z-0 hidden lg:block"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8 text-center lg:text-left" data-animation-on-scroll="left">
            <div className="space-y-6">
              <h1 className="font-primary text-text-primary text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] break-words">
                Personalized Learning for Every Student
              </h1>
              <p className="text-text-secondary text-lg md:text-2xl font-medium max-w-xl mx-auto lg:mx-0">
                Quality learning support from experienced tutors, delivered in a comfortable and focused environment to build strong academic foundations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link href="#contact" className="inline-flex items-center gap-4 bg-brand-purple text-white pl-8 pr-2 py-2 rounded-full font-bold text-lg hover:bg-black transition-all group w-full sm:w-fit justify-between sm:justify-start shadow-xl shadow-brand-purple/20">
                <span>Book a Consultation</span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-colors">
                  <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69f87b2a45bedd0ee848facf_cbc5a83e31c4a7e307610aeb4d648234_Vector.svg" alt="" className="w-6 h-6 invert" />
                </div>
              </Link>
              
              {/* Trust badge mobile refined */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img src="https://images.pexels.com/photos/22915923/pexels-photo-22915923.jpeg?w=60&h=60&fit=crop" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Student avatar" />
                  <img src="https://images.pexels.com/photos/22915923/pexels-photo-22915923.jpeg?w=60&h=60&fit=crop" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Student avatar" />
                  <img src="https://images.pexels.com/photos/22915923/pexels-photo-22915923.jpeg?w=60&h=60&fit=crop" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Student avatar" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-text-secondary">Join 500+ happy students</p>
              </div>
            </div>
          </div>

          {/* Right: 2 Card Grid (Mobile Responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-start relative mt-8 lg:mt-0">
            {/* Card 1: Content */}
            <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl flex flex-col justify-between min-h-[320px] md:h-[420px] transform lg:translate-y-12 transition-transform duration-500 hover:-translate-y-2 border border-neutral-100" data-animation-on-scroll="">
              <div className="space-y-4 md:space-y-6">
                <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-brand-purple">school</span>
                </div>
                <h3 className="font-primary text-2xl md:text-3xl font-bold text-text-primary">Expert Tutors</h3>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                  Our educators are subject specialists with years of experience in individual mentoring.
                </p>
              </div>
              <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-bold text-brand-purple uppercase tracking-widest">Learn More</span>
                <div className="w-10 h-10 rounded-full bg-neutral-background flex items-center justify-center">
                  <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fcae8a7fc6cfe022ae990f_arrow%20(2)%201%20(1).svg" className="w-5" alt="arrow icon" />
                </div>
              </div>
            </div>

            {/* Card 2: Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] sm:h-[300px] md:h-[380px] group relative" data-animation-on-scroll="">
              <img src="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg?w=800&h=1200&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Smiling student focusing on studies" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="font-bold text-lg">Prisha S.</p>
                <p className="text-xs opacity-80">Class 10 | 98% Score</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
