import React from "react";
import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection, ServicesSection } from "@/components/sections/services-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { AIChatSection } from "@/components/sections/AIChatSection";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10 pt-20">
        <section id="inicio">
          <ScrollReveal variant="fade-up" yOffset={24} durationMs={980}>
            <HeroSection />
          </ScrollReveal>
        </section>
        
        <section id="servicos">
          <ScrollReveal variant="fade-up" delayMs={40} yOffset={34} durationMs={960}>
            <ServicesSection />
          </ScrollReveal>
        </section>

        <section id="projects" className="pt-8 md:pt-14">
          <ScrollReveal variant="scale-in" delayMs={55} yOffset={24} durationMs={980}>
            <ProjectsSection />
          </ScrollReveal>
        </section>
        
        <section id="chat-ia">
          <ScrollReveal variant="slide-right" delayMs={90} yOffset={18} durationMs={940}>
            <AIChatSection />
          </ScrollReveal>
        </section>
        
        <section id="contato">
          <ScrollReveal variant="fade-up" delayMs={110} yOffset={28} durationMs={940}>
            <ContactSection />
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
