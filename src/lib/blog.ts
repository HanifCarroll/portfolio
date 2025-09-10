import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import { defaultSchema } from 'hast-util-sanitize';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

function generateExcerpt(content: string, wordCount: number = 50): string {
  // Remove markdown syntax and HTML tags for clean excerpt
  const cleanContent = content
    .replace(/^#+\s+.*$/gm, '') // Remove headers
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Replace links with text
    .replace(/[*_~`]/g, '') // Remove formatting characters
    .replace(/<[^>]+>/g, '') // Remove HTML tags
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim();
  
  const words = cleanContent.split(/\s+/);
  const excerpt = words.slice(0, wordCount).join(' ');
  
  // Add ellipsis if truncated
  return words.length > wordCount ? `${excerpt}...` : excerpt;
}

export async function getMarkdownContent(content: string): Promise<string> {
  const schema = {
    ...defaultSchema,
    tagNames: [
      ...(defaultSchema.tagNames || []),
      'div', 'iframe', 'video', 'source', 'audio'
    ],
    attributes: {
      ...defaultSchema.attributes,
      '*': [...(defaultSchema.attributes?.['*'] || []), 'className', 'id', 'style'],
      'iframe': ['src', 'width', 'height', 'frameBorder', 'allowFullScreen', 'allow', 'webkitAllowFullScreen', 'mozAllowFullScreen'],
      'video': ['controls', 'width', 'height', 'src', 'autoPlay', 'loop', 'muted'],
      'source': ['src', 'type'],
      'audio': ['controls', 'src'],
      'img': [...(defaultSchema.attributes?.['img'] || []), 'width', 'height'],
      'a': [...(defaultSchema.attributes?.['a'] || []), 'target', 'rel']
    },
    protocols: {
      ...defaultSchema.protocols,
      href: ['http', 'https', 'mailto'],
      src: ['http', 'https', 'data']
    }
  };

  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSanitize, schema)
    .use(rehypeStringify)
    .process(content);

  return processedContent.toString();
}

export async function getAllPosts(): Promise<BlogPost[]> {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.md'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        const processedContent = await getMarkdownContent(content);

        return {
          slug,
          title: data.title || slug,
          date: data.date || new Date().toISOString(),
          excerpt: generateExcerpt(content),
          content: processedContent
        } as BlogPost;
      })
  );

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await getMarkdownContent(content);

    return {
      slug,
      title: data.title || slug,
      date: data.date || new Date().toISOString(),
      excerpt: generateExcerpt(content),
      content: processedContent
    };
  } catch {
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}