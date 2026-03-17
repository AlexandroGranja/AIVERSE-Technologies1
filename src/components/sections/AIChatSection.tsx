import React, { useEffect, useMemo, useRef, useState } from "react";
import { Bot, RotateCcw, Send, Signal, Wifi, Battery } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  displayText?: string;
}

interface TopicQuestion {
  id: string;
  question: string;
  answer: (name: string) => string;
}

interface ConversationTopic {
  id: string;
  title: string;
  intro: (name: string) => string;
  questions: TopicQuestion[];
}

const initialBotMessage = (): ChatMessage => ({
  id: "intro-name",
  text: "Oi. Antes de comecarmos, como posso te chamar?",
  isBot: true,
  timestamp: new Date(),
});

const conversationTopics: ConversationTopic[] = [
  {
    id: "support-agent",
    title: "Agente de atendimento",
    intro: (name) =>
      `${name}, esse tipo de agente ajuda a responder duvidas iniciais, orientar o visitante e encaminhar para sua equipe no momento certo.`,
    questions: [
      {
        id: "support-hours",
        question: "Ele consegue atender fora do horario comercial?",
        answer: (name) =>
          `Sim, ${name}. O agente pode ficar ativo fora do horario comercial para responder perguntas comuns e manter o atendimento em andamento.`,
      },
      {
        id: "support-whatsapp",
        question: "Ele pode levar a conversa para o WhatsApp?",
        answer: (name) =>
          `Pode, ${name}. Depois de entender a necessidade do visitante, ele pode direcionar a conversa para o WhatsApp e entregar o contato mais preparado para a equipe.`,
      },
      {
        id: "support-faq",
        question: "Ele tira duvidas antes de falar com um atendente?",
        answer: (name) =>
          `Sim. Ele consegue responder perguntas frequentes, explicar servicos e evitar que o visitante saia do site sem entender o proximo passo.`,
      },
      {
        id: "support-site",
        question: "Como isso aparece no meu site?",
        answer: (name) =>
          `${name}, ele pode aparecer de forma simples no site, como um canal de atendimento inicial que recebe o visitante e conduz a conversa de forma natural.`,
      },
    ],
  },
  {
    id: "automation",
    title: "Automacoes",
    intro: (name) =>
      `${name}, as automacoes ajudam a reduzir tarefas repetitivas e deixam o processo mais rapido no dia a dia do negocio.`,
    questions: [
      {
        id: "automation-routine",
        question: "Que tipo de tarefa da rotina da para automatizar?",
        answer: (name) =>
          `Depende do seu processo, ${name}, mas normalmente automatizamos atendimento inicial, envio de informacoes, organizacao de contatos e etapas operacionais repetitivas.`,
      },
      {
        id: "automation-time",
        question: "Isso ajuda mesmo a ganhar tempo?",
        answer: (name) =>
          `Ajuda sim. A ideia e tirar da equipe aquilo que e manual e repetitivo para sobrar mais tempo para atender, vender e organizar melhor o negocio.`,
      },
      {
        id: "automation-integration",
        question: "Da para conectar com o que eu ja uso hoje?",
        answer: (name) =>
          `Em muitos casos, sim, ${name}. Primeiro entendemos seu fluxo atual e depois avaliamos a forma mais simples de integrar sem complicar a operacao.`,
      },
      {
        id: "automation-start",
        question: "Qual seria o primeiro passo para automatizar?",
        answer: (name) =>
          `O primeiro passo e mapear o que mais toma tempo hoje. A partir disso, definimos o que vale automatizar primeiro para gerar resultado mais rapido.`,
      },
    ],
  },
  {
    id: "web-project",
    title: "Site ou landing page",
    intro: (name) =>
      `${name}, se o foco for apresentar melhor seu negocio e gerar mais contatos, um site bem pensado pode ser o melhor caminho.`,
    questions: [
      {
        id: "web-goal",
        question: "Como eu sei se preciso de um site ou de uma landing page?",
        answer: (name) =>
          `Isso depende do seu objetivo, ${name}. Se for apresentar o negocio de forma mais completa, um site costuma fazer sentido. Se for focar em uma oferta especifica, uma landing page pode funcionar melhor.`,
      },
      {
        id: "web-leads",
        question: "Isso ajuda mesmo a gerar mais contatos?",
        answer: (name) =>
          `Ajuda, porque a pagina passa a conduzir melhor a atencao do visitante, mostrar o que voce faz com clareza e facilitar a tomada de contato.`,
      },
      {
        id: "web-professional",
        question: "Meu negocio fica com uma imagem mais profissional?",
        answer: (name) =>
          `Sim, ${name}. Um projeto bem apresentado aumenta a confianca de quem visita e melhora a forma como sua marca e percebida.`,
      },
      {
        id: "web-next-step",
        question: "Se eu quiser fazer isso, como comeco?",
        answer: (name) =>
          `Voce comeca explicando seu objetivo e o momento do negocio. A partir disso, fica mais facil definir a melhor estrutura para sua pagina.`,
      },
    ],
  },
  {
    id: "custom-solution",
    title: "Projeto sob medida",
    intro: (name) =>
      `${name}, quando a necessidade e mais especifica, vale desenhar uma solucao sob medida para o seu processo ou modelo de negocio.`,
    questions: [
      {
        id: "custom-fit",
        question: "Como voces entendem o que faz sentido para o meu caso?",
        answer: (name) =>
          `Primeiro entendemos seu objetivo, ${name}, sua rotina e o que voce quer resolver. So depois pensamos na solucao mais adequada.`,
      },
      {
        id: "custom-size",
        question: "Precisa ser um projeto grande para valer a pena?",
        answer: (name) =>
          `Nao. Muitas vezes um ajuste bem pensado ou uma solucao mais enxuta ja resolve uma dor importante e traz resultado rapido.`,
      },
      {
        id: "custom-process",
        question: "Voces ajudam a organizar a ideia antes de desenvolver?",
        answer: (name) =>
          `Sim. Essa etapa faz parte do processo, porque ajuda a transformar uma necessidade solta em algo mais claro e viavel.`,
      },
      {
        id: "custom-budget",
        question: "Da para conversar antes de fechar qualquer coisa?",
        answer: (name) =>
          `Claro, ${name}. A conversa inicial existe justamente para entender seu caso e avaliar com calma o melhor caminho antes de qualquer decisao.`,
      },
    ],
  },
];

const AIChatSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([initialBotMessage()]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [askedQuestionIds, setAskedQuestionIds] = useState<string[]>([]);
  const [activeQuestionId, setActiveQuestionId] = useState<string | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [leadName, setLeadName] = useState("");
  const [hasStartedDemo, setHasStartedDemo] = useState(false);
  const [hasShownWhatsappPrompt, setHasShownWhatsappPrompt] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);
  const [isDesktopChatScrollActive, setIsDesktopChatScrollActive] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const responseTimeoutRef = useRef<number | null>(null);
  const typingTimeoutRef = useRef<number | null>(null);

  const selectedTopic = useMemo(
    () => conversationTopics.find((item) => item.id === selectedTopicId) ?? null,
    [selectedTopicId]
  );

  const canShowCta = askedQuestionIds.length >= 1 && hasStartedDemo && !!selectedTopicId;

  const availableQuestions = useMemo(() => {
    if (!selectedTopic) return [];
    return selectedTopic.questions.filter((item) => !askedQuestionIds.includes(item.id));
  }, [askedQuestionIds, selectedTopic]);

  const visibleQuestions = availableQuestions.length
    ? availableQuestions
    : selectedTopic?.questions ?? [];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!chatContainerRef.current) return;
    const timer = window.setTimeout(() => {
      if (chatContainerRef.current) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }, 120);

    return () => window.clearTimeout(timer);
  }, [messages, isTyping]);

  useEffect(() => {
    return () => {
      if (responseTimeoutRef.current) {
        window.clearTimeout(responseTimeoutRef.current);
      }
      if (typingTimeoutRef.current) {
        window.clearTimeout(typingTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!chatContainerRef.current?.contains(event.target as Node)) {
        setIsDesktopChatScrollActive(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

  const handleWhatsappClick = () => {
    const formattedName = leadName.trim();
    const intro = formattedName
      ? `Ola! Meu nome e ${formattedName} e quero entender como ter um agente de atendimento no meu site.`
      : "Ola! Quero entender como ter um agente de atendimento no meu site.";

    window.open(
      `https://wa.me/5521996062455?text=${encodeURIComponent(intro)}`,
      "_blank"
    );
  };

  const clearPendingTimers = () => {
    if (responseTimeoutRef.current) {
      window.clearTimeout(responseTimeoutRef.current);
      responseTimeoutRef.current = null;
    }
    if (typingTimeoutRef.current) {
      window.clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = null;
    }
  };

  const appendUserMessage = (id: string, text: string) => {
    setMessages((current) => [
      ...current,
      {
        id,
        text,
        displayText: text,
        isBot: false,
        timestamp: new Date(),
      },
    ]);
  };

  const typeBotMessage = (messageId: string, fullText: string, onComplete?: () => void) => {
    let currentIndex = 0;

    const writeNext = () => {
      currentIndex += 1;

      setMessages((current) =>
        current.map((message) =>
          message.id === messageId
            ? {
                ...message,
                displayText: fullText.slice(0, currentIndex),
              }
            : message
        )
      );

      if (currentIndex < fullText.length) {
        const currentCharacter = fullText[currentIndex - 1];
        const nextDelay = /[,.!?]/.test(currentCharacter) ? 68 : 22 + Math.random() * 26;
        typingTimeoutRef.current = window.setTimeout(writeNext, nextDelay);
        return;
      }

      typingTimeoutRef.current = null;
      if (onComplete) {
        onComplete();
      }
    };

    typingTimeoutRef.current = window.setTimeout(writeNext, 120);
  };

  const enqueueBotReply = (text: string, options?: { delayMs?: number; onComplete?: () => void }) => {
    const delayMs = options?.delayMs ?? 620;

    setIsTyping(true);

    responseTimeoutRef.current = window.setTimeout(() => {
      const messageId = `bot-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const timestamp = new Date();

      setIsTyping(false);
      setMessages((current) => [
        ...current,
        {
          id: messageId,
          text,
          displayText: "",
          isBot: true,
          timestamp,
        },
      ]);

      responseTimeoutRef.current = null;
      typeBotMessage(messageId, text, options?.onComplete);
    }, delayMs);
  };

  const resetDemo = () => {
    clearPendingTimers();

    setMessages([initialBotMessage()]);
    setIsTyping(false);
    setAskedQuestionIds([]);
    setActiveQuestionId(null);
    setNameInput("");
    setLeadName("");
    setHasStartedDemo(false);
    setHasShownWhatsappPrompt(false);
    setSelectedTopicId(null);
  };

  const startDemoWithName = () => {
    const cleanedName = nameInput.trim();
    if (!cleanedName || isTyping) return;

    clearPendingTimers();
    setLeadName(cleanedName);
    setHasStartedDemo(true);
    setMessages([initialBotMessage()]);
    appendUserMessage("user-name", cleanedName);
    enqueueBotReply(
      `Prazer, ${cleanedName}. Vou te mostrar como esse atendimento pode funcionar no seu site. Primeiro, escolha o assunto que voce quer explorar.`,
      { delayMs: 520 }
    );
  };

  const handleTopicSelection = (topic: ConversationTopic) => {
    if (isTyping || !hasStartedDemo || !leadName.trim()) return;

    clearPendingTimers();
    setSelectedTopicId(topic.id);
    setAskedQuestionIds([]);
    setActiveQuestionId(null);
    setHasShownWhatsappPrompt(false);
    appendUserMessage(`user-topic-${topic.id}-${Date.now()}`, topic.title);
    enqueueBotReply(topic.intro(leadName.trim()), { delayMs: 520 });
  };

  const handleQuickQuestion = (item: TopicQuestion) => {
    if (isTyping || askedQuestionIds.includes(item.id) || !hasStartedDemo || !leadName.trim()) return;

    clearPendingTimers();
    appendUserMessage(`user-${item.id}`, item.question);
    setAskedQuestionIds((current) => [...current, item.id]);
    setActiveQuestionId(item.id);

    const shouldShowWhatsappPrompt = !hasShownWhatsappPrompt;

    enqueueBotReply(item.answer(leadName.trim()), {
      delayMs: 700,
      onComplete: () => {
        if (shouldShowWhatsappPrompt) {
          setHasShownWhatsappPrompt(true);
          enqueueBotReply(
            `Se fizer sentido para voce, ${leadName.trim()}, eu tambem posso te direcionar para o WhatsApp para continuar essa conversa com a equipe.`,
            {
              delayMs: 720,
              onComplete: () => {
                setActiveQuestionId(null);
              },
            }
          );
          return;
        }

        setActiveQuestionId(null);
      },
    });
  };

  const renderOptionLabel = (item: ConversationTopic | TopicQuestion, isUsed: boolean) => {
    if ("title" in item) {
      return item.title;
    }
    return isUsed ? `Perguntado: ${item.question}` : item.question;
  };

  const handleDesktopChatWheel: React.WheelEventHandler<HTMLDivElement> = (event) => {
    if (window.innerWidth < 768 || !isDesktopChatScrollActive || !chatContainerRef.current) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    chatContainerRef.current.scrollTop += event.deltaY;
  };

  return (
    <section className="relative -mt-2 overflow-hidden px-4 py-16 sm:py-20" id="chat-ia">
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
        <div className="mb-8 text-center sm:mb-12 lg:mb-16">
          <h2 className="mb-4 px-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl">
            Veja como funciona um <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">atendimento com um de nossos agentes</span>
          </h2>

          <p className="mx-auto max-w-3xl px-4 text-base leading-7 text-muted-foreground sm:text-xl">
            Esta demonstracao mostra, de forma simples e realista, como um agente pode iniciar a conversa, responder as duvidas mais comuns e conduzir o cliente para o proximo passo.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12">
          <div className="order-1 flex min-h-[450px] w-full flex-col items-center justify-start pt-4 sm:min-h-[600px] sm:pt-8 lg:min-h-[unset] lg:items-center lg:justify-center lg:pt-0">
            <div
              className="relative transform scale-[0.82] xs:scale-[0.88] sm:scale-95 md:scale-85 lg:scale-[0.9] xl:scale-[1]"
            >
              <div
                className="relative mx-auto h-[520px] w-[272px] max-w-full overflow-hidden rounded-[2.5rem] border-2 border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-3xl sm:h-[620px] sm:w-72 md:h-[560px] md:w-64 lg:h-[540px] lg:w-64 xl:h-[580px] xl:w-[272px]"
                style={{
                  boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1), -8px 8px 20px rgba(0, 0, 0, 0.2)",
                }}
              >
                <div className="absolute inset-1 overflow-hidden rounded-[2rem] bg-black">
                  <div className="flex h-full flex-col bg-gradient-to-b from-slate-900 to-slate-800">
                    <div className="absolute left-1/2 top-0 z-10 flex h-6 w-32 -translate-x-1/2 items-center justify-center rounded-b-2xl bg-black">
                      <div className="h-2 w-2 rounded-full bg-gray-600" />
                    </div>

                    <div className="flex items-center justify-between px-5 py-3 pt-8 text-xs text-white sm:px-6 sm:text-sm">
                      <span className="font-medium">{formatTime(currentTime)}</span>
                      <div className="flex items-center gap-1">
                        <Signal className="h-4 w-4" />
                        <Wifi className="h-4 w-4" />
                        <Battery className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="border-b border-slate-700 px-3 py-3 sm:px-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600">
                          <span className="text-sm font-bold text-white">AI</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">AIVERSE Assistant</h3>
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                            <span>{isTyping ? "Respondendo agora" : "Pronto para atender"}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      ref={chatContainerRef}
                      onClick={() => {
                        if (window.innerWidth >= 768) {
                          setIsDesktopChatScrollActive(true);
                        }
                      }}
                      onWheel={handleDesktopChatWheel}
                      className={cn(
                        "h-[260px] flex-1 space-y-3 px-3 py-3 text-xs sm:h-[342px] sm:px-4 sm:py-4 sm:text-sm md:h-[300px] lg:h-[300px] xl:h-[318px]",
                        "overflow-hidden md:overflow-y-auto",
                        isDesktopChatScrollActive && "md:ring-1 md:ring-cyan-400/45 md:ring-inset"
                      )}
                    >
                      <div className="space-y-3">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={cn(
                            "flex animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
                            message.isBot ? "justify-start" : "justify-end"
                          )}
                        >
                          <div
                            className={cn(
                              "max-w-[82%] rounded-2xl p-3 shadow-sm",
                              message.isBot
                                ? "rounded-bl-md bg-gradient-to-r from-slate-700 to-slate-600 text-white"
                                : "rounded-br-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                            )}
                          >
                            <p className="whitespace-pre-line leading-relaxed">{message.displayText ?? message.text}</p>
                            <span className="mt-1 block text-[10px] opacity-70 sm:text-xs">
                              {formatTime(message.timestamp)}
                            </span>
                          </div>
                        </div>
                      ))}

                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="rounded-2xl rounded-bl-md bg-gradient-to-r from-slate-700 to-slate-600 p-4">
                            <div className="flex items-center gap-2">
                              <div className="flex space-x-1">
                                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" />
                                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0.1s" }} />
                                <div className="h-2 w-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: "0.2s" }} />
                              </div>
                              <span className="text-xs font-medium text-cyan-300">Preparando a resposta...</span>
                            </div>
                          </div>
                        </div>
                      )}
                      </div>
                    </div>

                    <div className="border-t border-slate-700 px-3 py-3 sm:px-4">
                      <div className="flex flex-col gap-2 sm:flex-row">
                        <Input
                          readOnly
                          value=""
                          placeholder={hasStartedDemo ? "Escolha uma pergunta ao lado" : "Digite seu nome para comecar"}
                          className="h-9 flex-1 rounded-full border-slate-600 bg-slate-700 text-xs text-white placeholder:text-slate-400 sm:h-10 sm:text-sm"
                        />
                        <Button size="icon" disabled className="h-9 w-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-70 sm:h-10 sm:w-10">
                          <Send className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-2 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-gray-600" />
              </div>
            </div>

            <div className="mt-5 w-full max-w-[22rem] lg:hidden">
              {!hasStartedDemo ? (
                <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,hsl(224_24%_8%/0.78),hsl(228_28%_6%/0.72))] p-4 shadow-[0_18px_44px_-30px_hsl(220_65%_3%/0.95)] backdrop-blur-xl">
                  <p className="mb-3 text-sm font-medium text-white">Como posso te chamar?</p>
                  <div className="flex gap-2">
                    <Input
                      value={nameInput}
                      onChange={(event) => setNameInput(event.target.value)}
                      placeholder="Digite seu nome"
                      className="h-10 rounded-full border-white/10 bg-white/5 text-white placeholder:text-slate-400"
                    />
                    <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={startDemoWithName} disabled={!nameInput.trim() || isTyping}>
                      Comecar
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/85">
                      {selectedTopic ? "Perguntas sobre esse assunto" : "Escolha o assunto"}
                    </p>
                    <span className="text-[11px] text-slate-500">
                      {selectedTopic ? `${visibleQuestions.length} opcoes` : `${conversationTopics.length} temas`}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {(selectedTopic ? visibleQuestions : conversationTopics).map((item) => {
                      const isTopic = "title" in item;
                      const isUsed = !isTopic && askedQuestionIds.includes(item.id);
                      const isActive = !isTopic && activeQuestionId === item.id;

                      return (
                        <button
                          key={`mobile-${item.id}`}
                          type="button"
                          disabled={isTyping || isUsed}
                          onClick={() => (isTopic ? handleTopicSelection(item) : handleQuickQuestion(item))}
                          className={cn(
                            "min-h-[88px] w-full rounded-2xl border px-3 py-2 text-left text-xs leading-5 transition-all",
                            isUsed
                              ? "cursor-not-allowed border-white/10 bg-white/5 text-slate-500"
                              : "border-cyan-500/30 bg-cyan-500/10 text-cyan-100 hover:border-cyan-400/60 hover:bg-cyan-500/16",
                            isActive && "border-cyan-300 bg-cyan-500/18 text-white"
                          )}
                        >
                          {renderOptionLabel(item, isUsed)}
                        </button>
                      );
                    })}
                  </div>

                  {selectedTopic && (
                    <Button variant="outline" className="mt-3 w-full border-white/15 bg-white/5 hover:bg-white/10" onClick={() => setSelectedTopicId(null)}>
                      Trocar assunto
                    </Button>
                  )}

                  {canShowCta && (
                    <Button className="mt-4 w-full bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleWhatsappClick}>
                      Continuar no WhatsApp
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="order-2 hidden lg:block">
            <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,hsl(224_24%_8%/0.78),hsl(228_28%_6%/0.72))] p-6 shadow-[0_18px_44px_-30px_hsl(220_65%_3%/0.95)] backdrop-blur-xl xl:p-8">
              {!hasStartedDemo ? (
                <>
                  <p className="mb-3 text-sm font-medium text-white">Como posso te chamar?</p>
                  <div className="flex gap-3">
                    <Input
                      value={nameInput}
                      onChange={(event) => setNameInput(event.target.value)}
                      placeholder="Digite seu nome"
                      className="h-11 rounded-full border-white/10 bg-white/5 text-white placeholder:text-slate-400"
                    />
                    <Button className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90" onClick={startDemoWithName} disabled={!nameInput.trim() || isTyping}>
                      Comecar demonstracao
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/85">
                      {selectedTopic ? `Perguntas sobre ${selectedTopic.title.toLowerCase()}` : "Escolha o assunto principal"}
                    </p>
                    <Button variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10" onClick={resetDemo}>
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Reiniciar
                    </Button>
                  </div>

                  <div className="grid gap-3">
                    {(selectedTopic ? visibleQuestions : conversationTopics).map((item) => {
                      const isTopic = "title" in item;
                      const isUsed = !isTopic && askedQuestionIds.includes(item.id);
                      const isActive = !isTopic && activeQuestionId === item.id;

                      return (
                        <button
                          key={`desktop-${item.id}`}
                          type="button"
                          disabled={isTyping || isUsed}
                          onClick={() => (isTopic ? handleTopicSelection(item) : handleQuickQuestion(item))}
                          className={cn(
                            "rounded-[22px] border px-4 py-4 text-left transition-all",
                            isUsed
                              ? "cursor-not-allowed border-white/10 bg-white/5 text-slate-500"
                              : "border-cyan-500/25 bg-cyan-500/8 text-slate-100 hover:border-cyan-400/60 hover:bg-cyan-500/14",
                            isActive && "border-cyan-300 bg-cyan-500/16 text-white"
                          )}
                        >
                          <div className="text-sm font-medium leading-6">
                            {renderOptionLabel(item, isUsed)}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {selectedTopic && (
                    <div className="mt-4">
                      <Button variant="outline" className="border-white/15 bg-white/5 hover:bg-white/10" onClick={() => setSelectedTopicId(null)}>
                        Trocar assunto
                      </Button>
                    </div>
                  )}

                  {canShowCta && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={handleWhatsappClick}>
                        Continuar no WhatsApp
                      </Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AIChatSection };
