import { useState } from 'react';
import { Button } from '@/components/ui/button';

const AgentStack = () => {
  const [activeTab, setActiveTab] = useState('deployment');

  const tabs = [
    {
      id: 'orchestration',
      title: 'ORCHESTRATION:',
      subtitle: 'Build agents with LangGraph',
      description: 'Controllable agent orchestration with built-in persistence to handle conversational history, memory, and agent-to-agent collaboration.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 'integrations',
      title: 'INTEGRATIONS:',
      subtitle: 'Integrate components with LangChain',
      description: 'Integrate with the latest models, databases, and tools with no engineering overhead.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 'observability',
      title: 'EVALS & OBSERVABILITY:',
      subtitle: 'Gain visibility with LangSmith',
      description: 'Debug poor-performing LLM app runs. Evaluate and observe agent performance at scale.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format'
    },
    {
      id: 'deployment',
      title: 'DEPLOYMENT:',
      subtitle: 'Deploy & manage with LangGraph Platform',
      description: 'Deploy and scale enterprise-grade agents with long-running workflows. Discover, reuse, and share agents across teams — and iterate faster with LangGraph Studio.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format'
    }
  ];

  const activeTabData = tabs.find(tab => tab.id === activeTab);

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Tabs */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-12">
              The Agent Stack
            </h2>
            
            <div className="space-y-0">
              {tabs.map((tab) => (
                <div key={tab.id}>
                  <Button
                    variant="ghost"
                    className={`w-full text-left p-6 h-auto flex flex-col items-start justify-start border-t border-b border-gray-200 rounded-none ${
                      activeTab === tab.id ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <div>
                        <h6 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          {tab.title}
                        </h6>
                        <h6 className="text-sm font-medium text-primary">
                          {tab.subtitle}
                        </h6>
                      </div>
                      <div className="w-8 h-8 bg-accent rounded-full"></div>
                    </div>
                    {activeTab === tab.id && (
                      <p className="text-sm text-muted-foreground text-left mt-4">
                        {tab.description}
                      </p>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl p-8 card-shadow">
              <img 
                src={activeTabData?.image} 
                alt={activeTabData?.subtitle}
                className="w-full h-64 lg:h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentStack;