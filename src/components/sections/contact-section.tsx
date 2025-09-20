import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  MapPin, 
  Clock,
  Sparkles,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const message = `Olá! Gostaria de solicitar um orçamento.%0A
- Nome: ${formData.name}%0A
- Email: ${formData.email}%0A
- Telefone: ${formData.phone}%0A
- Serviço: ${formData.service}%0A
- Mensagem: ${formData.message}`;

  const whatsappNumber = "5521969585179";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(whatsappUrl, "_blank");

  toast({
    title: "Redirecionando para o WhatsApp...",
    description: "Você será atendido em instantes 🚀",
  });

  setFormData({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  setIsSubmitting(false);
};

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "technologiesaiverse@gmail.com",
      description: "Resposta em até 2 horas"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "(21) 96958-5179",
      description: "Atendimento imediato"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg - Sex: 9h às 18h",
      description: "Finais de semana sob demanda"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Rio De Janeiro, RJ",
      description: "Atendimento remoto (Brasil) e presencial (RJ)"
    }
  ];

  return (
    <section className="py-20 px-4 relative" id="contato">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Entre em Contato
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">transformar</span> sua ideia em realidade
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa equipe está pronta para discutir seu projeto e criar soluções personalizadas 
            que atendam exatamente às suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Solicite seu orçamento</CardTitle>
                <CardDescription>
                  Preencha o formulário e nossa equipe entrará em contato em breve
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(55) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="bg-background/50"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Serviço de interesse</Label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => handleInputChange("service", e.target.value)}
                        className="w-full px-3 py-2 bg-background/50 border border-input rounded-md text-sm"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="site">Página Web Completa</option>
                        <option value="chatbot">Agente de Atendimento IA</option>
                        <option value="automacao">Automação de Processos</option>
                        <option value="cardapio">Cardápio Online</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos sobre seu projeto e suas necessidades..."
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={4}
                      className="bg-background/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full bg-primary hover:bg-primary/90 text-primary-foreground",
                      "shadow-[var(--shadow-neural)] hover:shadow-[var(--shadow-glow)]",
                      "transition-all duration-300"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 w-5 h-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              
              return (
                <Card 
                  key={index}
                  className={cn(
                    "bg-card/30 backdrop-blur-sm border-border/50",
                    "hover:border-primary/50 transition-all duration-300",
                    "hover:shadow-[var(--shadow-card)]"
                  )}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-foreground font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Trust indicators */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  Por que escolher a AIVERSE?
                </h3>
                
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Consultoria gratuita inicial
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Suporte técnico 24/7
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Garantia de satisfação
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    Tecnologias mais avançadas
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};