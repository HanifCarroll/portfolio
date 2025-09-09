"use client";

import { useState } from "react";
import Image from "next/image";

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

        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);

        try {
            const response = await fetch("/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams(formData as any).toString(),
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
        } catch (error) {
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
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Let's build your Digital Showroom.
                        </h1>
                        <p className="text-xl text-gray-600 mb-6">
                            I'm currently accepting new projects for{" "}
                            {new Date().toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric",
                            })}
                            . Please fill out the form below or email me
                            directly.
                        </p>

                        {/* Cal.com CTA */}
                        <div className="bg-blue-50 rounded-xl p-6 max-w-2xl mx-auto">
                            <p className="text-lg text-gray-700 mb-4 text-center">
                                <strong>Ready to discuss your project?</strong>
                            </p>
                            <p className="text-gray-600 mb-4 text-center">
                                Skip the form and jump straight to a free
                                30-minute discovery call to discuss your Digital
                                Showroom.
                            </p>
                            <div className="text-center">
                                <a
                                    href="https://cal.com/hanifcarroll/discovery"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                                >
                                    Schedule Discovery Call →
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
                        <blockquote className="text-xl text-gray-800 mb-6 italic text-center">
                            "Just wrapped up a call with Hanif. It was
                            incredibly useful. I came in with a lot of ideas but
                            wasn't sure where to direct my focus. Hanif helped
                            me find that clarity. He guided me toward what I
                            need to focus on first, and what's going to matter
                            most right now."
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
                                <p className="font-semibold text-gray-900">
                                    Austin Lowther
                                </p>
                                <p className="text-gray-600">
                                    Creator of LangLibros
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div>
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />

                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium text-gray-700 mb-2"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 mb-2"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 mb-2"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                                        placeholder="Brief description of your project and goals..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting
                                        ? "Sending..."
                                        : "Send Message"}
                                </button>

                                {submitStatus.type && (
                                    <div
                                        className={`mt-4 p-4 rounded-lg ${
                                            submitStatus.type === "success"
                                                ? "bg-green-50 text-green-800"
                                                : "bg-red-50 text-red-800"
                                        }`}
                                    >
                                        {submitStatus.message}
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Direct Contact
                                </h3>
                                <p className="text-gray-600 mb-2">
                                    Prefer email? Reach out directly:
                                </p>
                                <a
                                    href="mailto:hanifcarroll@gmail.com"
                                    className="text-lg text-gray-900 hover:underline"
                                >
                                    hanifcarroll@gmail.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Response Time
                                </h3>
                                <p className="text-gray-600">
                                    I'll respond to all inquiries within 24
                                    business hours.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    What Happens Next?
                                </h3>
                                <ol className="space-y-2 text-gray-600">
                                    <li className="flex items-start">
                                        <span className="font-semibold mr-2">
                                            1.
                                        </span>
                                        <span>
                                            I'll review your project details and
                                            get back to you within 24 hours
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-semibold mr-2">
                                            2.
                                        </span>
                                        <span>
                                            We'll schedule a 30-minute discovery
                                            call to discuss your goals
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-semibold mr-2">
                                            3.
                                        </span>
                                        <span>
                                            I'll provide a custom proposal with
                                            timeline and investment details
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="font-semibold mr-2">
                                            4.
                                        </span>
                                        <span>
                                            Once approved, we begin transforming
                                            your online presence
                                        </span>
                                    </li>
                                </ol>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    Good Fit Checklist
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    We're likely a great match if you:
                                </p>
                                <ul className="space-y-2 text-sm text-gray-600">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 mt-1">
                                            ✓
                                        </span>
                                        <span>
                                            Are a premium service business or
                                            boutique agency
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 mt-1">
                                            ✓
                                        </span>
                                        <span>
                                            Value quality over quantity in your
                                            client relationships
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 mt-1">
                                            ✓
                                        </span>
                                        <span>
                                            Have a portfolio of work ready to
                                            showcase
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-2 mt-1">
                                            ✓
                                        </span>
                                        <span>
                                            Are ready to invest in professional
                                            web development
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
