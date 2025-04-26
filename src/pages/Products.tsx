
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-28 pb-16 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Products</h1>
        <p className="text-xl mb-8">
          This page would contain our complete product catalog with filtering options.
        </p>
        <div className="p-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-xl text-gray-500">Products catalog would be displayed here.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Products;
