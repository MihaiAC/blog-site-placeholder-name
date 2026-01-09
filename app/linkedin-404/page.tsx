import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn",
};

export default function LinkedInComingSoon() {
  return (
    <div>
      <h1>LinkedIn - coming soon</h1>
      <p>
        Once I take a good photo of myself and understand how to frame my
        employment gap on a website that honestly feels pretty hostile to such
        things.
      </p>
      <Link href="/">Back to Home </Link>
    </div>
  );
}
