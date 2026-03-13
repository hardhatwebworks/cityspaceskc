import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Hero Text */}
      <div className="relative z-20 text-center mb-8 opacity-0 animate-fade-in-up">
        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl tracking-wide text-foreground leading-none">
          City Spaces
        </h1>
        <p className="font-display text-4xl md:text-5xl lg:text-6xl text-gold mt-2 tracking-wider">
          Realty
        </p>
      </div>

      {/* Skyline Image anchored to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <img 
          src={heroBackground} 
          alt="Kansas City skyline illustration" 
          className="w-full h-auto object-contain object-bottom"
        />
      </div>
    </section>
  );
};

export default HeroSection;
