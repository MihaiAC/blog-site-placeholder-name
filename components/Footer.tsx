import { GithubIcon } from "./icons/GithubIcon";
import { LeetcodeIcon } from "./icons/LeetcodeIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";

interface FooterProps {
  className: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={className}>
      <div>
        <ul className="flex gap-8">
          <li>
            <a
              href="https://github.com/VoidUnderflow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon size={20} className="text-foreground" />
            </a>
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
          <li>
            <a href="/linkedin-404">
              <LinkedinIcon size={20} className="text-foreground" />
            </a>
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
