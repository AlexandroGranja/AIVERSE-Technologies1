import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Bot, 
  Cog, 
  Smartphone, 
  ArrowRight, 
  Sparkles,
  Code,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Globe,
    title: "Páginas Web Completas",
    description: "Desenvolvimento de sites modernos, responsivos e otimizados para conversão. Do landing page ao e-commerce completo.",
    features: [
      "Design responsivo e moderno",
      "SEO otimizado",
      "Integração com sistemas",
      "Performance otimizada"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Bot,
    title: "Agentes de Atendimento IA",
    description: "Chatbots inteligentes que revolucionam o atendimento ao cliente com respostas naturais e precisas 24/7.",
    features: [
      "Processamento de linguagem natural",
      "Integração WhatsApp/Site",
      "Aprendizado contínuo",
      "Relatórios detalhados"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Cog,
    title: "Automações de Processos",
    description: "Automatizamos tarefas repetitivas e otimizamos fluxos de trabalho para máxima eficiência empresarial.",
    features: [
      "Automação de workflows",
      "Integração entre sistemas",
      "Relatórios automáticos",
      "Redução de custos"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Smartphone,
    title: "Cardápios Online",
    description: "Soluções completas para restaurantes com cardápios digitais, pedidos online e gestão inteligente.",
    features: [
      "Cardápio digital interativo",
      "Sistema de pedidos",
      "Gestão de estoque",
      "Integração delivery"
    ],
    color: "from-orange-500 to-red-500"
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 px-4 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--primary)) 1px, transparent 1px),
                           radial-gradient(circle at 80% 50%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Nossos Serviços
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções que <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">transformam</span> negócios
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos tecnologias avançadas de IA e desenvolvimento web para automatizar, 
            otimizar e revolucionar a forma como sua empresa opera.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            return (
              <Card 
                key={index}
                className={cn(
                  "group relative overflow-hidden bg-card/50 backdrop-blur-sm",
                  "border-border/50 hover:border-primary/50",
                  "transition-all duration-500 hover:shadow-[var(--shadow-card)]",
                  "hover:scale-[1.02]"
                )}
              >
                {/* Gradient overlay on hover */}
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500",
                  `bg-gradient-to-br ${service.color}`
                )} />
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={cn(
                      "p-3 rounded-lg bg-gradient-to-br",
                      service.color,
                      "shadow-lg group-hover:scale-110 transition-transform duration-300"
                    )}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                  
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-primary/30 hover:bg-primary/10 hover:border-primary/50"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para revolucionar seu negócio?
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para criar soluções personalizadas que atendam 
              exatamente às necessidades do seu negócio. Vamos conversar!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 shadow-[var(--shadow-neural)]"
              >
                <Zap className="mr-2 w-5 h-5" />
                Solicitar Proposta
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 text-primary hover:bg-primary/10"
              >
                <Code className="mr-2 w-5 h-5" />
                Ver Feedbacks
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};