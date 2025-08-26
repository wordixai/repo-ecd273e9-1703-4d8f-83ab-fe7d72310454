const LogoMarquee = () => {
  // 使用真实的公司名称，但用占位符图片
  const companies = [
    "Replit", "Unify", "Lovable", "Modern Treasury", "Clay",
    "Ally", "Rakuten", "Klarna", "Elastic", "Google"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h4 className="text-2xl lg:text-3xl font-semibold text-primary-dark leading-tight">
            LangChain products power top engineering teams,<br className="hidden sm:block" />
            from{' '}
            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg font-medium">startups</span>{' '}
            to{' '}
            <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-lg font-medium">global enterprises</span>
          </h4>
        </div>

        {/* Logo Grid - 模拟真实布局 */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60">
          {companies.map((company, index) => (
            <div key={company} className="flex items-center justify-center h-8 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="text-lg font-semibold text-gray-400 hover:text-gray-600 transition-colors">
                {company}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;