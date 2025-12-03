import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Jeff will be in touch soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(816) 651-7726",
      href: "tel:816-651-7726",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jeff@cityspaceskc.com",
      href: "mailto:jeff@cityspaceskc.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kansas City, MO",
      href: "#",
    },
  ];

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Content */}
            <div>
              <span className="text-gold font-medium text-sm tracking-widest uppercase mb-4 block">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
                Ready to Find Your Space?
              </h2>
              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
                Whether you're buying, selling, or investing, I'm here to help make your 
                real estate dreams a reality. Please call, text or email today to setup your free no obligation consultation.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-primary transition-colors duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-primary-foreground/50 text-sm">{item.label}</div>
                      <div className="text-primary-foreground font-medium group-hover:text-gold transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-2xl">
              <h3 className="font-display text-2xl text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                
                <div className="grid sm:grid-cols-2 gap-5">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                
                <div>
                  <Textarea
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="resize-none"
                  />
                </div>
                
                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
