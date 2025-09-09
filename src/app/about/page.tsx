import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const projects = [
    {
      title: "Wikipedia Infinite Scroll",
      description: "A tool to help language learners practice reading in their target language by providing them with high quality Wikipedia articles",
      url: "https://wikipedia-infinite-scroll.netlify.app/",
    },
    {
      title: "1 on 1 Video Chat",
      description: "A 1 on 1 video chat app with sharable links",
      url: "https://web-rtc-poc-theta.vercel.app/",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                My mission is to help premium service businesses get the clients they deserve.
              </h1>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                  I'm Hanif Carroll, a web developer with a passion for crafting digital experiences 
                  that elevate premium service businesses. After years of watching talented professionals 
                  struggle with DIY websites that don't reflect their expertise, I decided to focus 
                  on solving this problem.
                </p>
                <p className="mb-6">
                  I believe that great work deserves a great online presence. That's why I build 
                  Digital Showrooms—custom websites that showcase your work with the same attention 
                  to detail you bring to your craft.
                </p>
                <p>
                  My approach combines technical excellence with strategic thinking. Every Digital 
                  Showroom is engineered to load instantly, rank well in search engines, and most 
                  importantly, convert visitors into high-value clients.
                </p>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/portrait-brick.webp"
                  alt="Hanif Carroll"
                  fill
                  className="rounded-lg shadow-xl transform scale-x-[-1] object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            My Development Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Performance First
              </h3>
              <p className="text-gray-600">
                Every millisecond counts. I obsess over load times and optimization to ensure your site performs flawlessly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Details Matter
              </h3>
              <p className="text-gray-600">
                From micro-interactions to typography, every element is carefully considered to create a cohesive experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Results Focused
              </h3>
              <p className="text-gray-600">
                Beautiful design means nothing if it doesn't convert. Every decision is made with your business goals in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Labs Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Labs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Beyond client work, I'm always exploring new technologies. Here are some personal projects:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-gray-600">
                  {project.description}
                </p>
                <p className="text-gray-900 font-medium mt-4 group-hover:translate-x-2 transition-transform inline-block">
                  View Project →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}