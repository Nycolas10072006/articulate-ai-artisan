import heroKitchen from "@/assets/hero-kitchen.jpg";
import closet from "@/assets/portfolio-quarto.jpg";
import sala from "@/assets/portfolio-painelcama.jpg";
import office from "@/assets/portfolio-adega.jpg";
import bedroom from "@/assets/portfolio-churrasqueira.jpg";
import kitchen2 from "@/assets/portfolio-kitchen2.jpg";

const projects = [
  { image: heroKitchen, title: "Cozinha Studio", category: "Cozinha" },
  { image: closet, title: "Quarto Casal", category: "Quarto" },
  { image: sala, title: "Painel de Cama", category: "Quarto" },
  { image: office, title: "Adega", category: "Adega Vinhos" },
  { image: bedroom, title: "Churrasqueira Gourmet", category: "Churrasqueira" },
  { image: kitchen2, title: "Cozinha Gourmet", category: "Cozinha" },
];

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PortfolioSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 bg-secondary">
      <div ref={ref} className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-4">Portfólio</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground font-light">
            Nossos <span className="text-gradient-gold">projetos</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div key={project.title} className="group relative overflow-hidden rounded-sm aspect-[4/3] cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-500 flex items-end p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-gold font-body text-xs tracking-[0.2em] uppercase">{project.category}</p>
                  <h3 className="font-display text-2xl text-foreground mt-1">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
