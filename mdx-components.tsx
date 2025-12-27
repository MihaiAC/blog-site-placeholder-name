import type { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function SampleComponent({ children }: { children: React.ReactNode }) {
  return <div className="text-red-500">{children}</div>;
}

const components: MDXComponents = {
  h2: ({ children }) => <h2 className="text-red-500">{children}</h2>,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <Image height={400} width={400} {...(props as ImageProps)} />,
  MyComponent: SampleComponent,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
