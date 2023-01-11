import { BannerExperience } from "./components/bannerExperiences/BannerExperience"
import { Hero } from "./components/hero/Hero"
import { Services } from "./components/services/Services"

const App = () => {
  return (
    <>
      <Hero />
      <BannerExperience />
      <Services />
    </>
  )
}

export default App