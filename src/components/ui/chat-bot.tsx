import React, { useState, useRef, useEffect } from "react";
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
}

interface ChatBotProps {
  className?: string;
}

const predefinedResponses = {
  "ola": "Olá! Seja bem-vindo à AIVERSE Technologies! 👋 Como posso ajudá-lo hoje?",
  "hello": "Hello! Welcome to AIVERSE Technologies! 👋 How can I help you today?",
  "servicos": "Nossos principais serviços incluem:\n• Criação de páginas web completas\n• Agentes de atendimento com IA\n• Automações de processos\n• Páginas de cardápio online\n\nGostaria de saber mais sobre algum serviço específico?",
  "precos": "Nossos preços são personalizados de acordo com suas necessidades. Vamos agendar uma consulta gratuita para discutir seu projeto? 💰",
  "contato": "Entre em contato conosco:\n📧 Email: contato@aiverse.tech\n📱 WhatsApp: (11) 99999-9999\n🕒 Horário: Segunda à Sexta, 9h às 18h",
  "portfolio": "Temos diversos projetos em nosso portfólio! Incluindo:\n• E-commerces modernos\n• Sistemas de gestão\n• Chatbots inteligentes\n• Automações empresariais\n\nGostaria de ver exemplos específicos?",
  "ia": "Sim! Somos especialistas em IA! Desenvolvemos:\n🤖 Chatbots inteligentes\n🎯 Automações personalizadas\n📊 Análise de dados\n🚀 Soluções completas com IA\n\nComo podemos revolucionar seu negócio?",
  "default": "Obrigado pela sua mensagem! Nossa equipe está pronta para ajudar com soluções de IA e desenvolvimento web. Para um atendimento mais personalizado, que tal agendar uma conversa? 🚀"
};

export const ChatBot: React.FC<ChatBotProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou o assistente virtual da AIVERSE Technologies. Como posso ajudá-lo hoje? 🤖",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (key !== "default" && lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return predefinedResponses.default;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot response delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(inputValue),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
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
    <Card className={cn(
      "fixed bottom-6 right-6 w-80 h-96 z-50 flex flex-col",
      "bg-card/95 backdrop-blur-sm border-primary/20",
      "shadow-[var(--shadow-card)] transition-all duration-300",
      isMinimized && "h-14",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span className="font-semibold text-sm">AIVERSE Assistant</span>
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
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex",
                  message.isBot ? "justify-start" : "justify-end"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg px-3 py-2 text-sm",
                    message.isBot
                      ? "bg-muted text-muted-foreground"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {message.text.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border/50">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="text-sm bg-background/50"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="w-10 h-10 bg-primary hover:bg-primary/90"
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