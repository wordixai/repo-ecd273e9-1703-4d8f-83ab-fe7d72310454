import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const AgentStack = () => {
  const [activeTab, setActiveTab] = useState('deployment');

  const tabs = [
    {
      id: 'orchestration',
      title: 'ORCHESTRATION:',
      subtitle: 'Build agents with LangGraph',
      description: 'Controllable agent orchestration with built-in persistence to handle conversational history, memory, and agent-to-agent collaboration.',
      percentage: 95
    },
    {
      id: 'integrations', 
      title: 'INTEGRATIONS:',
      subtitle: 'Integrate components with LangChain',
      description: 'Integrate with the latest models, databases, and tools with no engineering overhead.',
      percentage: 88
    },
    {
      id: 'observability',
      title: 'EVALS & OBSERVABILITY:',
      subtitle: 'Gain visibility with LangSmith', 
      description: 'Debug poor-performing LLM app runs. Evaluate and observe agent performance at scale.',
      percentage: 92
    },
    {
      id: 'deployment',
      title: 'DEPLOYMENT:',
      subtitle: 'Deploy & manage with LangGraph Platform',
      description: 'Deploy and scale enterprise-grade agents with long-running workflows. Discover, reuse, and share agents across teams — and iterate faster with LangGraph Studio.',
      percentage: 87
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Tabs */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-dark mb-12">
              The Agent Stack
            </h2>
            
            <div className="space-y-0">
              {tabs.map((tab, index) => (
                <div key={tab.id} className="border-t border-gray-200 last:border-b">
                  <Button
                    variant="ghost"
                    className={`w-full text-left p-6 h-auto flex items-start justify-between border-0 rounded-none ${
                      activeTab === tab.id ? 'bg-white shadow-sm' : 'hover:bg-white/50'
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <div className="flex-1">
                      <div className="flex items-center justify-between w-full mb-3">
                        <div>
                          <h6 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                            {tab.title}
                          </h6>
                          <h6 className="text-sm font-semibold text-primary-dark">
                            {tab.subtitle}
                          </h6>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          activeTab === tab.id 
                            ? 'bg-primary border-primary' 
                            : 'border-gray-300'
                        }`}>
                          {activeTab === tab.id && (
                            <Check className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </div>
                      {activeTab === tab.id && (
                        <p className="text-sm text-gray-600 text-left leading-relaxed">
                          {tab.description}
                        </p>
                      )}
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary-dark mb-2">
                    {tabs.find(tab => tab.id === activeTab)?.subtitle}
                  </h3>
                  <div className="text-sm text-gray-500">Performance Overview</div>
                </div>

                {/* Mock Chart/Visual */}
                <div className="space-y-4">
                  {tabs.map((tab, index) => {
                    const isActive = tab.id === activeTab;
                    return (
                      <div key={tab.id} className={`flex items-center space-x-3 p-3 rounded-lg ${
                        isActive ? 'bg-blue-50' : 'bg-gray-50'
                      }`}>
                        <div className={`w-3 h-3 rounded-full ${
                          isActive ? 'bg-blue-500' : 'bg-gray-300'
                        }`}></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-gray-900">
                            {tab.subtitle.replace(/.*with /, '')}
                          </div>
                          <div className="flex items-center mt-1">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                              <div 
                                className={`h-2 rounded-full transition-all duration-500 ${
                                  isActive ? 'bg-blue-500' : 'bg-gray-400'
                                }`}
                                style={{width: `${tab.percentage}%`}}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-500">{tab.percentage}%</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentStack;