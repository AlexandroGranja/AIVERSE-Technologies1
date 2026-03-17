import React, { useEffect } from "react";
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
  useEffect(() => {
    const scrollStorageKey = `aiverse-scroll:${window.location.pathname}`;

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const restoreScroll = () => {
      const savedPosition = sessionStorage.getItem(scrollStorageKey);
      if (!savedPosition) return;

      const y = Number(savedPosition);
      if (!Number.isFinite(y) || y < 0) return;

      window.scrollTo({ top: y, left: 0, behavior: "auto" });
    };

    const saveScroll = () => {
      sessionStorage.setItem(scrollStorageKey, String(window.scrollY));
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        saveScroll();
      }
    };

    const rafId = window.requestAnimationFrame(restoreScroll);
    const timeoutId = window.setTimeout(restoreScroll, 140);

    window.addEventListener("scroll", saveScroll, { passive: true });
    window.addEventListener("beforeunload", saveScroll);
    window.addEventListener("pagehide", saveScroll);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      saveScroll();
      window.cancelAnimationFrame(rafId);
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", saveScroll);
      window.removeEventListener("beforeunload", saveScroll);
      window.removeEventListener("pagehide", saveScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

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
          <ServicesSection />
        </section>

        <section id="projects">
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
