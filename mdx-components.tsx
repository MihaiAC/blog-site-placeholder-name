import type { MDXComponents } from "mdx/types";

export function SampleComponent({ children }: { children: React.ReactNode }) {
  return <div className="text-red-500">{children}</div>;
}

const components: MDXComponents = {
  MyComponent: SampleComponent,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
