import Link from "next/link";

interface NavLinkProps {
  href: string;
  color: "primary" | "secondary" | "tertiary" | "neutral";
  children: React.ReactNode;
}

export default function NavLink({ href, color, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`border-b-4 hover:text-background py-1 px-2 nav-link-${color}`}
    >
      {children}
    </Link>
  );
}
