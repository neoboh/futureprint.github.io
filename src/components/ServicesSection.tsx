
import { ArrowRight, Box, FileText, Lightbulb, PenTool, UserCog, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Custom 3D Design",
    description: "Our professional designers will bring your ideas to life, creating custom 3D models tailored to your needs.",
    icon: <PenTool className="h-12 w-12 text-brand-cyan" />,
  },
  {
    title: "Rapid Prototyping",
    description: "Get functional prototypes quickly with our efficient 3D printing processes and specialized materials.",
    icon: <Zap className="h-12 w-12 text-brand-cyan" />,
  },
  {
    title: "Design Consultation",
    description: "Not sure how to approach your project? Our experts will guide you through the design process.",
    icon: <Lightbulb className="h-12 w-12 text-brand-cyan" />,
  },
  {
    title: "File Optimization",
    description: "We'll optimize your existing 3D files for printing, ensuring the best possible quality and results.",
    icon: <FileText className="h-12 w-12 text-brand-cyan" />,
  },
  {
    title: "Custom Materials",
    description: "Choose from a wide range of materials, from standard plastic to specialized composites.",
    icon: <Box className="h-12 w-12 text-brand-cyan" />,
  },
  {
    title: "Full Support",
    description: "Our team provides complete support throughout your project, from initial design to final delivery.",
    icon: <UserCog className="h-12 w-12 text-brand-cyan" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive 3D printing and design services to meet your specific needs, whether you're an individual or a business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-accent">
            <Link to="/services">
              Learn More About Our Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
