import { GithubIcon } from "./icons/GithubIcon";
import { LeetcodeIcon } from "./icons/LeetcodeIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";
import { Separator } from "@/components/ui/separator";

interface FooterProps {
  className: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <div>
        <ul className="flex items-center gap-4">
          <li>
            <a
              href="https://github.com/VoidUnderflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={20} className="text-foreground" />
            </a>
          </li>
          <li aria-hidden="true">
            <Separator
              orientation="vertical"
              className="h-4 w-0.5 bg-primary"
            />
          </li>
          <li>
            <a
              href="https://leetcode.com/u/VoidUnderflow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LeetcodeIcon size={20} className="text-foreground" />
            </a>
          </li>
          <li aria-hidden="true">
            <Separator
              orientation="vertical"
              className="h-4 w-0.5 bg-secondary"
            />
          </li>
          <li>
            <a href="/linkedin-404">
              <LinkedinIcon size={20} className="text-foreground" />
            </a>
          </li>
          <li aria-hidden="true">
            <Separator
              orientation="vertical"
              className="h-4 w-0.5 bg-primary"
            />
          </li>
          <li>
            <a href="mailto:alexmihai.ciobanu@gmail.com">
              <MailIcon size={20} className="text-foreground" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
