import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ThemeToggle } from './ThemeToggle';
import { ShoppingCart } from './ShoppingCart';
import { useCart } from '@/contexts/CartContext';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { totalItems } = useCart();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/programs', label: 'Programs' },
    { href: '/shop', label: 'Shop' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="bg-white dark:bg-dark-bg shadow-lg border-b dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3">
              <img 
                src="@assets/Asset 8_1754570718252.png" 
                alt="BOA ME Logo" 
                className="w-10 h-10 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-brand-blue dark:text-white">BOA ME</h1>
                <p className="text-xs text-gray-600 dark:text-gray-300">Youth Empowerment</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    location === item.href
                      ? 'text-brand-blue dark:text-brand-green font-medium'
                      : 'text-gray-700 dark:text-gray-300 hover:text-brand-blue dark:hover:text-brand-green'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <ShoppingCart />
              <button className="bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all">
                Donate Now
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2"
                aria-label="Toggle mobile menu"
              >
                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-gray-700 dark:text-gray-300`}></i>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 animate-fadeIn">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2 transition-colors ${
                      location === item.href
                        ? 'text-brand-blue dark:text-brand-green font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:text-brand-blue'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
