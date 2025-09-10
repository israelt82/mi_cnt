import { Button } from "@/components/ui/button";
import { Download, Calendar, Users, Trophy } from "lucide-react";
import heroImage from "@assets/generated_images/Youth_basketball_tournament_action_2c4f1795.png";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-foreground/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-background">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Copa Nacional 
            <span className="text-primary"> Tasquillo</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-background/90">
            Torneo de Basquetbol Infantil y Juvenil
          </p>
          <p className="text-lg md:text-xl mb-8 text-background/80 max-w-2xl mx-auto">
            4 años conectando a miles de deportistas en el evento de basquetbol más importante de la región
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-2">
                <Calendar className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-background/80">Años de Tradición</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-2">
                <Users className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-background/80">Deportistas</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-2">
                <Trophy className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary">2</div>
              <div className="text-sm text-background/80">Categorías</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-2">
                <Users className="w-6 h-6 text-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-background/80">Equipos</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              data-testid="button-download-convocatoria"
              className="bg-primary text-foreground hover:bg-primary/90 font-semibold"
            >
              <Download className="w-5 h-5 mr-2" />
              Descargar Convocatoria
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              data-testid="button-view-gallery"
              className="border-primary text-primary hover:bg-primary/10 font-semibold"
            >
              Ver Galería de Fotos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}