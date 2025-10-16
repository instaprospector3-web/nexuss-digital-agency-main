import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "A Nexus transformou completamente nossa presença online. O resultado superou todas as expectativas!",
      author: "João Pedro",
      role: "CEO da TechCorp",
    },
    {
      text: "Profissionalismo, criatividade e entrega no prazo. Recomendo de olhos fechados!",
      author: "Maria Oliveira",
      role: "Fundadora EcoStore",
    },
    {
      text: "A equipe entendeu perfeitamente nossa visão e trouxe ideias incríveis para o projeto.",
      author: "Lucas Andrade",
      role: "Diretor StartupX",
    },
  ];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que dizem nossos <span className="gradient-text">clientes</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass p-12 rounded-3xl relative">
            <Quote className="w-16 h-16 text-primary/20 absolute top-8 left-8" />

            <div className="relative z-10 text-center">
              <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>

              <div className="space-y-1">
                <p className="font-bold text-xl">{testimonials[activeIndex].author}</p>
                <p className="text-foreground/60">{testimonials[activeIndex].role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-foreground/20"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
