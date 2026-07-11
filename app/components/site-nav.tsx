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
    <div className="flex flex-col gap-5 pt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:pt-10">
      <Link href="/" aria-label="Ahamed Web Studio — home" className="shrink-0">
        <Image
          src="/logo.png"
          alt=""
          width={200}
          height={200}
          priority
          className="h-16 w-16 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
        />
      </Link>

      <nav aria-label="Primary">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-base font-medium tracking-wide text-foreground sm:justify-end sm:gap-x-10 sm:text-lg">
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
