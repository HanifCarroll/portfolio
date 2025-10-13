'use client';

import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { useState } from 'react';
import { motion } from "motion/react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/#home', label: 'HOME' },
    { href: '/#offer', label: 'OFFER' },
    { href: '/#work', label: 'WORK' },
    { href: '/#proof', label: 'PROOF' },
    { href: '/#pricing', label: 'PRICING' },
  ];

  return (
    <motion.header
      className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b z-50 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Editorial Style */}
          <Link href="/" className="text-2xl font-semibold text-foreground hover:text-primary transition-colors">
            Hanif Carroll
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="sm" className="uppercase tracking-wider">
              <Link
                href="https://cal.com/hanifcarroll/strategy"
                target="_blank"
                rel="noopener noreferrer"
              >
                BOOK CALL
              </Link>
            </Button>
          </nav>


          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-secondary transition-colors"
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
          className={`md:hidden absolute left-0 right-0 top-full bg-background border-t shadow-xl overflow-hidden`}
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
                className="block py-3 text-base font-medium uppercase tracking-wider text-foreground transition-colors hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full uppercase tracking-wider mt-4">
              <Link
                href="https://cal.com/hanifcarroll/strategy"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                BOOK CALL
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
