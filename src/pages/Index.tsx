
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturedProducts />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        
        {/* Contact Section */}
        <section className="section-padding bg-brand-blue">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Contact <span className="text-brand-cyan">Us</span>
              </h2>
              <p className="text-lg text-brand-light max-w-2xl mx-auto">
                Have questions or ready to start your project? Reach out to our team for a consultation.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
        
        <CtaSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
