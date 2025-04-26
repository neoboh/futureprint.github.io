
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-brand-blue">
            Print<span className="text-brand-cyan">IT</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium hover:text-brand-cyan transition-colors">
            Home
          </Link>
          <Link to="/products" className="font-medium hover:text-brand-cyan transition-colors">
            Products
          </Link>
          <Link to="/services" className="font-medium hover:text-brand-cyan transition-colors">
            Custom Designs
          </Link>
          <Link to="/about" className="font-medium hover:text-brand-cyan transition-colors">
            About
          </Link>
          <Link to="/contact" className="font-medium hover:text-brand-cyan transition-colors">
            Contact
          </Link>
          <Button variant="default" className="bg-brand-blue hover:bg-brand-accent">
            Get Quote
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6 text-brand-blue" />
          ) : (
            <Menu className="h-6 w-6 text-brand-blue" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link to="/" className="font-medium py-2 border-b" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/products" className="font-medium py-2 border-b" onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link to="/services" className="font-medium py-2 border-b" onClick={() => setMobileMenuOpen(false)}>
              Custom Designs
            </Link>
            <Link to="/about" className="font-medium py-2 border-b" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="font-medium py-2 border-b" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Button variant="default" className="bg-brand-blue hover:bg-brand-accent w-full">
              Get Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
