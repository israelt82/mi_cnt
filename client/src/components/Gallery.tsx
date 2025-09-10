import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import actionImage from "@assets/generated_images/Youth_basketball_tournament_action_2c4f1795.png";
import aerialImage from "@assets/generated_images/Basketball_court_aerial_view_ebc6d0d9.png";
import celebrationImage from "@assets/generated_images/Basketball_team_celebration_trophy_dd26ee3d.png";

// Mock data for gallery //todo: remove mock functionality
const galleryData = [
  {
    year: "2024",
    photos: [
      { id: 1, src: actionImage, title: "Final Categoría Juvenil 2024", category: "Juvenil" },
      { id: 2, src: aerialImage, title: "Vista Aérea Cancha Principal", category: "Instalaciones" },
      { id: 3, src: celebrationImage, title: "Ceremonia de Premiación", category: "Premiación" },
      { id: 4, src: actionImage, title: "Semifinal Categoría Infantil", category: "Infantil" },
      { id: 5, src: aerialImage, title: "Ambiente del Torneo", category: "Ambiente" },
      { id: 6, src: celebrationImage, title: "Equipo Campeón Juvenil", category: "Premiación" }
    ]
  },
  {
    year: "2023",
    photos: [
      { id: 7, src: celebrationImage, title: "Campeones Copa 2023", category: "Premiación" },
      { id: 8, src: actionImage, title: "Jugada Espectacular", category: "Juvenil" },
      { id: 9, src: aerialImage, title: "Lleno Total en las Gradas", category: "Ambiente" },
      { id: 10, src: actionImage, title: "Desarrollo Infantil", category: "Infantil" }
    ]
  },
  {
    year: "2022",
    photos: [
      { id: 11, src: actionImage, title: "Primer Año del Torneo", category: "Historia" },
      { id: 12, src: celebrationImage, title: "Primeros Campeones", category: "Premiación" },
      { id: 13, src: aerialImage, title: "Inauguración Oficial", category: "Historia" }
    ]
  },
  {
    year: "2021",
    photos: [
      { id: 14, src: celebrationImage, title: "Fundación del Torneo", category: "Historia" },
      { id: 15, src: actionImage, title: "Primeros Participantes", category: "Historia" }
    ]
  }
];

export default function Gallery() {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const currentGallery = galleryData.find(g => g.year === selectedYear);
  const currentPhotos = currentGallery?.photos || [];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % currentPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + currentPhotos.length) % currentPhotos.length);
  };

  const handleYearChange = (year: string) => {
    setSelectedYear(year);
    setCurrentPhotoIndex(0);
  };

  return (
    <section id="galeria" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Galería de <span className="text-primary">Momentos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revive los mejores momentos de nuestros 4 años de historia a través de estas fotografías
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {galleryData.map((gallery) => (
              <Button
                key={gallery.year}
                variant={selectedYear === gallery.year ? "default" : "outline"}
                size="sm"
                onClick={() => handleYearChange(gallery.year)}
                data-testid={`button-year-${gallery.year}`}
                className={selectedYear === gallery.year ? "bg-primary text-foreground" : ""}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {gallery.year}
              </Button>
            ))}
          </div>
        </div>

        {/* Main Photo Display */}
        {currentPhotos.length > 0 && (
          <div className="mb-8">
            <Card className="max-w-4xl mx-auto">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={currentPhotos[currentPhotoIndex].src}
                    alt={currentPhotos[currentPhotoIndex].title}
                    className="w-full h-64 md:h-96 object-cover rounded-t-lg"
                    data-testid={`img-gallery-main-${currentPhotoIndex}`}
                  />
                  
                  {/* Navigation Arrows */}
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={prevPhoto}
                    data-testid="button-gallery-prev"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  
                  <Button
                    variant="secondary"
                    size="icon"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={nextPhoto}
                    data-testid="button-gallery-next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>

                  {/* Photo Counter */}
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {currentPhotoIndex + 1} / {currentPhotos.length}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{currentPhotos[currentPhotoIndex].title}</h3>
                      <p className="text-muted-foreground">Copa Nacional Tasquillo {selectedYear}</p>
                    </div>
                    <Badge variant="outline" className="border-primary text-primary">
                      {currentPhotos[currentPhotoIndex].category}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Photo Thumbnails */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {currentPhotos.map((photo, index) => (
            <Card 
              key={photo.id} 
              className={`cursor-pointer hover-elevate ${index === currentPhotoIndex ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setCurrentPhotoIndex(index)}
              data-testid={`card-photo-${photo.id}`}
            >
              <CardContent className="p-0">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-24 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Photo Count */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Mostrando {currentPhotos.length} fotos de {selectedYear} 
            <span className="text-primary font-semibold"> • </span>
            Total: {galleryData.reduce((acc, g) => acc + g.photos.length, 0)} fotografías
          </p>
        </div>
      </div>
    </section>
  );
}