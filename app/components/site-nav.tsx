import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/partners", label: "Agencies" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  return (
    <div className="flex items-center justify-between px-6 pt-8 sm:px-10 sm:pt-10 lg:px-16">
      <Link href="/" aria-label="Ahamed Web Studio — home">
        <Image
          src="/logo.png"
          alt=""
          width={200}
          height={200}
          priority
          className="h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18"
        />
      </Link>

      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm tracking-wide text-foreground sm:gap-x-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-opacity hover:opacity-70">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
