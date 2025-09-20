import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Globe,
  Bot,
  Cog,
  Smartphone,
  ArrowRight,
  Sparkles,
  Code,
  Zap,
  CheckCircle,
  Users,
  BarChart3,
  Clock,
  Shield,
  Workflow,
  MessageSquare,
  Calendar,
  TrendingUp,
  Target,
  Github,
  ExternalLink,
  Search,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

// Imagem do projeto Morais Adesivos
const moraisAdesivosImage = "/Moraes.png";

// Imagem do projeto Burger House
const burgerHouseImage = "/burger-house.png";

// Array de projetos
const projects = [
  {
    id: "burger-house",
    title: "Burger House",
    category: "Cardápio Online & Delivery",
    description: "Landing page completa para hamburguerias com cardápio digital, sistema de pedidos, integração com WhatsApp/Telegram e automação de notificações via n8n para aceitação e entrega de pedidos, com design responsivo.",
    shortDescription: "Cardápio digital interativo com pedidos online e automação n8n",
    image: burgerHouseImage,
    liveUrl: "https://burger-house.up.railway.app",
    githubUrl: "https://github.com/AlexandroGranja/Projeto05-Burger-House",
    adminUrl: "https://burger-house.up.railway.app/adm-pagina.html",
    technologies: ["React", "Flask", "JavaScript", "Tailwind CSS", "n8n"],
    features: [
      "Cardápio digital interativo",
      "Carrinho dinâmico de pedidos",
      "Integração com WhatsApp e Telegram",
      "Painel de administração de pedidos",
      "Automação de notificações de pedido (aceitação e entrega) via n8n",
      "Design responsivo para celular e desktop"
    ],
    projectDetails: {
      challenge: "Criar uma solução digital moderna para hamburguerias, permitindo pedidos online de forma prática e intuitiva.",
      solution: "Desenvolvimento de uma landing page responsiva com cardápio digital, carrinho de compras, integração com WhatsApp/Telegram para envio de pedidos e automação de notificações de status de pedido (aceitação e entrega) via n8n.",
      results: [
        "Redução de 60% no tempo de atendimento",
        "Aumento de 45% no ticket médio",
        "Clientes fazendo pedidos direto do celular",
        "Design otimizado para mobile first"
      ]
    },
    gradient: "linear-gradient(135deg, #f97316, #ef4444)",
    status: "live"
  },
  {
    id: "morais-adesivos",
    title: "Morais Adesivos",
    category: "E-commerce & Catálogo Digital",
    description: "Site completo para empresa de adesivos personalizados com catálogo digital, galeria de produtos e sistema de orçamentos online.",
    shortDescription: "Plataforma digital para adesivos personalizados",
    image: moraisAdesivosImage,
    liveUrl: "https://www.moraesadesivos.com.br",
    githubUrl: "https://github.com/AlexandroGranja/MoraisAdesivos",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    features: [
      "Catálogo digital interativo",
      "Sistema de orçamentos online",
      "Galeria de produtos personalizados",
      "Design responsivo e moderno",
      "SEO otimizado",
      "Integração com WhatsApp"
    ],
    projectDetails: {
      challenge: "Criar uma presença digital moderna para empresa de adesivos, permitindo que clientes visualizem produtos e solicitem orçamentos de forma prática.",
      solution: "Desenvolvimento de site responsivo com catálogo digital, galeria de produtos e sistema de orçamentos integrado ao WhatsApp.",
      results: [
        "Aumento de 200% nas consultas online",
        "Interface moderna e profissional",
        "Tempo de carregamento otimizado",
        "Experiência móvel aprimorada"
      ]
    },
    gradient: "linear-gradient(135deg, #3b82f6, #9333ea)",
    status: "live"
  }
];

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
    longDescription: "Nossa expertise em desenvolvimento web abrange desde landing pages de alta conversão até e-commerces robustos e personalizados.",
    howItWorks: {
      process: [
        {
          step: "1. Análise e Planejamento",
          description: "Entendemos seu negócio, público-alvo e objetivos para criar a estratégia ideal.",
          icon: Target
        },
        {
          step: "2. Design e Prototipagem",
          description: "Criamos wireframes e protótipos interativos para validar a experiência do usuário.",
          icon: Code
        },
        {
          step: "3. Desenvolvimento",
          description: "Codificamos usando tecnologias modernas como React, Next.js e TypeScript.",
          icon: Workflow
        },
        {
          step: "4. Testes e Otimização",
          description: "Realizamos testes de performance, SEO e responsividade em todos os dispositivos.",
          icon: CheckCircle
        }
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "WordPress"],
      benefits: [
        "Aumento de até 300% na conversão de visitantes",
        "Carregamento 5x mais rápido que concorrentes",
        "SEO otimizado para ranquear no Google",
        "Design responsivo para todos os dispositivos"
      ],
      examples: [
        "E-commerce com + de 1000 produtos",
        "Landing page que gerou R$ 2M em vendas",
        "Site institucional com 50+ páginas"
      ]
    },
    color: "from-blue-500 to-cyan-500",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
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
    longDescription: "Desenvolvemos chatbots e agentes de atendimento baseados em inteligência artificial que transformam a interação com seus clientes.",
    howItWorks: {
      process: [
        {
          step: "1. Análise do Atendimento",
          description: "Mapeamos suas principais demandas, perguntas frequentes e fluxos de atendimento.",
          icon: BarChart3
        },
        {
          step: "2. Treinamento da IA",
          description: "Alimentamos a IA com informações específicas do seu negócio e produtos/serviços.",
          icon: Bot
        },
        {
          step: "3. Integração e Testes",
          description: "Integramos nos seus canais (WhatsApp, site) e realizamos testes extensivos.",
          icon: MessageSquare
        },
        {
          step: "4. Monitoramento e Evolução",
          description: "Acompanhamos performance e otimizamos continuamente as respostas.",
          icon: TrendingUp
        }
      ],
      technologies: ["OpenAI GPT", "WhatsApp Business API", "Webhook", "Python", "Natural Language Processing"],
      benefits: [
        "Redução de 80% no tempo de resposta",
        "Atendimento 24h sem custos adicionais",
        "Satisfação do cliente 95% superior",
        "Economia de até R$ 15.000/mês em pessoal"
      ],
      examples: [
        "Chatbot que atende 500+ pessoas/dia",
        "IA que resolve 85% das dúvidas automaticamente",
        "Sistema que agenda consultas sozinho"
      ]
    },
    color: "from-purple-500 to-pink-500",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)"
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
    longDescription: "Nossas soluções de automação de processos são projetadas para eliminar tarefas repetitivas e otimizar seus fluxos de trabalho.",
    howItWorks: {
      process: [
        {
          step: "1. Mapeamento de Processos",
          description: "Identificamos todas as tarefas manuais e repetitivas do seu negócio.",
          icon: Workflow
        },
        {
          step: "2. Desenho da Automação",
          description: "Criamos fluxos automatizados conectando diferentes sistemas e ferramentas.",
          icon: Cog
        },
        {
          step: "3. Implementação",
          description: "Desenvolvemos e implantamos as automações usando ferramentas modernas.",
          icon: Code
        },
        {
          step: "4. Monitoramento",
          description: "Acompanhamos a performance e otimizamos continuamente os processos.",
          icon: BarChart3
        }
      ],
      technologies: ["Zapier", "Make.com", "Python", "APIs REST", "Google Workspace", "Microsoft 365"],
      benefits: [
        "Economia de 40+ horas/semana da equipe",
        "Redução de 90% dos erros manuais",
        "ROI positivo em até 3 meses",
        "Relatórios automáticos em tempo real"
      ],
      examples: [
        "Automação de envio de 1000+ e-mails/day",
        "Sincronização automática entre 5 sistemas",
        "Geração automática de relatórios semanais"
      ]
    },
    color: "from-green-500 to-emerald-500",
    gradient: "linear-gradient(135deg, #10b981, #059669)"
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
    longDescription: "Oferecemos soluções completas para o setor de alimentação, com cardápios digitais interativos que permitem aos seus clientes fazerem pedidos online.",
    howItWorks: {
      process: [
        {
          step: "1. Cadastro do Cardápio",
          description: "Organizamos todos os seus pratos, preços e fotos em categorias intuitivas.",
          icon: Smartphone
        },
        {
          step: "2. Personalização Visual",
          description: "Criamos um design único que reflete a identidade visual do seu restaurante.",
          icon: Code
        },
        {
          step: "3. Sistema de Pedidos",
          description: "Implementamos carrinho de compras, formas de pagamento e confirmação automática.",
          icon: CheckCircle
        },
        {
          step: "4. Gestão e Analytics",
          description: "Dashboard completo para gerenciar pedidos, estoque e acompanhar vendas.",
          icon: BarChart3
        }
      ],
      technologies: ["QR Code", "PWA", "Stripe/PagSeguro", "WhatsApp API", "Firebase", "Analytics"],
      benefits: [
        "Aumento de 45% no ticket médio",
        "Redução de 60% no tempo do pedido",
        "Zero custo com impressão de cardápios",
        "Integração total com delivery"
      ],
      examples: [
        "Restaurante com 200+ pedidos/dia via QR",
        "Lanchonete que eliminou filas de espera",
        "Bar que aumentou vendas em 150%"
      ]
    },
    color: "from-orange-500 to-red-500",
    gradient: "linear-gradient(135deg, #f97316, #ef4444)"
  }
];

