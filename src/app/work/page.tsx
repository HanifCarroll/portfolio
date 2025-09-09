import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A collection of Digital Showrooms built for premium service businesses.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-lg mb-6 overflow-hidden">
                <Image
                  src={project.images.hero}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-3">
                <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                  {project.client}
                </span>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:underline">
                  {project.title.replace('Case Study: ', '')}
                </h3>
                <p className="text-gray-600">
                  {project.problem.split('.')[0]}.
                </p>
                <p className="text-gray-900 font-medium group-hover:translate-x-2 transition-transform inline-block">
                  View Case Study →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}