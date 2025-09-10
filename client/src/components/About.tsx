import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

export default function About() {
  const categories = [
    {
      title: "Categoría Infantil",
      description: "Para jóvenes deportistas de 8 a 12 años que dan sus primeros pasos en el basquetbol competitivo.",
      icon: Users,
      features: ["Desarrollo de habilidades básicas", "Enfoque en diversión y aprendizaje", "Reglas adaptadas a la edad"]
    },
    {
      title: "Categoría Juvenil", 
      description: "Para atletas de 13 a 17 años que buscan competir al más alto nivel y perfeccionar su juego.",
      icon: Target,
      features: ["Competencia de alto nivel", "Desarrollo de estrategias avanzadas", "Preparación para ligas mayores"]
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excelencia Deportiva",
      description: "Promovemos el desarrollo del talento y la competencia sana entre los participantes."
    },
    {
      icon: Heart,
      title: "Formación Integral",
      description: "Más que un torneo, somos una escuela de valores y disciplina para nuestros jóvenes."
    }
  ];

  return (
    <section id="about" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre la Copa Nacional Tasquillo
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde hace 4 años, hemos estado formando a los futuros talentos del basquetbol mexicano. 
            Nuestro torneo es más que una competencia: es una celebración del deporte, la amistad y el crecimiento personal.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Nuestra Misión</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Crear un espacio donde miles de deportistas puedan demostrar su talento, 
                desarrollar sus habilidades y crear recuerdos inolvidables mientras compiten 
                al más alto nivel en un ambiente de respeto y camaradería.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Categorías de Competencia</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Card key={index} className="hover-elevate">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Nuestros Valores</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}