import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoImage from "@assets/Medalla NO EDICION_1757546388635.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre el Torneo", href: "#about" },
    { label: "Galería", href: "#galeria" },
    { label: "Descargas", href: "#descargas" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-foreground text-background border-b border-primary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={logoImage} 
              alt="Copa Nacional Tasquillo Logo" 
              className="h-12 w-auto"
              data-testid="img-logo-header"
            />
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg">Copa Nacional Tasquillo</h1>
              <p className="text-sm text-background/80">Basquetbol Infantil y Juvenil</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                data-testid={`link-${item.label.toLowerCase()}`}
                className="text-background hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button 
              variant="default" 
              size="sm"
              data-testid="button-whatsapp-header"
              className="bg-primary text-foreground hover:bg-primary/90"
            >
              <Phone className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            data-testid="button-menu-toggle"
            className="md:hidden text-background hover:text-primary"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary/20">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  data-testid={`link-mobile-${item.label.toLowerCase()}`}
                  className="text-background hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button 
                variant="default" 
                size="sm"
                data-testid="button-whatsapp-mobile"
                className="bg-primary text-foreground hover:bg-primary/90 self-start mt-4"
              >
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}