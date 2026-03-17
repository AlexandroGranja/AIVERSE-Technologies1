import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Globe,
  Bot,
  Cog,
  Smartphone,
  Code,
  CheckCircle,
  BarChart3,
  Workflow,
  MessageSquare,
  TrendingUp,
  Target,
  Github,
  ExternalLink
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

export const ServicesSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-4 pt-16 sm:pb-6 sm:pt-20 md:pb-8 md:pt-24">
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
        <div className="mx-auto mb-8 w-full max-w-4xl py-3 text-center md:mb-12 md:py-4">
          <h2 className="text-balance text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Soluções que <span className="bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))] bg-clip-text text-transparent">transformam</span> negócios.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-pretty text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7 md:text-lg">
            Oferecemos tecnologias avançadas de IA e desenvolvimento web para automatizar, otimizar e revolucionar a forma como sua empresa opera.
          </p>
        </div>

        {/* Services marquee */}
        <div className="relative mb-3 overflow-x-hidden overflow-y-visible rounded-none bg-[hsl(227_45%_4%/0.88)] px-0 py-4 sm:mb-4 sm:rounded-[24px] sm:py-7 md:mb-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-16 bg-gradient-to-r from-[hsl(227_45%_4%)] via-[hsl(227_45%_4%/0.9)] to-transparent sm:block md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden w-16 bg-gradient-to-l from-[hsl(227_45%_4%)] via-[hsl(227_45%_4%/0.9)] to-transparent sm:block md:w-24" />

          <div className="service-marquee-shell overflow-x-hidden overflow-y-visible py-2 sm:py-4">
            <div className="service-marquee-track items-stretch px-2 py-2 sm:px-5">
              {marqueeServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                    key={`${service.title}-${index}`}
                className={cn(
                      "service-marquee-card group relative overflow-hidden rounded-[22px] !border-0 border-transparent ring-0 bg-[linear-gradient(180deg,hsl(224_24%_8%/0.86),hsl(228_28%_6%/0.82))] shadow-[0_18px_44px_-30px_hsl(220_65%_3%/0.95)] backdrop-blur-xl",
                      "hover:-translate-y-2"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20",
                        `bg-gradient-to-br ${service.color}`
                      )}
                    />

                    <CardHeader className="relative z-10 space-y-3 px-4 pb-3 pt-4 sm:space-y-4 sm:px-5 sm:pt-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="rounded-xl p-2.5 shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ background: service.gradient }}
                    >
                          <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
                    </div>

                    <div>
                          <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-primary/70 sm:text-[11px] sm:tracking-[0.26em]">
                            Solucao Premium
                          </div>
                          <CardTitle className="text-lg font-bold leading-tight transition-colors group-hover:text-primary sm:text-[1.18rem]">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>

                      <CardDescription className="min-h-[3.8rem] text-xs leading-5 sm:min-h-[4.2rem] sm:text-sm sm:leading-6">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                    <CardContent className="relative z-10 px-4 pb-4 pt-0 sm:px-5 sm:pb-5">
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {service.features.slice(0, 2).map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-muted-foreground sm:px-3 sm:text-xs"
                          >
                            {feature}
                    </span>
                        ))}
                      </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
          </div>
            </div>

      </div>
    </section>
  );
};

