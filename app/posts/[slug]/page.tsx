import { getPostBySlug, getAllPosts } from "@/data/posts/posts";

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/data/posts/${slug}/index.mdx`);
  const posts = getPostBySlug(slug);

  return (
    <article>
      {posts && (
        <header>
          <h1>{posts.title}</h1>
          <p>{posts.description}</p>
          <time dateTime={posts.date}>{posts.date}</time>
          <div>
            {posts.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </header>
      )}
      <div>
        <Post />
      </div>
    </article>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
