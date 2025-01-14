import './App.css'
import { Categories } from "./components/categories/Categories"
import PopularCourseheading from "./components/categories/PopularCourseheading"
import FeaturedSec from './components/featuresSections/FeaturedSec'
import HeroSection from "./components/heroSection/HeroSection"
import Navbar from "./components/navbar/Navbar"
import PopularCoursesDiv from "./components/popularCoursesCards/PopularCoursesDiv"
import TrustedPartners from './components/trustedPartners/TrustedPartners'



function App() {
  
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TrustedPartners />
      <FeaturedSec/>
      <PopularCourseheading/>
      <Categories/>
      <PopularCoursesDiv/>
    </div>
  )
}

export default App
