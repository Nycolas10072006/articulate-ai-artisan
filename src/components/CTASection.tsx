import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="orcamento" className="py-24 md:py-32 px-6 relative">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Comece Agora</p>
        <h2 className="font-display text-4xl md:text-6xl text-foreground font-light leading-tight mb-6">
          Transforme seu ambiente com móveis planejados de <span className="text-gradient-gold">alto padrão</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg font-light mb-10 max-w-xl mx-auto">
          Entre em contato e receba um orçamento personalizado para o seu projeto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento." target="_blank" rel="noopener noreferrer">
            <Button variant="default" size="lg" className="bg-gradient-gold text-primary-foreground font-body text-sm tracking-wider uppercase px-8 py-6 hover:opacity-90 transition-opacity gap-2">
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </Button>
          </a>
          <a href="#orcamento">
            <Button variant="outline" size="lg" className="border-gold/30 text-gold font-body text-sm tracking-wider uppercase px-8 py-6 hover:bg-gold/10 transition-colors">
              Solicitar Orçamento
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
