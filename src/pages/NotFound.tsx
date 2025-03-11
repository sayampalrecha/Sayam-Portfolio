
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="text-center max-w-md animate-fade-in">
        <div className="inline-block mb-8 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
          404 Error
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-medium text-primary mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium transition-all hover:translate-y-[-1px] hover:shadow-md active:translate-y-[1px]"
        >
          <ArrowLeft size={16} />
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
