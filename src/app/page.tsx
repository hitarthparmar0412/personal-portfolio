import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import InlineCTA from '@/components/InlineCTA'

export default function Home() {
  return (
    <main className="bg-bg min-h-screen">
      <Hero />
      <Stats />
      <Projects />
      <Testimonials />
      <InlineCTA />
    </main>
  )
}
