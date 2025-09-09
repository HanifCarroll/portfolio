import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";

export default function Home() {
    const projects = getAllProjects().slice(0, 3); // Show first 3 projects on homepage

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        {/* Text Content */}
                        <div className="flex-1 max-w-2xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                                Build Your Digital Showroom.
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
                                I design and develop custom, high-performance
                                websites for premium service businesses, turning
                                expertise into an unforgettable digital
                                experience.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/work"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                                >
                                    View My Work
                                </Link>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-900 border-2 border-gray-900 rounded-full hover:bg-gray-50 transition-all"
                                >
                                    Book a Consultation
                                </Link>
                            </div>
                        </div>

                        {/* Portrait Image */}
                        <div className="flex-shrink-0">
                            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-yellow-100 shadow-2xl">
                                <Image
                                    src="/headshot.webp"
                                    alt="Hanif Carroll"
                                    fill
                                    className="object-cover object-center "
                                    priority
                                    sizes="(max-width: 1024px) 256px, 320px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Banner */}
            <section className="py-12 px-6 bg-white border-t border-b border-gray-100">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center">
                        <p className="text-base font-medium text-gray-600 uppercase tracking-wider mb-8">
                            Trusted By
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                            <div className="relative h-12 w-32 opacity-70 hover:opacity-100 transition-opacity">
                                <Image
                                    src="/logos/redwriter.webp"
                                    alt="RedWriter Comics"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative h-12 w-32 opacity-70 hover:opacity-100 transition-opacity">
                                <Image
                                    src="/logos/maximo.png"
                                    alt="Maximo Interiorismo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative h-12 w-32 opacity-70 hover:opacity-100 transition-opacity">
                                <Image
                                    src="/logos/casa-elaria.png"
                                    alt="Casa Elaria"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="relative h-12 w-32 opacity-70 hover:opacity-100 transition-opacity">
                                <Image
                                    src="/logos/desarmadero.avif"
                                    alt="Desarmadero Latorre"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem/Solution Section */}
            <section className="py-20 px-6 bg-gray-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Is your website failing to reflect the high quality
                            of your brand?
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Many premium service businesses have exceptional
                            expertise but an online presence that feels amateur.
                            This credibility gap leads to lost opportunities and
                            lower-value clients.
                        </p>
                        <p className="text-lg text-gray-600">
                            The solution is a "Digital Showroom"—a website
                            engineered from the ground up to build trust and
                            showcase your expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Work Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                        Selected Works
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/work/${project.slug}`}
                                className="group"
                            >
                                <div className="relative aspect-[4/3] rounded-lg mb-4 overflow-hidden">
                                    <Image
                                        src={project.images.hero}
                                        alt={project.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                        {project.client}
                                    </span>
                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:underline">
                                        {project.title.replace(
                                            "Case Study: ",
                                            ""
                                        )}
                                    </h3>
                                    <p className="text-gray-600">
                                        View Case Study →
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                        What's Included
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">🎨</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Custom Design
                            </h3>
                            <p className="text-gray-600">
                                Every Digital Showroom is uniquely designed to
                                match your brand aesthetic and speak to your
                                ideal clients.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Lightning Fast
                            </h3>
                            <p className="text-gray-600">
                                Built with Next.js for instant loading times.
                                Your visitors won't wait, and neither should
                                you.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                <span className="text-2xl">📱</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Mobile Perfect
                            </h3>
                            <p className="text-gray-600">
                                Flawless experience across all devices. Your
                                work looks stunning whether viewed on phone,
                                tablet, or desktop.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
