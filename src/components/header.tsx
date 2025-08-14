'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/fix', label: 'Fix' },
    { href: '/build', label: 'Build' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/avatar.png"
              alt="Hanif Carroll"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="text-xl font-bold text-gray-900">
                Hanif Carroll
              </div>
              <div className="hidden md:block text-sm text-gray-500">
                Technical Product Partner
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-gray-900 ${
                  isActive(link.href) 
                    ? 'text-gray-900 font-semibold border-b-2 border-gray-900 pb-1' 
                    : 'text-gray-600 pb-1'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://cal.com/hanifcarroll/clarity-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Book Free Call
            </a>
          </div>

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
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href} className="px-3 py-2">
                <Link
                  href={link.href}
                  className={`inline-block text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? 'text-gray-900 font-semibold border-b-2 border-gray-900'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="px-3 py-2">
              <a
                href="https://cal.com/hanifcarroll/clarity-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Free Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}