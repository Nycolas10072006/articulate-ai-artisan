import { Ruler, Diamond, Eye, Users, Clock } from "lucide-react";

const differentials = [
  { icon: Ruler, title: "Projeto personalizado", description: "Cada cliente recebe um projeto único" },
  { icon: Diamond, title: "Materiais premium", description: "MDF, lâminas naturais e ferragens de alto padrão" },
  { icon: Eye, title: "Acabamento impecável", description: "Detalhes que elevam o padrão do móvel" },
  { icon: Users, title: "Equipe especializada", description: "Profissionais experientes" },
  { icon: Clock, title: "Entrega com precisão", description: "Cumprimento de prazos" },
];

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const DifferentialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-24 md:py-32 px-6">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Diferenciais</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light">
            Por que escolher a <span className="text-gradient-gold">DME</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {differentials.map((item, i) => (
            <div key={item.title} className="text-center">
              <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-body text-sm font-light">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
