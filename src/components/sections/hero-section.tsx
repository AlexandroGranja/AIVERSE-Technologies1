import React from "react";
import { Bot, Globe, MenuSquare, Settings } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const services = [
  { icon: Globe, title: "Páginas Web", desc: "Sites rápidos, modernos e otimizados para converter visitantes em clientes." },
  { icon: Bot, title: "Agentes IA", desc: "Chatbots e agentes de IA que atendem, qualificam e vendem 24h por você." },
  { icon: Settings, title: "Automações", desc: "Automatize tarefas e economize tempo com processos inteligentes e integrados." },
  { icon: MenuSquare, title: "Cardápios Online", desc: "Cardápios digitais que aumentam pedidos e melhoram a experiência do cliente." },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12">
      <div className="relative overflow-x-hidden overflow-y-visible text-center max-w-6xl mx-auto px-4 py-14 md:px-10 md:py-20">
        {/* Main headline */}
        <ScrollReveal variant="fade-up" yOffset={36} delayMs={60} durationMs={1100}>
          <h1 className="hero-title relative z-10 mb-6 text-balance leading-[0.9]">
            <span className="hero-title-primary">
              AIVERSE
            </span>
            <br />
            <span className="hero-title-secondary">Technologies</span>
          </h1>
        </ScrollReveal>

        {/* Subtitle */}
        <ScrollReveal variant="fade-up" yOffset={30} delayMs={120} durationMs={1000}>
          <p className="relative z-10 mb-10 max-w-3xl mx-auto text-lg leading-relaxed text-slate-300 md:text-[1.6rem]">
          Transforme seu negócio com <span className="font-semibold text-primary">Inteligência Artificial</span> e
            <span className="font-semibold text-accent"> Sites de alta performance.</span>
          </p>
        </ScrollReveal>

        {/* Services highlight */}
        <ScrollReveal
          variant="scale-in"
          delayMs={220}
          durationMs={1000}
          staggerChildren
          staggerStepMs={85}
          childDistance={42}
          className="overflow-visible pt-3 md:pt-4"
        >
          <div className="relative z-10 mx-auto mb-10 grid max-w-5xl grid-cols-1 items-stretch gap-4 px-1 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  data-reveal-item
                  style={{ ["--item-index" as string]: index } as React.CSSProperties}
                  className="premium-card flex h-full min-h-[176px] flex-col rounded-[26px] p-5 text-left transition-all duration-500 will-change-transform md:hover:-translate-y-3 md:hover:border-primary/50"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_10px_30px_-18px_hsl(var(--primary)/0.7)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-3">
                    <h3 className="text-base font-semibold tracking-[-0.02em] text-slate-50">{service.title}</h3>
                    <p className="text-sm leading-6 text-slate-400">{service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};