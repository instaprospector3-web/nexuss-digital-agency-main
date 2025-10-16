import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Portfólio", href: "#portfolio" },
    { label: "Equipe", href: "#team" },
    { label: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`glass rounded-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${
              isScrolled ? "shadow-2xl" : ""
            }`}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="text-2xl font-bold gradient-text"
            >
              Nexus
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop Contact Button */}
            <div className="hidden md:block">
              <InteractiveHoverButton
                text="Contato"
                onClick={() => scrollToSection("#contact")}
                className="min-w-[160px]"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/95 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-2xl text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <InteractiveHoverButton
                text="Contato"
                onClick={() => scrollToSection("#contact")}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
