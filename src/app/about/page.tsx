'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 dark:bg-gray-900">
        <div className="container section-padding-block">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-6 animate-fadeInUp">
              About
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-100">
              The story behind the work, the values that guide it, and the person behind the keyboard.
            </p>
          </div>
        </div>
      </section>

      {/* Why I Do This Work */}
      <section className="bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 dark:border-gray-700">
        <div className="container section-padding-block">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className={`${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-8">
                  Why I Do This Work
                </h2>
                
                <div className="space-y-6">
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Too many brilliant founders stall—not because the idea is wrong, but because the gap between &ldquo;what to build&rdquo; and &ldquo;a working product&rdquo; feels impossible to cross without burning cash or sanity.
                  </p>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    I help close that gap.
                  </p>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    With 8+ years of building products for startups and enterprises, I combine product strategy, UX design, and full-stack development so founders can move from idea to working software—fast, lean, and without the endless back-and-forth.
                  </p>
                </div>
              </div>
              
              <div className={`lg:order-2 ${isVisible ? 'animate-fadeInUp animation-delay-200' : 'opacity-0'}`}>
                <Image
                  src="/portrait.webp"
                  alt="Hanif Carroll"
                  width={400}
                  height={500}
                  className="w-full max-w-xs sm:max-w-sm mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Background */}
      <section className="bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <div className="container section-padding-block">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
              My Background
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I didn&apos;t start in tech. My first plan was to open a sports-performance gym. But solving my own problems with code pulled me into software—and I never looked back.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Over the years, I&apos;ve worn every hat: strategist, designer, developer. That means I can take a product from fuzzy idea to launch without losing momentum in handoffs.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, I use that end-to-end skill set to help bootstrapped founders turn ambitious ideas into products their users love—without burning runway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <div className="container section-padding-block">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12 text-center">
              Core Values
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Clarity</h3>
                <p className="text-gray-600 dark:text-gray-300">Plain language, visible roadmap, no black boxes.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Momentum</h3>
                <p className="text-gray-600 dark:text-gray-300">Ship real software over perfect plans.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Candor</h3>
                <p className="text-gray-600 dark:text-gray-300">Honest trade-offs, no fluff, reality over hype.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Craft</h3>
                <p className="text-gray-600 dark:text-gray-300">User-centric quality even in v1; polish where it matters.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">Resourcefulness</h3>
                <p className="text-gray-600 dark:text-gray-300">Make the most of limited time and budget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="booking" className="bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700 scroll-mt-24">
        <div className="container section-padding-block">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Ready to turn your idea into reality?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s explore how I can help you bridge the gap between vision and execution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/fix"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-fix-500 rounded-lg hover:bg-fix-600 transition-colors"
              >
                Fix My Product
              </Link>
              <Link
                href="/build"
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-build-600 rounded-lg hover:bg-build-700 transition-colors"
              >
                Build My Idea
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}