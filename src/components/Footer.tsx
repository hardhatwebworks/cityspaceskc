import KCSkyline from "./KCSkyline";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary relative overflow-hidden">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo & Tagline */}
            <div className="flex items-center gap-4">
              <img 
                src={logo} 
                alt="City Spaces Realty" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            {/* Quick Links */}
            <nav className="flex items-center gap-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} City Spaces Realty LLC. All rights reserved.</p>
            <p>Serving the Kansas City Metropolitan Area</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
