import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "About" },
  ];

  const serviceLinks = [
    { href: "/what-we-do", label: "Residential Brokerage" },
    { href: "/investments", label: "Real Estate Investments" },
    { href: "/probate", label: "Inherited/Probated Properties" },
  ];

  const otherLinks = [
    { href: "/success-stories", label: "Success Stories" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="City Spaces Realty" 
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {mainLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.href) ? "text-gold" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center gap-1 font-medium text-foreground/80 hover:text-primary transition-colors"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <ChevronDown className="w-4 h-4" />
              </button>
              <div 
                className={`absolute top-full left-0 mt-2 w-48 bg-card rounded-lg shadow-xl border border-border py-2 transition-all duration-200 ${
                  servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-4 py-2 transition-colors ${
                      isActive(link.href) ? "text-gold bg-gold/5" : "text-foreground/80 hover:text-primary hover:bg-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {otherLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(link.href) ? "text-gold" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:816-651-7726" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              816.651.7726
            </a>
            <Button variant="gold" size="sm" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {mainLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-2 px-2 rounded-lg transition-colors ${
                    isActive(link.href) ? "text-gold bg-gold/5" : "text-foreground/80 hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="py-2 px-2">
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Services</span>
                <div className="mt-2 ml-2 flex flex-col gap-1">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`py-2 px-2 rounded-lg transition-colors ${
                        isActive(link.href) ? "text-gold bg-gold/5" : "text-foreground/80 hover:text-primary"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {otherLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`py-2 px-2 rounded-lg transition-colors ${
                    isActive(link.href) ? "text-gold bg-gold/5" : "text-foreground/80 hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col gap-3 pt-4 mt-2 border-t border-border">
                <a href="tel:816-651-7726" className="flex items-center gap-2 text-muted-foreground px-2">
                  <Phone className="h-4 w-4" />
                  816.651.7726
                </a>
                <a href="mailto:jeff@cityspaceskc.com" className="flex items-center gap-2 text-muted-foreground px-2">
                  <Mail className="h-4 w-4" />
                  jeff@cityspaceskc.com
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
