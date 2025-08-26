import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const CustomerStories = () => {
  const stories = [
    {
      company: "A leading financial services company",
      title: "80% reduction in resolution time with AI-powered customer support",
      description: "Built a Klarna-style AI assistant that handles customer queries end-to-end, reducing average resolution time from 11 minutes to under 2 minutes.",
      tags: ["Customer Support", "Financial Services"],
      stats: "80% faster resolution"
    },
    {
      company: "Global logistics provider", 
      title: "600 hours saved daily with automated order processing",
      description: "C.H. Robinson automated their freight order processing using LangGraph agents, saving 600 hours of manual work per day.",
      tags: ["Automation", "Transportation"],
      stats: "600 hours/day saved"
    },
    {
      company: "Leading cybersecurity firm",
      title: "From days to minutes: Accelerating security log analysis", 
      description: "Trellix reduced log parsing time from days to minutes for their 40,000+ customers using intelligent document processing.",
      tags: ["Security", "Document Processing"],
      stats: "40,000+ customers"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-dark mb-6">
              Get inspired by companies who have done it.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Teams building with LangChain products are driving operational efficiency, increasing discovery & personalization, and delivering premium products that generate revenue.
            </p>
            <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
              Discover Use Cases
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {stories.map((story, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 group cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="text-sm text-gray-500 mb-2">{story.company}</div>
                      <h4 className="text-lg font-semibold text-primary-dark mb-3 group-hover:text-primary transition-colors">
                        {story.title}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-primary-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0 ml-4" />
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {story.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {story.tags.map((tag) => (
                        <span key={tag} className="text-xs font-medium bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm font-semibold text-green-600">
                      {story.stats}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;