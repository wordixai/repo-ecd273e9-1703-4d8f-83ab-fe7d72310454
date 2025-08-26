const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-2xl lg:text-3xl font-bold text-primary mb-4">
            The biggest developer community in GenAI
          </h4>
          <p className="text-muted-foreground text-lg">
            Learn alongside the 1M+ practitioners using our frameworks to push the industry forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center">
            <div className="text-4xl lg:text-6xl font-bold text-gradient mb-4">
              100k+
            </div>
            <h4 className="text-xl font-semibold text-primary">
              GitHub stars
            </h4>
          </div>

          <div className="text-center">
            <div className="text-4xl lg:text-6xl font-bold text-gradient mb-4">
              #1
            </div>
            <h4 className="text-xl font-semibold text-primary">
              Downloaded agent framework
            </h4>
          </div>

          <div className="text-center">
            <div className="text-4xl lg:text-6xl font-bold text-gradient mb-4">
              600+
            </div>
            <h4 className="text-xl font-semibold text-primary">
              Integrations
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;