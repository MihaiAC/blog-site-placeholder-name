import { MDXContent } from "mdx/types";
import { MyComponent } from "./mdx-components";

const components = { MyComponent };

export default function Page() {
  return <MDXContent components={components} />;
}
