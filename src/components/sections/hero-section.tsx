import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import aiverseLogo from "@/assets/aiverse-logo.png";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-dark)]" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-1 h-1 bg-primary/30 rounded-full",
              "animate-pulse"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Neural network lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          <g stroke="url(#lineGradient)" strokeWidth="2" fill="none">
            <path d="M100 200 Q600 100 1100 300" className="animate-network-flow" />
            <path d="M200 500 Q700 300 1000 600" className="animate-network-flow" style={{ animationDelay: '1s' }} />
            <path d="M50 600 Q500 400 900 200" className="animate-network-flow" style={{ animationDelay: '2s' }} />
          </g>
          
          {/* Network nodes */}
          {[
            { x: 100, y: 200 }, { x: 600, y: 100 }, { x: 1100, y: 300 },
            { x: 200, y: 500 }, { x: 700, y: 300 }, { x: 1000, y: 600 },
            { x: 50, y: 600 }, { x: 500, y: 400 }, { x: 900, y: 200 }
          ].map((node, i) => (
            <circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="4"
              fill="hsl(var(--primary))"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img 
            src={aiverseLogo} 
            alt="AIVERSE Technologies" 
            className="h-0 w-auto mx-auto mb-6 animate-float"
          />
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="bg-gradient-to-r from-[hsl(var(--neural-blue))] to-[hsl(var(--neural-cyan))] bg-clip-text text-transparent">
            AIVERSE
          </span>
          <br />
          <span className="text-foreground">Technologies</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Revolucionamos seu negócio com <span className="text-accent font-semibold">Inteligência Artificial</span> e 
          <span className="text-accent font-semibold"> desenvolvimento web avançado</span>
        </p>

        {/* Services highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {[
            { icon: "🌐", title: "Páginas Web", desc: "Sites completos" },
            { icon: "🤖", title: "Agentes IA", desc: "Atendimento inteligente" },
            { icon: "⚙️", title: "Automações", desc: "Processos otimizados" },
            { icon: "📱", title: "Cardápios Online", desc: "Soluções gastronômicas" }
          ].map((service, index) => (
            <div key={index} className="bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-border/30 hover:border-primary/50 transition-all duration-300">
              <div className="text-2xl mb-2">{service.icon}</div>
              <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
              <p className="text-xs text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group shadow-[var(--shadow-neural)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            onClick={() => {
              const whatsappNumber = "5521969585179";
              const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento.`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            Solicitar Orçamento
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-4 text-lg group"
          >
            <Sparkles className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            Ver Projetos
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-muted-foreground mb-4">Confiança de empresas em todo Brasil</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm">+100 Projetos</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm">98% Satisfação</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm">Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};