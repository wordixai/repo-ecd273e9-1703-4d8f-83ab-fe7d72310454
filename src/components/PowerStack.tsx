const PowerStack = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-accent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary leading-tight">
            LangChain products are designed to be used independently or stack for multiplicative benefit.
          </h2>
        </div>

        {/* Product Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="text-center">
            <h4 className="text-xl font-semibold text-primary mb-6">Frameworks</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 card-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-3"></div>
                <div className="font-semibold text-primary">LangChain</div>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-3"></div>
                <div className="font-semibold text-primary">LangGraph</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-xl font-semibold text-primary mb-6">Platforms</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-6 card-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-3"></div>
                <div className="font-semibold text-primary">LangSmith</div>
              </div>
              <div className="bg-white rounded-xl p-6 card-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-3"></div>
                <div className="font-semibold text-primary text-center">LangGraph Platform</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stack Cards */}
        <div className="space-y-8">
          {/* Full Stack */}
          <div className="bg-white rounded-2xl p-8 card-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-4">
                  STACK 1: LangGraph + LangChain + LangSmith + LangGraph Platform
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  A full product suite for reliable agents and LLM apps
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  LangChain's products work seamlessly together to provide an integrated solution for every step of the application development journey. When you use all LangChain products, you'll build better, get to production quicker, and grow visibility -- all with less set up and friction.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {['Orchestration', 'Integrations', 'Evals + Observability', 'Deployment'].map((item) => (
                  <div key={item} className="bg-secondary rounded-xl p-4 text-center">
                    <div className="text-xs font-semibold text-muted-foreground mb-2">{item}:</div>
                    <div className="w-16 h-8 bg-primary/20 rounded mx-auto"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Framework Agnostic Stack */}
          <div className="bg-brand-orange/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-4">
                  STACK 2: No framework + LangSmith
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Trace and evaluate any LLM app
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  LangSmith is framework-agnostic. Trace using the TypeScript or Python SDK to gain visibility into your agent interactions -- whether you use LangChain's frameworks or not.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Orchestration:</div>
                  <div className="text-sm font-medium text-primary">Your choice</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Evals + Observability:</div>
                  <div className="w-16 h-8 bg-primary/20 rounded mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Stack */}
          <div className="bg-brand-green/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm font-semibold text-muted-foreground mb-4">
                  STACK 3: Any agent framework + LangGraph Platform
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Build agents any way you want, then deploy and scale with ease
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  LangGraph Platform works with any agent framework, enabling stateful UXs like human-in-the-loop and streaming-native deployments.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Orchestration:</div>
                  <div className="text-sm font-medium text-primary">Your choice</div>
                </div>
                <div className="bg-white rounded-xl p-4 text-center">
                  <div className="text-xs font-semibold text-muted-foreground mb-2">Deployment:</div>
                  <div className="w-16 h-8 bg-primary/20 rounded mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PowerStack;