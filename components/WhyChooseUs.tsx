/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function WhyChooseUs() {
  return (
    <section className="py-32 px-6 bg-white relative">
      <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fb6fa75296b9b102678c29_Vector%20(13).svg" className="absolute inset-0 w-full h-full object-cover opacity-50" alt="" />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2" data-animation-on-scroll="">
            <img src="https://images.pexels.com/photos/5311406/pexels-photo-5311406.jpeg?w=800&h=600&fit=crop" className="rounded-xl shadow-2xl w-full" alt="Indian tutor helping a student" />
          </div>
          <div className="lg:w-1/2 space-y-10" data-animation-on-scroll="">
            <div className="space-y-4">
              <span className="text-brand-purple font-bold tracking-widest uppercase text-sm md:text-base">WHY CHOOSE US</span>
              <h2 className="font-primary text-3xl sm:text-4xl md:text-6xl font-bold leading-tight break-words">What makes us the right choice</h2>
              <p className="text-text-secondary text-lg max-w-xl">
                We create a nurturing and inspiring space where children feel safe, explore freely, build confidence, and grow through joyful everyday learning experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-200 pt-10">
              <div className="space-y-4">
                <h3 className="font-primary text-2xl font-bold">Structured Learning</h3>
                <p className="text-text-secondary">Personalized plans that cover the entire syllabus with time for revisions.</p>
              </div>
              <div className="space-y-4">
                <h3 className="font-primary text-2xl font-bold">Doubt Solving</h3>
                <p className="text-text-secondary">Immediate attention to students&apos; questions to ensure continuous progress.</p>
              </div>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-4 bg-brand-purple text-white pl-8 pr-2 py-2 rounded-full font-bold text-lg hover:bg-black transition-all group">
              <span>Contact us</span>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-colors">
                <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69f87b2a45bedd0ee848facf_cbc5a83e31c4a7e307610aeb4d648234_Vector.svg" alt="" className="w-6 h-6 invert" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
