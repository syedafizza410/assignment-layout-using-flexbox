import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar"
import Details from "./Components/Details";
export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Details />
    </div>
  );
}