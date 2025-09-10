import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProject, getAllProjects } from "@/lib/projects";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const nextProject = allProjects.find((p) => p.slug !== project.slug);

  return (
    <main className="min-h-screen bg-white">
      {/* 1. The Headline */}
      <section className="pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-gray-900">
            {project.title}
          </h1>
        </div>
      </section>

      {/* 2. Metadata Summary Box */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className={`grid ${(project.slug === 'redwriter-comics' || project.slug === 'desarmadero-latorre') ? 'md:grid-cols-2' : 'md:grid-cols-3'} gap-8 p-8 border border-gray-200 rounded-sm`}>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Client</p>
              <p className="text-lg text-gray-900">{project.client}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Service</p>
              <p className="text-lg text-gray-900">{project.service}</p>
            </div>
            {project.slug !== 'redwriter-comics' && project.slug !== 'desarmadero-latorre' && (
              <div>
                <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Tech Stack</p>
                <p className="text-lg text-gray-900">
                  {project.technologies.slice(0, 3).join(", ")}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. The Narrative Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          {/* The Problem */}
          <div className="mb-20">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              The Problem
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              {project.problem}
            </p>
          </div>

          {/* The Solution */}
          <div className="mb-20">
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              The Solution
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              {project.solution}
            </p>
          </div>

          {/* The Result */}
          <div>
            <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-6">
              The Result
            </h2>
            <p className="text-xl leading-relaxed text-gray-700 font-light">
              {project.result}
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Visual Gallery */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-20">
            {/* Hero Shot */}
            <div className="relative aspect-[16/9] overflow-hidden shadow-2xl">
              <Image
                src={project.images.hero}
                alt="Hero view"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1536px) 100vw, 1536px"
              />
            </div>
            
            {/* Feature Image */}
            <div className="relative aspect-[16/9] overflow-hidden shadow-xl">
              <Image
                src={project.images.feature}
                alt="Feature view"
                fill
                className="object-cover"
                sizes="(max-width: 1536px) 100vw, 1536px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Live Site Link */}
      {project.liveUrl && (
        <section className="py-32 px-6 border-t border-gray-100">
          <div className="container mx-auto max-w-3xl text-center">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-5 text-base font-light text-white bg-gray-900 hover:bg-gray-800 transition-all duration-300 uppercase tracking-wider"
            >
              View The Live Site
              <svg className="ml-3 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>
      )}

      {/* Project Navigation */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex justify-between items-center">
            <Link
              href="/work"
              className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider"
            >
              ← All Projects
            </Link>
            {nextProject && (
              <Link
                href={`/work/${nextProject.slug}`}
                className="text-sm font-light text-gray-500 hover:text-gray-900 transition-colors uppercase tracking-wider"
              >
                Next Project →
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}