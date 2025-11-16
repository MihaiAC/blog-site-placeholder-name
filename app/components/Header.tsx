import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Link href="/">
            {/* TODO: brand here or full name? */}
            <span>VoidUnderflow</span>
          </Link>
        </div>
        <ul>
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
