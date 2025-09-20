import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import aiverseLogo from "@/assets/Gemini_Generated_Image_5juymw5juymw5juy_pixian_ai.png";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Detectar seção ativa baseada no scroll
      const sections = ['inicio', 'servicos', 'chat-ia', 'feedbacks', 'contato'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio", id: "inicio" },
    { label: "Serviços", href: "#servicos", id: "servicos" },
    { label: "Chat IA", href: "#chat-ia", id: "chat-ia" },
    { label: "Feedbacks", href: "#feedbacks", id: "feedbacks" },
    { label: "Contato", href: "#contato", id: "contato" }
  ];

  const handleWhatsappClick = () => {
    const whatsappNumber = "5521969585179";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento.`;
    window.open(whatsappUrl, "_blank");
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
      isScrolled 
        ? "bg-transparent border-b border-primary/10" 
        : "bg-transparent"
    )}>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo com efeitos aprimorados */}
          <div className="flex items-center group">
            <div className="relative">
              {/* Efeito de glow sutil */}
              <div className={cn(
                "absolute -inset-2 rounded-full transition-all duration-500",
                "bg-gradient-to-r from-primary/20 to-cyan-400/15",
                "blur-lg scale-105",
                isScrolled ? "opacity-40" : "opacity-0 group-hover:opacity-30"
              )} />
              
              <img 
                src={aiverseLogo} 
                alt="AIVERSE Technologies" 
                className={cn(
                  "relative z-10 h-14 w-auto transition-all duration-300",
                  "group-hover:scale-105 group-active:scale-95",
                  "filter brightness-[2.9] contrast-[2.9]",
                  isScrolled 
                    ? "drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]" 
                    : "drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                )}
              />
              
              {/* Efeito de borda sutil */}
              <div className={cn(
                "absolute inset-0 rounded-full transition-all duration-300",
                "border border-transparent",
                "group-hover:border-primary/30",
                isScrolled && "border-primary/20"
              )} />
            </div>
          </div>

          {/* Menus e Botões alinhados à direita */}
          <div className="flex items-center gap-8">
            {/* Desktop Navigation com efeitos aprimorados */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <div key={index} className="relative group">
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.href);
                      }}
                      className={cn(
                        "relative px-4 py-2 text-sm font-medium transition-all duration-300",
                        "rounded-lg group-hover:bg-primary/10",
                        isActive 
                          ? "text-primary" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {/* Indicador ativo */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-lg" />
                      )}
                      
                      {/* Efeito de hover com glow */}
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Linha inferior animada */}
                      <div className={cn(
                        "absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-primary to-cyan-400",
                        "transition-all duration-300 transform -translate-x-1/2",
                        isActive ? "w-3/4" : "w-0 group-hover:w-1/2"
                      )} />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* CTA Button com efeitos aprimorados */}
            <div className="hidden md:block">
              <Button 
                variant="neural" 
                size="sm"
                className={cn(
                  "relative overflow-hidden transition-all duration-500",
                  "shadow-[var(--shadow-neural)] hover:shadow-[var(--shadow-glow)]",
                  "hover:scale-105 active:scale-95",
                  isScrolled && "shadow-2xl shadow-primary/30"
                )}
                onClick={handleWhatsappClick}
              >
                {/* Efeito de partículas animadas */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <Sparkles className="w-4 h-4 mr-2 relative z-10" />
                <span className="relative z-10">Orçamento Grátis</span>
              </Button>
            </div>
          </div>

          {/* Mobile menu button com efeitos */}
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden relative overflow-hidden",
              "hover:bg-primary/10 transition-all duration-300",
              "hover:scale-110 active:scale-95"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-400/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10 transition-transform duration-300">
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </div>
          </Button>
        </div>

        {/* Mobile menu com efeitos aprimorados */}
        <div className={cn(
          "md:hidden transition-all duration-500 ease-out overflow-hidden",
          isMobileMenuOpen 
            ? "max-h-96 opacity-100 border-t border-primary/20 bg-background/95 backdrop-blur-sm" 
            : "max-h-0 opacity-0"
        )}>
          <div className="px-4 py-6 space-y-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300",
                    "hover:bg-primary/15 hover:scale-105 active:scale-95",
                    isActive 
                      ? "text-primary bg-primary/15 border border-primary/30" 
                      : "text-foreground hover:text-primary"
                  )}
                >
                  {item.label}
                </a>
              );
            })}
            <Button 
              variant="neural" 
              size="sm" 
              className={cn(
                "w-full mt-4 relative overflow-hidden",
                "hover:scale-105 active:scale-95 transition-all duration-300",
                "bg-primary/90 hover:bg-primary shadow-lg"
              )}
              onClick={handleWhatsappClick}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <Sparkles className="w-4 h-4 mr-2 relative z-10" />
              <span className="relative z-10">Orçamento Grátis</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navigation };