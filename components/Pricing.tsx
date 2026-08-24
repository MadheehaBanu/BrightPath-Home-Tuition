/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-12 md:mb-20" data-animation-on-scroll="">
          <span className="text-brand-purple font-bold tracking-widest uppercase text-sm md:text-base">FEE PLANS</span>
          <h2 className="font-primary text-3xl sm:text-4xl md:text-6xl font-bold break-words">Simple plans for serious growth</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 overflow-hidden">
          {/* Basic */}
          <div className="bg-brand-green-light p-10 rounded-xl flex flex-col justify-between" data-animation-on-scroll="left">
            <div className="space-y-8">
              <h3 className="font-primary text-2xl font-bold">Basic Care</h3>
              <p className="text-text-secondary">A standard plan for regular subjects and consistent homework assistance.</p>
              <div className="text-4xl font-bold font-primary">₹3,000<span className="text-lg font-normal">/Month</span></div>
              <ul className="space-y-4 pt-8">
                <li className="flex items-center gap-3">
                  <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fe24efc5f235ae419d7f61_Vector%20(14).svg" className="w-5" alt="" />
                  3 sessions per week
                </li>
                <li className="flex items-center gap-3">
                  <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fe24efc5f235ae419d7f61_Vector%20(14).svg" className="w-5" alt="" />
                  Core subject support
                </li>
                <li className="flex items-center gap-3">
                  <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fe24efc5f235ae419d7f61_Vector%20(14).svg" className="w-5" alt="" />
                  Homework help
                </li>
              </ul>
            </div>
            <Link href="#contact" className="mt-12 bg-brand-purple text-white py-4 rounded-full text-center font-bold hover:bg-black transition-all block">
              Select Basic
            </Link>
          </div>

          {/* Excellence */}
          <div className="bg-brand-yellow-light p-10 rounded-xl flex flex-col lg:col-span-2 lg:flex-row gap-12" data-animation-on-scroll="right">
            <div className="lg:w-1/2 flex flex-col justify-between">
              <div className="space-y-8">
                <h3 className="font-primary text-2xl font-bold">Academic Excellence</h3>
                <p className="text-text-secondary">A complete plan for total academic development and board exam mastery.</p>
                <div className="text-4xl font-bold font-primary">₹6,000<span className="text-lg font-normal">/Month</span></div>
                <ul className="space-y-4 pt-8">
                  <li className="flex items-center gap-3">
                    <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fe24efc5f235ae419d7f61_Vector%20(14).svg" className="w-5" alt="" />
                    Daily sessions (Mon-Fri)
                  </li>
                  <li className="flex items-center gap-3">
                    <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fe24efc5f235ae419d7f61_Vector%20(14).svg" className="w-5" alt="" />
                    Board exam mock tests
                  </li>
                  <li className="flex items-center gap-3">
                    <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fe24efc5f235ae419d7f61_Vector%20(14).svg" className="w-5" alt="" />
                    Weekend doubt clearing
                  </li>
                </ul>
              </div>
              <Link href="#contact" className="mt-12 bg-white text-black py-4 rounded-full text-center font-bold hover:bg-brand-purple hover:text-white transition-all block">
                Select Excellence
              </Link>
            </div>
            <div className="lg:w-1/2">
              <img src="https://images.pexels.com/photos/31968829/pexels-photo-31968829.jpeg?w=800&h=600&fit=crop" className="rounded-xl h-full object-cover" alt="Indian student excellence results" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
