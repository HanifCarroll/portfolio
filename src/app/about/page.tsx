"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from "motion/react";

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
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero Section with Overlapping Elements */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="relative">
            {/* Main Content */}
            <motion.div 
              className="max-w-3xl relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-editorial text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-[var(--foreground)] mb-8">
                My mission is to help premium service businesses get the clients they deserve.
              </h1>
              <div className="prose prose-lg text-[var(--muted)] space-y-6">
                <motion.p 
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  I'm Hanif Carroll, a web developer with a passion for crafting digital experiences 
                  that elevate premium service businesses. After years of watching talented professionals 
                  struggle with DIY websites that don't reflect their expertise, I decided to focus 
                  on solving this problem.
                </motion.p>
                <motion.p 
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  I believe that great work deserves a great online presence. That's why I build 
                  Digital Showrooms—custom websites that showcase your work with the same attention 
                  to detail you bring to your craft.
                </motion.p>
                <motion.p
                  className="text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  My approach combines technical excellence with strategic thinking. Every Digital 
                  Showroom is engineered to load instantly, rank well in search engines, and most 
                  importantly, convert visitors into high-value clients.
                </motion.p>
              </div>
            </motion.div>

            {/* Overlapping Portrait - Editorial Style */}
            <motion.div 
              className="absolute -right-10 top-20 lg:top-0 hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-[400px] h-[500px] shadow-2xl">
                <Image
                  src="/portrait-brick.webp"
                  alt="Hanif Carroll"
                  fill
                  className="object-cover object-center transform scale-x-[-1]"
                  priority
                  sizes="400px"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Editorial Numbers */}
      <section className="py-24 px-6 bg-[var(--surface)]">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 
            className="font-editorial text-4xl md:text-5xl text-[var(--foreground)] mb-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            My Development Philosophy
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "Performance First",
                description: "Every millisecond counts. I obsess over load times and optimization to ensure your site performs flawlessly."
              },
              {
                number: "02", 
                title: "Details Matter",
                description: "From micro-interactions to typography, every element is carefully considered to create a cohesive experience."
              },
              {
                number: "03",
                title: "Results Focused",
                description: "Beautiful design means nothing if it doesn't convert. Every decision is made with your business goals in mind."
              }
            ].map((item, index) => (
              <motion.div 
                key={item.number}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="font-editorial text-5xl text-[var(--accent)] mb-6">
                  {item.number}
                </div>
                <h3 className="font-editorial text-xl text-[var(--foreground)] mb-4">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Labs Section - Editorial Grid */}
      <section className="py-24 px-6 bg-[var(--background)]">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-editorial text-4xl md:text-5xl text-[var(--foreground)] mb-6">
              My Labs
            </h2>
            <p className="text-xl text-[var(--muted)] max-w-3xl leading-relaxed">
              Beyond client work, I'm always exploring new technologies. Here are some personal projects:
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[var(--surface)] p-8 border-l-4 border-[var(--accent)] hover:bg-[var(--background)] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="font-editorial text-2xl text-[var(--foreground)] mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed mb-4">
                  {project.description}
                </p>
                <motion.p 
                  className="text-[var(--accent)] font-medium inline-flex items-center gap-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project 
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </motion.p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}