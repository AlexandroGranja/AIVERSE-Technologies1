import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import aiverseLogo from "@/assets/Gemini_Generated_Image_5juymw5juymw5juy_pixian_ai.png";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Chat IA", href: "#chat-ia" },
    { label: "Feedbacks", href: "#feedbacks" },
    { label: "Contato", href: "#contato" }
  ];

  const handleWhatsappClick = () => {
    const whatsappNumber = "5521969585179";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de solicitar um orçamento.`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <nav className={cn(
      "relative z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b border-border/50" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={aiverseLogo} 
              alt="AIVERSE Technologies" 
              className="h-12 w-auto filter brightness-[2.9] contrast-[2.9] drop-shadow-[0_0_20px_rgba(255,255,255,0.23)]"
            />
          </div>

          {/* Menus e Botões alinhados à direita */}
          <div className="flex items-center gap-8"> {/* <-- Novo container para agrupar menu e botão */}
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button 
                variant="neural" 
                size="sm"
                className="shadow-[var(--shadow-neural)] hover:shadow-[var(--shadow-glow)]"
                onClick={handleWhatsappClick}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Orçamento Grátis
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="neural" 
                size="sm" 
                className="w-full mt-4"
                onClick={handleWhatsappClick}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Orçamento Grátis
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navigation };