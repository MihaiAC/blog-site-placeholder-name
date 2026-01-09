import Comments from "@/components/posts/Comments";
import { getPostBySlug, getAllPosts } from "@/data/posts/posts";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/data/posts/${slug}/index.mdx`);
  const post = getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  return (
    <article>
      <header>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <time dateTime={post.date}>{post.date}</time>
        <div>
          {post.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </header>

      <div className="prose prose-lg">
        <Post />
      </div>
      <Comments />
    </article>
  );
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export const dynamicParams = false;
