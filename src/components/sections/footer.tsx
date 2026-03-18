import React from "react";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MessageCircle,
  Instagram
} from "lucide-react";
import aiverseLogo from "@/assets/aiverse-logo.png";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/aiversetech_oficial/", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/5521996062455?text=Olá,%20vim%20pelo%20site!", label: "WhatsApp" },
    { icon: Mail, href: "mailto:technologiesaiverse@gmail.com", label: "E-mail" }
  ];

  return (
    <footer className="relative border-t border-white/10 bg-[hsl(228_45%_2%)]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(228_45%_2%)_0%,hsl(226_42%_3%/0.98)_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-4 sm:py-5">
        <div className="mb-5 flex justify-center">
          <img
            src={aiverseLogo}
            alt="AIVERSE Technologies"
            className="h-14 w-auto brightness-[3.2] contrast-[4] sm:h-16"
          />
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-muted-foreground">
            © {currentYear} AIVERSE Technologies. Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/alexsandrogranja/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary transition-colors hover:text-primary/80 hover:underline"
            >
              Alexandro Granja
            </a>
            .
          </p>

          <div className="flex items-center justify-center gap-2 md:justify-end">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-muted-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};