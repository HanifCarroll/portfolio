import Link from "next/link";

export default function ServicesPage() {
    const packages = [
        {
            name: "Starter",
            price: "$4,500",
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
            price: "$7,000",
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
            step: "1",
            title: "Discover & Strategy",
            description:
                "We dive deep into your business, understand your ideal clients, and craft a strategy that positions you as the obvious choice.",
        },
        {
            step: "2",
            title: "Design & Build",
            description:
                "I design and develop your Digital Showroom simultaneously, with your feedback at every key milestone for rapid iteration.",
        },
        {
            step: "3",
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
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            The Digital Showroom: A Client-Winning Asset
                        </h1>
                        <p className="text-xl text-gray-600 font-medium">
                            Focused web development designed for one purpose: to
                            make you look as good online as you are in real
                            life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Packages Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Packages
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {packages.map((pkg) => (
                            <div
                                key={pkg.name}
                                className={`bg-white rounded-2xl p-8 ${
                                    pkg.popular
                                        ? "ring-2 ring-gray-900 relative"
                                        : "border border-gray-200"
                                }`}
                            >
                                {pkg.popular && (
                                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-full text-sm">
                                        Most Popular
                                    </span>
                                )}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        {pkg.name}
                                    </h3>
                                    <p className="text-3xl font-bold text-gray-900 mb-4">
                                        {pkg.price}
                                    </p>
                                    <p className="text-gray-600">
                                        {pkg.description}
                                    </p>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start"
                                        >
                                            <span className="text-green-500 mr-3 mt-1">
                                                ✓
                                            </span>
                                            <span className="text-gray-600">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className={`block w-full text-center px-6 py-3 rounded-full font-medium transition-all ${
                                        pkg.popular
                                            ? "bg-gray-900 text-white hover:bg-gray-800"
                                            : "bg-white text-gray-900 border border-gray-900 hover:bg-gray-50"
                                    }`}
                                >
                                    Get Started
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        My Three-Step Process
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {process.map((item) => (
                            <div key={item.step} className="text-center">
                                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-8">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
