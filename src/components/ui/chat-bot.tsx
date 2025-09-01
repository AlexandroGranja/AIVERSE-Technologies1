import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isQuickReply?: boolean;
  isFallback?: boolean;
}

interface ChatBotProps {
  className?: string;
}

const WA_LINK = "https://wa.me/55219696585179?text=Ol%C3%A1%2C%20vim%20pelo%20chat%20do%20site%20da%20AIVERSE";

const fixedResponses = {
  initial:
    "Olá! Sou o assistente virtual da AIVERSE Technologies. Em que posso te ajudar?",
  services:
    "Nós da AIVERSE Technologies somos especialistas em **Desenvolvimento Web** (sites, e-commerces), **Automações com n8n** (otimização de processos), **Cardápios Online** e **Chatbots com IA**. Gostaria de mais detalhes sobre algum desses serviços?",
  pricing:
    "Nossos valores são personalizados para cada projeto, considerando as necessidades e o escopo do seu negócio. Me conte um pouco do que você precisa ou, se preferir, podemos continuar no WhatsApp.",
  contact:
    "Você pode falar com nossa equipe através dos seguintes canais:\n\n**WhatsApp/Telefone:** (21) 96958-5179\n**Email:** contato@aiverse.tech\n**Horário de Atendimento:** Segunda a Sexta, 9h às 18h.",
  portfolio:
    "Temos um portfólio com e-commerces, landing pages, automações e chatbots. Quer que eu te envie exemplos pelo WhatsApp?",
  support:
    "Entendi, você precisa de suporte técnico 🛠️. Pode me contar o que está acontecendo? Se preferir, podemos agilizar pelo WhatsApp também.",
  about:
    "A AIVERSE Technologies cria soluções digitais sob medida: sites modernos, automações com n8n e chatbots inteligentes. 🚀",
  fallback:
    "Não entendi muito bem 🤔. Posso te ajudar com: serviços, orçamento, portfólio ou contato.",
};

const menuOptions = [
  { label: "Quais serviços vocês oferecem?", value: "services" },
  { label: "Quero um orçamento", value: "pricing" },
  { label: "Ver portfólio", value: "portfolio" },
  { label: "Contato", value: "contact" },
];

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const intentMatches = (msg: string, keywords: string[]) => {
  const n = normalize(msg);
  return keywords.some((k) => n.includes(normalize(k)));
};

const QuickReplyButtons: React.FC<{
  onSelect: (value: string, label: string) => void;
}> = ({ onSelect }) => (
  <div className="flex flex-col gap-2 mt-2">
    {menuOptions.map((option, index) => (
      <Button
        key={index}
        variant="outline"
        onClick={() => onSelect(option.value, option.label)}
        className="text-sm text-center h-auto py-2"
      >
        {option.label}
      </Button>
    ))}
  </div>
);

const ChatBotMessage: React.FC<{
  message: Message;
  onSelectQuickReply: (value: string, label: string) => void;
}> = ({ message, onSelectQuickReply }) => {
  return (
    <div className={cn("flex", message.isBot ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "max-w-[80%] rounded-lg px-3 py-2 text-sm",
          message.isBot
            ? "bg-muted text-muted-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        {message.text.split("\n").map((line, index) => (
          <div key={index}>{line}</div>
        ))}

        {message.isQuickReply && (
          <QuickReplyButtons onSelect={onSelectQuickReply} />
        )}

        {message.isFallback && (
          <div className="mt-2">
            <Button asChild className="w-full">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export const ChatBot: React.FC<ChatBotProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "1",
          text: fixedResponses.initial,
          isBot: true,
          timestamp: new Date(),
          // Sem menu inicial — só depois que o usuário falar
        },
      ]);
    }
  }, [isOpen, messages.length]);

  const getBotResponse = (
    userMessage: string
  ): { text: string; isFallback?: boolean } => {
    // Intenções
    if (
      intentMatches(userMessage, [
        "oi",
        "ola",
        "olá",
        "bom dia",
        "boa tarde",
        "boa noite",
      ])
    ) {
      return {
        text: "Olá! 👋 Como posso te ajudar hoje? Se preferir, posso te mostrar nossos serviços, enviar o portfólio ou calcular um orçamento rápido.",
      };
    }

    if (intentMatches(userMessage, ["tchau", "ate mais", "até mais", "ate logo", "até logo"])) {
      return { text: "Até logo! Foi um prazer falar com você 😄" };
    }

    if (intentMatches(userMessage, ["servicos", "serviços", "oferecem", "fazem", "o que fazem"])) {
      return { text: fixedResponses.services };
    }

    if (
      intentMatches(userMessage, [
        "preco",
        "preço",
        "custo",
        "valor",
        "orcamento",
        "orçamento",
        "quanto cobra",
      ])
    ) {
      return { text: fixedResponses.pricing };
    }

    if (
      intentMatches(userMessage, [
        "contato",
        "telefone",
        "whatsapp",
        "falar com alguem",
        "falar com alguém",
      ])
    ) {
      return { text: fixedResponses.contact };
    }

    if (intentMatches(userMessage, ["portfolio", "portfólio", "cases", "exemplos"])) {
      return { text: fixedResponses.portfolio };
    }

    if (intentMatches(userMessage, ["suporte", "ajuda", "erro", "problema"])) {
      return { text: fixedResponses.support };
    }

    if (intentMatches(userMessage, ["quem sao voces", "quem são vocês", "sobre aiverse", "empresa"])) {
      return { text: fixedResponses.about };
    }

    // Fallback
    return { text: fixedResponses.fallback, isFallback: true };
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setHasUserInteracted(true);

    // Simula "digitando" do bot
    setTimeout(() => {
      const { text: botText, isFallback } = getBotResponse(text);
      const showQuickReplies = !isFallback; // menus só se não for fallback

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isBot: true,
        timestamp: new Date(),
        isQuickReply: hasUserInteracted || true ? showQuickReplies : false,
        isFallback: !!isFallback,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 400);
  };

  const handleQuickReplySelect = (_value: string, label: string) => {
    handleSendMessage(label);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg z-50",
          "bg-primary hover:bg-primary/90 text-primary-foreground",
          "animate-pulse-glow transition-all duration-300",
          className
        )}
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card
      className={cn(
        "fixed bottom-6 right-6 w-80 h-96 z-50 flex flex-col",
        "bg-card/95 backdrop-blur-sm border-primary/20",
        "shadow-[var(--shadow-card)] transition-all duration-300",
        isMinimized && "h-14",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="font-semibold text-sm">Assistente AIVERSE</span>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <Minimize2 className="w-3 h-3" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-6 h-6"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <ChatBotMessage
                key={message.id}
                message={message}
                onSelectQuickReply={handleQuickReplySelect}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="text-sm bg-background/50"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                size="icon"
                className="w-10 h-10 bg-primary hover:bg-primary/90"
                aria-label="Enviar mensagem"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};

export default ChatBot;
