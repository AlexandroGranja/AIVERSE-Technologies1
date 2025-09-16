import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, MessageCircle, Settings } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[hsl(var(--neural-blue))] to-[hsl(var(--neural-cyan))] bg-clip-text text-transparent">
              Projetos
            </span>
            <br />
            <span className="text-foreground">em Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções inovadoras que transformam negócios reais com tecnologia de ponta
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Burger House Project */}
          <Card className="group relative overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[var(--shadow-glow)]">
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src="/burger-house.png" 
                alt="Burger House - Sistema de Pedidos Online" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Tech Stack Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  React
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  n8n
                </Badge>
                <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                  WhatsApp API
                </Badge>
              </div>
            </div>

            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                    🍔 Burger House
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Sistema completo de pedidos online com integração em tempo real ao WhatsApp via n8n
                  </CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Features */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Funcionalidades
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>Cardápio Digital</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    <span>WhatsApp Live</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-4 h-4 text-primary" />
                    <span>Painel Admin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary" />
                    <span>Automação n8n</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-card/50 rounded-lg p-4 border border-border/30">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Revolução na experiência gastronômica!</strong> 
                  O Burger House representa o futuro dos pedidos online, onde cada hambúrguer 
                  encomendado é instantaneamente processado e enviado diretamente para o WhatsApp 
                  do restaurante através de automações inteligentes do n8n.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground group/btn"
                >
                  <a 
                    href="https://burger-house.up.railway.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    Ver Cardápio
                  </a>
                </Button>
                
                <Button 
                  asChild
                  variant="outline" 
                  className="flex-1 border-primary/50 text-primary hover:bg-primary/10 group/btn"
                >
                  <a 
                    href="https://burger-house.up.railway.app/adm-pagina.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Settings className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                    Painel Admin
                  </a>
                </Button>
              </div>

              {/* Live Status */}
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground bg-green-500/10 border border-green-500/20 rounded-lg p-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Sistema Online e Funcionando</span>
              </div>
            </CardContent>
          </Card>

          {/* Placeholder for future projects */}
          <Card className="group relative overflow-hidden border-border/30 hover:border-primary/30 transition-all duration-500 bg-gradient-to-br from-card/50 to-card/30">
            <div className="h-64 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary/50" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                  Próximo Projeto
                </h3>
                <p className="text-sm text-muted-foreground">
                  Em breve, mais soluções inovadoras
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Quer ver seu projeto aqui? Vamos criar algo incrível juntos!
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group shadow-[var(--shadow-neural)] hover:shadow-[var(--shadow-glow)] transition-all duration-300"
            onClick={() => {
              const whatsappNumber = "5521969585179";
              const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de desenvolver um projeto personalizado.`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Iniciar Projeto
          </Button>
        </div>
      </div>
    </section>
  );
};
