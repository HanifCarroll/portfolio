"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function ServicesPage() {
    const packages = [
        {
            name: "Starter",
            price: "Starting at $2,000",
            description:
                "Perfect for solopreneurs ready to elevate their online presence",
            features: [
                "3-5 page custom Next.js website",
                "Mobile-responsive design",
                "Basic SEO optimization",
                "Contact form integration",
                "2 rounds of revisions",
                "30-day post-launch support",
            ],
        },
        {
            name: "Business Growth",
            price: "Custom Quote",
            description:
                "For established businesses ready to transform their digital presence",
            features: [
                "5+ page custom Next.js website",
                "Blog/CMS integration",
                "Full SEO & performance optimization",
                "Analytics & conversion tracking",
                "3 rounds of revisions",
                "90-day post-launch support",
                "Content strategy consultation",
            ],
            popular: true,
        },
    ];

    const process = [
        {
            step: "01",
            title: "Discover & Strategy",
            description:
                "We dive deep into your business, understand your ideal clients, and craft a strategy that positions you as the obvious choice.",
        },
        {
            step: "02",
            title: "Design & Build",
            description:
                "I design and develop your Digital Showroom simultaneously, with your feedback at every key milestone for rapid iteration.",
        },
        {
            step: "03",
            title: "Launch & Support",
            description:
                "Your Digital Showroom is launched with everything optimized for success, plus post-launch support and training.",
        },
    ];

    const faqs = [
        {
            question: "What is the typical timeline?",
            answer: "Most Digital Showrooms are completed within 4-6 weeks from project kickoff. The Starter package typically takes 3-4 weeks, while Business Growth packages take 5-6 weeks.",
        },
        {
            question: "What do you need from me?",
            answer: "I'll need your brand assets (logo, colors, fonts if established), high-quality images of your work, and content for your pages. I'll guide you through everything and can help with content strategy.",
        },
        {
            question: "Why custom-coded instead of a template?",
            answer: "Templates are generic by design. Your Digital Showroom is custom-engineered to showcase YOUR specific work in the best possible light. This means faster loading, better SEO, and a unique experience that sets you apart from competitors using the same templates.",
        },
        {
            question: "Can I update the site myself after launch?",
            answer: "Yes! The Business Growth package includes CMS integration, making it easy to update your portfolio, blog, or testimonials. I'll provide training on how to manage your content.",
        },
        {
            question: "What if I need changes after launch?",
            answer: "Both packages include post-launch support (30 or 90 days). After that, I offer maintenance packages or can handle updates on an hourly basis.",
        },
        {
            question: "Do you offer payment plans?",
            answer: "Yes, I offer a 50% deposit to start, with the balance due at launch. For Business Growth packages, we can discuss a 3-payment structure.",
        },
    ];

    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="max-w-4xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-editorial text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-[var(--foreground)] mb-8">
                            The Digital Showroom: A Client-Winning Asset
                        </h1>
                        <p className="text-xl text-[var(--muted)] font-medium leading-relaxed">
                            Where exceptional service meets an unforgettable
                            digital first impression.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-24 px-6 bg-[var(--surface)]">
                <div className="container mx-auto max-w-6xl">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-editorial text-4xl md:text-5xl text-[var(--foreground)] mb-4">
                            Packages
                        </h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 auto-rows-fr items-stretch gap-8 max-w-4xl mx-auto">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                className={`bg-[var(--background)] p-10 flex flex-col border-2 ${
                                    pkg.popular
                                        ? "border-[var(--accent)] relative"
                                        : "border-[var(--border-subtle)]"
                                }`}
                            >
                                {pkg.popular && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[var(--accent)] text-white px-4 py-1 text-sm font-medium tracking-wide">
                                        Most Popular
                                    </span>
                                )}
                                <div
                                    className={`mb-8 ${
                                        pkg.popular ? "mt-1" : ""
                                    }`}
                                >
                                    <h3 className="text-[var(--muted)] text-sm font-medium tracking-wider uppercase mb-2">
                                        {pkg.name}
                                    </h3>
                                    <p className="font-editorial text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] text-[var(--foreground)] mb-6">
                                        {pkg.price}
                                    </p>
                                    <p className="text-[var(--muted)] leading-relaxed min-h-[3rem]">
                                        {pkg.description}
                                    </p>
                                </div>
                                <ul className="space-y-4 flex-grow">
                                    {pkg.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="flex items-center"
                                        >
                                            <span className="text-[var(--accent)] text-xl flex-shrink-0 w-6 leading-none">
                                                ✓
                                            </span>
                                            <span className="text-[var(--foreground)] ml-3">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <div
                                    className={`mt-auto pt-10 ${
                                        !pkg.popular ? "translate-y-1" : ""
                                    }`}
                                >
                                    <Link
                                        href="/contact"
                                        className={`block w-full text-center px-8 py-4 font-medium transition-all ${
                                            pkg.popular
                                                ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
                                                : "bg-transparent text-[var(--foreground)] border-2 border-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-[var(--background)]"
                                        }`}
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 bg-[var(--background)]">
                <div className="container mx-auto max-w-6xl">
                    <motion.h2
                        className="font-editorial text-4xl md:text-5xl text-[var(--foreground)] mb-16 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        My Three-Step Process
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                            >
                                <div className="font-editorial text-6xl text-[var(--accent)] mb-6">
                                    {item.step}
                                </div>
                                <h3 className="font-editorial text-2xl text-[var(--foreground)] mb-4">
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

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-[var(--surface)]">
                <div className="container mx-auto max-w-4xl">
                    <motion.h2
                        className="font-editorial text-4xl md:text-5xl text-[var(--foreground)] mb-16 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Frequently Asked Questions
                    </motion.h2>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.05,
                                }}
                                className="bg-[var(--background)] p-8 border-l-4 border-[var(--accent)]"
                            >
                                <h3 className="font-editorial text-xl text-[var(--foreground)] mb-4">
                                    {faq.question}
                                </h3>
                                <p className="text-[var(--muted)] leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
