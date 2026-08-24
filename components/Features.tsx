/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

export default function Features() {
  const features = [
    {
      title: 'Assessment',
      description: 'Understanding the student\'s current level and learning requirements first.',
    },
    {
      title: 'Personalized Plan',
      description: 'Creating a strategy based on individual strengths and improvement areas.',
    },
    {
      title: 'Regular Teaching',
      description: 'Consistent sessions focused on deep understanding and regular practice.',
    },
    {
      title: 'Monitoring',
      description: 'Regular feedback and academic performance reviews with parents.',
    },
  ]

  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 space-y-8 md:space-y-12" data-animation-on-scroll="">
            <div className="space-y-4 md:space-y-6">
              <span className="text-brand-purple font-bold tracking-widest uppercase text-sm md:text-base">OUR APPROACH</span>
              <h2 className="font-primary text-3xl sm:text-4xl md:text-6xl font-bold leading-tight break-words">Learning moments that shine</h2>
              <p className="text-text-secondary text-lg">A closer look at what makes our tutoring environment special, where every session is designed to inspire curiosity and confidence.</p>
              <Link href="#contact" className="inline-block bg-brand-purple text-white px-8 py-4 rounded-full font-bold hover:bg-black transition-all">
                Book Assessment
              </Link>
            </div>
            <img src="https://images.pexels.com/photos/16504588/pexels-photo-16504588.jpeg?w=800&h=600&fit=crop" className="rounded-xl w-full h-[400px] object-cover" alt="Indian student reading" />
          </div>
          
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-6 md:gap-8">
            <div className="flex flex-col gap-6 md:gap-8 lg:mt-24">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="bg-neutral-background p-6 md:p-10 rounded-xl space-y-6 md:space-y-8" data-animation-on-scroll="">
                  <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fe082dd8cfa1cdc138a1b4_shape%20(1)%204.svg" className="w-10 h-10 md:w-12 md:h-12 animation-spin-slow" alt="" />
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="font-primary text-xl md:text-2xl font-bold">{feature.title}</h4>
                    <p className="text-text-secondary text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6 md:gap-8 lg:-mt-12">
              {features.slice(2).map((feature, index) => (
                <div key={index} className="bg-neutral-background p-6 md:p-10 rounded-xl space-y-6 md:space-y-8" data-animation-on-scroll="">
                  <img src="https://cdn.prod.website-files.com/69f77a3a099cc36471987a2c/69fe082dd8cfa1cdc138a1b4_shape%20(1)%204.svg" className="w-10 h-10 md:w-12 md:h-12 animation-spin-slow" alt="" />
                  <div className="space-y-3 md:space-y-4">
                    <h4 className="font-primary text-xl md:text-2xl font-bold">{feature.title}</h4>
                    <p className="text-text-secondary text-sm md:text-base">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
