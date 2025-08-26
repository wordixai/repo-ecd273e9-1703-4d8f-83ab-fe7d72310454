const Stats = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
            The biggest developer community in GenAI
          </h4>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn alongside the 1M+ practitioners using our frameworks to push the industry forward.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="text-center group">
            <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
              100k+
            </div>
            <h4 className="text-lg font-semibold text-primary-dark">
              GitHub stars
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              Across all repositories
            </p>
          </div>

          <div className="text-center group">
            <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              #1
            </div>
            <h4 className="text-lg font-semibold text-primary-dark">
              Downloaded agent framework
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              Most popular on PyPI
            </p>
          </div>

          <div className="text-center group">
            <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 group-hover:from-orange-600 group-hover:to-red-600 transition-all duration-300">
              600+
            </div>
            <h4 className="text-lg font-semibold text-primary-dark">
              Integrations
            </h4>
            <p className="text-sm text-gray-500 mt-2">
              Models, tools & platforms
            </p>
          </div>
        </div>

        {/* Additional community metrics */}
        <div className="mt-16 pt-16 border-t border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-dark mb-2">1M+</div>
              <div className="text-sm text-gray-600">Monthly downloads</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-dark mb-2">50k+</div>
              <div className="text-sm text-gray-600">Discord members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-dark mb-2">10k+</div>
              <div className="text-sm text-gray-600">Contributors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-dark mb-2">500+</div>
              <div className="text-sm text-gray-600">Enterprise customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;