export const ProjectsSection: React.FC = () => {
  const timelineItemRefs = React.useRef<Array<HTMLElement | null>>([]);
  const [timelineProgress, setTimelineProgress] = React.useState<Record<number, number>>({});

  React.useEffect(() => {
    const thresholds = Array.from({ length: 101 }, (_, index) => index / 100);

    const observer = new IntersectionObserver(
      (entries) => {
        setTimelineProgress((current) => {
          let hasChange = false;
          const next = { ...current };

          for (const entry of entries) {
            const element = entry.target as HTMLElement;
            const indexValue = element.dataset.projectIndex;
            if (!indexValue) continue;

            const projectIndex = Number(indexValue);
            if (!Number.isFinite(projectIndex)) continue;

            const rawRatio = entry.isIntersecting ? entry.intersectionRatio : 0;
            const normalized = Math.max(0, Math.min(1, (rawRatio - 0.02) / 0.48));
            const eased = normalized * normalized * (3 - 2 * normalized);
            const visibility = Math.round(eased * 1000) / 1000;

            if ((next[projectIndex] ?? 0) !== visibility) {
              next[projectIndex] = visibility;
              hasChange = true;
            }
          }

          return hasChange ? next : current;
        });
      },
      {
        threshold: thresholds,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    timelineItemRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative -mt-2 overflow-hidden px-4 pb-20 pt-2 md:pb-24 md:pt-4">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(222_34%_5%/0.92)_0%,hsl(224_38%_4%/0.97)_18%,hsl(226_42%_3%/0.99)_52%,hsl(228_45%_2%/1)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_top,hsl(var(--primary)/0.05),transparent_30%)] opacity-60" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 18% 52%, hsl(var(--primary)) 1px, transparent 1px),
                           radial-gradient(circle at 82% 48%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: "100px 100px"
        }} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-10 bg-[linear-gradient(180deg,hsl(228_45%_2%)_0%,hsl(228_45%_2%/0.98)_38%,hsl(228_45%_2%/0.88)_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos que <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">entregam</span> resultado real
            </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma vitrine de soluções para você entender, de forma simples, o que cada projeto faz,
            como pode ajudar no dia a dia e quais ganhos pode gerar para o seu negócio.
            </p>
          </div>

        <ScrollReveal variant="scale-in" durationMs={1080}>
          <div className="projects-timeline mx-auto max-w-6xl">
            {projects.map((project, index) => {
              const isLeft = index % 2 === 0;

              return (
                <article
                  key={project.id}
                  ref={(node) => {
                    timelineItemRefs.current[index] = node;
                  }}
                  data-project-index={index}
                  style={{
                    ["--project-visibility" as string]: timelineProgress[index] ?? 0,
                  } as React.CSSProperties}
                  className={cn(
                    "project-timeline-item",
                    isLeft ? "project-timeline-item-left" : "project-timeline-item-right"
                  )}
                >
              <Card
                    style={{
                      ["--project-glow" as string]: project.gradient,
                    } as React.CSSProperties}
                    className="project-timeline-card project-card-fx group relative overflow-visible !border-0 !shadow-none !bg-transparent rounded-[24px] transition-all duration-500"
                  >
                    <div className="relative overflow-hidden rounded-t-[24px] bg-transparent">
                    <img
                      src={project.image}
                      alt={project.title}
                        className="block h-auto w-full object-contain"
                      />
                    </div>

                    <div className="project-card-content-shell">
                      <span className="project-timeline-dot" aria-hidden="true" />

                      <div className="project-card-body">
                        <span className="project-timeline-pointer" aria-hidden="true" />

                        <CardHeader className="pb-2">
                          <Badge variant="secondary" className="mb-2 w-fit border-0 bg-white/10 text-xs text-slate-200">
                    {project.category}
                  </Badge>

                          <CardTitle className="text-xl font-bold transition-colors group-hover:text-primary">
                    {project.title}
                  </CardTitle>

                          <CardDescription className="mt-2 text-sm">
                    {project.shortDescription}
                  </CardDescription>
                </CardHeader>

                        <CardContent className="pb-5 pt-0">
                          <Accordion type="single" collapsible defaultValue={`${project.id}-overview`} className="project-showcase-accordion">
                            <AccordionItem value={`${project.id}-overview`} className="project-showcase-item">
                              <AccordionTrigger className="project-showcase-trigger">O que essa solução faz</AccordionTrigger>
                              <AccordionContent className="project-showcase-content">
                                <p>{project.description}</p>
                              </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value={`${project.id}-help`} className="project-showcase-item">
                              <AccordionTrigger className="project-showcase-trigger">Como pode ajudar seu negócio</AccordionTrigger>
                              <AccordionContent className="project-showcase-content">
                                <ul className="space-y-2">
                                  {project.features.slice(0, 4).map((feature: string, itemIndex: number) => (
                                    <li key={itemIndex} className="flex items-start gap-2">
                                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary/85" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value={`${project.id}-results`} className="project-showcase-item">
                              <AccordionTrigger className="project-showcase-trigger">Resultados que você pode esperar</AccordionTrigger>
                              <AccordionContent className="project-showcase-content">
                                <ul className="space-y-2">
                                  {project.projectDetails.results.slice(0, 3).map((result: string, itemIndex: number) => (
                                    <li key={itemIndex} className="flex items-start gap-2">
                                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/85" />
                                      <span>{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.liveUrl && (
                              <Button size="sm" className="bg-primary/90 text-primary-foreground hover:bg-primary" onClick={() => window.open(project.liveUrl, "_blank")}>
                                Ver exemplo
                                <ExternalLink className="ml-2 h-4 w-4" />
                              </Button>
                            )}
                            {!project.liveUrl && project.githubUrl && (
                              <Button size="sm" variant="outline" className="border-primary/35 hover:border-primary/55 hover:bg-primary/10" onClick={() => window.open(project.githubUrl, "_blank")}>
                                Ver referencia
                                <Github className="ml-2 h-4 w-4" />
                              </Button>
                    )}
                  </div>
                </CardContent>
                      </div>
                    </div>
              </Card>
                </article>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};