"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: "success" | "error" | null;
        message: string;
    }>({ type: null, message: "" });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus({
                    type: "success",
                    message:
                        "Thank you for your message! I'll get back to you within 24 hours.",
                });
                // Reset form
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus({
                    type: "error",
                    message: "Something went wrong. Please try again.",
                });
            }
        } catch {
            setSubmitStatus({
                type: "error",
                message:
                    "Failed to send message. Please try again or email directly.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-editorial text-[clamp(3rem,7vw,6rem)] leading-[0.9] text-[var(--foreground)] mb-8">
                            Let&apos;s build your Digital Showroom
                        </h1>
                        <p className="text-xl text-[var(--muted)] mb-8 leading-relaxed">
                            I&apos;m currently accepting new projects for{" "}
                            {new Date().toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                            })}
                            . Please fill out the form below or email me
                            directly.
                        </p>

                        {/* Cal.com CTA - Editorial Style */}
                        <motion.div
                            className="bg-[var(--surface)] border-2 border-[var(--accent)] p-8 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <p className="font-editorial text-2xl text-[var(--foreground)] mb-4 text-center">
                                Ready to discuss your project?
                            </p>
                            <p className="text-[var(--muted)] mb-6 text-center leading-relaxed">
                                Skip the form and jump straight to a free
                                30-minute discovery call to discuss your Digital
                                Showroom.
                            </p>
                            <div className="text-center">
                                <a
                                    href="https://cal.com/hanifcarroll/discovery"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all"
                                >
                                    Schedule Discovery Call →
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Testimonial - Editorial Style */}
                    <motion.div
                        className="bg-[var(--surface)] p-10 mb-16 max-w-3xl mx-auto border-l-4 border-[var(--accent)]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <blockquote className="font-editorial text-2xl text-[var(--foreground)] mb-8 leading-[1.3] text-center">
                            &ldquo;Just wrapped up a call with Hanif. It was
                            incredibly useful. I came in with a lot of ideas but
                            wasn&apos;t sure where to direct my focus. Hanif
                            helped me find that clarity.&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <Image
                                src="/austin.jpeg"
                                alt="Austin Lowther"
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                            <div>
                                <p className="font-semibold text-[var(--foreground)]">
                                    Austin Lowther
                                </p>
                                <p className="text-[var(--muted)]">
                                    Creator of LangLibros
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Contact Form - Editorial Style */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-[var(--foreground)] mb-2 uppercase tracking-wider"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-[var(--border-subtle)] bg-[var(--surface)] focus:border-[var(--accent)] outline-none transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-[var(--foreground)] mb-2 uppercase tracking-wider"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-[var(--border-subtle)] bg-[var(--surface)] focus:border-[var(--accent)] outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-[var(--foreground)] mb-2 uppercase tracking-wider"
                                    >
                                        Tell me about your project
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-[var(--border-subtle)] bg-[var(--surface)] focus:border-[var(--accent)] outline-none transition-all resize-none"
                                        placeholder="Brief description of your project and goals..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 text-lg font-medium text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </button>

                                {submitStatus.type && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`mt-4 p-4 border-l-4 ${
                                            submitStatus.type === "success"
                                                ? "bg-[var(--surface)] text-[var(--foreground)] border-[var(--accent)]"
                                                : "bg-red-50 text-red-800 border-red-500"
                                        }`}
                                    >
                                        {submitStatus.message}
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Contact Details - Editorial Style */}
                        <motion.div
                            className="space-y-10"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div>
                                <h3 className="font-editorial text-xl text-[var(--foreground)] mb-3">
                                    Direct Contact
                                </h3>
                                <p className="text-[var(--muted)] mb-3">
                                    Prefer email? Reach out directly:
                                </p>
                                <a
                                    href="mailto:hanifcarroll@gmail.com"
                                    className="text-lg text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
                                >
                                    hanifcarroll@gmail.com
                                </a>
                            </div>

                            <div>
                                <h3 className="font-editorial text-xl text-[var(--foreground)] mb-3">
                                    Response Time
                                </h3>
                                <p className="text-[var(--muted)] leading-relaxed">
                                    I&apos;ll respond to all inquiries within 24
                                    business hours.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-editorial text-xl text-[var(--foreground)] mb-4">
                                    What Happens Next?
                                </h3>
                                <ol className="space-y-4 text-[var(--muted)]">
                                    {[
                                        "I'll review your project details and get back to you within 24 hours",
                                        "We'll schedule a 30-minute discovery call to discuss your goals",
                                        "I'll provide a custom proposal with timeline and investment details",
                                        "Once approved, we begin transforming your online presence",
                                    ].map((step, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <span className="font-editorial text-2xl text-[var(--accent)] mr-4">
                                                0{index + 1}
                                            </span>
                                            <span className="pt-1">{step}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            <div className="bg-[var(--surface)] p-8 border-l-4 border-[var(--accent)]">
                                <h3 className="font-editorial text-xl text-[var(--foreground)] mb-4">
                                    Good Fit Checklist
                                </h3>
                                <p className="text-sm text-[var(--muted)] mb-6">
                                    We&apos;re likely a great match if you:
                                </p>
                                <ul className="space-y-3 text-sm text-[var(--foreground)]">
                                    {[
                                        "Are a premium service business or boutique agency",
                                        "Value quality over quantity in your client relationships",
                                        "Have a portfolio of work ready to showcase",
                                        "Are ready to invest in professional web development",
                                    ].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <span className="text-[var(--accent)] mr-3 mt-1 text-lg">
                                                ✓
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
