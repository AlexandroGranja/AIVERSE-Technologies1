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

const systemPrompt = `
Você é o Assistente Virtual da AIVERSE Technologies, uma empresa especializada em desenvolvimento web, automações com n8n, cardápios online e chatbots com agentes de IA. Seu tom deve ser profissional, claro, amigável e conciso. Siga estas diretrizes:

1. Responda às perguntas do usuário com base nos serviços da AIVERSE:
   - Desenvolvimento web: Criação de sites institucionais, e-commerces e aplicações web modernas.
   - Automações: Integrações e fluxos de trabalho personalizados usando n8n para otimizar processos empresariais.
   - Cardápios online: Soluções interativas para restaurantes, com integração de pagamentos e atualizações em tempo real.
   - Chatbots e agentes de IA: Soluções personalizadas para atendimento ao cliente, suporte e automações inteligentes.
2. Se a pergunta for sobre preços, explique que os valores são personalizados e sugira uma consulta gratuita via WhatsApp (21) 96958-5179.
3. Se a pergunta for sobre contato, forneça: Email (contato@aiverse.tech), WhatsApp/Telefone (21) 96958-5179) e horário de atendimento (Segunda a Sexta, 9h às 18h).
4. Se a pergunta for sobre portfólio, mencione exemplos como e-commerces, sistemas de automação, cardápios online e chatbots, e ofereça enviar detalhes por e-mail ou WhatsApp.
5. Para qualquer pergunta que você não entenda ou que esteja fora do escopo, responda: "Desculpe, não entendi completamente sua pergunta. Para mais informações, entre em contato pelo WhatsApp/Telefone: (21) 96958-5179. Nossa equipe está pronta para ajudar!"
6. Sempre finalize com uma pergunta para engajar o usuário, como: "Como posso ajudá-lo mais?" ou "Gostaria de mais detalhes sobre algum serviço?"
7. Use português brasileiro e evite jargões técnicos, a menos que o usuário demonstre conhecimento técnico.
`;

export const ChatBot: React.FC<ChatBotProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou o assistente virtual da AIVERSE Technologies. Estamos aqui para ajudar com desenvolvimento web, automações, cardápios online e chatbots usando n8n e agentes de IA. Como posso auxiliá-lo hoje?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGrokAPI = async (userMessage: string): Promise<string> => {
    try {
      console.log("Enviando mensagem para a API da Groq:", userMessage);
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Proxy CORS temporário para teste
      const apiUrl = "https://api.groq.com/openai/v1/chat/completions";
      const response = await fetch(proxyUrl + apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer gsk_x8fxk7eDxLYuJQEvIZOOWGdyb3FYjoBA3PXjWvxZEnOn2PSeB9",
        },
        body: JSON.stringify({
          model: "mixtral-8x7b-32768", // Ajuste o modelo conforme a documentação
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userMessage },
          ],
          max_tokens: 200,
          temperature: 0.7,
        }),
      });

      console.log("Status da resposta:", response.status);
      const responseText = await response.clone().text();
      console.log("Resposta bruta da API:", responseText);
      const data = await response.json();
      console.log("Dados processados da API:", data);

      if (data.choices && data.choices[0]?.message?.content) {
        return data.choices[0].message.content;
      }
      throw new Error("Resposta inválida da API ou sem conteúdo nas choices: " + JSON.stringify(data));
    } catch (error) {
      console.error("Erro ao chamar a API da Groq:", error);
      return "Desculpe, não entendi completamente sua pergunta. Para mais informações, entre em contato pelo WhatsApp/Telefone: (21) 96958-5179. Nossa equipe está pronta para ajudar!";
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setTimeout(async () => {
      const botResponseText = await callGrokAPI(inputValue);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
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
    <Card
      className={cn(
        "fixed bottom-6 right-6 w-80 h-96 z-50 flex flex-col",
        "bg-card/95 backdrop-blur-sm border-primary/20",
        "shadow-[var(--shadow-card)] transition-all duration-300",
        isMinimized && "h-14",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
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
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex", message.isBot ? "justify-start" : "justify-end")}
              >
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