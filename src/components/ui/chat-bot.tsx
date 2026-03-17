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
  showContact?: boolean;
}

interface ChatBotProps {
  className?: string;
}

const WA_LINK = "https://wa.me/55219696585179?text=Ol%C3%A1%2C%20vim%20pelo%20chat%20do%20site%20da%20AIVERSE";
const INSTAGRAM_LINK = "https://www.instagram.com/aiversetech_oficial/";

const fixedResponses = {
  initial: "Olá! Sou o assistente virtual da AIVERSE Technologies. Somos especialistas em soluções digitais inovadoras. Como posso te ajudar hoje?",
  
  websites: "Desenvolvemos páginas web completas e modernas:\n\n• Sites responsivos e otimizados\n• E-commerce completo com sistema de pagamentos\n• Landing pages de alta conversão\n• SEO otimizado\n• Performance otimizada\n• Integração com sistemas existentes\n\nTodos os projetos são personalizados para atender as necessidades do seu negócio. Gostaria de mais detalhes sobre algum tipo específico?",
  
  chatbots: "Nossos Agentes de Atendimento IA revolucionam o atendimento ao cliente:\n\n• Chatbots inteligentes com processamento de linguagem natural\n• Integração com WhatsApp Business\n• Respostas 24/7 automatizadas\n• Aprendizado contínuo\n• Relatórios detalhados de atendimento\n• Integração com CRM\n\nPerfeito para empresas que querem melhorar o atendimento e reduzir custos. Posso te mostrar alguns exemplos?",
  
  automation: "Nossas Automações de Processos otimizam sua operação:\n\n• Automação de workflows empresariais\n• Integração entre diferentes sistemas\n• Relatórios automáticos\n• Redução significativa de custos operacionais\n• Eliminação de tarefas repetitivas\n• Maior eficiência empresarial\n\nAutomatizamos desde processos simples até fluxos complexos. Que tipo de processo você gostaria de automatizar?",
  
  menus: "Criamos Cardápios Online inteligentes para restaurantes:\n\n• Cardápio digital interativo\n• Sistema de pedidos online integrado\n• Gestão inteligente de estoque\n• Integração com delivery (iFood, Uber Eats)\n• Painel administrativo completo\n• Design responsivo para todos os dispositivos\n\nPerfeito para restaurantes que querem modernizar o atendimento. Já tem um restaurante ou está planejando abrir?",
  
  pricing: "Nossos valores são personalizados de acordo com a complexidade e necessidades de cada projeto:\n\n• Análise gratuita do seu projeto\n• Orçamento sem compromisso\n• Planos de pagamento flexíveis\n• Suporte técnico incluso\n• Garantia de satisfação\n\nPara um orçamento preciso, preciso entender melhor suas necessidades. Que tipo de solução você está buscando?",
  
  portfolio: "Temos um portfólio diversificado com casos de sucesso:\n\n• E-commerces com alta conversão\n• Landing pages otimizadas\n• Sistemas de automação complexos\n• Chatbots inteligentes em operação\n• Cardápios digitais funcionando\n\nPosso compartilhar exemplos específicos do seu segmento. Em qual área sua empresa atua?",
  
  contact: "Entre em contato conosco através dos canais oficiais:\n\nWhatsApp/Telefone: (21) 99606-2455\nE-mail: contato@aiverse.tech\nInstagram: @aiversetech_oficial\n\nHorário de Atendimento:\nSegunda a Sexta: 9h às 18h\nSábado: 9h às 13h\n\nNossa equipe está pronta para atender você!",
  
  fallback: "Desculpe, não compreendi sua solicitação. Posso te ajudar com informações sobre nossos serviços:\n\n• Páginas Web Completas\n• Agentes de Atendimento IA (Chatbots)\n• Automações de Processos\n• Cardápios Online\n• Orçamentos e Portfolio\n\nSobre qual serviço gostaria de saber mais?"
};

