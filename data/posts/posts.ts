export enum PostTag {
  Meta = "meta",
  Introduction = "introduction",
  Personal = "personal",
}

export interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: PostTag[];
}

const posts: Post[] = [
  {
    slug: "welcome",
    title: "Welcome to my blog",
    description: "Short introduction",
    date: "2025-12-27",
    tags: [PostTag.Meta, PostTag.Introduction],
  },
  {
    slug: "on-memory",
    title: "On memory",
    description:
      "Some musings about how my memory is changing as I'm getting older",
    date: "2025-12-26",
    tags: [PostTag.Meta, PostTag.Personal],
  },
];

export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getPostsByTag(tag: PostTag): Post[] {
  return posts
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getActivePostTags(): PostTag[] {
  const tagSet = new Set<PostTag>();
  posts.forEach((post) => {
    post.tags.forEach((tag) => tagSet.add(tag));
  });

  return Array.from(tagSet).sort();
}

export function isActivePostTag(tag: string): tag is PostTag {
  return getActivePostTags().includes(tag as PostTag);
}
