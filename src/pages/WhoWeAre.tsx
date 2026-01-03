import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const WhoWeAre = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              About Jeff Johnson
            </h1>
            <p className="text-xl text-primary-foreground/80 italic font-display">
              "Buying or selling a home is serious business. However, serious does not need to mean stressful."
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                My name is Jeff Johnson and I am the Owner and Managing Broker of City Spaces Realty LLC. Buying or selling a home should be an exciting, joyful and profitable experience. Having an experienced, knowledgeable REALTOR® who listens carefully to understand your needs, takes the time to formulate a plan tailored to your situation, and then dedicates their efforts to achieving your goals is key to a successful transaction.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                In my 30-year real estate career I have worked in various areas of the real estate business including residential finance, commercial lending, commercial development and both residential and commercial real estate brokerage. This broad range of experience provides a knowledge base that has prepared me to tackle any challenge confronting my clients active in the Kansas City metropolitan area real estate market.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                In 2008, after relocating to Kansas City to start a family, I have exclusively focused on helping Kansas Citians buy and sell single family homes for both personal enjoyment and investment. Whether you are a first-time home buyer looking for the perfect starter home, an empty nester looking to downsize, or a young professional wanting to build wealth through real estate investment, I have the skills and experience to assist you in accomplishing your goals.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                I love Kansas City and I love doing what I do. I enjoy people, so listening, understanding, empathizing, and bringing perspective and a sense of humor to the real estate process comes naturally. My favorite clients are those who prefer the right answer over the easy answer, who want to understand the process, and who are not willing to settle for less.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                If you love the energy and excitement of Kansas City and you want a REALTOR® who will work hard to make buying or selling your home both easy and enjoyable, call me, and I will be with you from the first step through closing and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhoWeAre;
