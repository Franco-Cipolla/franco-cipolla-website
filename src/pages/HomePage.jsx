
import Hero from '../components/Hero'
import ServiceMarquee from '../components/ServiceMarquee'
import Projects from '../components/Projects'
import Service from '../components/Service'
import FAQSection from '../components/FAQSection'
import Contact from '../components/Contact'
import HomePageHead from '../components/HomePageHead'

const HomePage = () => {




  return (
    <>
    <HomePageHead />
    <main>
      <Hero />
      <ServiceMarquee />
      <Projects />
      <Service />
      <FAQSection />
      <Contact />
    </main>
    </>
  )
}

export default HomePage
