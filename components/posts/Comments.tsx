"use client";
import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      repo="VoidUnderflow/personal-site"
      repoId="R_kgDOQGtY6A"
      category="General"
      categoryId="DIC_kwDOQGtY6M4C0URM"
      mapping="pathname"
      strict="1"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme={"dark"}
      lang="en"
      loading="lazy"
    />
  );
}
