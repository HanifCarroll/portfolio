"use client";

import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";
import { motion } from "motion/react";

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-[var(--background)] pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Hero Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-editorial text-[clamp(3rem,7vw,6rem)] leading-[0.9] text-[var(--foreground)] mb-8">
            My Work
          </h1>
          <p className="text-xl text-[var(--muted)] max-w-3xl leading-relaxed">
            A collection of Digital Showrooms built for premium service businesses.
          </p>
        </motion.div>

        {/* Staggered Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`
                ${index % 3 === 1 ? 'lg:mt-24' : ''} 
                ${index % 3 === 2 ? 'lg:mt-12' : ''}
              `}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
                  <motion.div
                    className="absolute inset-0 bg-[var(--foreground)] opacity-0 z-10 flex items-center justify-center"
                    whileHover={{ opacity: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.span 
                      className="text-white font-editorial text-2xl"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      View Case Study
                    </motion.span>
                  </motion.div>
                  <Image
                    src={project.images.hero}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="space-y-3">
                  <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-[0.15em]">
                    {project.client}
                  </span>
                  <h3 className="font-editorial text-2xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                    {project.title.replace('Case Study: ', '')}
                  </h3>
                  <p className="text-[var(--muted)] leading-relaxed">
                    {project.problem.split('.')[0]}.
                  </p>
                  <motion.p 
                    className="text-[var(--accent)] font-medium inline-flex items-center gap-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    View Case Study 
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </motion.p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}