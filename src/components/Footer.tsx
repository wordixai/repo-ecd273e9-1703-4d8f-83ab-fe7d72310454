import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Products',
      links: [
        'LangChain',
        'LangSmith', 
        'LangGraph',
        'LangGraph Platform'
      ]
    },
    {
      title: 'Resources',
      links: [
        'Guides',
        'Blog',
        'Customer Stories',
        'LangChain Academy',
        'Community',
        'Events',
        'Changelog'
      ]
    },
    {
      title: 'Python Docs',
      links: [
        'LangGraph',
        'LangSmith',
        'LangChain'
      ]
    },
    {
      title: 'JavaScript Docs',
      links: [
        'LangGraph',
        'LangSmith', 
        'LangChain'
      ]
    },
    {
      title: 'Company',
      links: [
        'About',
        'Careers',
        'Security',
        'Privacy Policy',
        'Terms of Service'
      ]
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Newsletter Section */}
            <div className="lg:col-span-4">
              <h6 className="font-semibold mb-4 text-sm">
                Sign up for our newsletter to stay up to date
              </h6>
              <div className="flex gap-2 mb-8">
                <Input 
                  type="email" 
                  placeholder="Your email..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                />
                <Button 
                  variant="secondary" 
                  size="icon"
                  className="bg-white text-primary hover:bg-gray-100 flex-shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <h6 className="font-semibold text-sm">Follow us</h6>
                <div className="flex space-x-4">
                  <a href="#" className="text-white/70 hover:text-white text-sm">X</a>
                  <a href="#" className="text-white/70 hover:text-white text-sm">LinkedIn</a>
                  <a href="#" className="text-white/70 hover:text-white text-sm">YouTube</a>
                  <a href="#" className="text-white/70 hover:text-white text-sm">GitHub</a>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-8">
              {footerSections.map((section) => (
                <div key={section.title}>
                  <h6 className="font-semibold mb-4 text-sm uppercase tracking-wider">
                    {section.title}
                  </h6>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a 
                          href="#"
                          className="text-white/70 hover:text-white transition-colors text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="py-8 border-t border-white/20">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">🦜</span>
              </div>
              <span className="text-2xl font-bold">LangChain</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-white/70">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>All systems operational</span>
            </div>
            <div className="text-sm text-white/70">
              © 2024 LangChain, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;