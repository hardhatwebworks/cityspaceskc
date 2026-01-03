import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Heart, CheckCircle2, Quote } from "lucide-react";

const Probate = () => {
  const services = [
    "Listening Before Speaking: It is important that we understand your situation and your goals before we know how we can help.",
    "Secure, catalogue and maintain physical assets during the probate or settlement process.",
    "Gently & compassionately facilitate the disposition of personal items (including automobiles) through estate sales, donations and disposal.",
    "Identify and manage subject matter experts for specialty items.",
    "Complete minor maintenance, repairs and staging as needed to maximize the value of any Real Estate.",
    "Comprehensive Real Estate brokerage services.",
    "Miscellaneous Services include moving management, senior living referrals and financing assistance.",
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
              Estate Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Inherited/Probated Properties
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Full-Service Inherited Property/Probate Concierge
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 rounded-xl bg-gold/10 flex-shrink-0">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  Over the last several years I have found a special purpose and sense of pride in helping families navigate the probate process while dealing with the death of a loved one. Due to this work City Spaces Realty LLC has become a leader in the Probate/Inherited Property space in the Kansas City market.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
                  I realized years ago that people tasked with the responsibility of settling the affairs of a loved one that has passed have accepted an immense responsibility that can be overwhelming. Unfortunately, most are not prepared for the mountain of work and time commitment necessary for success. Years of experience helping families navigate this jungle have allowed me to develop a network of local professionals handpicked for their distinct talents to help you through each task you will face as a Personal Representative/Executor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Difference */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl text-foreground mb-6 text-center">What Sets Us Apart</h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our model is different from other real estate agents and investors. The wide scope of services offered coupled with our commitment to exceed our client's expectations sets us apart from the pack.
            </p>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <p className="text-foreground mb-8 text-lg">
                Using a comprehensive approach developed over the years we can craft a plan specifically tailored to your family's needs. Yes, we are REALTORS but we do so much more:
              </p>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-secondary">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl text-foreground mb-8 text-center">Success Story</h2>
            
            <div className="bg-primary rounded-2xl p-8 md:p-12">
              <div className="flex items-start gap-4 mb-6">
                <Quote className="w-10 h-10 text-gold flex-shrink-0" />
              </div>
              
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                Recently we helped Anne from Kansas City with the disposition of her brother Frank's estate. City Spaces Realty handled the physical asset inventory, secured and maintained the house throughout the probate process, valued and sold her brother's car, performed a full house clean out & minor maintenance to prepare the house for sale and handled the sale of the real estate. The house, which required significant updates, was sold to a cash buyer at the list price in less than 30 days from listing to close.
              </p>
              
              <div className="border-t border-primary-foreground/20 pt-6">
                <p className="text-primary-foreground italic leading-relaxed">
                  "I would like to personally thank you for the extraordinary job that you did selling my brother, Frank's house. It was truly a challenging situation for my family. Frank's death was unexpected and his house and personal affairs were in total disarray. Your quiet wisdom and network of services helped my family to safely navigate an otherwise untenable set of challenges."
                </p>
                <p className="text-gold font-medium mt-4">— Anne, Kansas City</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl text-primary-foreground mb-6">
              We're Here to Help
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

export default Probate;
