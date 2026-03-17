import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  CheckCircle,
  BarChart3,
  Workflow,
  MessageSquare,
  Calendar,
  TrendingUp,
  Target,
  Github,
  ExternalLink,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const fortaoPremiosImage = "/fortao-premios.png";
const burgerHouseImage = "/burger-house-cardapio.png";
const moraesAdesivosImage = "/moraes-adesivos.png";
const prosperRoteirosImage = "/prosper-roteiros.png";
const processadorXmlImage = "/processador-xml.png";

// Array de projetos
const projects = [
  {
    id: "fortao-premios",
    title: "Fortão Prêmios",
    category: "Plataforma Web & Painel Administrativo",
    description: "Plataforma B2B de ações promocionais e sorteios em produção, com experiência pública para compra, painel administrativo completo e arquitetura preparada para alta concorrência.",
    shortDescription: "Plataforma promocional com painel, segurança e operação em produção",
    image: fortaoPremiosImage,
    liveUrl: "https://xn--fortoprmios-c8a8g.com.br/",
    technologies: ["Next.js", "React", "Supabase", "Redis", "Tailwind CSS"],
    features: [
      "Área pública para campanhas e vendas",
      "Painel administrativo com gestão completa",
      "Autenticação segura com JWT e bcrypt",
      "Dashboard com métricas operacionais",
      "Cache e otimizações para alta concorrência",
      "Deploy em produção com foco em estabilidade"
    ],
    projectDetails: {
      challenge: "Criar uma plataforma robusta para campanhas promocionais com operação real, controle administrativo e fluxo de compra confiável.",
      solution: "Estruturamos uma aplicação full-stack com área pública, painel administrativo, autenticação segura, cache de apoio e recursos para sustentar uso contínuo em produção.",
      results: [
        "Operação centralizada em um único painel",
        "Experiência pública responsiva para o cliente final",
        "Base técnica pronta para crescimento e integrações",
        "Projeto em produção com foco em performance"
      ]
    },
    gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
    status: "live"
  },
  {
    id: "burger-house",
    title: "Burger House",
    category: "Cardápio Online & Delivery",
    description: "Sistema de cardápio online com interface moderna, fluxo de pedidos e painel administrativo para operação do restaurante.",
    shortDescription: "Cardápio digital com pedidos, gestão e experiência mobile",
    image: burgerHouseImage,
    liveUrl: "https://cardapio.up.railway.app/",
    githubUrl: "https://github.com/AlexandroGranja/Projeto05-Burger-House",
    technologies: ["React", "Supabase", "Python", "Flask", "Tailwind CSS"],
    features: [
      "Cardápio dinâmico com categorias e produtos",
      "Carrinho e fluxo de checkout",
      "Painel administrativo para gestão",
      "Configurações visuais personalizáveis",
      "Estrutura preparada para operação mobile",
      "Integração com serviços do negócio"
    ],
    projectDetails: {
      challenge: "Levar o atendimento da hamburgueria para o digital sem perder agilidade na operação e clareza para o cliente.",
      solution: "Desenvolvemos um cardápio online com navegação intuitiva, pedido estruturado e painel de gerenciamento para acompanhar a rotina do negócio.",
      results: [
        "Fluxo de pedido mais organizado",
        "Experiência pensada para celular",
        "Operação com painel centralizado",
        "Base pronta para expansão do delivery digital"
      ]
    },
    gradient: "linear-gradient(135deg, #f97316, #ef4444)",
    status: "live"
  },
  {
    id: "moraes-adesivos",
    title: "Moraes Adesivos",
    category: "Site Institucional & Captação de Leads",
    description: "Site comercial criado para apresentar produtos, reforçar autoridade da marca e facilitar o contato comercial com foco em orçamento e conversão.",
    shortDescription: "Presença digital profissional para captar pedidos e fortalecer a marca",
    image: moraesAdesivosImage,
    liveUrl: "https://moraesadesivos.com.br/",
    githubUrl: "https://github.com/AlexandroGranja/MoraisAdesivos",
    technologies: ["HTML", "CSS", "JavaScript", "SEO", "WhatsApp"],
    features: [
      "Landing page com posicionamento comercial claro",
      "Seções de serviços e apresentação da empresa",
      "CTA direto para orçamento no WhatsApp",
      "Layout responsivo e visual profissional",
      "Estrutura focada em conversão",
      "Base otimizada para presença local"
    ],
    projectDetails: {
      challenge: "Transformar a presença digital da empresa em um canal mais confiável para apresentar o negócio e gerar novos contatos.",
      solution: "Criamos uma landing page objetiva, com identidade visual alinhada ao serviço prestado e pontos de contato estratégicos para facilitar o orçamento.",
      results: [
        "Comunicação mais profissional da marca",
        "Canal digital pronto para geração de leads",
        "Apresentação clara de serviços e diferenciais",
        "Experiência consistente em desktop e mobile"
      ]
    },
    gradient: "linear-gradient(135deg, #3b82f6, #9333ea)",
    status: "live"
  },
  {
    id: "prosper-roteiros",
    title: "Prosper Roteiros",
    category: "Sistema Interno & Otimização Operacional",
    description: "Ferramenta operacional para gerar roteiros otimizados de vendedores, agrupando visitas e organizando a execução em campo com apoio visual e critérios geográficos.",
    shortDescription: "Sistema interno para roteirização inteligente e ganho operacional",
    image: prosperRoteirosImage,
    githubUrl: "https://github.com/AlexandroGranja/Roteiro-Prosper",
    technologies: ["React", "Python", "Flask", "Leaflet", "CSV/Excel"],
    features: [
      "Agrupamento inteligente de clientes por rota",
      "Visualização geográfica no mapa",
      "Filtros por vendedor e período",
      "Dashboard com métricas operacionais",
      "Importação e exportação de arquivos",
      "Fluxo pensado para uso interno da equipe"
    ],
    projectDetails: {
      challenge: "Organizar melhor o trabalho de campo da equipe comercial, reduzindo deslocamentos desnecessários e melhorando a leitura das rotas.",
      solution: "Desenhamos um sistema interno com lógica de agrupamento, leitura de dados, visualização em mapa e métricas para apoiar a tomada de decisão diária.",
      results: [
        "Rotinas de visitação mais bem distribuídas",
        "Visão operacional mais clara para gestores",
        "Processo menos manual para montar roteiros",
        "Ferramenta alinhada ao contexto real da equipe"
      ]
    },
    gradient: "linear-gradient(135deg, #0ea5e9, #2563eb)",
    status: "repository"
  },
  {
    id: "processador-xml",
    title: "Processador de XML",
    category: "Ferramenta Operacional & Automação",
    description: "Aplicação criada para automatizar a triagem de XMLs com base em planilhas, eliminando conferência manual e acelerando uma tarefa repetitiva do dia a dia.",
    shortDescription: "Ferramenta prática para cruzar planilhas e XMLs em poucos passos",
    image: processadorXmlImage,
    githubUrl: "https://github.com/AlexandroGranja/site-converter-xml",
    technologies: ["Python", "Flask", "OpenPyXL", "XML", "JavaScript"],
    features: [
      "Upload de planilha e arquivo ZIP",
      "Leitura automática de números de NF",
      "Seleção dos XMLs correspondentes",
      "Geração de novo ZIP com resultado filtrado",
      "Interface simples com feedback visual",
      "Redução de trabalho operacional repetitivo"
    ],
    projectDetails: {
      challenge: "Eliminar um processo manual de conferência entre planilhas e arquivos XML que consumia tempo e aumentava risco de erro.",
      solution: "Criamos uma ferramenta web objetiva: o usuário envia os arquivos, o sistema faz o cruzamento dos dados e devolve apenas os XMLs relevantes em um novo pacote.",
      results: [
        "Processo operacional mais rápido e padronizado",
        "Menos conferência manual arquivo por arquivo",
        "Uso simples para a rotina administrativa",
        "Ferramenta reutilizável para diferentes demandas"
      ]
    },
    gradient: "linear-gradient(135deg, #14b8a6, #0f766e)",
    status: "repository"
  }
];

