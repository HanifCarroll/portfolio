'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from "motion/react";

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
    <motion.header 
      className="fixed top-0 w-full bg-[var(--background)]/95 backdrop-blur-sm border-b border-[var(--border-subtle)] z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Editorial Style */}
          <Link href="/" className="font-editorial text-2xl text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
            Hanif Carroll
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors ${
                  isActive(link.href) 
                    ? 'text-[var(--accent)]' 
                    : 'text-[var(--foreground)] hover:text-[var(--accent)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-3 text-sm font-medium uppercase tracking-wider text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all"
            >
              Contact
            </Link>
          </nav>


          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-[var(--foreground)] hover:text-[var(--accent)] hover:bg-[var(--surface)] transition-colors"
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
        <motion.div 
          className={`md:hidden absolute left-0 right-0 top-full bg-[var(--background)] border-t border-[var(--border-subtle)] shadow-xl overflow-hidden`}
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-3 text-base font-medium uppercase tracking-wider transition-colors ${
                  isActive(link.href)
                    ? 'text-[var(--accent)]'
                    : 'text-[var(--foreground)] hover:text-[var(--accent)]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full px-6 py-4 text-center text-sm font-medium uppercase tracking-wider text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}