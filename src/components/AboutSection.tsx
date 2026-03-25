import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-24 md:py-32 px-6">
      <div ref={ref} className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Sobre Nós</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground font-light leading-tight mb-8">
              Excelência em marcenaria <span className="text-gradient-gold">sob medida</span>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-muted-foreground font-body font-light leading-relaxed text-lg">
              A DME Marcenaria é especializada em móveis planejados de alto padrão, combinando design, precisão e materiais de qualidade superior para criar ambientes únicos.
            </p>
            <p className="text-muted-foreground font-body font-light leading-relaxed text-lg">
              Cada projeto é desenvolvido com atenção aos detalhes, garantindo durabilidade, estética e funcionalidade.
            </p>
            <div className="pt-4 flex gap-12">
              <div>
                <p className="text-gradient-gold font-display text-4xl font-semibold">15+</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Anos de experiência</p>
              </div>
              <div>
                <p className="text-gradient-gold font-display text-4xl font-semibold">500+</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Projetos entregues</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
