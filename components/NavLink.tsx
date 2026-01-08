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
      className={`border-b-4 border-${color} hover:bg-${color}
        hover:text-background py-1 px-2`}
    >
      {children}
    </Link>
  );
}
