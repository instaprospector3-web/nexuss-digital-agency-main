import { Target, Heart, TrendingUp, Handshake } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: TrendingUp,
      title: "Inovação constante",
      description: "Sempre à frente com as tecnologias mais recentes",
    },
    {
      icon: Heart,
      title: "Transparência total",
      description: "Comunicação clara em cada etapa do projeto",
    },
    {
      icon: Target,
      title: "Foco em resultados",
      description: "Entregamos soluções que geram impacto real",
    },
    {
      icon: Handshake,
      title: "Parceria genuína",
      description: "Seu sucesso é o nosso sucesso",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Gradient fade from hero */}
      <div className="absolute top-0 left-0 right-0 h-64 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-primary/15 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="slide-up relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quem somos a <span className="gradient-text">Nexus</span>
            </h2>
            
            <div className="space-y-6 text-foreground/80">
              <p className="text-lg leading-relaxed">
                Fundada em 2020, a Nexus surgiu da paixão de três desenvolvedores 
                que acreditavam que todo negócio merece uma presença digital impecável. 
                Hoje, somos uma equipe de 15 especialistas dedicados a criar soluções 
                que fazem a diferença.
              </p>
              
              <div className="glass p-6 rounded-2xl">
                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Nossa Missão
                </h3>
                <p className="text-foreground/70">
                  Democratizar o acesso a tecnologia de ponta, criando websites 
                  e aplicações que não apenas impressionam visualmente, mas entregam 
                  resultados concretos para nossos clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid grid-cols-2 gap-6 slide-up relative z-10">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-foreground/60">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