const menuOptions = [
  { label: "Páginas Web Completas", value: "websites" },
  { label: "Agentes de Atendimento IA", value: "chatbots" },
  { label: "Automações de Processos", value: "automation" },
  { label: "Cardápios Online", value: "menus" },
  { label: "Solicitar Orçamento", value: "pricing" },
  { label: "Ver Portfolio", value: "portfolio" },
  { label: "Falar com Especialista", value: "contact" },
];

const normalize = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, "");

const intentMatches = (msg: string, keywords: string[]) => {
  const n = normalize(msg);
  return keywords.some((k) => n.includes(normalize(k)));
};

const QuickReplyButtons: React.FC<{
  onSelect: (value: string, label: string) => void;
}> = ({ onSelect }) => (
  <div className="grid grid-cols-1 gap-2 mt-3">
    {menuOptions.map((option, index) => (
      <Button
        key={index}
        variant="outline"
        onClick={() => onSelect(option.value, option.label)}
        className="text-sm text-left h-auto py-2 px-3 border-primary/20 hover:border-primary/40 hover:bg-primary/5"
      >
        {option.label}
      </Button>
    ))}
  </div>
);

const ContactButtons: React.FC = () => (
  <div className="flex flex-col gap-2 mt-3">
    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
      <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
        💬 Falar no WhatsApp
      </a>
    </Button>
    <Button asChild variant="outline" className="w-full">
      <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
        📱 Seguir no Instagram
      </a>
    </Button>
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
          "max-w-[85%] rounded-lg px-4 py-3 text-sm",
          message.isBot
            ? "bg-muted text-muted-foreground border border-border/30"
            : "bg-primary text-primary-foreground"
        )}
      >
        {message.text.split("\n").map((line, index) => (
          <div key={index} className={line.trim() === "" ? "mb-2" : ""}>
            {line}
          </div>
        ))}

        {message.isQuickReply && (
          <QuickReplyButtons onSelect={onSelectQuickReply} />
        )}

        {message.showContact && <ContactButtons />}
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
          isQuickReply: true,
        },
      ]);
    }
  }, [isOpen, messages.length]);

  const getBotResponse = (userMessage: string): { text: string; showContact?: boolean } => {
    // Saudações
    if (intentMatches(userMessage, ["oi", "ola", "olá", "bom dia", "boa tarde", "boa noite", "alo", "alô"])) {
      return { text: "Olá! Bem-vindo à AIVERSE Technologies. Somos especialistas em soluções digitais inovadoras. Em que posso te ajudar hoje?" };
    }

    // Despedidas
    if (intentMatches(userMessage, ["tchau", "ate mais", "até mais", "ate logo", "até logo", "obrigado", "obrigada", "valeu"])) {
      return { text: "Foi um prazer te atender! Estamos sempre aqui para ajudar. Até logo! 😊" };
    }

    // Serviços específicos
    if (intentMatches(userMessage, ["site", "website", "pagina", "página", "web", "ecommerce", "e-commerce", "loja virtual", "landing page"])) {
      return { text: fixedResponses.websites };
    }

    if (intentMatches(userMessage, ["chatbot", "bot", "atendimento", "chat", "ia", "inteligencia artificial", "agente"])) {
      return { text: fixedResponses.chatbots };
    }

    if (intentMatches(userMessage, ["automacao", "automação", "processo", "workflow", "integracao", "integração", "n8n"])) {
      return { text: fixedResponses.automation };
    }

    if (intentMatches(userMessage, ["cardapio", "cardápio", "restaurante", "menu", "pedido", "delivery", "comida"])) {
      return { text: fixedResponses.menus };
    }

    // Comercial
    if (intentMatches(userMessage, ["preco", "preço", "custo", "valor", "orcamento", "orçamento", "quanto", "investimento"])) {
      return { text: fixedResponses.pricing };
    }

    if (intentMatches(userMessage, ["portfolio", "portfólio", "exemplo", "exemplos", "cases", "trabalhos", "projetos"])) {
      return { text: fixedResponses.portfolio };
    }

    if (intentMatches(userMessage, ["contato", "telefone", "whatsapp", "email", "falar", "conversar", "especialista", "atendente"])) {
      return { text: fixedResponses.contact, showContact: true };
    }

    // Serviços gerais
    if (intentMatches(userMessage, ["servicos", "serviços", "oferecem", "fazem", "o que", "empresa", "aiverse"])) {
      return { text: "A AIVERSE Technologies oferece 4 soluções digitais principais:\n\n🌐 Páginas Web Completas\n🤖 Agentes de Atendimento IA\n⚙️ Automações de Processos\n📱 Cardápios Online\n\nSobre qual serviço gostaria de saber mais detalhes?" };
    }

    // Ajuda
    if (intentMatches(userMessage, ["ajuda", "help", "menu", "opcoes", "opções", "o que pode fazer"])) {
      return { text: "Posso te ajudar com informações sobre nossos serviços:\n\n• Desenvolvimento de sites e e-commerce\n• Criação de chatbots inteligentes\n• Automação de processos empresariais\n• Cardápios digitais para restaurantes\n• Orçamentos personalizados\n• Portfolio de projetos\n\nQual assunto te interessa mais?" };
    }

    // Fallback
    return { text: fixedResponses.fallback };
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

    setTimeout(() => {
      const { text: botText, showContact } = getBotResponse(text);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botText,
        isBot: true,
        timestamp: new Date(),
        showContact: !!showContact,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  const handleQuickReplySelect = (value: string, label: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: label,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setHasUserInteracted(true);

    setTimeout(() => {
      let response: { text: string; showContact?: boolean };
      
      switch (value) {
        case "websites":
          response = { text: fixedResponses.websites };
          break;
        case "chatbots":
          response = { text: fixedResponses.chatbots };
          break;
        case "automation":
          response = { text: fixedResponses.automation };
          break;
        case "menus":
          response = { text: fixedResponses.menus };
          break;
        case "pricing":
          response = { text: fixedResponses.pricing };
          break;
        case "portfolio":
          response = { text: fixedResponses.portfolio };
          break;
        case "contact":
          response = { text: fixedResponses.contact, showContact: true };
          break;
        default:
          response = { text: fixedResponses.fallback };
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        timestamp: new Date(),
        showContact: !!response.showContact,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
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
          "animate-pulse shadow-primary/25 transition-all duration-300",
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
        "fixed bottom-6 right-6 w-80 h-[500px] z-50 flex flex-col",
        "bg-card/95 backdrop-blur-sm border-primary/20",
        "shadow-2xl shadow-primary/10 transition-all duration-300",
        isMinimized && "h-14",
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-border/50 bg-primary/5">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-sm shadow-green-500/50" />
          <div>
            <span className="font-semibold text-sm text-foreground">Assistente AIVERSE</span>
            <p className="text-xs text-muted-foreground">Online agora</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 hover:bg-primary/10"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="w-8 h-8 hover:bg-primary/10"
            onClick={() => setIsOpen(false)}
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border">
            {messages.map((message) => (
              <ChatBotMessage
                key={message.id}
                message={message}
                onSelectQuickReply={handleQuickReplySelect}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-border/50 bg-background/30">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua mensagem..."
                className="text-sm bg-background/70 border-border/50 focus:border-primary/50"
              />
              <Button
                onClick={() => handleSendMessage(inputValue)}
                size="icon"
                disabled={!inputValue.trim()}
                className="w-10 h-10 bg-primary hover:bg-primary/90 disabled:opacity-50"
                aria-label="Enviar mensagem"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Powered by AIVERSE Technologies
            </p>
          </div>
        </>
      )}
    </Card>
  );
};

export default ChatBot;