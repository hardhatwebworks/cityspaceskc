import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Seo
        title="Contact City Spaces Realty | Kansas City"
        description="Call, text, or email Jeff Johnson at City Spaces Realty for a free, no-obligation Kansas City real estate consultation. (816) 651-7726."
      />
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
