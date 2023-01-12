import { BannerExperience } from "./components/bannerExperiences/BannerExperience"
import { Cta } from "./components/cta/Cta"
import { Footer } from "./components/footer/Footer"
import { Hero } from "./components/hero/Hero"
import { Navbar } from "./components/navbar/Navbar"
import { Services } from "./components/services/Services"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <BannerExperience />
      <Services />
      <Cta />
      <Footer />
    </>
  )
}

export default App