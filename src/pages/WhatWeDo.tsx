import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, CheckCircle2, Users, Home, ShoppingBag } from "lucide-react";

const WhatWeDo = () => {
  const clientCommitments = [
    "We listen to You. This is your Journey so it is not our job to lead but to follow your guidance.",
    "Provide timely and reliable communication about all aspects of your transaction.",
    "Transparency and Professionalism are the foundation of all we do.",
    "Your satisfaction takes priority over our needs.",
  ];

  const sellerCommitments = [
    "Take the time to understand the motivations driving your desire to sell your house.",
    "Develop the most aggressive pricing and marketing plan based upon your motivations, the conditions of the house and current market conditions.",
    "Provide a realistic outline and timeframe for the sale process at the onset so you understand the issues that will effect a successful execution of your marketing plan.",
    "Provide guidance on the preparation of the house so that it is positioned in the best possible way to maximize interest.",
    "Prepare marketing material in a professional and appropriate way for the subject property.",
    "Ensure your listing information is distributed to widest possible audience including all the major listing services, social media outlets and directly to agents working in the subject market.",
    "Diligently follow up with prospective buyers to obtain real-time feedback on your listing.",
    "Summarize and present all offers with recommendations in a timely manner.",
    "Shepherd the transactions through the due diligence and closing process efficiently and as quickly as possible.",
    "Follow up after the closing to ensure you have all paperwork required for your records.",
  ];

  const buyerCommitments = [
    "Listen to understand the motivations driving your desire to purchase a new house.",
    "Take the time to help you define and hone the financial, emotional and practical reasons for this decision.",
    "Develop a comprehensive plan that addresses the areas, home attributes, budget, financing options and non-tangible aspects of home ownership before starting the search.",
    "Search all possible avenues including active MLS listings, FSBO properties, bank foreclosure listings, expired listings and even houses not currently being marketed to ensure we understand all possible options available.",
    "Provide a comparative market analysis of the house you select to ensure the offer price is in line with the current market.",
    "Diligently negotiate the best terms possible for the house of your choice.",
    "Efficiently negotiate the inspection, due diligence and closing process.",
    "Follow up after the close to ensure everything is as expected in your new home.",
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
