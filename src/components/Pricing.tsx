
import { useState, useEffect } from 'react';
import { Check, X, Database, Server, Lock } from 'lucide-react';

const Pricing = () => {
  const [animatedElements, setAnimatedElements] = useState<Element[]>([]);

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
    setAnimatedElements(Array.from(elements));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  // 60000 francs to USD (approximately)
  const mainPrice = 108; // Using approximate conversion

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="mb-4 scroll-animation">Tarification à Vie</h2>
          <p className="text-gray-600 scroll-animation">
            Un paiement unique pour un accès à vie. Aucun frais récurrent.
          </p>
        </div>

        {/* Main pricing card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10 text-white shadow-xl scroll-animation">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2)_0%,transparent_50%)]" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center mb-8">
                <div>
                  <div className="flex items-center mb-3">
                    <div className="flex-shrink-0 h-10 w-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <Database className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-shrink-0 h-10 w-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center mr-3">
                      <Server className="h-5 w-5 text-white" />
                    </div>
                    <div className="text-xs px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      Licence à vie
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">Pack Professionnel Complet</h3>
                </div>
                <div className="md:ml-auto text-center md:text-right">
                  <div className="text-sm font-medium text-blue-100">Paiement unique</div>
                  <div className="text-4xl md:text-5xl font-bold">${mainPrice}</div>
                  <div className="text-sm text-blue-100 mt-1">≈ 60,000 Francs</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4">Licence de Base de Données</h4>
                  <ul className="space-y-3">
                    {[
                      "Licence perpétuelle",
                      "Déploiements illimités",
                      "Mises à jour incluses (10 ans)",
                      "Support technique à vie",
                      "Sauvegarde automatique",
                      "Documentation complète"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-200 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">Hébergement Premium</h4>
                  <ul className="space-y-3">
                    {[
                      "Hébergement à vie",
                      "Serveurs haute performance",
                      "Domaine personnalisé",
                      "SSL illimité",
                      "Bande passante illimitée",
                      "Protection DDoS avancée"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-200 mr-2 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-white/20">
                <div className="flex items-center mb-4">
                  <Lock className="h-5 w-5 mr-2" />
                  <h4 className="text-lg font-semibold">Options de paiement sécurisées</h4>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center">
                    <span className="mr-2">Bitcoin</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center">
                    <span className="mr-2">Ethereum</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center">
                    <span className="mr-2">USDT</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center">
                    <span className="mr-2">Autres cryptos</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <a 
                  href="#contact" 
                  className="btn-lg bg-white text-blue-700 hover:bg-blue-50 transition-colors rounded-full font-medium shadow-button"
                >
                  Contacter pour acheter
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison table */}
        <div className="max-w-4xl mx-auto mb-10 px-4">
          <h3 className="text-2xl font-semibold mb-6 text-center scroll-animation">
            Comparaison avec les abonnements traditionnels
          </h3>
          
          <div className="overflow-x-auto rounded-xl shadow-soft scroll-animation">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left font-medium text-gray-500">Caractéristiques</th>
                  <th className="px-6 py-4 text-center font-medium text-primary">CloudLicenseria<br />(à vie)</th>
                  <th className="px-6 py-4 text-center font-medium text-gray-500">Abonnements<br />Traditionnels</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {[
                  { feature: "Paiement", licenseria: "Unique", traditional: "Mensuel/Annuel" },
                  { feature: "Coût sur 5 ans", licenseria: "$108", traditional: "$1,200+" },
                  { feature: "Propriété", licenseria: "Totale", traditional: "Location" },
                  { feature: "Augmentation des prix", licenseria: "Jamais", traditional: "Fréquente" },
                  { feature: "Paiement en crypto", licenseria: "Oui", traditional: "Rarement" },
                  { feature: "Support à vie", licenseria: "Inclus", traditional: "Avec abonnement" }
                ].map((row, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <div className="flex justify-center">
                        {row.licenseria === "Oui" || row.licenseria === "Inclus" || row.licenseria === "Totale" || row.licenseria === "Jamais" ? (
                          <span className="flex items-center text-green-600">
                            <Check className="h-5 w-5 mr-1" /> {row.licenseria}
                          </span>
                        ) : (
                          <span>{row.licenseria}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-center">
                      <div className="flex justify-center">
                        {row.traditional === "Non" ? (
                          <span className="flex items-center text-red-500">
                            <X className="h-5 w-5 mr-1" /> {row.traditional}
                          </span>
                        ) : (
                          <span>{row.traditional}</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center mt-12 scroll-animation">
          <p className="mb-6 text-gray-600">
            Notre solution à vie vous fait économiser des milliers de dollars sur le long terme 
            tout en vous offrant une indépendance totale et une protection contre les augmentations de prix.
          </p>
          <a 
            href="#contact" 
            className="btn-primary btn-lg inline-flex rounded-full"
          >
            Demander plus d'informations
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
