import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import KCSkyline from "./KCSkyline";
import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
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
          
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-400">
            A boutique real estate brokerage serving Kansas City with personalized attention 
            and local expertise for over 25 years.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in-up animation-delay-600">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">Contact Jeff</Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/what-we-do">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Kansas City Skyline */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <KCSkyline className="w-full h-auto" />
      </div>
      
      {/* Navy bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-primary z-0" />
    </section>
  );
};

export default HeroSection;
