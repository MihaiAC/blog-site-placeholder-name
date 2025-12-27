import PostsList from "@/components/PostsList";
import { getAllPosts, getAllTags } from "@/data/posts/posts";
import Link from "next/link";

export default function PostsPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <div>
      <h1>Lorem Ipsum Dolor</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <section>
        <h2>Consectetur Adipiscing</h2>
        <div>
          {tags.map((tag) => (
            <Link key={tag} href={`/posts/tag/${tag}`}>
              {tag}
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>Sed Do Eiusmod</h2>
        <PostsList posts={posts} />
      </section>
    </div>
  );
}
