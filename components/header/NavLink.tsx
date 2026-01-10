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
      className={`block py-1 px-2 border border-dashed border-x-transparent
        border-t-transparent nav-link-${color} active:text-background`}
    >
      {children}
    </Link>
  );
}
