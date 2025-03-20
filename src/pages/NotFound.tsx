
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="glass-card rounded-2xl py-12 px-6 md:px-12 max-w-lg w-full text-center shadow-soft">
        <div className="mb-8 w-full max-w-[250px] mx-auto">
          <AspectRatio ratio={1 / 1} className="bg-blue-50 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=500&h=500&fit=crop" 
              alt="Page non trouvée" 
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
        <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link 
          to="/" 
          className="btn-primary btn-lg rounded-full inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
