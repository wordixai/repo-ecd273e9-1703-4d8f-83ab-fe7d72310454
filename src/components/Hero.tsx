import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-20 pb-8 overflow-hidden hero-bg min-h-[80vh] flex items-center">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200/30 rounded-full floating-shape" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-purple-200/30 rounded-lg floating-shape" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-green-200/30 rounded-full floating-shape" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 left-1/3 w-6 h-6 bg-orange-200/30 rounded-lg floating-shape" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-pink-200/30 rounded-full floating-shape" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-primary-dark mb-6 leading-[1.1]">
            The platform for<br />
            <span className="relative">
              reliable agents
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </span>
            .
          </h1>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              Tools for every step of the agent development lifecycle -- built to unlock powerful AI in production.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button size="lg" className="px-6 py-2.5 text-sm font-medium bg-primary hover:bg-primary/90 rounded-lg">
              Request a demo
            </Button>
            <Button variant="outline" size="lg" className="px-6 py-2.5 text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg">
              See the docs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;