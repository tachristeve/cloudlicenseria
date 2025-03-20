
import { useEffect, useRef } from 'react';
import { Check, Database, Server } from 'lucide-react';

const Products = () => {
  const productRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="products" className="section-padding bg-white relative">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4 scroll-animation">Nos Produits Premium</h2>
          <p className="text-gray-600 scroll-animation">
            Des solutions complètes et permanentes pour vos besoins en base de données et hébergement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Lifetime Database License */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-card scroll-animation">
            <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-4">Licence de Base de Données à Vie</h3>
            <p className="text-gray-600 mb-6">
              Une licence perpétuelle pour votre base de données, sans frais récurrents.
              Installez, utilisez et conservez votre licence pour toujours.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Licence perpétuelle - pas d'abonnement",
                "Support technique à vie",
                "Mises à jour incluses pendant 10 ans",
                "Déploiement illimité",
                "Infrastructure haute disponibilité",
                "Sauvegarde automatique"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-50 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <a href="#pricing" className="btn-primary btn-md rounded-full">
                Voir les options
              </a>
            </div>
          </div>

          {/* Lifetime Hosting */}
          <div className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-card scroll-animation" style={{animationDelay: '0.2s'}}>
            <div className="h-14 w-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <h3 className="mb-4">Hébergement Premium à Vie</h3>
            <p className="text-gray-600 mb-6">
              Un hébergement de haute qualité avec un paiement unique. Aucun frais mensuel ou annuel pour toute la durée de vie du service.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Hébergement à vie avec un paiement unique",
                "Serveurs haute performance",
                "Temps de disponibilité garanti à 99.9%",
                "Bande passante illimitée",
                "Protection DDoS avancée",
                "Sauvegarde journalière automatique"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-50 flex items-center justify-center mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <a href="#pricing" className="btn-primary btn-md rounded-full">
                Voir les options
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
