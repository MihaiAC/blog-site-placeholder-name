import Link from "next/link";

interface HeaderProps {
  className: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <nav className="flex justify-between">
        <div>
          <Link href="/">
            {/* TODO: brand here or full name? Or make a revolving thing on hover. */}
            <p>Void Underflow | </p>
            <p>Mihai-Alexandru Ciobanu</p>
          </Link>
        </div>
        <ul className="flex gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
