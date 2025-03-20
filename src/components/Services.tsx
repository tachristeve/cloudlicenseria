
import { useEffect } from 'react';
import { Users, Wifi, Settings, Shield } from 'lucide-react';

const serviceItems = [
  {
    icon: <Wifi className="h-6 w-6 text-primary" />,
    title: "Hébergement Web",
    description: "Hébergement web performant pour vos sites et applications avec des options mensuelles ou annuelles flexibles.",
    options: [
      { name: "Basique", price: "9.99", period: "mois" },
      { name: "Professionnel", price: "19.99", period: "mois" },
      { name: "Entreprise", price: "49.99", period: "mois" }
    ]
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "SSL et Sécurité",
    description: "Protection complète de vos sites web avec certificats SSL et outils de sécurité avancés.",
    options: [
      { name: "Certificat SSL", price: "79.99", period: "an" },
      { name: "Protection Anti-Malware", price: "119.99", period: "an" },
      { name: "Suite Complète", price: "199.99", period: "an" }
    ]
  },
  {
    icon: <Settings className="h-6 w-6 text-primary" />,
    title: "Maintenance Technique",
    description: "Services de maintenance et d'optimisation pour garder vos systèmes en parfait état de fonctionnement.",
    options: [
      { name: "Standard", price: "99.99", period: "mois" },
      { name: "Avancée", price: "149.99", period: "mois" },
      { name: "Premium", price: "199.99", period: "mois" }
    ]
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: "Sauvegardes Cloud",
    description: "Services de sauvegarde automatisés pour protéger vos données importantes contre toute perte.",
    options: [
      { name: "100GB", price: "9.99", period: "mois" },
      { name: "500GB", price: "24.99", period: "mois" },
      { name: "1TB", price: "49.99", period: "mois" }
    ]
  }
];

const Services = () => {
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
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4 scroll-animation">Nos Services Additionnels</h2>
          <p className="text-gray-600 scroll-animation">
            En complément de nos offres à vie, nous proposons des services additionnels flexibles selon vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-soft transition-all duration-300 hover:shadow-card scroll-animation"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start mb-6">
                <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
              
              <div className="space-y-3 mt-6">
                {service.options.map((option, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium">{option.name}</span>
                    <span className="font-semibold">
                      ${option.price}/{option.period}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
