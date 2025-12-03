import { Link } from "react-router-dom";
import { Building2, Users, Award, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const stats = [
    { icon: Building2, value: "25+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "Local", label: "KC Expert" },
    { icon: MapPin, value: "KC", label: "Based & Proud" },
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
                About Us
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Your Kansas City Real Estate Partner
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                "Buying or selling a home is serious business. However, serious does not need to mean stressful." That belief is at the core of my service to real estate clients.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I believe that buying or selling a home should be an exciting and joyful experience. All you need is the assistance of an experienced, knowledgeable REALTOR® who listens carefully to understand your needs.
              </p>
              
              <Button variant="gold" asChild>
                <Link to="/who-we-are">
                  Learn More About Jeff
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold mb-3">
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-display font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image/Visual Side */}
            <div className="relative">
              <div className="aspect-square bg-primary rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-hero" />
                <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="font-display text-4xl text-primary-foreground mb-2">Jeff Johnson</h3>
                  <p className="text-gold text-lg mb-6">Broker / Owner</p>
                  <div className="space-y-2 text-primary-foreground/80">
                    <p className="font-medium">816.651.7726</p>
                    <p>jeff@cityspaceskc.com</p>
                    <p>www.cityspaceskc.com</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
