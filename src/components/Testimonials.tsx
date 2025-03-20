
import { useEffect } from 'react';

const testimonials = [
  {
    name: "Jean Dupont",
    role: "Directeur Technique, TechSolutions",
    content: "La licence à vie nous a permis d'économiser significativement sur nos coûts d'infrastructure. Un investissement qui a déjà été rentabilisé en moins d'un an.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marie Laurent",
    role: "CEO, DataSecure",
    content: "J'apprécie particulièrement la tranquillité d'esprit que nous procure cette solution. Plus de souci de renouvellement ou d'augmentation soudaine des prix.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Pierre Morel",
    role: "Responsable IT, GrowthCorp",
    content: "L'hébergement est extrêmement fiable et la possibilité de payer en crypto a été un avantage décisif pour nous. Le support est également très réactif.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
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
    <section className="section-padding bg-gray-50">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4 scroll-animation">Ce que disent nos clients</h2>
          <p className="text-gray-600 scroll-animation">
            Découvrez les retours d'expérience de nos clients qui utilisent nos licences à vie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-2xl p-8 transition-all duration-300 hover:shadow-card scroll-animation"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 mr-4 rounded-full overflow-hidden bg-gray-200">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
