import type { MDXComponents } from "mdx/types";

export function MyComponent({ children }: { children: React.ReactNode }) {
  return <div className="text-red-500">{children}</div>;
}

const components: MDXComponents = {
  MyComponent,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
