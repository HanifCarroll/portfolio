'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors">
            Hanif Carroll
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) 
                    ? 'text-gray-900' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-medium text-gray-900 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all"
            >
              Contact
            </Link>
          </nav>


          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Toggle main menu</span>
              <div className="relative w-6 h-6">
                {/* Hamburger lines */}
                <span 
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                      ? 'rotate-45 translate-y-2' 
                      : 'rotate-0 translate-y-0'
                  }`}
                />
                <span 
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                      ? 'opacity-0' 
                      : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute left-0 top-5 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                      ? '-rotate-45 -translate-y-2' 
                      : 'rotate-0 translate-y-0'
                  }`}
                />
              </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? 'text-gray-900'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full px-5 py-3 text-center text-sm font-medium text-gray-900 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-all mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}