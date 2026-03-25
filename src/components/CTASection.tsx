import QuoteForm from "@/components/QuoteForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="orcamento" className="py-24 md:py-32 px-6 relative">
      <div ref={ref} className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Comece Agora</p>
        <h2 className="font-display text-4xl md:text-5xl text-foreground font-light leading-tight mb-6">
          Solicite seu <span className="text-gradient-gold">orçamento</span>
        </h2>
        <p className="text-muted-foreground font-body text-lg font-light mb-12 max-w-xl mx-auto">
          Preencha o formulário abaixo e entraremos em contato pelo WhatsApp.
        </p>
        <QuoteForm />
      </div>
    </section>
  );
};

export default CTASection;
