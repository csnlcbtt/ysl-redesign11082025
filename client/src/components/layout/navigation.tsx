import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/lib/constants";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="yorke-dark border-b border-gray-600 sticky top-[73px] z-40">
      <div className="max-w-site mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-0 text-sm">
            {NAVIGATION_ITEMS.map((item) => (
              <li key={item.path} className="relative group">
                {item.children ? (
                  <button 
                    className={`block px-4 py-3 text-white hover:bg-[hsl(25,95%,39%)] transition-colors ${
                      location === item.path ? "bg-[hsl(25,95%,39%)]" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="inline w-3 h-3 ml-1" />
                  </button>
                ) : (
                  <Link 
                    href={item.path}
                    className={`block px-4 py-3 text-white hover:bg-[hsl(25,95%,39%)] transition-colors ${
                      location === item.path ? "bg-[hsl(25,95%,39%)]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
                
                {item.children && (
                  <ul className="absolute top-full left-0 bg-white shadow-lg border border-yorke-border min-w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link 
                          href={child.path}
                          className="block px-4 py-2 yorke-gray hover:yorke-beige transition-colors"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>


        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden yorke-dark border-t border-gray-600">
            <ul className="py-2">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className="block px-4 py-2 text-white hover:bg-[hsl(25,95%,39%)] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
