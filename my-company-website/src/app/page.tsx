import Header from './components/header'
import Hero from './components/hero'
import Services from './components/services'
import About from './components/about'
import Statistics from './components/statistics'
import Reviews from './components/reviews'
import FAQ from './components/FAQ'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Statistics />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  )
}