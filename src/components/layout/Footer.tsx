import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Nexus</h3>
            <p className="text-foreground/70 max-w-md">
              Transformando ideias em experiências digitais extraordinárias desde 2020.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>contato@nexusagency.com</li>
              <li>(11) 99999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60 flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-accent" fill="currentColor" /> pela
            Nexus Digital Agency
          </p>
          <p className="text-sm text-foreground/60">
            © {currentYear} Nexus. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
