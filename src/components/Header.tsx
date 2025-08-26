import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger,
  DropdownMenuItem 
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 navbar-glass">
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">🦜</span>
              </div>
              <span className="text-lg font-semibold text-primary-dark">LangChain</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary-dark">
                  Products <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-96 p-0">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <div className="text-xs font-semibold mb-3 text-gray-500 uppercase tracking-wider">FRAMEWORKS</div>
                      <div className="space-y-3">
                        <DropdownMenuItem className="p-0">
                          <div className="flex items-start space-x-3 p-3 w-full rounded-lg hover:bg-gray-50">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-xs">🕸️</span>
                            </div>
                            <div>
                              <div className="font-medium text-sm text-gray-900">LangGraph</div>
                              <div className="text-xs text-gray-500">Build stateful agents</div>
                            </div>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="p-0">
                          <div className="flex items-start space-x-3 p-3 w-full rounded-lg hover:bg-gray-50">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-xs">⛓️</span>
                            </div>
                            <div>
                              <div className="font-medium text-sm text-gray-900">LangChain</div>
                              <div className="text-xs text-gray-500">Build LLM apps</div>
                            </div>
                          </div>
                        </DropdownMenuItem>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-3 text-gray-500 uppercase tracking-wider">PLATFORMS</div>
                      <div className="space-y-3">
                        <DropdownMenuItem className="p-0">
                          <div className="flex items-start space-x-3 p-3 w-full rounded-lg hover:bg-gray-50">
                            <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-xs">🔍</span>
                            </div>
                            <div>
                              <div className="font-medium text-sm text-gray-900">LangSmith</div>
                              <div className="text-xs text-gray-500">Debug & evaluate</div>
                            </div>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="p-0">
                          <div className="flex items-start space-x-3 p-3 w-full rounded-lg hover:bg-gray-50">
                            <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <span className="text-xs">🚀</span>
                            </div>
                            <div>
                              <div className="font-medium text-sm text-gray-900">LangGraph Platform</div>
                              <div className="text-xs text-gray-500">Deploy agents</div>
                            </div>
                          </div>
                        </DropdownMenuItem>
                      </div>
                    </div>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" className="text-sm font-medium text-gray-700 hover:text-primary-dark">Resources</Button>
            <Button variant="ghost" size="sm" className="text-sm font-medium text-gray-700 hover:text-primary-dark">Docs</Button>
            <Button variant="ghost" size="sm" className="text-sm font-medium text-gray-700 hover:text-primary-dark">Company</Button>
            <Button variant="ghost" size="sm" className="text-sm font-medium text-gray-700 hover:text-primary-dark">Pricing</Button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="outline" size="sm" className="text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50">
              Get a demo
            </Button>
            <Button size="sm" className="text-sm font-medium bg-primary hover:bg-primary/90">
              Sign up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-white/95 backdrop-blur-sm">
            <div className="py-4 space-y-1">
              <Button variant="ghost" className="w-full justify-start text-sm">Products</Button>
              <Button variant="ghost" className="w-full justify-start text-sm">Resources</Button>
              <Button variant="ghost" className="w-full justify-start text-sm">Docs</Button>
              <Button variant="ghost" className="w-full justify-start text-sm">Company</Button>
              <Button variant="ghost" className="w-full justify-start text-sm">Pricing</Button>
              <div className="pt-3 space-y-2 border-t">
                <Button variant="outline" size="sm" className="w-full">Get a demo</Button>
                <Button size="sm" className="w-full">Sign up</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;