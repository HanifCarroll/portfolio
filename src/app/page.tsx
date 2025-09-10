"use client";

import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";
import { motion } from "motion/react";

export default function Home() {
    const projects = getAllProjects().slice(0, 3); // Show first 3 projects
    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section - Asymmetrical Editorial Layout */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="container mx-auto max-w-7xl">
                    <div className="relative">
                        {/* Text Content - Left Aligned */}
                        <motion.div
                            className="max-w-4xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="font-editorial text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] text-[var(--foreground)] mb-8">
                                Build Your
                                <br />
                                Digital Showroom
                            </h1>
                            <motion.p
                                className="text-xl md:text-2xl text-[var(--muted)] mb-12 leading-relaxed max-w-2xl"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                I design and develop custom, high-performance
                                websites for premium service businesses, turning
                                expertise into an unforgettable digital
                                experience.
                            </motion.p>

                            {/* CTA Buttons */}
                            <motion.div
                                className="flex flex-col sm:flex-row gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Link
                                    href="/work"
                                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all"
                                >
                                    View My Work
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-[var(--foreground)] border-2 border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)] transition-all"
                                >
                                    Book a Consultation
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Overlapping Portrait - Creates Editorial Tension */}
                        <motion.div
                            className="absolute -right-20 top-1/2 -translate-y-1/2 hidden lg:block"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden">
                                <Image
                                    src="/headshot.webp"
                                    alt="Hanif Carroll"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                    sizes="450px"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Trust Banner - Editorial Style */}
            <section className="py-16 px-6 bg-[var(--surface)] border-t border-b border-[var(--border-subtle)]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <p className="text-sm font-medium text-[var(--muted)] uppercase tracking-[0.2em] mb-10">
                            Trusted By
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                            {[
                                "redwriter",
                                "maximo",
                                "casa-elaria",
                                "desarmadero",
                            ].map((logo, index) => (
                                <motion.div
                                    key={logo}
                                    className="relative h-12 w-32 opacity-60 hover:opacity-100"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 0.6, y: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.6 + index * 0.1,
                                    }}
                                >
                                    <Image
                                        src={`/logos/${logo}.${
                                            logo === "desarmadero"
                                                ? "avif"
                                                : logo === "redwriter"
                                                ? "webp"
                                                : "png"
                                        }`}
                                        alt={logo}
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Problem/Solution - Editorial Typography */}
            <section className="py-24 px-6 bg-[var(--background)]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="max-w-4xl"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-editorial text-4xl md:text-5xl leading-[1.1] text-[var(--foreground)] mb-8">
                            Is your website failing to reflect the high quality
                            of your brand?
                        </h2>
                        <p className="text-lg text-[var(--muted)] mb-6 leading-relaxed">
                            Many premium service businesses have exceptional
                            expertise but an online presence that feels amateur.
                            This credibility gap leads to lost opportunities and
                            lower-value clients.
                        </p>
                        <p className="text-lg text-[var(--muted)] leading-relaxed">
                            The solution is a &ldquo;Digital Showroom&rdquo;—a website
                            engineered from the ground up to build trust and
                            showcase your expertise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Work - Staggered Grid */}
            <section className="py-24 px-6 bg-[var(--surface)]">
                <div className="container mx-auto max-w-6xl">
                    <motion.h2
                        className="font-editorial text-4xl md:text-5xl text-[var(--foreground)] mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Selected Works
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                className={index === 1 ? "lg:mt-12" : ""}
                            >
                                <Link
                                    href={`/work/${project.slug}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
                                        <motion.div
                                            className="absolute inset-0 bg-[var(--foreground)] opacity-0 group-hover:opacity-20 z-10"
                                            whileHover={{ opacity: 0.2 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <Image
                                            src={project.images.hero}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <span className="text-xs font-medium text-[var(--muted)] uppercase tracking-[0.15em]">
                                            {project.client}
                                        </span>
                                        <h3 className="font-editorial text-2xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-[var(--accent)] font-medium">
                                            View Case Study →
                                        </p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services - Editorial Numbers */}
            <section className="py-24 px-6 bg-[var(--background)]">
                <div className="container mx-auto max-w-6xl">
                    <motion.h2
                        className="font-editorial text-4xl md:text-5xl text-[var(--foreground)] mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        What&apos;s Included
                    </motion.h2>
                    <div className="grid lg:grid-cols-2 gap-x-24 gap-y-16">
                        {/* Left Column - Custom Design */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="font-editorial text-6xl text-[var(--accent)]">
                                01
                            </span>
                            <h3 className="font-editorial text-2xl text-[var(--foreground)]">
                                Custom Design
                            </h3>
                            <p className="text-lg text-[var(--muted)] leading-relaxed">
                                Every Digital Showroom is uniquely designed to
                                match your brand aesthetic and speak to your
                                ideal clients.
                            </p>
                        </motion.div>

                        {/* Right Column - Stacked Items */}
                        <div className="space-y-16">
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <span className="font-editorial text-6xl text-[var(--accent)]">
                                    02
                                </span>
                                <h3 className="font-editorial text-2xl text-[var(--foreground)]">
                                    Lightning Fast
                                </h3>
                                <p className="text-lg text-[var(--muted)] leading-relaxed">
                                    Built with Next.js for instant loading
                                    times. Your visitors won&apos;t wait, and neither
                                    should you.
                                </p>
                            </motion.div>
                            <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <span className="font-editorial text-6xl text-[var(--accent)]">
                                    03
                                </span>
                                <h3 className="font-editorial text-2xl text-[var(--foreground)]">
                                    Mobile Perfect
                                </h3>
                                <p className="text-lg text-[var(--muted)] leading-relaxed">
                                    Flawless experience across all devices. Your
                                    work looks stunning whether viewed on phone,
                                    tablet, or desktop.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
