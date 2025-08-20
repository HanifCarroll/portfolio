import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Hanif Carroll',
  description: 'Thoughts on product design, development, and building digital solutions.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-800 dark:bg-gray-900">
        <div className="container section-padding-block">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-6 animate-fadeInUp">
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 dark:text-gray-300 max-w-3xl mx-auto animate-fadeInUp animation-delay-100">
              Thoughts on product design, development, and building digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="bg-gray-50 dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
        <div className="container section-padding-block">
          <div className="max-w-4xl mx-auto">
            {posts.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-400">No blog posts yet.</p>
            ) : (
              <div className="space-y-8">
                {posts.map((post) => (
                  <article key={post.slug} className="group">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h2>
                      <time className="text-sm text-gray-500 dark:text-gray-400 mb-3 block">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 !ml-0 !mr-0 !max-w-none">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:underline">
                        Read more
                        <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}