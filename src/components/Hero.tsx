import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden hero-gradient">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-secondary/30 to-accent/30"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-primary mb-8 leading-tight">
            The platform for<br />
            <span className="text-gradient">reliable agents</span>.
          </h1>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Tools for every step of the agent development lifecycle -- built to unlock powerful AI in production.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="px-8 py-3 text-lg">
              Request a demo
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              See the docs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;