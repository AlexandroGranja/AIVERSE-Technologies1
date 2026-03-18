import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactSection: React.FC = () => {
  const whatsappNumber = "5521996062455";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Quero falar com a AIVERSE Technologies sobre um projeto.")}`;
  const emailAddress = "technologiesaiverse@gmail.com";
  const emailUrl = `mailto:${emailAddress}`;

  const contactInfo = [
    {
      icon: Mail,
      title: "E-mail",
      content: emailAddress,
      description: "Ideal para propostas e contatos comerciais",
      actionLabel: "Enviar e-mail",
      actionUrl: emailUrl,
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(21) 99606-2455",
      description: "Canal mais rapido para iniciar a conversa",
      actionLabel: "Chamar no WhatsApp",
      actionUrl: whatsappUrl,
    },
    {
      icon: Clock,
      title: "Horario de atendimento",
      content: "Seg - Sex: 9h às 18h",
      description: "Retorno rapido em horario comercial",
    },
    {
      icon: MapPin,
      title: "Atendimento",
      content: "Online para todo o Brasil",
      description: "Base no Rio de Janeiro, RJ",
    }
  ];

  return (
    <section className="relative -mt-2 overflow-hidden px-4 py-16 sm:py-20" id="contato">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(222_34%_5%/0.92)_0%,hsl(224_38%_4%/0.97)_18%,hsl(226_42%_3%/0.99)_52%,hsl(228_45%_2%/1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_top,hsl(var(--primary)/0.05),transparent_30%)] opacity-60" />
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 1px, transparent 1px),
                             radial-gradient(circle at 80% 50%, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-10 bg-[linear-gradient(180deg,hsl(228_45%_2%)_0%,hsl(228_45%_2%/0.98)_38%,hsl(228_45%_2%/0.88)_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 text-center sm:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fale com a <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AIVERSE</span>
          </h2>

          <p className="mx-auto max-w-3xl text-lg text-muted-foreground md:text-xl">
            Se quiser tirar uma duvida, pedir um orçamento ou conversar sobre o seu projeto, estes sao os canais mais diretos para falar com a gente.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {contactInfo.map((info) => {
            const Icon = info.icon;

            return (
              <Card
                key={info.title}
                className={cn(
                  "border-white/10 bg-[linear-gradient(180deg,hsl(224_24%_8%/0.86),hsl(228_28%_6%/0.82))] backdrop-blur-xl",
                  "transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_18px_44px_-30px_hsl(220_65%_3%/0.95)]"
                )}
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">{info.title}</h3>
                  <p className="mb-2 text-foreground font-medium">{info.content}</p>
                  <p className="text-sm leading-6 text-muted-foreground">{info.description}</p>

                  {"actionUrl" in info && info.actionUrl && (
                    <Button
                      variant="outline"
                      className="mt-5 w-full border-white/15 bg-white/5 hover:bg-white/10"
                      onClick={() => window.open(info.actionUrl, "_blank")}
                    >
                      {info.actionLabel}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};