const services = [
  {
    icon: Globe,
    title: "Páginas Web Completas",
    description: "Criamos sites institucionais, landing pages e plataformas web sob medida com foco em apresentação clara, conversão e operação real.",
    features: [
      "Sites comerciais e institucionais sob medida",
      "Landing pages com foco em conversão",
      "Integração com WhatsApp e formulários",
      "Estrutura responsiva e otimizada"
    ],
    longDescription: "Transformamos necessidades de negócio em experiências web bem resolvidas, desde páginas de apresentação até plataformas com lógica operacional e painel administrativo.",
    howItWorks: {
      process: [
        {
          step: "1. Análise e Planejamento",
          description: "Entendemos o contexto do negócio, o público e o objetivo principal da página ou sistema.",
          icon: Target
        },
        {
          step: "2. Design e Prototipagem",
          description: "Definimos a estrutura da interface e o caminho ideal para o usuário navegar e converter.",
          icon: Code
        },
        {
          step: "3. Desenvolvimento",
          description: "Implementamos a solução com tecnologias modernas e integrações adequadas para o projeto.",
          icon: Workflow
        },
        {
          step: "4. Testes e Otimização",
          description: "Revisamos responsividade, performance e clareza da experiência antes da publicação.",
          icon: CheckCircle
        }
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "TypeScript", "Supabase"],
      benefits: [
        "Presença digital mais profissional",
        "Estrutura clara para captação de leads",
        "Experiência consistente em mobile e desktop",
        "Base pronta para crescer com o negócio"
      ],
      examples: [
        "Moraes Adesivos: site comercial com foco em orçamento",
        "Fortão Prêmios: plataforma pública com painel",
        "Burger House: cardápio online com operação digital"
      ]
    },
    color: "from-blue-500 to-cyan-500",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)"
  },
  {
    icon: Bot,
    title: "Agentes de Atendimento IA",
    description: "Desenvolvemos agentes para WhatsApp e web que qualificam leads, respondem dúvidas e automatizam etapas do atendimento com mais agilidade.",
    features: [
      "Atendimento automatizado em múltiplos canais",
      "Qualificação inicial de clientes e demandas",
      "Integração com fluxos e ferramentas do negócio",
      "Escalonamento para equipe humana quando necessário"
    ],
    longDescription: "Projetamos agentes que não apenas respondem mensagens, mas organizam o funil de entrada, filtram solicitações e deixam o atendimento mais rápido e previsível.",
    howItWorks: {
      process: [
        {
          step: "1. Análise do Atendimento",
          description: "Mapeamos dúvidas recorrentes, objeções e os momentos em que a equipe mais perde tempo.",
          icon: BarChart3
        },
        {
          step: "2. Treinamento da IA",
          description: "Estruturamos a base de respostas, contexto do negócio e regras de atendimento.",
          icon: Bot
        },
        {
          step: "3. Integração e Testes",
          description: "Conectamos o agente ao WhatsApp, site ou ferramentas internas e validamos os fluxos.",
          icon: MessageSquare
        },
        {
          step: "4. Monitoramento e Evolução",
          description: "Ajustamos respostas, encaminhamentos e automações conforme o uso real.",
          icon: TrendingUp
        }
      ],
      technologies: ["OpenAI API", "WhatsApp API", "Python", "n8n", "Webhooks"],
      benefits: [
        "Primeiro atendimento mais rápido",
        "Menos sobrecarga em tarefas repetitivas",
        "Padronização da comunicação comercial",
        "Maior disponibilidade fora do horário comercial"
      ],
      examples: [
        "Captação de leads e triagem automática no WhatsApp",
        "Respostas rápidas para orçamento e dúvidas frequentes",
        "Encaminhamento inteligente para o time comercial"
      ]
    },
    color: "from-purple-500 to-pink-500",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)"
  },
  {
    icon: Cog,
    title: "Automações de Processos",
    description: "Criamos automações e ferramentas internas para reduzir tarefas manuais, acelerar processos e organizar operações do dia a dia.",
    features: [
      "Ferramentas operacionais sob medida",
      "Integração entre planilhas, sistemas e APIs",
      "Automação de tarefas repetitivas",
      "Mais controle sobre a operação"
    ],
    longDescription: "Desenvolvemos soluções que resolvem gargalos reais da operação, seja com dashboards, automações, filtros inteligentes ou aplicações internas específicas.",
    howItWorks: {
      process: [
        {
          step: "1. Mapeamento de Processos",
          description: "Identificamos etapas manuais, pontos de erro e tarefas que consomem tempo da equipe.",
          icon: Workflow
        },
        {
          step: "2. Desenho da Automação",
          description: "Desenhamos a melhor lógica para automatizar ou transformar a rotina em uma ferramenta mais eficiente.",
          icon: Cog
        },
        {
          step: "3. Implementação",
          description: "Construímos a solução conectando dados, regras de negócio e interface quando necessário.",
          icon: Code
        },
        {
          step: "4. Monitoramento",
          description: "Validamos o uso real e refinamos a solução conforme a operação evolui.",
          icon: BarChart3
        }
      ],
      technologies: ["Python", "Flask", "n8n", "APIs REST", "Excel/CSV", "Leaflet"],
      benefits: [
        "Menos retrabalho operacional",
        "Mais velocidade na execução interna",
        "Redução de erros em processos repetitivos",
        "Ferramentas alinhadas ao fluxo real da equipe"
      ],
      examples: [
        "Prosper Roteiros: organização de visitas e rotas",
        "Processador de XML: triagem automática de arquivos",
        "Painéis internos com métricas e gestão operacional"
      ]
    },
    color: "from-green-500 to-emerald-500",
    gradient: "linear-gradient(135deg, #10b981, #059669)"
  },
  {
    icon: Smartphone,
    title: "Cardápios Online",
    description: "Montamos cardápios digitais com identidade visual, pedidos estruturados e gestão simplificada para restaurantes e lanchonetes.",
    features: [
      "Cardápio digital organizado por categorias",
      "Fluxo de pedido pensado para conversão",
      "Painel para gestão do conteúdo",
      "Experiência mobile para clientes"
    ],
    longDescription: "Criamos experiências digitais para alimentação que ajudam o cliente a pedir com facilidade e o negócio a operar com mais clareza e autonomia.",
    howItWorks: {
      process: [
        {
          step: "1. Cadastro do Cardápio",
          description: "Estruturamos produtos, categorias, preços e imagens de forma intuitiva para o cliente.",
          icon: Smartphone
        },
        {
          step: "2. Personalização Visual",
          description: "Aplicamos a identidade visual da marca para que o cardápio pareça parte do negócio, não uma solução genérica.",
          icon: Code
        },
        {
          step: "3. Sistema de Pedidos",
          description: "Configuramos o fluxo de pedido para tornar a experiência simples e prática no celular.",
          icon: CheckCircle
        },
        {
          step: "4. Gestão e Analytics",
          description: "Entregamos uma base administrável para atualizar cardápio, acompanhar operação e evoluir o canal digital.",
          icon: BarChart3
        }
      ],
      technologies: ["React", "Supabase", "Python", "Flask", "Tailwind CSS", "WhatsApp"],
      benefits: [
        "Atendimento mais organizado no digital",
        "Maior praticidade para pedir pelo celular",
        "Atualização rápida de produtos e preços",
        "Melhor apresentação do cardápio da marca"
      ],
      examples: [
        "Burger House: cardápio com pedidos e painel",
        "Menus digitais personalizados para delivery",
        "Estruturas prontas para operação mobile-first"
      ]
    },
    color: "from-orange-500 to-red-500",
    gradient: "linear-gradient(135deg, #f97316, #ef4444)"
  }
];

