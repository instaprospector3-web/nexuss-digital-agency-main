import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").max(100),
  email: z.string().email("Email inválido").max(255),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Selecione um serviço"),
  budget: z.string().optional(),
  message: z.string().min(20, "Mensagem deve ter pelo menos 20 caracteres").max(1000),
  terms: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos",
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // TODO: Implement backend call
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call

      console.log("Form data:", data);
      
      setIsSuccess(true);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });

      setTimeout(() => {
        setIsSuccess(false);
        reset();
      }, 3000);
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contato@nexusagency.com",
    },
    {
      icon: Phone,
      label: "Telefone",
      value: "(11) 99999-9999",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "São Paulo, SP",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos conversar sobre seu <span className="gradient-text">projeto</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Preencha o formulário e nossa equipe entrará em contato em até 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={info.label}
                className="glass p-6 rounded-2xl flex items-start gap-4 slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-1">{info.label}</p>
                  <p className="text-lg font-medium">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="glass p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
              <div className="flex gap-4">
                {["LinkedIn", "Instagram", "Twitter", "Facebook"].map((social) => (
                  <button
                    key={social}
                    className="w-10 h-10 rounded-full bg-primary/20 hover:bg-gradient-primary hover:text-white transition-all flex items-center justify-center"
                  >
                    {social[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-2xl">
            {isSuccess ? (
              <div className="text-center py-12">
                <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                <p className="text-foreground/70">
                  Obrigado por entrar em contato. Responderemos em breve!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome *</Label>
                    <Input
                      id="name"
                      {...register("name")}
                      placeholder="Seu nome"
                      className="bg-background/50"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="seu@email.com"
                      className="bg-background/50"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input
                      id="phone"
                      {...register("phone")}
                      placeholder="(00) 00000-0000"
                      className="bg-background/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      {...register("company")}
                      placeholder="Nome da empresa"
                      className="bg-background/50"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="service">Serviço *</Label>
                    <Select onValueChange={(value) => setValue("service", value)}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web">Web Development</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                        <SelectItem value="branding">Branding</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="mobile">Mobile</SelectItem>
                        <SelectItem value="consultoria">Consultoria</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-sm text-destructive">{errors.service.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Orçamento</Label>
                    <Select onValueChange={(value) => setValue("budget", value)}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">{"< R$ 5.000"}</SelectItem>
                        <SelectItem value="medium">R$ 5.000 - R$ 15.000</SelectItem>
                        <SelectItem value="large">R$ 15.000 - R$ 30.000</SelectItem>
                        <SelectItem value="enterprise">{"> R$ 30.000"}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={5}
                    className="bg-background/50 resize-none"
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex items-start gap-2">
                  <Checkbox
                    id="terms"
                    onCheckedChange={(checked) => setValue("terms", checked as boolean)}
                  />
                  <Label
                    htmlFor="terms"
                    className="text-sm text-foreground/70 cursor-pointer"
                  >
                    Aceito receber comunicações e concordo com a política de privacidade
                  </Label>
                </div>
                {errors.terms && (
                  <p className="text-sm text-destructive">{errors.terms.message}</p>
                )}

                <InteractiveHoverButton
                  type="submit"
                  disabled={isSubmitting}
                  text={isSubmitting ? "Enviando..." : "Enviar"}
                  className="w-full"
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
