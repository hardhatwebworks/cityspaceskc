import Seo from "@/components/Seo";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Seo
        title="City Spaces Realty | Kansas City Real Estate"
        description="Boutique Kansas City brokerage led by Jeff Johnson, helping clients buy, sell, and invest in residential homes, land, and rental property."
      />
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <Footer />
    </main>
  );
};

export default Index;
