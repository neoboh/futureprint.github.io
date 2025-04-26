
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16 bg-brand-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-white">
              Contact <span className="text-brand-cyan">Us</span>
            </h1>
            <p className="text-xl text-brand-light max-w-2xl mx-auto">
              Have questions or ready to start your project? Reach out to our team for a consultation.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
