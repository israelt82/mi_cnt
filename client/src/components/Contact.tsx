import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, MessageCircle, MapPin, Clock, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export default function Contact() {
  const handleWhatsAppClick = () => {
    // Mock WhatsApp contact //todo: remove mock functionality
    const phoneNumber = "7752420347"; // Replace with actual number
    const message = encodeURIComponent("Hola, me interesa participar en la Copa Nacional Tasquillo. ¿Podrían proporcionarme más información?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Redirecting to ${platform}`); //todo: remove mock functionality
    // In real implementation, these would redirect to actual social media profiles
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "7752420347",
      action: () => window.open("tel:7752420347")
    },
    {
      icon: Mail,
      title: "Email",
      value: "copanacionaltasquillo@gmail.com",
      action: () => window.open("mailto:copanacionaltasquillo@gmail.com")
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Tasquillo, Hidalgo, México",
      action: () => window.open("https://maps.google.com/?q=Tasquillo,Hidalgo,Mexico")
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      value: "Lun - Vie: 9:00 AM - 6:00 PM",
      action: null
    }
  ];

  const socialMedia = [
    { icon: Facebook, name: "Facebook", handle: "@CopaTasquillo", color: "text-blue-600" },
    { icon: Instagram, name: "Instagram", handle: "@copatasquillo", color: "text-pink-600" },
    { icon: Twitter, name: "Twitter", handle: "@CopaTasquillo", color: "text-blue-400" }
  ];

  return (
    <section id="contacto" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¡Mantente <span className="text-primary">Conectado</span>!
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contáctanos para resolver tus dudas o síguenos en redes sociales para las últimas noticias del torneo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* WhatsApp Contact - Featured */}
          <div className="lg:col-span-1">
            <Card className="border-primary/20 hover-elevate h-full">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-foreground" />
                </div>
                <CardTitle className="text-xl">Contacto Directo</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  ¿Tienes preguntas sobre el torneo? Escríbenos por WhatsApp y te respondemos al instante.
                </p>
                <Button 
                  size="lg" 
                  onClick={handleWhatsAppClick}
                  data-testid="button-whatsapp-main"
                  className="w-full bg-primary text-foreground hover:bg-primary/90"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Escribir por WhatsApp
                </Button>
                <Badge variant="outline" className="mt-3 border-green-500 text-green-600">
                  Respuesta inmediata
                </Badge>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((contact, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center space-x-3 p-3 rounded-lg hover-elevate ${
                        contact.action ? 'cursor-pointer' : ''
                      }`}
                      onClick={contact.action || undefined}
                      data-testid={`contact-${contact.title.toLowerCase().replace(' ', '-')}`}
                    >
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        <contact.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm text-muted-foreground">{contact.title}</h4>
                        <p className="font-semibold">{contact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Síguenos en Redes Sociales</CardTitle>
              <p className="text-muted-foreground">
                Mantente al día con las últimas noticias, resultados y momentos destacados
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-3 gap-4">
                {socialMedia.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-4 hover-elevate"
                    onClick={() => handleSocialClick(social.name.toLowerCase())}
                    data-testid={`button-social-${social.name.toLowerCase()}`}
                  >
                    <div className="flex items-center space-x-3">
                      <social.icon className={`w-6 h-6 ${social.color}`} />
                      <div className="text-left">
                        <div className="font-semibold">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.handle}</div>
                      </div>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="mt-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground">Tiempo de Respuesta</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Seguidores</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}