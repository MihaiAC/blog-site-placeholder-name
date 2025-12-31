import PostsList from "@/components/posts/CardList";
import {
  getPostsByTag,
  getActivePostTags,
  isActivePostTag,
} from "@/data/posts/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;

  if (!isActivePostTag(tag)) {
    notFound();
  }

  const posts = getPostsByTag(tag);

  return (
    <div>
      <h1>
        Lorem Ipsum: <span>{tag}</span>
      </h1>
      <p>
        <Link href="/posts">Dolor sit amet consectetur</Link>
      </p>

      <section>
        <PostsList posts={posts} />
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return getActivePostTags().map((tag) => ({
    tag: tag,
  }));
}

export const dynamicParams = false;
