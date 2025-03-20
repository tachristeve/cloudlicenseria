
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/nav-links';

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

  // Cette fonction vérifie si le lien est un ancre (section interne) ou une page externe
  const isAnchorLink = (path: string) => path.startsWith('/#');

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
            {navLinks.map((link, index) => (
              isAnchorLink(link.path) ? (
                <a 
                  key={index} 
                  href={link.path.substring(1)} 
                  className="hover:text-primary transition-colors"
                >
                  {link.text}
                </a>
              ) : (
                <Link 
                  key={index} 
                  to={link.path} 
                  className="hover:text-primary transition-colors"
                >
                  {link.text}
                </Link>
              )
            ))}
          </div>
          <a href="#pricing" className="btn-primary btn-md rounded-full">
            Acheter maintenant
          </a>
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
          {navLinks.map((link, index) => (
            isAnchorLink(link.path) ? (
              <a 
                key={index} 
                href={link.path.substring(1)} 
                className="block py-2 hover:text-primary" 
                onClick={closeMenu}
              >
                {link.text}
              </a>
            ) : (
              <Link 
                key={index} 
                to={link.path} 
                className="block py-2 hover:text-primary" 
                onClick={closeMenu}
              >
                {link.text}
              </Link>
            )
          ))}
          <a 
            href="#pricing" 
            className="btn-primary btn-md block text-center mt-6 rounded-full" 
            onClick={closeMenu}
          >
            Acheter maintenant
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
