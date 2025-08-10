import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const writingPosts = await getCollection('writing');
    
    // Sort posts by date
    const sortedPosts = writingPosts.sort((a, b) => 
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    );

    return rss({
        title: "The Bootstrapped Founder's Field Guide | Hanif Carroll",
        description: "Practical MVP development insights, startup advice, and product strategy for bootstrapped nontechnical founders.",
        site: context.site,
        items: sortedPosts.map((post) => ({
            title: post.data.title,
            description: post.data.summary || '',
            pubDate: new Date(post.data.date),
            link: `/writing/${post.slug}/`,
        })),
        customData: `<language>en-us</language>`,
    });
}