import AboutUs from "@/components/AboutUs";
import Connect from "@/components/Connect";
import HeroSection from "@/components/HeroSection";
import KeyServices from "@/components/KeyServices";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <KeyServices />
      <AboutUs />
      <Connect />
    </main>
  );
}
