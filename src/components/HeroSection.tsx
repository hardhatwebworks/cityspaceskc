import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBackgroundDesktop from "@/assets/hero-background-desktop.png";
import heroBackgroundMobile from "@/assets/hero-background-mobile.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Desktop background */}
      <div 
        className="absolute inset-0 hidden md:block"
        style={{
          backgroundImage: `url(${heroBackgroundDesktop})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Mobile background */}
      <div 
        className="absolute inset-0 block md:hidden"
        style={{
          backgroundImage: `url(${heroBackgroundMobile})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 pt-20 pb-48 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-primary-foreground mb-6 opacity-0 animate-fade-in-up">
            City Spaces
            <span className="block text-gold mt-2">Realty</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-4 opacity-0 animate-fade-in-up animation-delay-200 font-light tracking-wide">
            Residential • Land • Investments
          </p>
          
          
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
