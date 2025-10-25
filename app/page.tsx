import { MyComponent } from "../mdx-components";
import Welcome from "@/markdown/welcome.mdx";

export default function Page() {
  return (
    <>
      <MyComponent>Some text here!</MyComponent>
      <Welcome></Welcome>
    </>
  );
}
