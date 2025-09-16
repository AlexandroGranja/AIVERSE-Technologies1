import React from "react";
import { Navigation } from "@/components/sections/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/sections/footer";
import { ChatBot } from "@/components/ui/chat-bot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        
        <section id="servicos">
          <ServicesSection />
        </section>
        
        <section id="projetos">
          <ProjectsSection />
        </section>
        
        <section id="contato">
          <ContactSection />
        </section>
      </main>

      <Footer />
      
      {/* Chatbot */}
      <ChatBot />
    </div>
  );
};

export default Index;
