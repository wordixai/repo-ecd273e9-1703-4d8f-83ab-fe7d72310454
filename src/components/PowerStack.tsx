const PowerStack = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark leading-tight mb-4">
            LangChain products are designed<br />
            to be used independently or stack<br />
            for multiplicative benefit.
          </h2>
        </div>

        {/* Stack Visualization */}
        <div className="space-y-8">
          {/* Full Stack */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wider">
                  STACK 1: LangGraph + LangChain + LangSmith + LangGraph Platform
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  A full product suite for reliable agents and LLM apps
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  LangChain's products work seamlessly together to provide an integrated solution for every step of the application development journey. When you use all LangChain products, you'll build better, get to production quicker, and grow visibility.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Orchestration', icon: '🕸️', color: 'bg-blue-50 text-blue-600' },
                  { label: 'Integrations', icon: '⛓️', color: 'bg-green-50 text-green-600' },
                  { label: 'Evals + Observability', icon: '🔍', color: 'bg-purple-50 text-purple-600' },
                  { label: 'Deployment', icon: '🚀', color: 'bg-orange-50 text-orange-600' }
                ].map((item) => (
                  <div key={item.label} className={`${item.color} rounded-xl p-4 text-center`}>
                    <div className="text-lg mb-2">{item.icon}</div>
                    <div className="text-xs font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Framework Agnostic Stack */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="text-sm font-semibold text-orange-600 mb-3 uppercase tracking-wider">
                  STACK 2: No framework + LangSmith
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  Trace and evaluate any LLM app
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  LangSmith is framework-agnostic. Trace using the TypeScript or Python SDK to gain visibility into your agent interactions -- whether you use LangChain's frameworks or not.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-4 text-center border-2 border-dashed border-gray-300">
                  <div className="text-xs font-medium text-gray-500 mb-2">Orchestration:</div>
                  <div className="text-sm font-medium text-gray-700">Your choice</div>
                </div>
                <div className="bg-purple-50 text-purple-600 rounded-xl p-4 text-center">
                  <div className="text-lg mb-2">🔍</div>
                  <div className="text-xs font-medium">Evals + Observability</div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Stack */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="text-sm font-semibold text-green-600 mb-3 uppercase tracking-wider">
                  STACK 3: Any agent framework + LangGraph Platform
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">
                  Build agents any way you want, then deploy and scale with ease
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  LangGraph Platform works with any agent framework, enabling stateful UXs like human-in-the-loop and streaming-native deployments.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-4 text-center border-2 border-dashed border-gray-300">
                  <div className="text-xs font-medium text-gray-500 mb-2">Orchestration:</div>
                  <div className="text-sm font-medium text-gray-700">Your choice</div>
                </div>
                <div className="bg-orange-50 text-orange-600 rounded-xl p-4 text-center">
                  <div className="text-lg mb-2">🚀</div>
                  <div className="text-xs font-medium">Deployment</div>
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