import { useState, useEffect } from "react";
import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Quote, ChevronLeft, ChevronRight } from "lucide-react";

import tenaciousBuyer1 from "@/assets/tenacious-buyer-1.jpeg";
import tenaciousBuyer2 from "@/assets/tenacious-buyer-2.jpeg";
import fixerUpperBrookside from "@/assets/fixer-upper-brookside.jpg";
import outOfStateSibs from "@/assets/out-of-state-sibs.jpg";
import listingWithTwist from "@/assets/listing-with-twist.jpg";
import localBuilderBefore from "@/assets/local-builder-before.jpeg";
import localBuilderAfter from "@/assets/local-builder-after.jpeg";

const ImageSlideshow = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative mt-6 max-w-lg mx-auto">
      <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
        <img
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>
      {images.length > 1 && (
        <>
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-1.5 shadow"
          >
            <ChevronLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background rounded-full p-1.5 shadow"
          >
            <ChevronRight className="w-4 h-4 text-foreground" />
          </button>
          <div className="flex justify-center gap-2 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-gold" : "bg-muted-foreground/30"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const StoryImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="mt-6 max-w-lg mx-auto">
    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  </div>
);

const SuccessStories = () => {
  const stories = [
    {
      title: "Tenacious Buyer",
      description: "CITY SPACES REALTY acted as the Buyer's Exclusive Representative for a client looking for her forever house in one of the most difficult buyer's markets in recent memory. The fact the world was experiencing a global pandemic did not help matters. She had a definitive idea of the type of house she desired but was open to different areas. Together we toured dozens of prospective homes and submitted seven very competitive offers before finally landing the perfect house in a great (yet underappreciated) neighborhood. With CITY SPACES REALTY support she worked through the frustration and disappointment of so many unaccepted offers to keep her focus and resolve to arrive at a successful conclusion.",
      highlight: "7 offers submitted before finding the perfect home",
      media: <ImageSlideshow images={[tenaciousBuyer1, tenaciousBuyer2]} alt="Tenacious Buyer property" />,
    },
    {
      title: "Fixer Upper in Brookside",
      description: "CITY SPACES REALTY acted as the Listing Agent for clients selling their large two-story home in Brookside as part of their retirement/downsizing plan. CITY SPACES REALTY was instrumental in all aspects of the process from assisting them in the purchase of a maintenance free condominium, facilitating an estate sale for their unwanted possessions, performing some minor improvements to better position the house for sale and ultimately handling the listing and sale. The house needed significant work but after a thorough clean and some minor repairs it showed well and sold above the listed price in less than a month.",
      highlight: "Sold above list price in less than a month",
      media: <StoryImage src={fixerUpperBrookside} alt="Fixer Upper in Brookside" />,
    },
    {
      title: "Out of State Sibling Sells Inherited Home",
      description: "Working from a referral from a local attorney, CITY SPACES REALTY was hired to assist a client who had inherited a house from their brother. The client lived in North Carolina and had never been to the Kansas City area. To make matters more complicated the house was in significant disrepair and the brother was a bit of a hoarder. CITY SPACES REALTY was able to provide a one-stop shop for all the necessary services to settle the estate. We worked with the client to ensure the house was secure, that the utilities were kept on and that appropriate insurance was in place as we worked on the disposition plan. Once secured, we managed the cleanout process and performed a couple of minor repairs in anticipation of taking the house to market. Since the house needed significant repairs it was marketed primarily to investors with the wherewithal to handle the needed updates. The client never had to come to Kansas City and the entire process from the first call to closing took less than 45 days.",
      highlight: "First call to closing in less than 45 days",
      media: <StoryImage src={outOfStateSibs} alt="Out of State Sibling inherited home" />,
    },
    {
      title: "Listing with a Twist",
      description: "While preparing a client's house to be listed for sale we were approached by a neighbor that was interested in purchasing the house. My clients were excited by the prospect of giving someone in the neighborhood that they were familiar with the opportunity to purchase the house. Unfortunately, the interested neighbor was not financially able to obtain traditional financing in the timeframe required even though they had a significant down payment. CITY SPACES REALTY was able to structure the transaction where the sellers accepted a short-term promissory note (secured by a Deed of Trust) for the balance of the purchase price. The sellers got the full price and the note was paid off as agreed.",
      highlight: "Creative financing solution for all parties",
      media: <StoryImage src={listingWithTwist} alt="Listing with a Twist property" />,
    },
    {
      title: "Local Builder Finds Dream Office Space",
      description: "A local design/build firm was looking for a space to house their growing company. They wanted to be somewhere near the Troost corridor to be close to their home and client base. CITY SPACES REALTY identified an off-market unoccupied commercial building that fit the size and location requirement. However, the building needed significant work and a zoning variance for the intended use. Due to the issues CITY SPACES REALTY was able to negotiate a significantly discounted purchase.",
      highlight: "Off-market deal at a significant discount",
      media: <ImageSlideshow images={[localBuilderBefore, localBuilderAfter]} alt="Local Builder office space" />,
    },
  ];

  return (
    <main className="min-h-screen">
      <Seo
        title="Success Stories | City Spaces Realty Kansas City"
        description="Real Kansas City client stories from City Spaces Realty: tenacious buyers, fixer-uppers, out-of-state sellers, and more."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
              Client Stories
            </span>
            <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Real results for real people in Kansas City
            </p>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {stories.map((story, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-2 rounded-lg bg-gold/10">
                      <Quote className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h2 className="font-sans font-bold text-2xl text-foreground mb-2">{story.title}</h2>
                      <span className="inline-block px-3 py-1 bg-gold/10 text-gold text-sm rounded-full font-medium">
                        {story.highlight}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{story.description}</p>
                  {story.media}
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
            <h2 className="font-sans font-bold text-3xl text-primary-foreground mb-6">
              Ready to Write Your Success Story?
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

export default SuccessStories;
