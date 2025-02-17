import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import OutdoorImages from "../components/OutdoorImages";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

export default function Home() {

  return (
    <div>
      {/* Home screen, all components from /components, smaller components (special buttons, cards etc.) in /components/ui */}
      <Navbar />
      <Hero />
      <HowItWorks />
      <OutdoorImages />
      <Reviews />
      <Footer />
    </div>
  )
}