
import { ArrowRight, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-brand-blue to-brand-accent min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Element */}
      <div className="absolute w-96 h-96 rounded-full bg-brand-cyan opacity-10 -top-20 -right-20 animate-rotate-slow"></div>
      <div className="absolute w-96 h-96 rounded-full bg-brand-light opacity-10 -bottom-40 -left-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bring Your Ideas To Life With 3D Printing
            </h1>
            <p className="text-xl mb-8 text-brand-light max-w-lg">
              Professional 3D printing services and custom design solutions for businesses and individuals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-brand-cyan hover:bg-brand-light hover:text-brand-blue text-brand-blue font-semibold">
                <Link to="/products">
                  Browse Products <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                <Link to="/services">
                  Custom Design Services <Printer className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative w-full max-w-md">
              {/* 3D Printer Illustration */}
              <div className="w-72 h-72 rounded-full bg-white/10 flex items-center justify-center animate-float">
                <div className="w-64 h-64 rounded-full bg-white/20 flex items-center justify-center">
                  <div className="w-56 h-56 rounded-full bg-white/30 flex items-center justify-center">
                    <div className="bg-white/90 p-8 rounded-full flex items-center justify-center">
                      <Printer className="h-24 w-24 text-brand-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
