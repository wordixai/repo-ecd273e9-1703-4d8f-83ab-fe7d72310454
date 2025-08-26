import { ArrowRight } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      title: "Copilots",
      description: "Build native co-pilots into your application to unlock new end user experiences for domain-specific tasks.",
      company: "Replit",
      badge: "Featured"
    },
    {
      title: "Enterprise GPT",
      description: "Give all employees access to information and tools in a compliant manner so they can perform their best.",
      company: "Rakuten", 
      badge: "Popular"
    },
    {
      title: "Customer Support",
      description: "Improve the speed & efficiency of support teams that handle customer requests.",
      company: "Klarna",
      badge: "Trending"
    },
    {
      title: "Research",
      description: "Synthesize data, summarize sources & uncover insights faster than ever for knowledge work.",
      company: "Morningstar",
      badge: "New"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
            Popular use cases
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how leading companies are using LangChain to build production-ready AI applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h4 className="text-xl font-semibold text-primary-dark">
                      {feature.title}
                    </h4>
                    <span className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs font-medium text-gray-600">
                      {feature.company.charAt(0)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-gray-900">
                    {feature.company}
                  </span>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-dark group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-primary-dark font-medium hover:gap-3 transition-all duration-200">
            View all use cases
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;