import { Rocket, Zap, Eye } from 'lucide-react';

const FeatureCards = () => {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Accelerate agent development.",
      description: "Build faster with templates & a visual agent IDE. Reuse, configure, and combine agents to go further with less code."
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: "Ship reliable agents.",
      description: "Design agents that can handle sophisticated tasks with control. Add human-in-the-loop to steer and approve agent actions."
    },
    {
      icon: <Eye className="w-12 h-12 text-primary" />,
      title: "Gain visibility & improve quality.",
      description: "See what's happening - so you can quickly trace to root cause and debug issues. Evaluate your agent performance to improve over time."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 card-shadow border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-6">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-primary mb-4">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;