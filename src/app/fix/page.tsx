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
    <div className="min-h-screen bg-gray-50 hero-gradient">
      <main className="container section-padding-block">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fadeInUp">
              Make your product <span className="text-fix-500">feel obvious</span> — and convert better.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-100">
              Free 45-min UX analysis → next-day Loom + Quick-Win PDF with 3–5 changes.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`text-center ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-fix-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">🔎</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Live Audit
                </h3>
                <p className="text-gray-600">
                  We explore your product together over a live call.
                </p>
              </div>
              <div className={`text-center ${isVisible ? 'animate-slideInLeft animation-delay-100' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-fix-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">🎥</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Loom + PDF (24h)
                </h3>
                <p className="text-gray-600">
                  You get a recorded walkthrough and 1-page action plan.
                </p>
              </div>
              <div className={`text-center ${isVisible ? 'animate-slideInLeft animation-delay-200' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-fix-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Action Plan
                </h3>
                <p className="text-gray-600">
                  Quick wins you can implement immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-white rounded-xl p-8 mb-16 border border-fix-100 shadow-sm">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Image
                src="/austin.jpeg"
                alt="Austin Lowther"
                width={80}
                height={80}
                className="rounded-full flex-shrink-0 mx-auto sm:mx-0"
              />
              <div className="flex-1">
                <blockquote className="text-lg text-gray-700 leading-relaxed mb-4">
                  &ldquo;Just wrapped up a call with Hanif. It was incredibly useful. I came in with a lot of ideas but wasn&apos;t sure where to direct my focus. Hanif helped me find that clarity. He guided me toward what I need to focus on first, and what&apos;s going to matter most right now.&rdquo;
                </blockquote>
                <p className="text-gray-500">
                  — Austin Lowther, Creator of <a href="https://langlibros.com" target="_blank" rel="noopener noreferrer" className="text-fix-500 hover:text-fix-600">LangLibros</a>
                </p>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div id="booking" className="bg-white rounded-xl p-8 border-2 border-fix-200 shadow-lg scroll-mt-24">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Book your free UX clarity session
              </h2>
              <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
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