const marqueeServices = [...services, ...services];

const statusConfig: Record<string, { label: string; className: string; dotClassName: string }> = {
  live: {
    label: "Ao vivo",
    className: "bg-green-500/10 text-green-600 border-green-500/20",
    dotClassName: "bg-green-500",
  },
  repository: {
    label: "Case técnico",
    className: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    dotClassName: "bg-blue-500",
  },
};

// Modal para projetos
const ProjectModal: React.FC<{ project: any }> = ({ project }) => {
  const status = statusConfig[project.status] ?? statusConfig.repository;

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
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8">
          <div className="flex justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[400px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
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
              {project.liveUrl && (
                <Button onClick={() => window.open(project.liveUrl, "_blank")}>
                  <ExternalLink className="mr-2 w-4 h-4" />
                  Site ao Vivo
                </Button>
              )}
              {project.githubUrl && (
                <Button variant="outline" onClick={() => window.open(project.githubUrl, "_blank")}>
                  <Github className="mr-2 w-4 h-4" />
                  Código no GitHub
                </Button>
              )}
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
  const [isServiceModalOpen, setIsServiceModalOpen] = React.useState(false);

  return (
    <section className="relative overflow-hidden px-4 py-24 md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(222_34%_5%/0.92)_0%,hsl(224_38%_4%/0.97)_18%,hsl(226_42%_3%/0.99)_52%,hsl(228_45%_2%/1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_top,hsl(var(--primary)/0.05),transparent_30%)] opacity-60" />

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Soluções que <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">transformam</span> negócios
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos tecnologias avançadas de IA e desenvolvimento web para automatizar,
            otimizar e revolucionar a forma como sua empresa opera.
          </p>
        </div>

        {/* Services marquee */}
        <ScrollReveal variant="fade-up" yOffset={26} durationMs={1100}>
          <div className="relative mb-24 overflow-x-hidden overflow-y-visible rounded-[32px] bg-[linear-gradient(180deg,hsl(224_34%_5%/0.88),hsl(228_40%_3%/0.94))] px-0 py-8 shadow-[var(--shadow-depth)] backdrop-blur-xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-background via-background/90 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-background via-background/90 to-transparent" />

            <div className="service-marquee-shell overflow-x-hidden overflow-y-visible py-4">
              <div className="service-marquee-track items-stretch px-5 py-2">
                {marqueeServices.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <Card
                      key={`${service.title}-${index}`}
                      className={cn(
                        "service-marquee-card group relative overflow-hidden rounded-[28px] !border-0 border-transparent ring-0 bg-[linear-gradient(180deg,hsl(224_24%_8%/0.86),hsl(228_28%_6%/0.82))] shadow-[0_22px_60px_-34px_hsl(220_65%_3%/0.95)] backdrop-blur-xl",
                        "hover:-translate-y-2"
                      )}
                    >
                      <div
                        className={cn(
                          "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20",
                          `bg-gradient-to-br ${service.color}`
                        )}
                      />

                      <CardHeader className="relative z-10 space-y-4 pb-4">
                        <div className="flex items-center gap-4">
                          <div
                            className="rounded-2xl p-3 shadow-lg transition-transform duration-300 group-hover:scale-110"
                            style={{ background: service.gradient }}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>

                          <div>
                            <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary/70">
                              Solucao Premium
                            </div>
                            <CardTitle className="text-xl font-bold leading-tight transition-colors group-hover:text-primary">
                              {service.title}
                            </CardTitle>
                          </div>
                        </div>

                        <CardDescription className="min-h-[4.5rem] text-sm leading-6">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="relative z-10">
                        <div className="mb-6 flex flex-wrap gap-2">
                          {service.features.slice(0, 3).map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        <Button
                          variant="outline"
                          className="w-full border-primary/30 bg-background/30 hover:border-primary/60 hover:bg-primary/10"
                          onClick={() => {
                            setSelectedService(service);
                            setIsServiceModalOpen(true);
                          }}
                        >
                          <span className="flex items-center">
                            Ver Detalhes Completos
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA Section */}
        <ScrollReveal variant="fade-up" yOffset={24} delayMs={140}>
          <div className="mt-20 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Quer ver seu projeto aqui? Vamos criar algo incrível juntos!
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold group shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => {
                const whatsappNumber = "5521996062455";
                const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de desenvolver um projeto personalizado.`;
                window.open(whatsappUrl, "_blank");
              }}
            >
              <MessageSquare className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Iniciar Projeto
            </Button>
          </div>
        </ScrollReveal>


      </div>

      {/* Modais */}
      <Dialog open={isServiceModalOpen} onOpenChange={setIsServiceModalOpen}>
        <DialogContent className="sm:max-w-[900px] w-[90vw] max-h-[85vh] overflow-y-auto">
          {selectedService && <ServiceModal service={selectedService} />}
        </DialogContent>
      </Dialog>

    </section>
  );
};

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = React.useState<any>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = React.useState(false);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Meus Projetos
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos que <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">transformam</span> ideias em realidade
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cases reais do meu portfólio, com foco em plataformas web, sites comerciais,
            ferramentas operacionais e soluções digitais que resolvem problemas do negócio.
          </p>
        </div>

        <ScrollReveal variant="scale-in" staggerChildren staggerStepMs={95} childDistance={58} durationMs={1080}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => {
              const status = statusConfig[project.status] ?? statusConfig.repository;

              return (
                <Card
                  key={project.id}
                  data-reveal-item
                  style={{ ["--item-index" as string]: index } as React.CSSProperties}
                  className="premium-card group relative overflow-hidden hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 flex flex-col h-full"
                >
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-900/50 to-gray-800/30 aspect-[16/10] rounded-t-lg">
                  <div className="absolute inset-0 flex justify-center items-center p-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-w-full max-h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/35 via-transparent to-primary/5 opacity-80" />

                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="secondary" className={cn("backdrop-blur-sm", status.className)}>
                      <div className={cn("w-2 h-2 rounded-full mr-2 animate-pulse", status.dotClassName)} />
                      {status.label}
                    </Badge>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0 backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, "_blank");
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0 backdrop-blur-sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, "_blank");
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardHeader className="flex-grow">
                  <Badge variant="outline" className="text-xs w-fit mb-2">
                    {project.category}
                  </Badge>

                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>

                  <CardDescription className="text-sm mt-2">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 mt-auto">
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs px-2 py-0.5">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group/btn border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                      setIsProjectModalOpen(true);
                    }}
                  >
                    <span className="flex items-center">
                      Ver Detalhes
                      <Eye className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
              );
            })}
          </div>
        </ScrollReveal>
      </div>

      <Dialog open={isProjectModalOpen} onOpenChange={setIsProjectModalOpen}>
        <DialogContent className="sm:max-w-[900px] w-[90vw] max-h-[85vh] overflow-y-auto">
          {selectedProject && <ProjectModal project={selectedProject} />}
        </DialogContent>
      </Dialog>
    </section>
  );
};