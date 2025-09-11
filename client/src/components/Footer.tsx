import { Heart, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/Medalla NO EDICION_1757546388635.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre el Torneo", href: "#about" },
    { label: "Galería", href: "#galeria" },
    { label: "Descargas", href: "#descargas" },
    { label: "Contacto", href: "#contacto" }
  ];

  const legalLinks = [
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
    { label: "Reglamento Oficial", href: "#" }
  ];

  return (
    <footer className="bg-foreground text-background border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={logoImage} 
                alt="Copa Nacional Tasquillo Logo" 
                className="h-12 w-auto"
                data-testid="img-logo-footer"
              />
              <div>
                <h3 className="font-bold text-lg">Copa Nacional Tasquillo</h3>
                <p className="text-sm text-background/80">Basquetbol Infantil y Juvenil</p>
              </div>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Formando campeones desde 2021. El torneo de basquetbol más importante 
              en Hidalgo y uno de los mejores eventos del pais, enfocado en jóvenes deportistas, 
              donde puedan crecer y demostras su casta de campeones.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Tasquillo, Hidalgo</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="w-4 h-4 text-primary" />
                <span>+52 7752420347</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    data-testid={`link-legal-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-background/20 mt-8 pt-8">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2 text-primary">Mantente Informado</h4>
              <p className="text-background/80">
                Recibe las últimas noticias y actualizaciones del torneo
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <a 
                href="mailto:info@copanacionaltasquillo.mx"
                data-testid="link-newsletter-email"
                className="text-background/80 hover:text-primary transition-colors duration-200"
              >
                copanacionaltasquillo@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
            <p className="text-background/60 text-sm mb-2 md:mb-0">
              © {currentYear} Copa Nacional Tasquillo. Todos los derechos reservados.
            </p>
            <p className="text-background/60 text-sm flex items-center">
              Hecho con <Heart className="w-4 h-4 text-primary mx-1" /> para el deporte
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}