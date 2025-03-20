
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initScrollAnimations } from "@/lib/animations";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const About = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  const values = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-primary" />,
      title: "Fiabilité",
      description: "Nous nous engageons à fournir des services stables et performants sur lesquels vous pouvez compter jour après jour."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Pérennité",
      description: "Notre modèle économique est conçu pour assurer la disponibilité de nos services sur le très long terme."
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Excellence",
      description: "Nous visons constamment l'excellence dans tous nos produits et services, sans compromis sur la qualité."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Support client",
      description: "Une équipe dévouée est toujours disponible pour vous aider et répondre à vos questions techniques."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 scroll-animation">
              À propos de CloudLicenseria
            </h1>
            <p className="text-xl text-gray-600 scroll-animation">
              Révolutionner l'industrie avec des licences à vie et des solutions d'hébergement permanentes.
            </p>
          </div>
          
          <div className="mb-20 scroll-animation">
            <div className="max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-soft">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=675&fit=crop" 
                  alt="Notre équipe au travail" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="scroll-animation">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Notre histoire</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fondée en 2021, CloudLicenseria est née d'une vision simple mais révolutionnaire : transformer le modèle d'abonnement traditionnel en proposant des licences et des services d'hébergement à vie avec un paiement unique.
                </p>
                <p>
                  Notre équipe, composée d'experts en technologie et en finance, a développé un modèle économique durable qui garantit la pérennité de nos services tout en offrant un avantage financier considérable à nos clients.
                </p>
                <p>
                  En intégrant les paiements en cryptomonnaie dès le début, nous avons non seulement réduit les frais de transaction, mais aussi créé un système plus accessible aux entreprises du monde entier.
                </p>
              </div>
            </div>
            
            <div className="scroll-animation" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Notre mission</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Notre mission est de libérer les entreprises des abonnements perpétuels et des coûts récurrents qui pèsent sur leur budget informatique.
                </p>
                <p>
                  Nous croyons qu'une fois que vous avez payé pour un service, il devrait vous appartenir pour toujours, sans frais cachés ni augmentations soudaines de prix.
                </p>
                <p>
                  En proposant des licences à vie pour les bases de données et l'hébergement, nous permettons aux entreprises de planifier leurs dépenses informatiques avec précision et de réaliser des économies substantielles à long terme.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center scroll-animation">Nos valeurs</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 text-center transition-all duration-300 hover:shadow-card scroll-animation"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="h-14 w-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-center scroll-animation">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Rejoignez la révolution des licences à vie</h3>
              <p className="text-gray-600 mb-6">
                Découvrez comment nos solutions peuvent transformer votre approche des technologies de l'information et réduire considérablement vos coûts à long terme.
              </p>
              <a href="#contact" className="btn-primary btn-md rounded-full inline-flex items-center">
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
};

export default About;
