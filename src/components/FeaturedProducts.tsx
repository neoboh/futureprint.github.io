
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

// Sample product data
const products = [
  {
    id: 1,
    name: "Custom Desk Organizer",
    category: "Home",
    description: "Personalized desk organizer with multiple compartments",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1602631815894-3094fa37d395?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Architectural Model",
    category: "Professional",
    description: "Detailed architectural model for presentations",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Custom Phone Stand",
    category: "Gadgets",
    description: "Ergonomic phone stand with custom design",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1616509091215-57bbcee4d775?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    name: "Medical Prototype",
    category: "Professional",
    description: "Medical device prototype with precise measurements",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
  }
];

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Home", "Professional", "Gadgets"];

  // Filter products based on active category
  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Products</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our selection of high-quality 3D printed products, from practical everyday items to professional prototypes.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex justify-center mb-8 flex-wrap gap-2">
          {categories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`${
                activeCategory === category 
                  ? "bg-brand-blue hover:bg-brand-accent" 
                  : "hover:text-brand-blue"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <span className="inline-block bg-brand-light text-brand-blue text-xs px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price}</span>
                  <Button variant="outline" size="sm" className="text-brand-blue border-brand-blue hover:bg-brand-blue hover:text-white">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-accent">
            <Link to="/products">
              View All Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
