import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Guarantee from "@/components/Guarantee";
import ReadyForDoody from "@/components/ReadyForDoody";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import AddOns from "@/components/AddOns";
import WaveSeparator from "@/components/WaveSeparator";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div style={{ position: 'relative', marginTop: '-1px' }}>
        <WaveSeparator flip={false} color="#FFFFFF" />
      </div>
      <Mission />
      <Services />
      <AddOns />
      <WhyUs />
      <Guarantee />
      <ReadyForDoody />
      <div style={{ position: 'relative', height: '60px', marginTop: '-60px', zIndex: 10 }}>
        {/* Optional wave before footer if needed */}
      </div>
      <Footer />
    </main>
  );
}
