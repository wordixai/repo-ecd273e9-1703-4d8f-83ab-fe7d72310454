import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const CustomerStories = () => {
  const stories = [
    {
      company: "Klarna",
      industry: "Financial Services", 
      description: "Klarna's AI assistant has reduced average customer query resolution time by 80%, powered by LangSmith and LangGraph",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format"
    },
    {
      company: "C.H. Robinson",
      industry: "Transportation",
      description: "This global logistics provider is saving 600 hours a day using an automated order system built on LangGraph and LangSmith",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format"
    },
    {
      company: "Trellix", 
      industry: "Security",
      description: "As a leading cybersecurity firm with 40k+ customers, Trellix cut log parsing from days to minutes using LangGraph and LangSmith.",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format"
    }
  ];

  return (
    <section className="py-20 bg-accent/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              Get inspired by companies who have done it.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Teams building with LangChain products are driving operational efficiency, increasing discovery & personalization, and delivering premium products that generate revenue.
            </p>
            <Button className="flex items-center gap-2">
              Discover Use Cases
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 card-shadow hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
              <div className="flex items-center justify-between mb-6">
                <img 
                  src={story.logo} 
                  alt={story.company}
                  className="w-24 h-12 object-contain grayscale group-hover:grayscale-0 transition-all"
                />
                <ArrowUpRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="mb-4">
                <span className="inline-block bg-secondary text-primary text-sm font-medium px-3 py-1 rounded-full">
                  {story.industry}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {story.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerStories;