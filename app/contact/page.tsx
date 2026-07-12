import { SiteNav } from "@/app/components/site-nav";
import { ContactForm } from "@/app/components/contact-form";
import { pageMetadata } from "@/app/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell us about your project. Whether you're an agency or a founder, Najman reads every message personally.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <SiteNav />
        </div>
      </div>

      <main className="px-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col">
          
          <header className="pt-24 sm:pt-32 lg:pt-40">
            <div className="flex items-baseline justify-between border-b border-foreground/15 pb-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                Contact
              </p>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                New Inquiries
              </span>
            </div>

            <h1 className="mt-16 text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.9] tracking-[-0.02em] text-foreground sm:mt-24">
              Let’s talk.
            </h1>
            <p className="mt-10 max-w-xl text-pretty text-lg leading-relaxed text-foreground/60 sm:text-xl">
              Whether you’re an agency putting a proposal together or a founder ready to
              start, a few lines is enough. Najman reads every message personally.
            </p>
          </header>

          <div className="border-t border-foreground/15 mt-20 py-20 sm:mt-28 sm:py-28">
            <div className="grid grid-cols-1 gap-20 lg:grid-cols-12 lg:gap-12">
              
              {/* Left Column: The Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>

              {/* Right Column: Studio Details (Counterweight) */}
              <div className="flex flex-col gap-12 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-foreground/15 lg:pl-12">
                
                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                    Direct Email
                  </h3>
                  <a 
                    href="mailto:hello@ahamedwebstudio.com" 
                    className="group inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-foreground/70"
                  >
                    hello@ahamedwebstudio.com
                    <span className="text-accent transition-transform duration-300 ease-out group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                    Studio Location
                  </h3>
                  <div className="text-lg leading-relaxed text-foreground/70">
                    <p>Boralesgamuwa</p>
                    <p>Colombo, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
                    Social
                  </h3>
                  <div className="flex flex-col items-start gap-2">
                    <a
                      href="https://www.linkedin.com/in/najman-nizam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-foreground transition-colors hover:text-foreground/70"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/najmanmna"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-foreground transition-colors hover:text-foreground/70"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
}