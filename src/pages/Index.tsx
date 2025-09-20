import React from "react";
import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { AIChatSection } from "@/components/sections/AIChatSection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <section id="inicio">
          <HeroSection />
        </section>
        
        <section id="servicos">
          <ServicesSection />
        </section>
        
        <section id="chat-ia">
          <AIChatSection />
        </section>
        
        <section id="contato">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
