
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CtaSection from "@/components/CtaSection";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-8 bg-brand-blue text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Custom Design Services</h1>
          <p className="text-xl">
            Professional 3D design and printing services tailored to your needs.
          </p>
        </div>
      </div>
      
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
      
      <Footer />
    </div>
  );
};

export default Services;
