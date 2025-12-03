import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { href: "/what-we-do", label: "What We Do" },
    { href: "/investments", label: "Investments" },
    { href: "/probate", label: "Probate Services" },
  ];

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "Who We Are" },
    { href: "/success-stories", label: "Success Stories" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="bg-secondary relative overflow-hidden">
      {/* Top Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Tagline */}
            <div className="md:col-span-2">
              <Link to="/" className="inline-block">
                <img 
                  src={logo} 
                  alt="City Spaces Realty" 
                  className="h-16 w-auto object-contain mb-4"
                />
              </Link>
              <p className="text-muted-foreground max-w-sm">
                A boutique real estate brokerage serving Kansas City with personalized attention and local expertise.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-display text-lg text-foreground mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {mainLinks.map((link) => (
                  <Link 
                    key={link.href}
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display text-lg text-foreground mb-4">Services</h4>
              <nav className="flex flex-col gap-2">
                {serviceLinks.map((link) => (
                  <Link 
                    key={link.href}
                    to={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
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
