import { ChefHat, Shirt, Tv, Monitor, Sparkles } from "lucide-react";

const services = [
  { icon: ChefHat, title: "Cozinhas Planejadas", description: "Design moderno com máximo aproveitamento do espaço" },
  { icon: Shirt, title: "Closets de Alto Padrão", description: "Organização e sofisticação para seu dia a dia" },
  { icon: Tv, title: "Painéis e Salas", description: "Integração estética com o ambiente" },
  { icon: Monitor, title: "Home Offices", description: "Ambientes funcionais e elegantes" },
  { icon: Sparkles, title: "Projetos Personalizados", description: "Desenvolvimento exclusivo conforme o cliente" },
];

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Serviços</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light">
            O que fazemos de <span className="text-gradient-gold">melhor</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-sm bg-card border border-border hover:border-gold/30 transition-all duration-500 hover:shadow-gold"
            >
              <service.icon className="w-8 h-8 text-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body font-light">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
