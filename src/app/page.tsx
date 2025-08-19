'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function Home() {
  const { trackPathSelection } = useAnalytics();
  const [hoveredCard, setHoveredCard] = useState<'fix' | 'build' | null>(null);
  const [clickedCard, setClickedCard] = useState<'fix' | 'build' | null>(null);
  const [isTestimonialVisible, setIsTestimonialVisible] = useState(false);
  const testimonialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsTestimonialVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardClick = (path: 'fix' | 'build') => {
    setClickedCard(path);
    trackPathSelection(path);
    // Reset after animation
    setTimeout(() => setClickedCard(null), 150);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 hero-gradient">
      <main className="container section-padding-block" role="main">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 items-end mb-16">
            {/* Text Content */}
            <div className="text-left order-2 lg:order-1 lg:col-span-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6 animate-fadeInUp leading-tight">
                Get your SaaS product{' '}
                <span className={hoveredCard === 'fix' ? 'text-fix-500 transition-colors' : ''}>
                  fixed
                </span>
                {' or your idea '}
                <span className={hoveredCard === 'build' ? 'text-build-600 transition-colors' : ''}>
                  prototyped
                </span>
                {' — in days, not months.'}
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 animate-fadeInUp animation-delay-100">
                I help bootstrapped SaaS founders with UX clarity audits and rapid prototypes so you can move forward without burning runway.
              </p>
            </div>
            
            {/* Image with Background Shape */}
            <div className="relative flex justify-center lg:justify-end animate-fadeInUp animation-delay-200 order-1 lg:order-2 lg:col-span-1">
              {/* Subtle background shape */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-900 rounded-full opacity-60 blur-3xl transform scale-110"></div>
              <div className="relative">
                <Image
                  src="/portrait.webp"
                  alt="Hanif Carroll"
                  width={300}
                  height={300}
                  className="w-48 md:w-72 lg:w-80 drop-shadow-2xl relative z-10"
                  style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Service Options */}
        <div className="max-w-4xl mx-auto text-center">
          
          <section aria-labelledby="service-options" className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto md:items-stretch">
            <h2 id="service-options" className="sr-only">Choose Your Service Path</h2>
            <Link
              href="/fix"
              onClick={() => handleCardClick('fix')}
              onMouseEnter={() => setHoveredCard('fix')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                group bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border-2 transition-all duration-200
                hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-fix-500 focus:ring-offset-2
                animate-fadeInUp animation-delay-200 flex
                ${hoveredCard === 'fix' ? 'border-fix-400 shadow-fix-100' : 'border-gray-200 dark:border-gray-700'}
                ${clickedCard === 'fix' ? 'scale-105' : ''}
              `}
              aria-label="Fix path: Get UX clarity audit for existing product"
            >
              <div className="text-left flex flex-col h-full w-full">
                <div className="w-12 h-12 bg-fix-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-fix-200 transition-colors">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-fix-600 transition-colors">
                  Improve My Product
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Get a UX clarity audit with actionable improvements you can implement this week.
                </p>
                <p className="text-sm text-fix-600 font-medium mb-6">
                  → Boost conversions, onboarding, or engagement this week
                </p>
                <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-fix-500 rounded-lg hover:bg-fix-600 transition-colors shadow-sm mt-auto self-start">
                  Start free audit
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            <Link
              href="/build"
              onClick={() => handleCardClick('build')}
              onMouseEnter={() => setHoveredCard('build')}
              onMouseLeave={() => setHoveredCard(null)}
              className={`
                group bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm border-2 transition-all duration-200
                hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-build-500 focus:ring-offset-2
                animate-fadeInUp animation-delay-300 flex
                ${hoveredCard === 'build' ? 'border-build-400 shadow-build-100' : 'border-gray-200 dark:border-gray-700'}
                ${clickedCard === 'build' ? 'scale-105' : ''}
              `}
              aria-label="Build path: Get rapid prototype for new product idea"
            >
              <div className="text-left flex flex-col h-full w-full">
                <div className="w-12 h-12 bg-build-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-build-200 transition-colors">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4 group-hover:text-build-600 transition-colors">
                  Build My Idea
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  Turn your idea into an actionable blueprint for a prototype you can use to validate your concept.
                </p>
                <p className="text-sm text-build-600 font-medium mb-6">
                  → Validate your concept with real users before you invest
                </p>
                <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-build-600 rounded-lg hover:bg-build-700 transition-colors shadow-sm mt-auto self-start">
                  Validate my idea
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </section>

          {/* Micro Social Proof */}
          <div 
            ref={testimonialRef}
            className={`bg-white dark:bg-gray-800 rounded-lg p-6 mt-12 border border-gray-200 dark:border-gray-700 shadow-sm max-w-3xl mx-auto transition-all duration-700 ${
              isTestimonialVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center gap-4 justify-center">
              <Image
                src="/austin.jpeg"
                alt="Austin Lowther"
                width={48}
                height={48}
                className="rounded-full flex-shrink-0"
              />
              <blockquote className="text-gray-700 dark:text-gray-300 italic text-left">
                &ldquo;Hanif helped me find clarity and guided me toward what I need to focus on first, and what&apos;s going to matter most right now.&rdquo;
              </blockquote>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-3">
              — Austin Lowther, Creator of <a href="https://langlibros.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100">LangLibros</a>
            </p>
          </div>

          {/* Inline Not Sure CTA */}
          <div className="text-center mt-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 max-w-lg mx-auto">
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                Not sure which path is right?
              </p>
              <p className="text-gray-900 dark:text-gray-100 font-medium mb-4">
                In 45 minutes, you&apos;ll have a clear plan forward.
              </p>
              <a 
                href="https://cal.com/hanifcarroll/clarity-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 dark:text-gray-100 font-semibold hover:text-gray-700 dark:hover:text-gray-200 transition-colors bg-white dark:bg-gray-700 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 shadow-sm"
              >
                <strong>Book a free call</strong>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
