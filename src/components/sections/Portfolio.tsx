import { ExternalLink } from "lucide-react";
import ecoShop from "@/assets/portfolio-ecoshop.jpg";
import fitTracker from "@/assets/portfolio-fittracker.jpg";
import techStartup from "@/assets/portfolio-techstartup.jpg";
import restaurant from "@/assets/portfolio-restaurant.jpg";
import portfolioMax from "@/assets/portfolio-portfoliomax.jpg";
import cryptoWallet from "@/assets/portfolio-cryptowallet.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "EcoShop",
      type: "E-commerce",
      tech: ["React", "Node.js", "Stripe"],
      image: ecoShop,
    },
    {
      title: "FitTracker App",
      type: "Mobile App",
      tech: ["React Native", "Firebase"],
      image: fitTracker,
    },
    {
      title: "TechStartup Landing",
      type: "Landing Page",
      tech: ["Next.js", "Tailwind", "Framer Motion"],
      image: techStartup,
    },
    {
      title: "RestaurantHub",
      type: "Plataforma de Delivery",
      tech: ["Vue.js", "Express", "MongoDB"],
      image: restaurant,
    },
    {
      title: "PortfolioMax",
      type: "Site Portfólio",
      tech: ["Astro", "GSAP"],
      image: portfolioMax,
    },
    {
      title: "CryptoWallet",
      type: "Dashboard",
      tech: ["React", "Web3", "Chart.js"],
      image: cryptoWallet,
    },
  ];

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nosso <span className="gradient-text">Portfólio</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Projetos que transformaram negócios e encantaram usuários
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-2xl cursor-pointer slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary">
                    {project.type}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full glass text-foreground/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary">
                  <span className="text-sm font-medium">Ver Detalhes</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
