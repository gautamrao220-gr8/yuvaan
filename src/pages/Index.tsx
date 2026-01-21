import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import RoverSection from "@/components/RoverSection";
import EngineeringSection from "@/components/EngineeringSection";

import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <RoverSection />
      <EngineeringSection />

      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
