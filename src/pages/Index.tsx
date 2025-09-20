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
      
      <main className="relative z-10 pt-20">
        <section id="inicio">
          <HeroSection />
        </section>
        
        <section id="servicos">
          <ServicesSection />
        </section>
        
        <section id="feedbacks">
          <div className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
                O que nossos clientes dizem 🚀
              </h3>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Card 1 */}
                <div className="bg-white/5 border border-primary/20 rounded-2xl p-4 shadow-lg">
                  <img
                    src="/feedback1.png"
                    alt="Feedback cliente 1"
                    className="rounded-lg w-full h-[400px] object-contain hover:scale-[1.02] transition-transform"
                  />
                </div>

                {/* Card 2 */}
                <div className="bg-white/5 border border-primary/20 rounded-2xl p-4 shadow-lg">
                  <img
                    src="/feedback2.png"
                    alt="Feedback cliente 2"
                    className="rounded-lg w-full h-[400px] object-contain hover:scale-[1.02] transition-transform"
                  />
                </div>

                {/* Card 3 */}
                <div className="bg-white/5 border border-primary/20 rounded-2xl p-4 shadow-lg">
                  <img
                    src="/feedback3.png"
                    alt="Feedback cliente 3"
                    className="rounded-lg w-full h-[400px] object-contain hover:scale-[1.02] transition-transform"
                  />
                </div>
              </div>
            </div>
          </div>
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
