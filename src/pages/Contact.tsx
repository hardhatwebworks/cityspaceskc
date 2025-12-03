import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
