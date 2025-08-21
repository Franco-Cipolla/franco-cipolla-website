
import Hero from '../components/Hero'
import ServiceMarquee from '../components/ServiceMarquee'
import ProblemSolution from '../components/ProblemSolution'
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
      <ProblemSolution />
      <Service />
      <FAQSection />
      <CTAHome />
      <Contact />
    </main>
    </>
  )
}

export default HomePage
