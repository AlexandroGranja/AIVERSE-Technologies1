import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, BarChart3, User, Languages, Sparkles, Send, Wifi, Battery, Signal, Bot, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  isVisible?: boolean;
  isTyping?: boolean;
  displayText?: string;
}

const AIChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Efeito de digitação natural e envolvente
  const typeMessage = (messageId: string, fullText: string, onComplete?: () => void) => {
    let currentIndex = 0;
    const baseSpeed = 30; // ms por caractere base
    const variation = 15; // variação de velocidade

    const typeNextChar = () => {
      if (currentIndex <= fullText.length) {
        // Velocidade variável para simular digitação humana real
        const speed = baseSpeed + Math.random() * variation;
        
        setMessages(prev => prev.map(msg => 
          msg.id === messageId 
            ? { ...msg, displayText: fullText.slice(0, currentIndex) }
            : msg
        ));
        
        currentIndex++;
        
        // Pausas naturais para simular pensamento
        if (currentIndex % 20 === 0 && Math.random() < 0.3) {
          // Pausa mais longa ocasionalmente
          setTimeout(typeNextChar, 200 + Math.random() * 300);
        } else if (currentIndex % 8 === 0 && Math.random() < 0.4) {
          // Pausa curta frequente
          setTimeout(typeNextChar, 50 + Math.random() * 100);
        } else {
          setTimeout(typeNextChar, speed);
        }
      } else {
        setTypingMessageId(null);
        // Chamar callback quando a digitação terminar
        if (onComplete) {
          setTimeout(onComplete, 800); // Delay natural após terminar
        }
      }
    };

    typeNextChar();
  };

  // Função para gerar mensagens com timestamps dinâmicos
  const generateMessages = (): Message[] => {
    const now = new Date();
    return [
      {
        id: '1',
        text: 'Olá! Sou o assistente virtual da AIVERSE Technologies. Somos especialistas em soluções digitais inovadoras. Como posso te ajudar hoje?',
        isBot: true,
        timestamp: new Date(now.getTime() - 8 * 60 * 1000), // 8 minutos atrás
      },
      {
        id: '2',
        text: 'Oi! Quero saber mais sobre chatbots para meu negócio',
        isBot: false,
        timestamp: new Date(now.getTime() - 7 * 60 * 1000), // 7 minutos atrás
      },
      {
        id: '3',
        text: 'Nossos Agentes de Atendimento IA revolucionam o atendimento ao cliente:\n\n• Chatbots inteligentes com processamento de linguagem natural\n• Integração com WhatsApp Business\n• Respostas 24/7 automatizadas\n• Aprendizado contínuo\n• Relatórios detalhados de atendimento\n• Integração com CRM\n\nPerfeito para empresas que querem melhorar o atendimento e reduzir custos. Posso te mostrar alguns exemplos?',
        isBot: true,
        timestamp: new Date(now.getTime() - 6 * 60 * 1000), // 6 minutos atrás
      },
      {
        id: '4',
        text: 'E quanto custa para implementar?',
        isBot: false,
        timestamp: new Date(now.getTime() - 5 * 60 * 1000), // 5 minutos atrás
      },
      {
        id: '5',
        text: 'Nossos valores são personalizados de acordo com a complexidade e necessidades de cada projeto:\n\n• Análise gratuita do seu projeto\n• Orçamento sem compromisso\n• Planos de pagamento flexíveis\n• Suporte técnico incluso\n• Garantia de satisfação\n\nPara um orçamento preciso, preciso entender melhor suas necessidades. Que tipo de solução você está buscando?',
        isBot: true,
        timestamp: new Date(now.getTime() - 4 * 60 * 1000), // 4 minutos atrás
      },
      {
        id: '6',
        text: 'Tenho um e-commerce e quero automatizar o atendimento',
        isBot: false,
        timestamp: new Date(now.getTime() - 3 * 60 * 1000), // 3 minutos atrás
      },
      {
        id: '7',
        text: 'Perfeito! Para e-commerce, desenvolvemos:\n\n• Sites responsivos e otimizados\n• E-commerce completo com sistema de pagamentos\n• Landing pages de alta conversão\n• SEO otimizado\n• Performance otimizada\n• Integração com sistemas existentes\n\nE o chatbot pode integrar com seu e-commerce para responder dúvidas sobre produtos, status de pedidos e muito mais!',
        isBot: true,
        timestamp: new Date(now.getTime() - 2 * 60 * 1000), // 2 minutos atrás
      },
      {
        id: '8',
        text: 'Como posso falar com um especialista?',
        isBot: false,
        timestamp: new Date(now.getTime() - 1 * 60 * 1000), // 1 minuto atrás
      },
      {
        id: '9',
        text: 'Entre em contato conosco através dos canais oficiais:\n\nWhatsApp/Telefone: (21) 96958-5179\nE-mail: contato@aiverse.tech\nInstagram: @aiversetech_oficial\n\nHorário de Atendimento:\nSegunda a Sexta: 9h às 18h\nSábado: 9h às 13h\n\nNossa equipe está pronta para atender você!',
        isBot: true,
        timestamp: new Date(now.getTime() - 30 * 1000), // 30 segundos atrás
      },
    ];
  };

  // Mensagens pré-definidas do chat baseadas no ChatBot real
  const predefinedMessages: Message[] = generateMessages();

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      // Scroll apenas dentro do container do chat, não da página inteira
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Função para formatar a hora
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  // Função para formatar timestamp das mensagens
  const formatMessageTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  // Atualizar hora em tempo real
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Atualizar timestamps das mensagens quando o tempo mudar
  useEffect(() => {
    const updateMessageTimestamps = () => {
      setMessages(prev => prev.map(msg => ({
        ...msg,
        timestamp: new Date(msg.timestamp.getTime() + 1000) // Adiciona 1 segundo
      })));
    };

    const timer = setInterval(updateMessageTimestamps, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Scroll suave apenas dentro do chat
    if (messages.length > 0) {
      const timer = setTimeout(scrollToBottom, 100);
      return () => clearTimeout(timer);
    }
  }, [messages.length]);

  // Sistema de conversa natural e sequencial
  useEffect(() => {
    if (currentMessageIndex < predefinedMessages.length) {
      const message = predefinedMessages[currentMessageIndex];
      
      // Delay inicial para começar a conversa
      const startDelay = currentMessageIndex === 0 ? 2000 : 0;
      
      const showMessage = () => {
        if (message.isBot) {
          // Bot: Mostrar indicador de digitação primeiro
          setIsTyping(true);
          
          // Tempo de "pensamento" do bot
          const thinkingTime = 1500 + Math.random() * 1000; // 1.5-2.5s
          
          setTimeout(() => {
            setIsTyping(false);
            
            // Adicionar mensagem do bot
            const botMessage = { 
              ...message, 
              isVisible: true, 
              displayText: '',
              isTyping: true 
            };
            setMessages(prev => [...prev, botMessage]);
            setTypingMessageId(message.id);
            
            // Iniciar digitação
            typeMessage(message.id, message.text, () => {
              // Após terminar a digitação, aguardar um pouco e passar para próxima
              setTimeout(() => {
                setCurrentMessageIndex(prev => prev + 1);
              }, 1000);
            });
          }, thinkingTime);
          
        } else {
          // Usuário: Aparece imediatamente
          const userMessage = { 
            ...message, 
            isVisible: true, 
            displayText: message.text 
          };
          setMessages(prev => [...prev, userMessage]);
          
          // Aguardar um pouco antes da próxima mensagem
          setTimeout(() => {
            setCurrentMessageIndex(prev => prev + 1);
          }, 1500);
        }
      };

      const timeoutId = setTimeout(showMessage, startDelay);
      return () => clearTimeout(timeoutId);
    }
  }, [currentMessageIndex]);

  // Reiniciar a conversa quando terminar
  useEffect(() => {
    if (currentMessageIndex >= predefinedMessages.length) {
      const restartTimeout = setTimeout(() => {
        setMessages([]);
        setCurrentMessageIndex(0);
        setIsTyping(false);
        setTypingMessageId(null);
      }, 8000);

      return () => clearTimeout(restartTimeout);
    }
  }, [currentMessageIndex]);

  const features = [
    {
      icon: MessageCircle,
      title: 'Agentes de Atendimento IA',
      description: 'Chatbots inteligentes com processamento de linguagem natural, integração WhatsApp e respostas 24/7',
    },
    {
      icon: BarChart3,
      title: 'Páginas Web Completas',
      description: 'Sites responsivos, e-commerce completo, landing pages de alta conversão e SEO otimizado',
    },
    {
      icon: User,
      title: 'Automações de Processos',
      description: 'Workflows empresariais automatizados, integração entre sistemas e redução de custos operacionais',
    },
    {
      icon: Languages,
      title: 'Cardápios Online',
      description: 'Cardápios digitais interativos, sistema de pedidos online e integração com delivery',
    },
  ];

  return (
    <section className="py-20 px-4 relative" id="chat-ia">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Bot className="w-4 h-4" />
            Chat com IA
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experimente nosso <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Assistente Virtual</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como nossa inteligência artificial pode revolucionar o atendimento do seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mockup Mobile */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              {/* Frame do Celular - Design Realista */}
              <div className="relative w-72 h-[580px] bg-gradient-to-b from-gray-900 to-black rounded-[2.5rem] shadow-2xl border-2 border-gray-700 overflow-hidden">
                {/* Borda interna para simular tela */}
                <div className="absolute inset-1 bg-black rounded-[2rem] overflow-hidden">
                  {/* Tela do celular */}
                  <div className="w-full h-full bg-gradient-to-b from-slate-900 to-slate-800">
                {/* Notch - Simulando iPhone */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10 flex items-center justify-center">
                  {/* Câmera frontal */}
                  <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-3 text-white text-sm pt-8">
                  <span className="font-medium">{formatTime(currentTime)}</span>
                  <div className="flex items-center gap-1">
                    <Signal className="w-4 h-4" />
                    <Wifi className="w-4 h-4" />
                    <Battery className="w-4 h-4" />
                  </div>
                </div>

                {/* Header do Chat */}
                <div className="px-4 py-3 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">AIVERSE Assistant</h3>
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span>Online • Digitando...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div 
                  ref={chatContainerRef}
                  className="flex-1 overflow-y-auto px-4 py-4 space-y-4 h-[350px] scroll-smooth"
                >
                  {messages.map((message, index) => (
                    <div
                      key={message.id}
                      className={cn(
                        "flex transition-all duration-500 ease-out",
                        message.isBot ? "justify-start" : "justify-end",
                        message.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                      )}
                      style={{ 
                        animationDelay: `${index * 0.2}s`,
                        transitionDelay: `${index * 0.1}s`
                      }}
                    >
                      <div
                        className={cn(
                          "max-w-[80%] p-3 rounded-2xl text-sm shadow-sm",
                          message.isBot
                            ? "bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-bl-md"
                            : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-br-md"
                        )}
                      >
                        <p className="whitespace-pre-line">
                          {message.displayText || message.text}
                          {message.isTyping && typingMessageId === message.id && (
                            <span className="inline-block w-2 h-4 bg-white/70 ml-1 animate-pulse"></span>
                          )}
                        </p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {formatMessageTime(message.timestamp)}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="bg-gradient-to-r from-slate-700 to-slate-600 p-4 rounded-2xl">
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-xs text-cyan-300 font-medium">AIVERSE está pensando...</span>
                        </div>
                        <div className="mt-2 text-xs text-slate-400">
                          ✨ Analisando sua pergunta e preparando a melhor resposta
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="px-4 py-3 border-t border-slate-700">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Digite sua mensagem..."
                      className="flex-1 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 rounded-full"
                    />
                    <Button size="icon" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-full">
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                  </div>
                </div>
                
                {/* Botão Home - Simulando iPhone */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Exemplos de Agentes IA */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Exemplos de Agentes IA</h3>
              <div className="space-y-6">
                {/* Exemplo 1 - Atendimento E-commerce */}
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:translate-x-2 transition-all duration-300 hover:shadow-lg group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-green-500 transition-colors">
                        Atendimento E-commerce
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        "Olá! Vi que você está interessado no produto X. Posso ajudar com informações sobre tamanho, cor, disponibilidade e formas de pagamento!"
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-green-500/20 text-green-600 text-xs rounded-full">WhatsApp</span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-600 text-xs rounded-full">Instagram</span>
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-600 text-xs rounded-full">Site</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Exemplo 2 - Suporte Técnico */}
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:translate-x-2 transition-all duration-300 hover:shadow-lg group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-blue-500 transition-colors">
                        Suporte Técnico
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        "Identifiquei o problema! Vou te guiar passo a passo para resolver. Primeiro, verifique se o cabo está conectado corretamente..."
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-600 text-xs rounded-full">Diagnóstico</span>
                        <span className="px-2 py-1 bg-orange-500/20 text-orange-600 text-xs rounded-full">Tutorial</span>
                        <span className="px-2 py-1 bg-red-500/20 text-red-600 text-xs rounded-full">Urgente</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Exemplo 3 - Agendamento */}
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:translate-x-2 transition-all duration-300 hover:shadow-lg group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2 group-hover:text-purple-500 transition-colors">
                        Agendamento Inteligente
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        "Perfeito! Tenho disponibilidade amanhã às 14h ou quinta às 10h. Qual prefere? Posso enviar o link da reunião automaticamente!"
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-600 text-xs rounded-full">Calendário</span>
                        <span className="px-2 py-1 bg-pink-500/20 text-pink-600 text-xs rounded-full">Lembretes</span>
                        <span className="px-2 py-1 bg-indigo-500/20 text-indigo-600 text-xs rounded-full">Integração</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { AIChatSection };
