
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8",
        isScrolled ? "backdrop-blur-lg bg-white/80 shadow-soft" : "bg-transparent"
      )}
    >
      <div className="container-xl flex items-center justify-between">
        <Link to="/" className="text-xl font-display font-bold">
          CloudLicenseria
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="space-x-8 font-medium">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <Link to="#products" className="hover:text-primary transition-colors">Produits</Link>
            <Link to="#services" className="hover:text-primary transition-colors">Services</Link>
            <Link to="#pricing" className="hover:text-primary transition-colors">Tarifs</Link>
            <Link to="#contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
          <Link to="#pricing" className="btn-primary btn-md rounded-full">
            Acheter maintenant
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label="Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[600px] border-t' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto py-4 px-6 space-y-4">
          <Link to="/" className="block py-2 hover:text-primary" onClick={closeMenu}>Accueil</Link>
          <Link to="#products" className="block py-2 hover:text-primary" onClick={closeMenu}>Produits</Link>
          <Link to="#services" className="block py-2 hover:text-primary" onClick={closeMenu}>Services</Link>
          <Link to="#pricing" className="block py-2 hover:text-primary" onClick={closeMenu}>Tarifs</Link>
          <Link to="#contact" className="block py-2 hover:text-primary" onClick={closeMenu}>Contact</Link>
          <Link 
            to="#pricing" 
            className="btn-primary btn-md block text-center mt-6 rounded-full" 
            onClick={closeMenu}
          >
            Acheter maintenant
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
