import { SiteNav } from "./components/site-nav";
import { Hero } from "./components/hero";

export default function Home() {
  return (
    <header className="flex min-h-[90vh] flex-col">
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col">
        <SiteNav />
        <Hero />
      </div>
    </header>
  );
}
