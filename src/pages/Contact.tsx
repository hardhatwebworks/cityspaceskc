import Seo from "@/components/Seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Seo
        title="Contact City Spaces Realty | Kansas City Real Estate"
        description="Get in touch with Jeff Johnson at City Spaces Realty. Call (816) 651-7726 or email jeff@cityspaceskc.com for Kansas City real estate help."
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
