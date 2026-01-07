import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  className: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <nav className="flex justify-between">
        <div>
          <Link href="/">
            <p className="font-logo text-tertiary text-2xl font-bold">
              VOIDUNDERFLOW
            </p>
          </Link>
        </div>
        <div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
