import Link from "next/link";
import { Gem, Radio } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/play", label: "Play" },
  { href: "/marketplace", label: "Trait Marketplace" },
  { href: "/loadout", label: "My Loadout" },
  { href: "/leaderboards", label: "Leaderboards" },
  { href: "/profile", label: "Profile" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center gap-8 px-6 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Chog Heist home">
          <span className="grid size-9 place-items-center rounded-xl border border-primary/40 bg-primary/15 shadow-[inset_0_0_18px_rgba(173,111,255,0.18)]">
            <Gem className="size-5 text-primary" />
          </span>
          <span className="font-black uppercase tracking-[-0.04em] text-white">Chog Heist</span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <span className="hidden items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-emerald-300 sm:flex">
            <Radio className="size-3" /> Systems nominal
          </span>
          <Link href="/play" className={cn(buttonVariants({ size: "sm" }), "rounded-full px-4 font-bold")}>
            Play now
          </Link>
        </div>
      </div>
    </header>
  );
}
