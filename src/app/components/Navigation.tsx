import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Get Support', path: '/get-support' },
    { name: 'Get Involved', path: '/get-involved' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="bg-[#006c54] p-2 rounded-lg">
              <Heart className="h-7 w-7 text-white fill-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#006c54]">Cleft Family</span>
              <span className="text-sm text-gray-600">Support Foundation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-[#006c54] ${
                  isActive(item.path) ? 'text-[#006c54]' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/donate">
              <Button className="bg-[#d52a1d] hover:bg-[#b32318] text-white rounded-full px-6">
                Donate
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 text-sm font-medium transition-colors hover:bg-gray-50 ${
                  isActive(item.path) ? 'text-[#006c54] bg-gray-50' : 'text-gray-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link to="/donate" onClick={() => setIsOpen(false)}>
                <Button className="bg-[#d52a1d] hover:bg-[#b32318] text-white rounded-full w-full">
                  Donate
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
