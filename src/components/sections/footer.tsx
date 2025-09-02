import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  Instagram,
  MapPin,
  MessageCircle,
  Sparkles,
  Globe,
  Cpu
} from "lucide-react";
import { cn } from "@/lib/utils";
import aiverseLogo from "@/assets/aiverse-logo.png";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Páginas Web Completas",
    "Agentes de Atendimento IA",
    "Automações de Processos",
    "Cardápios Online",
    "Consultoria em IA",
    "Integração de Sistemas"
  ];

  const quickLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contato", href: "#contato" },
    { label: "Blog", href: "#blog" },
    { label: "Suporte", href: "#suporte" }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/aiversetech_oficial/", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/5521969585179?text=Olá,%20vim%20pelo%20site!", label: "WhatsApp" },
    { icon: Mail, href: "mailto:technologiesaiverse@gmail.com", label: "Email" }
  ];

  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/50" />

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-10 left-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-6 flex flex-col items-start">
              <img
                src={aiverseLogo}
                alt="AIVERSE Technologies"
                className="h-13 w-auto mb-6 filter brightness-[4.4] contrast-[3.9] drop-shadow-[0_0_3px_rgba(255,255,255,0.23)]"
              />
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                Revolucionamos negócios com soluções avançadas de IA e desenvolvimento web.
                Transformamos ideias em realidade digital.
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">technologiesaiverse@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">(21) 96958-5179</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Nossos Serviços</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#servicos"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div>
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 p-6">
              <div className="text-center">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Pronto para começar?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Solicite um orçamento gratuito e transforme seu negócio
                </p>
                <Button
                  variant="neural"
                  size="sm"
                  className="w-full"
                  asChild
                >
                  <a href="https://wa.me/5521969585179?text=Olá,%20tenho%20interesse%20nos%20seus%20serviços!">
                    Falar com Especialista
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-left">
              <p className="text-center text-xs text-gray-400 tracking-wide flex items-center justify-center gap-2">
                <Globe className="w-4 h-4" />
                © {currentYear} AIVERSE Technologies — Desenvolvido por Alexandro Granja e Igor Amorim.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "w-8 h-8 text-muted-foreground hover:text-primary",
                      "hover:bg-primary/10 transition-all duration-300"
                    )}
                    asChild
                  >
                    <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                      <Icon className="w-4 h-4" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-6 pt-6 border-t border-border/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-primary transition-colors">Cookies</a>
              </div>
              <div className="text-center md:text-right">
                <p className="flex items-center gap-2 justify-center md:justify-end">
                  <Cpu className="w-4 h-4 text-primary" />
                  Desenvolvido com as tecnologias mais avançadas •
                  <span className="text-primary"> React • TypeScript • IA</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};