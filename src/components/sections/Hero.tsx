import { Sparkles } from "lucide-react";
import newBgImage from "@/assets/Sem-Título-1.png";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import ShaderBackground from "@/components/effects/ShaderBackground";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Hero background image */}
      <img
        src={newBgImage}
        alt="Imagem de fundo da seção hero"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        aria-hidden="true"
      />

      {/* Shader animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <ShaderBackground />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20 blur-xl"
            style={{
              width: Math.random() * 300 + 50 + "px",
              height: Math.random() * 300 + 50 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm">Bem-vindo à Nexus Digital Agency</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transformando ideias em{" "}
            <span className="gradient-text">experiências digitais</span>{" "}
            extraordinárias
          </h1>

          <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Criamos soluções digitais que impressionam, engajam e convertem.
            Sua visão, nossa tecnologia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <InteractiveHoverButton
              text="Serviços"
              onClick={() => scrollToSection("services")}
            />
            <InteractiveHoverButton
              text="Portfólio"
              onClick={() => scrollToSection("portfolio")}
            />
          </div>

          {/* Stats */}
          <div className="relative mt-16 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="glass p-4 md:p-6 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">150+</div>
                <div className="text-xs md:text-sm text-foreground/60">Projetos</div>
              </div>
              <div className="glass p-4 md:p-6 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">98%</div>
                <div className="text-xs md:text-sm text-foreground/60">Satisfação</div>
              </div>
              <div className="glass p-4 md:p-6 rounded-2xl">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-xs md:text-sm text-foreground/60">Clientes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;