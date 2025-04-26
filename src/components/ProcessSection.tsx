
import { 
  FileText, 
  MessageCircle, 
  Settings, 
  Truck, 
  CheckCircle,
  ThumbsUp
} from "lucide-react";

const processSteps = [
  {
    icon: <FileText className="h-12 w-12 text-brand-blue" />,
    title: "Submit Request",
    description: "Fill out our simple form with details about your project or upload your design files."
  },
  {
    icon: <MessageCircle className="h-12 w-12 text-brand-blue" />,
    title: "Consultation",
    description: "Our design team will review your request and reach out to discuss specifications and requirements."
  },
  {
    icon: <Settings className="h-12 w-12 text-brand-blue" />,
    title: "Design & Printing",
    description: "We'll create or optimize your design and use our high-quality printers to bring it to life."
  },
  {
    icon: <CheckCircle className="h-12 w-12 text-brand-blue" />,
    title: "Quality Control",
    description: "Every print undergoes rigorous quality checks to ensure it meets our standards."
  },
  {
    icon: <Truck className="h-12 w-12 text-brand-blue" />,
    title: "Delivery",
    description: "Your finished product is carefully packaged and shipped directly to your doorstep."
  },
  {
    icon: <ThumbsUp className="h-12 w-12 text-brand-blue" />,
    title: "Satisfaction",
    description: "We follow up to ensure you're completely satisfied with the final product."
  }
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From concept to creation, our streamlined process ensures quality results every time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {processSteps.map((step, index) => (
            <div key={index} className="flex">
              <div className="flex-shrink-0 mr-4">
                <div className="flex items-center justify-center w-16 h-16 bg-brand-light rounded-full">
                  {step.icon}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-0.5 h-full bg-brand-light mx-auto my-2 md:hidden"></div>
                )}
              </div>
              <div>
                <div className="flex items-center">
                  <span className="bg-brand-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium mr-2">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600 mt-2">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