// Modal para projetos
const ProjectModal: React.FC<{ project: any }> = ({ project }) => {
  return (
    <>
      <DialogHeader className="pb-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-16 h-16 rounded-xl object-contain bg-gray-900 p-1"
          />
          <div>
            <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            <DialogDescription className="text-base mt-2">
              {project.description}
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <div className="space-y-8">
        {/* Imagem principal */}
        <div className="flex justify-center overflow-hidden rounded-xl">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-[400px] w-auto rounded-xl object-contain"
          />
        </div>
        
        {/* Desafio e Solução */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" />
              Desafio
            </h3>
            <p className="text-sm text-muted-foreground">{project.projectDetails.challenge}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Solução
            </h3>
            <p className="text-sm text-muted-foreground">{project.projectDetails.solution}</p>
          </div>
        </div>

        <Separator />

        {/* Funcionalidades Principais */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            Funcionalidades Principais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {project.features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Tecnologias */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            Tecnologias Utilizadas
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Resultados */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Resultados Alcançados
          </h3>
          <div className="space-y-3">
            {project.projectDetails.results.map((result: string, index: number) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-sm font-medium">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Ver Projeto</h4>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => window.open(project.liveUrl, "_blank")}>
                <ExternalLink className="mr-2 w-4 h-4" />
                Site ao Vivo
              </Button>
              <Button variant="outline" onClick={() => window.open(project.githubUrl, "_blank")}>
                <Github className="mr-2 w-4 h-4" />
                Código no GitHub
              </Button>
              {project.adminUrl && (
                <Button variant="outline" onClick={() => window.open(project.adminUrl, "_blank")}>
                  <Eye className="mr-2 w-4 h-4" />
                  Painel Admin
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Modal para serviços
const ServiceModal: React.FC<{ service: any }> = ({ service }) => {
  const Icon = service.icon;

  return (
    <>
      <DialogHeader className="pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div
            className="p-4 rounded-xl shadow-lg"
            style={{ background: service.gradient }}
          >
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <DialogTitle className="text-2xl font-bold">{service.title}</DialogTitle>
            <DialogDescription className="text-base mt-2">
              {service.longDescription}
            </DialogDescription>
          </div>
        </div>
      </DialogHeader>

      <div className="space-y-8">
        {/* Como Funciona */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Workflow className="w-5 h-5 text-primary" />
            Como Funciona
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.howItWorks.process.map((step: any, index: number) => {
              const StepIcon = step.icon;
              return (
                <div key={index} className="flex gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <StepIcon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{step.step}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <Separator />

        {/* Tecnologias */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            Tecnologias Utilizadas
          </h3>
          <div className="flex flex-wrap gap-2">
            {service.howItWorks.technologies.map((tech: string, index: number) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        {/* Benefícios */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Principais Benefícios
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {service.howItWorks.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Exemplos Práticos */}
        <div>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Exemplos de Projetos
          </h3>
          <div className="space-y-3">
            {service.howItWorks.examples.map((example: string, index: number) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <span className="text-sm font-medium">{example}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-xl border border-primary/20">
          <div className="text-center space-y-4">
            <h4 className="text-lg font-semibold">Interessado neste serviço?</h4>
            <p className="text-sm text-muted-foreground">
              Vamos conversar sobre como podemos ajudar o seu negócio com {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="px-6">
                <MessageSquare className="mr-2 w-4 h-4" />
                Falar com Especialista
              </Button>
              <Button variant="outline">
                <Calendar className="mr-2 w-4 h-4" />
                Agendar Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = React.useState<any>(null);
  const [selectedProject, setSelectedProject] = React.useState<any>(null);
  const [isServiceModalOpen, setIsServiceModalOpen] = React.useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = React.useState(false);

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
                  "transition-all duration-500 hover:shadow-2xl",
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
                    <div
                      className="p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ background: service.gradient }}
                    >
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
                    onClick={() => {
                      setSelectedService(service);
                      setIsServiceModalOpen(true);
                    }}
                  >
                    <span className="flex items-center">
                      Ver Detalhes Completos
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Seção de Projetos */}
        <div id="projects" className="py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Meus Projetos
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projetos que <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">transformam</span> ideias em realidade
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Confira alguns dos projetos que desenvolvi, desde sites corporativos até
              plataformas e-commerce completas.
            </p>
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden flex justify-center items-center h-[200px] sm:h-[250px] bg-gray-900 rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-auto object-contain rounded-t-lg"
                  />

                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-500/20">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      Live
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="h-8 w-8 p-0"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <Badge variant="outline" className="text-xs w-fit mb-2">
                    {project.category}
                  </Badge>

                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>

                  <CardDescription className="text-sm">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSelectedProject(project);
                      setIsProjectModalOpen(true);
                    }}
                  >
                    Ver Detalhes
                    <Eye className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Quer ver seu projeto aqui? Vamos criar algo incrível juntos!
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              const whatsappNumber = "5521969585179";
              const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de desenvolver um projeto personalizado.`;
              window.open(whatsappUrl, "_blank");
            }}
          >
            <MessageSquare className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Iniciar Projeto
          </Button>
        </div>

        {/* Feedbacks Section */}
        <div id="feedbacks" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              O que nossos clientes dizem 🚀
            </h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 */}
              <div className="bg-white/5 border border-primary/20 rounded-2xl p-4 shadow-lg">
                <img
                  src="/feedback1.png"
                  alt="Feedback cliente 1"
                  className="rounded-lg w-full h-[400px] object-contain hover:scale-[1.02] transition-transform"
                />
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 border border-primary/20 rounded-2xl p-4 shadow-lg">
                <img
                  src="/feedback2.png"
                  alt="Feedback cliente 2"
                  className="rounded-lg w-full h-[400px] object-contain hover:scale-[1.02] transition-transform"
                />
              </div>

              {/* Card 3 */}
              <div className="bg-white/5 border border-primary/20 rounded-2xl p-4 shadow-lg">
                <img
                  src="/feedback3.png"
                  alt="Feedback cliente 3"
                  className="rounded-lg w-full h-[400px] object-contain hover:scale-[1.02] transition-transform"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Modais */}
      <Dialog open={isServiceModalOpen} onOpenChange={setIsServiceModalOpen}>
        <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto" style={{ zIndex: 99999 }}>
          {selectedService && <ServiceModal service={selectedService} />}
        </DialogContent>
      </Dialog>

      <Dialog open={isProjectModalOpen} onOpenChange={setIsProjectModalOpen}>
        <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto" style={{ zIndex: 99999 }}>
          {selectedProject && <ProjectModal project={selectedProject} />}
        </DialogContent>
      </Dialog>

    </section>
  );
};