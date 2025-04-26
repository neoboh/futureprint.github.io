
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Designer",
    company: "TechInnovate",
    content: "The quality of the 3D printed prototypes exceeded our expectations. The team was professional and helped us refine our designs. Highly recommended for any business needing rapid prototyping.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Williams",
    role: "Architect",
    company: "Modern Structures",
    content: "The architectural models were incredibly detailed and precise. PrintIT understood exactly what we needed and delivered on time. Their custom design service is exceptional.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    role: "Medical Device Engineer",
    company: "HealthTech Solutions",
    content: "We needed specialized medical prototypes with precise measurements. The team was knowledgeable about medical requirements and produced high-quality results that helped us advance our project.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md h-full">
              <CardContent className="p-8 flex flex-col h-full">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.content}"</p>
                
                {/* Author */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
