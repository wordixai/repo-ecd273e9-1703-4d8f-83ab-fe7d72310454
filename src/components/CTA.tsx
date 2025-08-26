import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Ready to start shipping reliable agents faster?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
          Get started with tools from the LangChain product suite for every step of the agent development lifecycle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
            Get a demo
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-3 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            Sign up for free
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;