'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import BookingEmbed from '@/components/booking-embed';

export default function BuildPage() {
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
              See your idea, <span className="text-build-600">clickable</span>, in days — test before you invest.
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto animate-fadeInUp animation-delay-100">
              Free 45-min clarity call → clickable prototype in 2–3 days.
            </p>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
              How it works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className={`text-center ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-build-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Clarity Call
                </h3>
                <p className="text-gray-600">
                  We refine your idea into a focused core flow.
                </p>
              </div>
              <div className={`text-center ${isVisible ? 'animate-fadeInUp animation-delay-100' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-build-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Prototype (2–3d)
                </h3>
                <p className="text-gray-600">
                  I build a clickable version you can show to users or investors.
                </p>
              </div>
              <div className={`text-center ${isVisible ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`}>
                <div className="w-16 h-16 bg-build-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl">🗺️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  MVP Roadmap
                </h3>
                <p className="text-gray-600">
                  Next steps to take it live.
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-white rounded-xl p-8 mb-16 border border-build-100 shadow-sm">
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
                  &ldquo;I came in with a lot of ideas—some already on the site, others I was still feeling out. Hanif helped me see how they might fit in down the line, but more importantly, he guided me toward what I need to focus on first. I left the call feeling like I know what small shifts I can make to move forward with purpose and clarity.&rdquo;
                </blockquote>
                <p className="text-gray-500">
                  — Austin Lowther, Creator of <a href="https://langlibros.com" target="_blank" rel="noopener noreferrer" className="text-build-600 hover:text-build-700">LangLibros</a>
                </p>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div id="booking" className="bg-white rounded-xl p-8 border-2 border-build-200 shadow-lg scroll-mt-24">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Book your free idea validation session
              </h2>
              <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
                Lock in your call and let&apos;s get your idea out of your head and into the hands of your users.
              </p>
            </div>
            
            {/* Booking Embed */}
            <div className="max-w-xl mx-auto">
              <BookingEmbed 
                calUrl="https://cal.com/hanifcarroll/build-my-idea"
                fallbackText="Booking calendar integration"
                path="build"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}