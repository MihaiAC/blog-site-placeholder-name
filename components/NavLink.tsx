import Link from "next/link";

interface NavLinkProps {
  href: string;
  color: "primary" | "secondary" | "tertiary" | "neutral";
  children: React.ReactNode;
}

export default function NavLink({ href, color, children }: NavLinkProps) {
  return (
    <div className="overflow-hidden rounded-sm relative">
      <Link
        href={href}
        className={`block hover:text-background py-1 px-2 nav-link-${color}`}
      >
        {children}
      </Link>
      <div
        className={`absolute bottom-0 left-2 right-2 h-[3px]
          nav-border-${color}`}
      />
    </div>
  );
}
