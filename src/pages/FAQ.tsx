
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initScrollAnimations } from "@/lib/animations";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Qu'est-ce qu'une licence à vie ?",
    answer: "Une licence à vie signifie que vous payez une seule fois pour utiliser le produit sans frais supplémentaires pour toute la durée de vie du service. Contrairement aux abonnements mensuels ou annuels, vous n'aurez plus jamais à payer pour continuer à utiliser le service."
  },
  {
    question: "Comment fonctionne le paiement par cryptomonnaie ?",
    answer: "Nous acceptons les paiements en Bitcoin, Ethereum, USDT et autres cryptomonnaies populaires. Lors du processus d'achat, vous recevrez une adresse de portefeuille unique pour effectuer votre paiement. Dès que la transaction est confirmée sur la blockchain, votre licence sera activée automatiquement."
  },
  {
    question: "Les mises à jour sont-elles incluses dans la licence à vie ?",
    answer: "Oui, toutes les mises à jour mineures et majeures sont incluses pendant 10 ans à compter de la date d'achat. Cela comprend les améliorations de fonctionnalités, les correctifs de sécurité et les optimisations de performance."
  },
  {
    question: "Quel type de support est inclus dans la licence à vie ?",
    answer: "Votre licence à vie inclut un support technique par email et ticket pendant toute la durée de vie du service. Notre équipe est disponible pour vous aider à résoudre tout problème technique ou question relative à l'utilisation de nos produits."
  },
  {
    question: "Puis-je transférer ma licence à un autre utilisateur ou entreprise ?",
    answer: "Oui, nos licences sont transférables. Vous devez simplement nous contacter pour nous informer du transfert et nous fournir les coordonnées du nouveau propriétaire. Des frais administratifs minimes peuvent s'appliquer."
  },
  {
    question: "Quelle est la différence entre l'hébergement standard et l'hébergement à vie ?",
    answer: "L'hébergement standard est facturé sur une base mensuelle ou annuelle et nécessite des renouvellements réguliers. L'hébergement à vie, quant à lui, est payé une seule fois et reste actif sans frais supplémentaires pendant toute la durée de vie du service (généralement 25-30 ans)."
  },
  {
    question: "Y a-t-il des limitations sur l'hébergement à vie ?",
    answer: "Nos forfaits d'hébergement à vie incluent des ressources spécifiques (espace disque, bande passante, RAM, CPU) selon le plan choisi. Si vous dépassez ces limites, vous pourrez acheter des ressources supplémentaires à des tarifs préférentiels."
  },
  {
    question: "Comment garantissez-vous la pérennité du service pour les décennies à venir ?",
    answer: "Nous avons mis en place un modèle économique durable avec des investissements à long terme qui nous permettent de maintenir l'infrastructure nécessaire. Une partie de chaque paiement est placée dans un fonds de réserve dédié au maintien et à l'amélioration continue des services."
  }
];

const FAQ = () => {
  useEffect(() => {
    const cleanup = initScrollAnimations();
    return cleanup;
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 scroll-animation">
              Questions Fréquemment Posées
            </h1>
            <p className="text-xl text-gray-600 scroll-animation">
              Trouvez des réponses aux questions les plus courantes sur nos licences à vie et nos services d'hébergement.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-card scroll-animation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  </div>
                  <div className="mt-3 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center max-w-2xl mx-auto scroll-animation">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Vous avez encore des questions ?</h3>
              <p className="text-gray-600 mb-6">
                Notre équipe est disponible pour répondre à toutes vos questions et vous aider à choisir la solution adaptée à vos besoins.
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

export default FAQ;
