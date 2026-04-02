import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { href: "/residential-brokerage", label: "Residential Brokerage" },
    { href: "/real-estate-investments", label: "Real Estate Investments" },
    { href: "/inherited-properties", label: "Inherited/Probated Properties" },
  ];

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
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
                  className="h-40 w-auto object-contain"
                />
              </Link>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-sans font-bold text-lg text-foreground mb-4">Quick Links</h4>
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
              <h4 className="font-sans font-bold text-lg text-foreground mb-4">What We Do</h4>
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
