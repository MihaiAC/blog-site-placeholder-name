import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavLink from "./NavLink";

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
          <ul className="flex gap-8">
            <li>
              <NavLink href="/" color="primary">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink href="/posts" color="secondary">
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink href="/projects" color="tertiary">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" color="neutral">
                About
              </NavLink>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
