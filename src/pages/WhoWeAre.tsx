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
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
              About Jeff Johnson
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Who We Are
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
                Hi, I'm Jeff Johnson, and that belief is at the core of my service to real estate clients. I believe that buying or selling a home should be an exciting and joyful experience. All you need is the assistance of an experienced, knowledgeable REALTOR® who listens carefully to understand your needs, takes the time to formulate a plan tailored to your situation, and then dedicates his efforts to achieving your goals. <span className="font-semibold text-gold">In Kansas City, I am that REALTOR®.</span>
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                My decision to become a REALTOR® was driven by my belief that putting your client's priorities first is the key to long term business success. In my personal experiences with buying real estate, I found that all too often agents/service providers emphasized their needs over the needs of their clients. Getting the deal done took priority over everything. I am committed to the idea that a client-first approach in all aspects of my business is best for both my clients and my company.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                A lifetime resident of the area, I love Kansas City and I love doing what I do. I enjoy people, so listening, understanding, empathizing, and bringing perspective and a sense of humor to the real estate process comes naturally. My favorite clients are those who prefer the right answer over the easy answer, who want to understand the process, and who aren't willing to settle for less.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                Of course, because real estate is a serious business, it can't be all about the fun and excitement. You also need an agent who will guide you through the legal and financial aspects of your transaction with skill, diligence, and expertise.
              </p>

              <h2 className="font-display text-3xl text-foreground mt-12 mb-6">25+ Years of Experience</h2>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                I started my career 25 years ago in residential real estate finance and then moved on to a successful stint in commercial real estate development. Since 2008 I have focused on helping Kansas Citians buy and sell single family homes for both personal enjoyment and investment. Whether you are a first-time home buyer looking for the perfect starter home, an empty nester looking to downsize, or a young professional wanting to build wealth through real estate investment, I have the skills and experience to assist you in accomplishing your goals.
              </p>

              <h2 className="font-display text-3xl text-foreground mt-12 mb-6">Inherited/Probated Properties</h2>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                Over the last several years I have found a special purpose and sense of pride in helping families navigate the probate process while dealing with the death of a loved one. These individuals are faced with a complex maze of responsibilities in settling those estates, and I've been gratified to guide them through it as painlessly as possible. This significant portion of my business is built upon providing a full slate of services, beyond just selling the real estate, to help them through a difficult and emotional time.
              </p>

              <div className="bg-secondary rounded-2xl p-8 mt-12">
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  If you love the energy and excitement of Kansas City – and you want a REALTOR® who will work hard to make buying or selling your home both easy and enjoyable, call me. I'll be with you from the first step through closing – and beyond.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="gold" size="lg" asChild>
                    <a href="tel:816-651-7726">
                      <Phone className="w-4 h-4 mr-2" />
                      (816) 651-7726
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:jeff@cityspaceskc.com">
                      <Mail className="w-4 h-4 mr-2" />
                      jeff@cityspaceskc.com
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WhoWeAre;
