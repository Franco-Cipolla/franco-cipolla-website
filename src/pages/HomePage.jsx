
import Hero from '../components/Hero'
import ServiceMarquee from '../components/ServiceMarquee'
import Projects from '../components/Projects'
import Service from '../components/Service'
import FAQSection from '../components/FAQSection'
import Contact from '../components/Contact'
import CTAHome from '../components/CTAHome'
const HomePage = () => {

  return (
    <>
    <main>
      <Hero />
      <ServiceMarquee />
      <Projects />
      <Service />
      <FAQSection />
      <CTAHome />
      <Contact />
    </main>
    </>
  )
}

export default HomePage
