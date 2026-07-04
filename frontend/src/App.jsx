import Header from './components/Header'
import Hero from './components/Hero'
import MarqueeStrip from './components/MarqueeStrip'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import Process from './components/Process'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarqueeStrip />
        <Products />
        <WhyUs />
        <Process />
        <Banner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
