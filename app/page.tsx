import Header from '@/components/Header'
import Hero from '@/components/Hero'
import MarqueeBanner from '@/components/MarqueeBanner'
import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import Subjects from '@/components/Subjects'
import Programs from '@/components/Programs'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ClientLayout from '@/components/ClientLayout'

export default function Home() {
  return (
    <ClientLayout>
      <Header />
      <main className="flex-grow overflow-x-hidden">
        <Hero />
        <MarqueeBanner />
        <About />
        <WhyChooseUs />
        <Subjects />
        <Programs />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </ClientLayout>
  )
}
