import {
  Code,
  Palette,
  Sparkles,
  TrendingUp,
  Smartphone,
  Lightbulb,
} from "lucide-react";
import { GlowCard } from "@/components/ui/GlowCard";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description:
        "Criamos experiências web modernas e responsivas que funcionam perfeitamente em todos os dispositivos.",
      features: [
        "Sites institucionais",
        "E-commerce completo",
        "Web apps customizados",
        "Progressive Web Apps",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Design centrado no usuário que combina estética com funcionalidade para criar experiências memoráveis.",
      features: [
        "Design de interfaces",
        "Prototipagem",
        "Design systems",
        "Testes de usabilidade",
      ],
    },
    {
      icon: Sparkles,
      title: "Branding Digital",
      description:
        "Construímos identidades visuais únicas que capturam a essência da sua marca no mundo digital.",
      features: [
        "Identidade visual",
        "Logo design",
        "Brand guidelines",
        "Motion graphics",
      ],
    },
    {
      icon: TrendingUp,
      title: "Marketing Digital",
      description:
        "Estratégias data-driven para aumentar sua visibilidade online e converter visitantes em clientes.",
      features: [
        "SEO & SEM",
        "Social media",
        "Email marketing",
        "Analytics & otimização",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Apps nativos e híbridos que oferecem performance excepcional e experiência fluida.",
      features: [
        "Apps iOS & Android",
        "React Native",
        "Flutter",
        "Apps híbridos",
      ],
    },
    {
      icon: Lightbulb,
      title: "Consultoria Tech",
      description:
        "Orientação especializada para otimizar sua infraestrutura tecnológica e processos de desenvolvimento.",
      features: [
        "Arquitetura de software",
        "Code review",
        "Performance optimization",
        "Cloud solutions",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text">Serviços</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GlowCard
                customSize={true}
                className="h-full p-8"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 hover:group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-foreground/70 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-foreground/60"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;