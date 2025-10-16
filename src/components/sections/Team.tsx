import { Linkedin } from "lucide-react";
import anaImage from "@/assets/team-ana.jpg";
import carlosImage from "@/assets/team-carlos.jpg";
import marinaImage from "@/assets/team-marina.jpg";
import rafaelImage from "@/assets/team-rafael.jpg";

const Team = () => {
  const team = [
    {
      name: "Ana Silva",
      role: "CEO & Founder",
      bio: "Visionária apaixonada por inovação",
      image: anaImage,
    },
    {
      name: "Carlos Mendes",
      role: "CTO",
      bio: "Arquiteto de soluções escaláveis",
      image: carlosImage,
    },
    {
      name: "Marina Costa",
      role: "Design Lead",
      bio: "Criando experiências memoráveis",
      image: marinaImage,
    },
    {
      name: "Rafael Santos",
      role: "Marketing Director",
      bio: "Conectando marcas com pessoas",
      image: rafaelImage,
    },
  ];

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossa <span className="gradient-text">Equipe</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Conheça os especialistas que tornam a magia acontecer
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="text-center slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                  <Linkedin className="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-foreground/60">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
