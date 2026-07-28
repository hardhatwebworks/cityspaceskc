import { Link } from "react-router-dom";
import { Home, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="404 - Page Not Found | City Spaces Realty"
        description="The page you're looking for doesn't exist or may have moved. City Spaces Realty - Kansas City Real Estate."
        noindex
      />
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-hero relative overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <h1 className="font-display text-8xl md:text-9xl text-gradient-gold mb-4 leading-none animate-fade-in-up">
              404
            </h1>

            <h2 className="font-serif text-3xl md:text-4xl text-primary-foreground mb-6 animate-fade-in-up animation-delay-200">
              Page Not Found
            </h2>

            <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto animate-fade-in-up animation-delay-400">
              The page you&apos;re looking for doesn&apos;t exist or may have moved.
              Let&apos;s get you back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up animation-delay-600">
              <Button variant="gold" size="lg" asChild>
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Back to Home
                </Link>
              </Button>

              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Contact CTA */}
            <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary-foreground/10 animate-fade-in-up animation-delay-600">
              <p className="text-primary-foreground/80 mb-4">
                Looking for something specific? Jeff is happy to help.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-primary-foreground/60">
                <a
                  href="tel:816-651-7726"
                  className="hover:text-gold transition-colors"
                >
                  (816) 651-7726
                </a>
                <span className="hidden sm:inline text-primary-foreground/20">
                  |
                </span>
                <a
                  href="mailto:jeff@cityspaceskc.com"
                  className="hover:text-gold transition-colors"
                >
                  jeff@cityspaceskc.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
