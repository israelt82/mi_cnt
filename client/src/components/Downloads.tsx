import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Calendar, Info, Users, Trophy } from "lucide-react";

// Mock download data //todo: remove mock functionality
const downloads = [
  {
    id: 1,
    title: "Convocatoria Oficial 2024",
    description: "Documento oficial con todas las bases, reglas y requisitos para participar en la Copa Nacional Tasquillo 2024.",
    type: "PDF",
    size: "2.3 MB",
    icon: FileText,
    category: "Convocatoria",
    urgent: true,
    downloadCount: 1247
  },
  {
    id: 2,
    title: "Formato de Inscripción",
    description: "Formulario que debe completarse para registrar equipos en ambas categorías (Infantil y Juvenil).",
    type: "PDF",
    size: "1.8 MB", 
    icon: Users,
    category: "Registro",
    urgent: false,
    downloadCount: 892
  },
  {
    id: 3,
    title: "Reglamento Técnico",
    description: "Reglas específicas del torneo, criterios de elegibilidad de jugadores y especificaciones técnicas.",
    type: "PDF",
    size: "3.1 MB",
    icon: Trophy,
    category: "Reglamento",
    urgent: false,
    downloadCount: 734
  },
  {
    id: 4,
    title: "Calendario de Actividades",
    description: "Fechas importantes, cronograma de inscripciones, partidos y ceremonias del torneo.",
    type: "PDF",
    size: "1.2 MB",
    icon: Calendar,
    category: "Cronograma",
    urgent: false,
    downloadCount: 956
  },
  {
    id: 5,
    title: "Información de Hospedaje",
    description: "Listado de hoteles recomendados, opciones de alojamiento y contactos para equipos visitantes.",
    type: "PDF",
    size: "1.5 MB",
    icon: Info,
    category: "Logística",
    urgent: false,
    downloadCount: 445
  },
  {
    id: 6,
    title: "Manual del Participante",
    description: "Guía completa para participantes con información sobre instalaciones, servicios y protocolo del evento.",
    type: "PDF",
    size: "4.2 MB",
    icon: FileText,
    category: "Información",
    urgent: false,
    downloadCount: 623
  }
];

export default function Downloads() {
  const handleDownload = (filename: string) => {
    console.log(`Downloading: ${filename}`); //todo: remove mock functionality
    // In real implementation, this would trigger actual file download
  };

  const urgentDownloads = downloads.filter(d => d.urgent);
  const regularDownloads = downloads.filter(d => !d.urgent);

  return (
    <section id="descargas" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Documentación y <span className="text-primary">Descargas</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descarga toda la documentación oficial necesaria para participar en la Copa Nacional Tasquillo. 
            Mantente informado con la información más actualizada.
          </p>
        </div>

        {/* Urgent Downloads */}
        {urgentDownloads.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></span>
              Documentos Importantes
            </h3>
            <div className="grid gap-6">
              {urgentDownloads.map((download) => (
                <Card key={download.id} className="border-primary/20 hover-elevate">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                          <download.icon className="w-6 h-6 text-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-left">{download.title}</CardTitle>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge variant="default" className="bg-primary text-foreground">
                              {download.category}
                            </Badge>
                            <Badge variant="outline" className="border-primary text-primary">
                              IMPORTANTE
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{download.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>{download.type} • {download.size}</span>
                        <span>{download.downloadCount} descargas</span>
                      </div>
                      <Button 
                        onClick={() => handleDownload(download.title)}
                        data-testid={`button-download-${download.id}`}
                        className="bg-primary text-foreground hover:bg-primary/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Descargar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Downloads */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Documentación Adicional</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {regularDownloads.map((download) => (
              <Card key={download.id} className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <download.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-left">{download.title}</CardTitle>
                      <Badge variant="outline" className="text-xs mt-1">
                        {download.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{download.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      {download.type} • {download.size}
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDownload(download.title)}
                      data-testid={`button-download-${download.id}`}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12">
          <Card className="bg-muted/50">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">¿Necesitas Ayuda?</h3>
              <p className="text-muted-foreground mb-4">
                Si tienes preguntas sobre algún documento o necesitas asistencia con el proceso de inscripción, contáctanos.
              </p>
              <Button 
                variant="outline" 
                data-testid="button-help-contact"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Contactar Soporte
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}