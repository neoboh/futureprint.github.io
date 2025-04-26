
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Print<span className="text-brand-cyan">IT</span>
            </h3>
            <p className="mb-4">
              Your premier destination for professional 3D printing services and custom design solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brand-cyan transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-brand-cyan transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-brand-cyan transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-brand-cyan transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-brand-cyan transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-cyan transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-cyan transition-colors">Custom Designs</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-cyan transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-cyan transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-brand-cyan transition-colors">Custom Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-cyan transition-colors">3D Printing</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-cyan transition-colors">Design Consultation</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-cyan transition-colors">Prototyping</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-brand-cyan transition-colors">Bulk Orders</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Print Street, Design City</li>
              <li>contact@printit3d.com</li>
              <li>(555) 123-4567</li>
              <li>Mon-Fri: 9AM - 6PM</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} PrintIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
