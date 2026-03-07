import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-display text-2xl text-foreground">DME <span className="text-gradient-gold">Marcenaria</span></p>
          <p className="text-muted-foreground font-body text-sm mt-1">Marcenaria de alto padrão</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://wa.me/5511993778796" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors font-body text-sm">
            WhatsApp
          </a>
        </div>
        <p className="text-muted-foreground font-body text-xs">
          © 2026 DME Marcenaria. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
