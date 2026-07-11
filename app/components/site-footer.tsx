import Link from "next/link";

const navLinks = [
  { href: "/work", label: "Work" },
  { href: "/studio", label: "Studio" },
  { href: "/partners", label: "Agencies" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "GitHub" },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm font-medium text-foreground/70">Ahamed Web Studio</span>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-foreground/70">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-6 border-t border-foreground/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-foreground/50">
            <a
              href="mailto:hello@ahamedwebstudio.com"
              className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              hello@ahamedwebstudio.com
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-sm text-foreground/40">
            &copy; {year} Ahamed Web Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
