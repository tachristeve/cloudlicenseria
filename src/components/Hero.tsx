
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Database, Server, Cloud, Lock } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-white" />
      <div className="absolute top-40 -right-10 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-100/30 blur-3xl" />

      <div className="container-xl relative z-10 py-16 md:py-24">
        <div ref={heroRef} className="fade-in-sequence max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-white border border-blue-100 rounded-full shadow-soft">
            <span className="text-sm font-medium text-blue-800">
              Solution d'hébergement et licences à vie
            </span>
          </div>

          <h1 className="mb-6 leading-tight text-gray-900">
            Licences de base de données et hébergement premium
            <span className="text-primary block mt-2">à vie.</span>
          </h1>

          <p className="mb-10 text-xl text-gray-600 max-w-2xl mx-auto">
            Solution complète pour votre entreprise avec licences perpétuelles et services d'hébergement premium. Paiement unique par cryptomonnaie.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link to="#pricing" className="btn-primary btn-lg rounded-full">
              Voir les prix
            </Link>
            <Link to="#contact" className="btn-secondary btn-lg rounded-full">
              Nous contacter
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-3 rounded-full bg-blue-50 flex items-center justify-center">
                <Database className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-medium">Licences DB à vie</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-3 rounded-full bg-blue-50 flex items-center justify-center">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-medium">Hébergement Premium</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-3 rounded-full bg-blue-50 flex items-center justify-center">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-medium">Services Cloud</h3>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-3 rounded-full bg-blue-50 flex items-center justify-center">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-base font-medium">Paiement Crypto</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
