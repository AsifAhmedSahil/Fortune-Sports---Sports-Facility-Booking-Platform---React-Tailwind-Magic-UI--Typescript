import { Testimonial } from "@/components/Testimonial"
import Banner from "../Components/Banner"
import FeaturedFacilities from "../Components/FeaturedFacilities"
import HowItWorks from "../Components/HowItWorks"
import Pricing from "../Components/Pricing"



const Home = () => {
  return (
    <>
    <Banner/>
   <FeaturedFacilities/>
    <HowItWorks/>
    <Testimonial/>
    <Pricing/>
    </>
  )
}

export default Home