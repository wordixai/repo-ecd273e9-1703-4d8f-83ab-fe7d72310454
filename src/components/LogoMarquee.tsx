const LogoMarquee = () => {
  const startupLogos = [
    { name: "Replit", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" },
    { name: "Unify", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" },
    { name: "Lovable", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" },
    { name: "Modern Treasury", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" },
    { name: "Clay", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" },
  ];

  const enterpriseLogos = [
    { name: "Ally", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" },
    { name: "Rakuten", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" },
    { name: "Klarna", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" },
    { name: "Elastic", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" },
    { name: "Google", src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop&auto=format" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-2xl lg:text-3xl font-semibold text-primary">
            LangChain products power top engineering teams, from{' '}
            <span className="bg-accent px-2 py-1 rounded-lg">startups</span>{' '}
            to{' '}
            <span className="bg-muted px-2 py-1 rounded-lg">global enterprises</span>
          </h4>
        </div>

        {/* Desktop Logo Grid */}
        <div className="hidden md:block space-y-8">
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {startupLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center w-24 h-12 grayscale hover:grayscale-0 transition-all">
                <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {enterpriseLogos.map((logo) => (
              <div key={logo.name} className="flex items-center justify-center w-24 h-12 grayscale hover:grayscale-0 transition-all">
                <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Logo Marquee */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <div className="animate-slide-marquee flex space-x-8 opacity-60">
              {[...startupLogos, ...enterpriseLogos, ...startupLogos].map((logo, index) => (
                <div key={index} className="flex items-center justify-center w-24 h-12 flex-shrink-0">
                  <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain grayscale" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;