'use client';

import Link from 'next/link';
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CalendarDays, Heart } from "lucide-react";

export default function Footer() {

  return (
    <footer className="relative bg-gradient-to-b from-secondary/80 to-secondary border-t py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_hsl(var(--primary)/0.03),transparent_70%)] pointer-events-none" />
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col items-center space-y-10">
          {/* CTA */}
          <motion.div
            className="text-center max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-3xl font-semibold text-foreground mb-4">Ready to Launch Your SaaS?</p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{`Let's talk about your vision and see if we're a good fit.`}</p>
            <Button size="lg" asChild className="h-14 px-8 text-base shadow-lg hover:shadow-xl transition-all">
              <Link
                href="https://cal.com/hanifcarroll/strategy"
                className="inline-flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
                Book Your Free 30-Minute Strategy Call
              </Link>
            </Button>
          </motion.div>

          {/* Brand & Social */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-2">
              <p className="text-3xl font-semibold text-foreground">Hanif Carroll</p>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">SaaS Builder</p>
            </div>
            <div className="flex items-center gap-5 justify-center text-foreground">
              <a
                href="https://linkedin.com/in/hanifcarroll"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://x.com/hanifcarroll"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Hanif Carroll &middot; © 2025</p>
              <p className="flex items-center justify-center gap-1">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-primary" aria-hidden="true" />
                <span>in Buenos Aires, Argentina</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
