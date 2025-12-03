import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, TrendingUp, Building2, Wallet, Calculator, CheckCircle2 } from "lucide-react";

const Investments = () => {
  const benefits = [
    { icon: Wallet, title: "Passive Income", description: "Generate consistent monthly rental income" },
    { icon: TrendingUp, title: "Building Equity", description: "Watch your investment grow over time" },
    { icon: Calculator, title: "Tax Benefits", description: "Take advantage of real estate tax breaks" },
    { icon: Building2, title: "Portfolio Diversification", description: "Balance your investments with tangible assets" },
  ];

  const services = [
    "Property sourcing and acquisition",
    "Property Management services",
    "Construction Management",
    "Leasing services",
    "Cash flow projections and analysis",
    "Self-Directed IRA/401K facilitation",
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
              Investment Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Real Estate Investments
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Build wealth through strategic real estate investment
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card p-6 rounded-xl text-center shadow-md">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/10 text-gold mb-4">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Passive income. Building Equity. Monthly rents. Tax breaks. These are some of the benefits that come with investing in real estate assets. But while investing in 1-4 family homes, apartment buildings or commercial properties can bring extra income it also comes with risk. Helping clients assess, quantify and mitigate the risks has been a key component of City Spaces Realty's business since our inception.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-6">
              I started my career in the commercial real estate business working for large institutional investors. Property valuation, cash flow projections, construction management and leasing are all a part of my day-to-day activities. This base of knowledge has served me and my investor clients well over the years.
            </p>

            <p className="text-lg text-foreground leading-relaxed mb-8">
              Primarily focused on sourcing value added opportunities in the residential 1 to 4 family space, I have helped dozens of clients accumulate wealth by investing in real estate assets.
            </p>

            <div className="bg-secondary rounded-2xl p-8 mb-12">
              <h2 className="font-display text-2xl text-foreground mb-6">One-Stop Shop for Investors</h2>
              <p className="text-muted-foreground mb-6">
                In addition to brokerage services, City Spaces Realty provides comprehensive services for real estate investors:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold/10 border-l-4 border-gold rounded-r-xl p-6 mb-8">
              <h3 className="font-display text-xl text-foreground mb-4">Self-Directed IRA/401K Expertise</h3>
              <p className="text-foreground leading-relaxed">
                A particular area of expertise I have perfected is facilitating conversion of traditional IRA and 401K accounts into Self-Directed accounts which allow clients to invest directly into real estate assets. This little-known but widely used strategy is legal, easy and provides clients with the opportunity to be more hands on in managing their retirement portfolios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl text-primary-foreground mb-6">
              Start Building Your Portfolio
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

export default Investments;
