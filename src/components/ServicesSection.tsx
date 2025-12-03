import { Home, TreePine, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Home,
      title: "Residential",
      description: "Find your perfect home in Kansas City. From first-time buyers to luxury properties, we have the local knowledge to match you with your ideal residence.",
      features: ["Buyer Representation", "Home Valuations", "Neighborhood Expertise", "Relocation Services"],
      color: "gold",
    },
    {
      icon: TreePine,
      title: "Land",
      description: "Discover prime land opportunities throughout the KC metro. Whether for development, farming, or investment, we'll help you find the right parcel.",
      features: ["Development Sites", "Agricultural Land", "Zoning Guidance", "Investment Analysis"],
      color: "orange",
    },
    {
      icon: TrendingUp,
      title: "Investments",
      description: "Build wealth through strategic real estate investments. Our market insights help you identify profitable opportunities and maximize returns.",
      features: ["Multi-Family Properties", "Commercial Spaces", "Portfolio Strategy", "Market Analysis"],
      color: "burnt-orange",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
              What We Do
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive real estate services tailored to your unique needs in the Kansas City market.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-border hover:border-gold/30 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-${service.color}/10 text-${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7" />
                </div>
                
                {/* Content */}
                <h3 className="font-display text-2xl text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Learn More Link */}
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-gold font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
