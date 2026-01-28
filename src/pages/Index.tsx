import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { OurStorySection } from "@/components/OurStorySection";
import { EventDetailsSection } from "@/components/EventDetailsSection";
import { RSVPSection } from "@/components/RSVPSection";
import { TravelSection } from "@/components/TravelSection";
import { GallerySection } from "@/components/GallerySection";
import { RegistrySection } from "@/components/RegistrySection";
import { GuestbookSection } from "@/components/GuestbookSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <EventDetailsSection />
      <RSVPSection />
      <TravelSection />
      <GallerySection />
      <RegistrySection />
      <GuestbookSection />
      <Footer />
    </div>
  );
};

export default Index;
