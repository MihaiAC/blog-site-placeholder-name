import Link from "next/link";
import { Post } from "@/data/posts/posts";

interface PostsListProps {
  posts: Post[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <div>
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
          <p>{post.description}</p>
          <time dateTime={post.date}>{post.date}</time>
          <div>
            {post.tags.map((tag) => (
              <Link key={tag} href={`/posts/tag/${tag}`}>
                {tag}
              </Link>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
