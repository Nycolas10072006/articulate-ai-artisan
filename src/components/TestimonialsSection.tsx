import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Excelente acabamento e atendimento. O resultado ficou incrível, superou todas as nossas expectativas.",
    name: "Marina Almeida",
    role: "Arquiteta",
  },
  {
    text: "A equipe da DME entendeu perfeitamente o conceito do projeto. Materiais de primeira e prazos cumpridos.",
    name: "Carlos Ferreira",
    role: "Cliente residencial",
  },
  {
    text: "Parceiros excepcionais. Já realizamos mais de 20 projetos juntos e a qualidade é sempre impecável.",
    name: "Renata Souza",
    role: "Designer de interiores",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Depoimentos</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light">
            O que dizem nossos <span className="text-gradient-gold">clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="p-8 rounded-sm bg-card border border-border">
              <Quote className="w-8 h-8 text-gold/40 mb-6" />
              <p className="text-foreground font-body font-light leading-relaxed mb-8 text-lg italic">
                "{t.text}"
              </p>
              <div>
                <p className="text-foreground font-display text-lg">{t.name}</p>
                <p className="text-muted-foreground font-body text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
