'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import BookingEmbed from '@/components/booking-embed';

export default function FixPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 hero-gradient">
      <main className="container section-padding-block">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 animate-fadeInUp">
              Make your product <span className="text-fix-500">feel obvious</span> — and convert better.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-100">
              Live, collaborative session → leave with your Instant Action Plan ready to use.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`text-center ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-fix-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">🔎</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Live Audit
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We explore your product together while building your action plan in real-time.
                </p>
              </div>
              <div className={`text-center ${isVisible ? 'animate-slideInLeft animation-delay-100' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-fix-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Collaborative Planning
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We co-create your strategy in a shared document during the call.
                </p>
              </div>
              <div className={`text-center ${isVisible ? 'animate-slideInLeft animation-delay-200' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-fix-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  Instant Action Plan
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Leave the call with a clear plan — no waiting, immediate clarity.
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 mb-16 border border-fix-100 dark:border-gray-700 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Image
                src="/austin.jpeg"
                alt="Austin Lowther"
                width={80}
                height={80}
                className="rounded-full flex-shrink-0 mx-auto sm:mx-0"
              />
              <div className="flex-1">
                <blockquote className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  &ldquo;Just wrapped up a call with Hanif. It was incredibly useful. I came in with a lot of ideas but wasn&apos;t sure where to direct my focus. Hanif helped me find that clarity. He guided me toward what I need to focus on first, and what&apos;s going to matter most right now.&rdquo;
                </blockquote>
                <p className="text-gray-500 dark:text-gray-400">
                  — Austin Lowther, Creator of <a href="https://langlibros.com" target="_blank" rel="noopener noreferrer" className="text-fix-500 hover:text-fix-600 dark:text-fix-400 dark:hover:text-fix-300">LangLibros</a>
                </p>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div id="booking" className="bg-white dark:bg-gray-800 rounded-xl p-8 border-2 border-fix-200 dark:border-gray-700 shadow-lg scroll-mt-24">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Book your free UX clarity session
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
                Choose a time that works for you — I&apos;ll come prepared with fresh eyes and clear recommendations.
              </p>
            </div>
            
            {/* Booking Embed */}
            <div className="max-w-xl mx-auto">
              <BookingEmbed 
                calUrl="https://cal.com/hanifcarroll/fix-my-product"
                fallbackText="Booking calendar integration"
                path="fix"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}