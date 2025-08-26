import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = {
    Products: [
      { name: 'LangChain', href: '#' },
      { name: 'LangSmith', href: '#' },
      { name: 'LangGraph', href: '#' }
    ],
    Resources: [
      { name: 'Guides', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Customer Stories', href: '#' },
      { name: 'LangChain Academy', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Changelog', href: '#' },
      { name: 'Experts', href: '#' }
    ],
    'Python Docs': [
      { name: 'LangGraph', href: '#' },
      { name: 'LangSmith', href: '#' },
      { name: 'LangChain', href: '#' }
    ],
    'JavaScript Docs': [
      { name: 'LangGraph', href: '#' },
      { name: 'LangSmith', href: '#' },
      { name: 'LangChain', href: '#' }
    ],
    Company: [
      { name: 'About', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'X', href: '#' },
      { name: 'LinkedIn', href: '#' },
      { name: 'YouTube', href: '#' },
      { name: 'Marketing Assets', href: '#' },
      { name: 'Security', href: '#' }
    ]
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Links Section */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h6 className="font-semibold mb-4 text-sm uppercase tracking-wide">
                  {category}
                </h6>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4">
            <h6 className="font-semibold mb-4 text-sm uppercase tracking-wide">
              Sign up for our newsletter to stay up to date
            </h6>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email..."
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button 
                variant="secondary" 
                size="icon"
                className="shrink-0"
              >
                →
              </Button>
            </div>
          </div>
        </div>

        {/* Logo */}
        <div className="py-8">
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-md flex items-center justify-center">
                <span className="text-primary font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold">LangChain</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>All systems operational</span>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-primary-foreground/70">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;