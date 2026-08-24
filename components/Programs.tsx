/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Programs() {
  return (
    <section id="programs" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 md:gap-8 mb-12 md:mb-20 text-center md:text-left">
          <div data-animation-on-scroll="" className="space-y-4 w-full">
            <span className="text-brand-purple font-bold tracking-widest uppercase text-sm md:text-base">OUR CLASSES</span>
            <h2 className="font-primary text-3xl sm:text-4xl md:text-6xl font-bold leading-tight break-words">Support for every grade</h2>
          </div>
          <Link href="#contact" className="bg-brand-purple text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all whitespace-nowrap" data-animation-on-scroll="">
            Enquire for your grade
          </Link>
        </div>

        <div className="space-y-12">
          {/* Program 1 */}
          <div className="bg-brand-green-light rounded-xl overflow-hidden group" data-animation-on-scroll="">
            <div className="flex flex-col lg:flex-row">
              <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-between">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center font-primary text-xl md:text-2xl font-bold mb-8 md:mb-12">01</div>
                <div className="space-y-6">
                  <h3 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold">Primary &amp; Middle School</h3>
                  <p className="text-text-secondary text-base md:text-lg">Foundation learning support, concept building, and homework assistance for students from Class 1 to 8 across all boards.</p>
                  <div className="inline-block bg-white px-6 py-2 rounded-full font-bold text-sm">Class 1 – 8 (CBSE/ICSE/State)</div>
                </div>
                <Link href="#contact" className="inline-flex items-center gap-2 mt-12 font-bold border-b border-black pb-1 hover:gap-4 transition-all">
                  Discuss academic goals
                  <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fcae8a7fc6cfe022ae990f_arrow%20(2)%201%20(1).svg" className="w-5" alt="" />
                </Link>
              </div>
              <div className="lg:w-1/2 h-[400px] lg:h-auto">
                <img src="https://images.pexels.com/photos/35558791/pexels-photo-35558791.jpeg?w=800&h=600&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Indian primary school students" />
              </div>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-brand-lavender rounded-xl overflow-hidden group" data-animation-on-scroll="">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-between">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center font-primary text-xl md:text-2xl font-bold mb-8 md:mb-12">02</div>
                <div className="space-y-6">
                  <h3 className="font-primary text-2xl sm:text-3xl md:text-4xl font-bold">Secondary &amp; Senior Secondary</h3>
                  <p className="text-text-secondary text-base md:text-lg">Intensive board exam preparation, advanced subject coaching, and performance-focused learning strategies.</p>
                  <div className="inline-block bg-white px-6 py-2 rounded-full font-bold text-sm">Class 9 – 12 (All Boards)</div>
                </div>
                <Link href="#contact" className="inline-flex items-center gap-2 mt-12 font-bold border-b border-black pb-1 hover:gap-4 transition-all">
                  Start board prep
                  <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fcae8a7fc6cfe022ae990f_arrow%20(2)%201%20(1).svg" className="w-5" alt="" />
                </Link>
              </div>
              <div className="lg:w-1/2 h-[400px] lg:h-auto">
                <img src="https://images.pexels.com/photos/8500290/pexels-photo-8500290.jpeg?w=800&h=600&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Indian high school student studying" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
