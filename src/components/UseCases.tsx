import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

const UseCases = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const useCases = [
    {
      title: "Copilots",
      description: "Build native co-pilots into your application to unlock new end user experiences for domain-specific tasks.",
      company: "Replit",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format"
    },
    {
      title: "Enterprise GPT", 
      description: "Give all employees access to information and tools in a compliant manner so they can perform their best.",
      company: "Rakuten",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format"
    },
    {
      title: "Customer Support",
      description: "Improve the speed & efficiency of support teams that handle customer requests.",
      company: "Klarna", 
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format"
    },
    {
      title: "Research",
      description: "Synthesize data, summarize sources & uncover insights faster than ever for knowledge work.",
      company: "Morningstar",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format"
    },
    {
      title: "Code generation",
      description: "Accelerate software development by automating code writing, refactoring, and documentation for your team.",
      company: "Lovable",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format"
    },
    {
      title: "AI Search",
      description: "Offer a concierge experience to guide users to products or information in a personalized way.",
      company: "The Home Depot",
      logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % useCases.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + useCases.length) % useCases.length);
  };

  const getVisibleSlides = () => {
    const slidesToShow = 3;
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const index = (currentSlide + i) % useCases.length;
      slides.push(useCases[index]);
    }
    return slides;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div className="flex gap-6">
              {getVisibleSlides().map((useCase, index) => (
                <div 
                  key={`${currentSlide}-${index}`}
                  className="flex-1 min-w-0"
                >
                  <div className="bg-secondary rounded-2xl p-8 h-full card-shadow">
                    <div className="flex flex-col justify-between h-full min-h-[280px]">
                      <div>
                        <h4 className="text-xl font-semibold text-primary mb-4">
                          {useCase.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                          {useCase.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={useCase.logo} 
                            alt={useCase.company}
                            className="w-16 h-8 object-contain grayscale"
                          />
                        </div>
                        <Button variant="ghost" size="icon" className="text-primary">
                          <ArrowUpRight className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevSlide}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;