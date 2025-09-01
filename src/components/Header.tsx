import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/b0f9555d-d117-4400-a293-8f251290665e.png" 
            alt="Apex Renting Solutions Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="tel:+1234567890" className="hidden sm:flex items-center text-sm text-muted-foreground hover:text-primary">
            <Phone className="w-4 h-4 mr-2" />
            Call Us
          </a>
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;