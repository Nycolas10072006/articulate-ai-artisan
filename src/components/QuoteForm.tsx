import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Upload, X } from "lucide-react";
import { toast } from "sonner";

const QuoteForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !description.trim()) {
      toast.error("Preencha todos os campos obrigatórios.");
      return;
    }

    const message = [
      `*Solicitação de Orçamento*`,
      ``,
      `*Nome:* ${name.trim()}`,
      `*Celular:* ${phone.trim()}`,
      `*Descrição:* ${description.trim()}`,
      file ? `\n_Obs: O cliente possui arquivo do projeto para enviar (${file.name})._` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5511993778796?text=${encoded}`, "_blank");
    toast.success("Redirecionando para o WhatsApp...");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-foreground font-body text-sm">Nome *</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Seu nome completo"
          maxLength={100}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground font-body focus:ring-gold focus:border-gold"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-foreground font-body text-sm">Celular *</Label>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="(11) 99999-9999"
          maxLength={20}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground font-body focus:ring-gold focus:border-gold"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="file" className="text-foreground font-body text-sm">Upload do Projeto</Label>
        <div className="relative">
          {file ? (
            <div className="flex items-center gap-3 p-3 rounded-sm bg-card border border-border">
              <Upload className="w-4 h-4 text-gold shrink-0" />
              <span className="text-foreground font-body text-sm truncate flex-1">{file.name}</span>
              <button type="button" onClick={() => setFile(null)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <label className="flex items-center gap-3 p-3 rounded-sm bg-card border border-border border-dashed cursor-pointer hover:border-gold/40 transition-colors">
              <Upload className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground font-body text-sm">Clique para anexar arquivo</span>
              <input
                id="file"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png,.dwg"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>
          )}
        </div>
        <p className="text-muted-foreground font-body text-xs">PDF, JPG, PNG ou DWG (máx. 20MB)</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-foreground font-body text-sm">Descrição do Projeto *</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descreva o que você precisa: tipo de móvel, ambiente, medidas aproximadas..."
          maxLength={1000}
          rows={4}
          className="bg-card border-border text-foreground placeholder:text-muted-foreground font-body resize-none focus:ring-gold focus:border-gold"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-gradient-gold text-primary-foreground font-body text-sm tracking-wider uppercase py-6 hover:opacity-90 transition-opacity gap-2"
      >
        <MessageCircle className="w-5 h-5" />
        Enviar via WhatsApp
      </Button>
    </form>
  );
};

export default QuoteForm;
