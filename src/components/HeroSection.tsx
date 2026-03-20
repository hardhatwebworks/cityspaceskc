import heroBackground from "@/assets/hero-background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Hero Text */}
      <div className="relative z-20 text-center mt-20 md:mt-0 mb-40 md:mb-48 opacity-0 animate-fade-in-up">
        <h1 className="font-display text-7xl md:text-[10rem] lg:text-[14rem] tracking-wide text-foreground leading-none">
          City Spaces
        </h1>
        <p className="font-display text-4xl md:text-6xl lg:text-8xl text-gold mt-2 tracking-wider">
          Realty
        </p>
        <p className="font-sans text-base md:text-2xl lg:text-3xl text-primary mt-4 tracking-widest uppercase font-semibold">
          Residential &bull; Land &bull; Investments
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
