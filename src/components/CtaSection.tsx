
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-brand-blue to-brand-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Bring Your Ideas to Life?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Whether you need custom designs, professional prototypes, or production-ready prints,
          we're here to help turn your vision into reality.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-brand-blue hover:bg-brand-light">
            <Link to="/contact">
              Request a Quote
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
            <Link to="/services">
              Explore Services
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
