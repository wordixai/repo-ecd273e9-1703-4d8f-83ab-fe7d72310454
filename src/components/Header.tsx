import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger,
  DropdownMenuItem 
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 navbar-gradient border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-primary">LangChain</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Products <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-80">
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div>
                    <div className="text-sm font-semibold mb-2 text-muted-foreground">Frameworks</div>
                    <DropdownMenuItem>LangGraph</DropdownMenuItem>
                    <DropdownMenuItem>LangChain</DropdownMenuItem>
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-2 text-muted-foreground">Platforms</div>
                    <DropdownMenuItem>LangSmith</DropdownMenuItem>
                    <DropdownMenuItem>LangGraph Platform</DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Resources <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>Guides</DropdownMenuItem>
                <DropdownMenuItem>Blog</DropdownMenuItem>
                <DropdownMenuItem>Customer Stories</DropdownMenuItem>
                <DropdownMenuItem>LangChain Academy</DropdownMenuItem>
                <DropdownMenuItem>Community</DropdownMenuItem>
                <DropdownMenuItem>Events</DropdownMenuItem>
                <DropdownMenuItem>Changelog</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Docs <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                <div className="grid grid-cols-2 gap-4 p-4">
                  <div>
                    <div className="text-sm font-semibold mb-2 text-muted-foreground">Python</div>
                    <DropdownMenuItem>LangGraph</DropdownMenuItem>
                    <DropdownMenuItem>LangSmith</DropdownMenuItem>
                    <DropdownMenuItem>LangChain</DropdownMenuItem>
                  </div>
                  <div>
                    <div className="text-sm font-semibold mb-2 text-muted-foreground">JavaScript</div>
                    <DropdownMenuItem>LangGraph</DropdownMenuItem>
                    <DropdownMenuItem>LangSmith</DropdownMenuItem>
                    <DropdownMenuItem>LangChain</DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1">
                  Company <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-32">
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Careers</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost">Pricing</Button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">Get a demo</Button>
            <Button size="sm">Sign up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start">Products</Button>
            <Button variant="ghost" className="w-full justify-start">Resources</Button>
            <Button variant="ghost" className="w-full justify-start">Docs</Button>
            <Button variant="ghost" className="w-full justify-start">Company</Button>
            <Button variant="ghost" className="w-full justify-start">Pricing</Button>
            <div className="pt-4 space-y-2">
              <Button variant="outline" className="w-full">Get a demo</Button>
              <Button className="w-full">Sign up</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;