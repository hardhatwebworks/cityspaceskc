import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, CheckCircle2 } from "lucide-react";

const WhatWeDo = () => {
  const differentiators = [
    "We listen to You. Taking the time to understand your motivations and goals for every transaction regardless of size",
    "Create an individualized plan for your specific real estate needs",
    "Set realistic and achievable expectations for City Spaces Realty and clients alike",
    "Provide timely and reliable communication throughout the entire process of your transaction",
    "Stay abreast of current conditions and trending issues in real estate sphere",
    "Adept negotiators with 100s of deals under our belt",
    "Provide referrals for experienced and capable service providers from our extensive network",
    "Effective collaboration with other brokers, service providers and lenders",
    "Adhere to the highest level of professionalism and ethical standards in everything we do",
    "Abide by both the letter and spirit of all Fair Housing Laws and Practices",
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
              Our Services
            </span>
             <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
               Residential Brokerage
             </h1>
             <p className="text-xl text-primary-foreground/80 font-sans">
               Personalized service for buyers and sellers across the Kansas City metro area.
             </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              City Spaces Realty is a boutique residential real estate brokerage firm committed to satisfying the Real Estate needs of our clients in all corners of the metropolitan Kansas City area. Adhering to the old-fashioned notion of putting our client's needs before our own, we strive to provide the highest level of service and satisfaction of any brokerage in the market.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              We are not a mega firm nor do we aspire to be one. Our goal is to help our clients address their unique situation with the highest level of satisfaction in the industry. We do not accept everyone who contacts us for representation. We only work with clients who have a plan for their financial future and appreciate frank and candid advice in meeting their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Client Commitment */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gold/10">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-display text-3xl text-foreground">Our Unwavering Commitment to Every Client</h2>
            </div>
            <div className="grid gap-4">
              {clientCommitments.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-card p-5 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seller Commitment */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-orange/10">
                <ShoppingBag className="w-8 h-8 text-orange" />
              </div>
              <h2 className="font-display text-3xl text-foreground">Our Commitment to Sellers</h2>
            </div>
            <div className="grid gap-3">
              {sellerCommitments.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Commitment */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gold/10">
                <Home className="w-8 h-8 text-gold" />
              </div>
              <h2 className="font-display text-3xl text-foreground">Our Commitment to Buyers</h2>
            </div>
            <div className="grid gap-3">
              {buyerCommitments.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Please call, text or email today to setup your free no obligation consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <a href="tel:816-651-7726">
                  <Phone className="w-4 h-4 mr-2" />
                  (816) 651-7726
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="mailto:jeff@cityspaceskc.com">
                  <Mail className="w-4 h-4 mr-2" />
                  jeff@cityspaceskc.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhatWeDo;
