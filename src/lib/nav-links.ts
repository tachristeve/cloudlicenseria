
// Ce fichier contient les liens de navigation pour le site
// Il sera utilisé par le composant Navbar

export const navLinks = [
  { text: "Accueil", path: "/" },
  { text: "Produits", path: "/#products" },
  { text: "Services", path: "/#services" },
  { text: "Tarifs", path: "/#pricing" },
  { text: "À propos", path: "/about" },
  { text: "FAQ", path: "/faq" },
  { text: "Contact", path: "/#contact" }
];

export const setupNavLinks = () => {
  // Cette fonction peut être utilisée pour configurer les liens de navigation
  // si nécessaire de manière dynamique
  console.log("Navigation links setup completed");
  return navLinks;
};
