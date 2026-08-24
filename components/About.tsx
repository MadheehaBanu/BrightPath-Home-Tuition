/* eslint-disable @next/next/no-img-element */
export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          <div data-animation-on-scroll="" className="space-y-4 w-full">
            <span className="text-brand-purple font-bold tracking-widest uppercase text-sm md:text-base">ABOUT BRIGHTPATH</span>
            <h2 className="font-primary text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-xl break-words">
              One-on-one learning support for students of all levels
            </h2>
          </div>
          <div className="flex -space-x-4 pt-12" data-animation-on-scroll="">
            <div className="w-16 h-16 rounded-full bg-brand-green flex items-center justify-center border-4 border-neutral-background">
              <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69f896ca35fc799d16193e63_heart%201.svg" className="w-8" alt="" />
            </div>
            <div className="w-16 h-16 rounded-full bg-brand-purple flex items-center justify-center border-4 border-neutral-background">
              <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69f896d6c41249778cf89546_insurance%201.svg" className="w-8" alt="" />
            </div>
            <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center border-4 border-neutral-background">
              <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69f896ca66ca1bef23813d10_extension%201.svg" className="w-8" alt="" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 md:gap-y-12 mb-16 md:mb-24 px-2" data-animation-on-scroll="">
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-3xl md:text-5xl font-bold font-primary flex items-baseline justify-center lg:justify-start">
              <span className="counter" data-target="500">0</span>
              <span>+</span>
            </div>
            <p className="text-text-secondary text-sm md:text-base">Students supported till date</p>
          </div>
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-3xl md:text-5xl font-bold font-primary flex items-baseline justify-center lg:justify-start">
              <span className="counter" data-target="15">0</span>
              <span>+</span>
            </div>
            <p className="text-text-secondary text-sm md:text-base">Academic subjects covered</p>
          </div>
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-3xl md:text-5xl font-bold font-primary flex items-baseline justify-center lg:justify-start">
              <span className="counter" data-target="98">0</span>
              <span>%</span>
            </div>
            <p className="text-text-secondary text-sm md:text-base">Improvement in student grades</p>
          </div>
          <div className="space-y-2 text-center lg:text-left">
            <div className="text-3xl md:text-5xl font-bold font-primary flex items-baseline justify-center lg:justify-start">
              <span className="counter" data-target="50">0</span>
              <span>+</span>
            </div>
            <p className="text-text-secondary text-sm md:text-base">Experienced subject experts</p>
          </div>
        </div>

        {/* Tilted Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-brand-green-light p-10 rounded-xl space-y-12 rotate-0 md:rotate-[-4deg] hover:rotate-0 transition-transform duration-500" data-animation-on-scroll="">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69f8a165bfe5a5beb28f1c8b_user%201.svg" className="w-8" alt="" />
            </div>
            <div className="space-y-4">
              <h3 className="font-primary text-2xl font-bold">Individual attention</h3>
              <p className="text-text-secondary">Every student gets a tailored learning path focused on their specific strengths and areas for improvement.</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg transform translate-y-4" data-animation-on-scroll="">
            <img src="https://images.pexels.com/photos/18870250/pexels-photo-18870250.jpeg?w=600&h=800&fit=crop" className="w-full h-full object-cover" alt="Indian student learning" />
          </div>

          <div className="bg-brand-lavender p-10 rounded-xl space-y-12 rotate-0 md:rotate-[4deg] hover:rotate-0 transition-transform duration-500" data-animation-on-scroll="">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
              <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69f8a1654e45232d0dd6ccc7_chart-bars%201.svg" className="w-8" alt="" />
            </div>
            <div className="space-y-4">
              <h3 className="font-primary text-2xl font-bold">Concept clarity</h3>
              <p className="text-text-secondary">We focus on building a deep understanding of core subjects rather than just rote memorization.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
