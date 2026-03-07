import heroImage from "@/assets/hero-kitchen.jpg";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cozinha planejada de alto padrão com madeira e mármore"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-[fadeInUp_0.8s_0.2s_forwards]">
          Marcenaria de Alto Padrão
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1] mb-6 opacity-0 animate-[fadeInUp_0.8s_0.4s_forwards]">
          DME <span className="text-gradient-gold">Marcenaria</span>
        </h1>
        <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light opacity-0 animate-[fadeInUp_0.8s_0.6s_forwards]">
          Transformamos madeira em ambientes sofisticados, funcionais e exclusivos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-[fadeInUp_0.8s_0.8s_forwards]">
          <a href="#orcamento">
            <Button variant="default" size="lg" className="bg-gradient-gold text-primary-foreground font-body text-sm tracking-wider uppercase px-8 py-6 hover:opacity-90 transition-opacity">
              Solicitar Orçamento
            </Button>
          </a>
          <a href="#portfolio">
            <Button variant="outline" size="lg" className="border-gold/30 text-gold font-body text-sm tracking-wider uppercase px-8 py-6 hover:bg-gold/10 transition-colors">
              Ver Projetos
            </Button>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
