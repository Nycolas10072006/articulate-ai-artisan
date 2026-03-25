const steps = [
  { number: "01", title: "Contato", description: "Cliente solicita orçamento" },
  { number: "02", title: "Briefing", description: "Entendimento da necessidade" },
  { number: "03", title: "Projeto", description: "Desenvolvimento personalizado" },
  { number: "04", title: "Produção", description: "Fabricação com precisão" },
  { number: "05", title: "Instalação", description: "Montagem profissional" },
];

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProcessSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-24 md:py-32 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Processo</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light">
            Como <span className="text-gradient-gold">trabalhamos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              <p className="text-gradient-gold font-display text-5xl font-bold mb-4">{step.number}</p>
              <h3 className="font-display text-xl text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground font-body text-sm font-light">{step.description}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-px bg-gold/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
