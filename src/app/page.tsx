import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Clock3,
  Gem,
  KeyRound,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Gem,
    eyebrow: "Loot",
    title: "Crack the vault",
    description:
      "Read the room, route around security, and secure crystalline rewards before the clock hits zero.",
  },
  {
    icon: Bot,
    eyebrow: "Stealth",
    title: "Outsmart the machines",
    description:
      "Break sightlines, study patrols, and slip through a reactive security network without raising the alarm.",
  },
  {
    icon: KeyRound,
    eyebrow: "Ownership",
    title: "Borrow power, not NFTs",
    description:
      "The planned trait protocol lets owners authorize specific gameplay traits without transferring the underlying NFT.",
  },
];

export default function HomePage() {
  return (
    <main id="main-content" className="overflow-hidden">
      <section className="relative isolate min-h-[calc(100dvh-4.5rem)] border-b border-white/10">
        <div className="vault-grid absolute inset-0 -z-20" aria-hidden="true" />
        <div className="hero-glow absolute inset-0 -z-10" aria-hidden="true" />

        <div className="mx-auto grid min-h-[calc(100dvh-4.5rem)] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Chogathon prototype online
            </div>

            <p className="mb-3 font-mono text-sm uppercase tracking-[0.34em] text-violet-300/80">
              Infiltrate // Extract // Escape
            </p>
            <h1 className="max-w-4xl text-balance text-6xl font-black uppercase leading-[0.86] tracking-[-0.065em] text-white sm:text-7xl lg:text-[6.8rem]">
              Steal smart.
              <span className="block text-gradient">Escape clean.</span>
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              A fast, free-to-play 3D stealth extraction. Three minutes. One
              impossible vault. Every shadow is a way out.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/play"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 rounded-full bg-primary px-6 text-base font-bold text-primary-foreground shadow-[0_0_32px_-8px_var(--primary)] hover:bg-primary/90",
                )}
              >
                Enter the vault <ArrowRight data-icon="inline-end" />
              </Link>
              <Link
                href="#how-it-works"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 rounded-full border-white/15 bg-white/5 px-6 text-base text-white hover:bg-white/10",
                )}
              >
                View the mission
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-emerald-400" /> No NFT required
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="size-4 text-violet-300" /> 3 minute runs
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles className="size-4 text-fuchsia-300" /> Browser native
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem]" aria-label="Vault security visualization">
            <div className="absolute inset-8 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
            <div className="vault-card relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b0616]/80 p-5 shadow-2xl shadow-violet-950/70 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span>Sector 07 / Inner vault</span>
                <span className="text-emerald-300">● Quiet</span>
              </div>
              <div className="relative mt-5 h-[calc(100%-3.5rem)] overflow-hidden rounded-2xl border border-white/10 bg-[#06030d]">
                <div className="vault-floor absolute inset-0" />
                <div className="absolute left-1/2 top-[18%] h-[52%] w-[45%] -translate-x-1/2 border-x border-violet-400/25 bg-violet-500/5 [transform:perspective(500px)_rotateX(55deg)]" />
                <div className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/50 bg-primary/10 shadow-[0_0_70px_10px_rgba(172,108,255,0.22)]">
                  <div className="absolute inset-5 animate-[spin_16s_linear_infinite] rounded-full border border-dashed border-fuchsia-300/60" />
                  <Gem className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 text-white drop-shadow-[0_0_14px_#b76cff]" />
                </div>
                <div className="security-beam absolute left-[8%] top-[32%] h-px w-[84%] rotate-12 bg-fuchsia-400" />
                <div className="security-beam absolute left-[13%] top-[67%] h-px w-[74%] -rotate-12 bg-violet-400 [animation-delay:1.2s]" />
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <div className="rounded-xl border border-white/10 bg-black/50 p-3 backdrop-blur">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Target value</p>
                    <p className="mt-1 text-2xl font-black text-white">12,400</p>
                  </div>
                  <div className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald-200">
                    Route open
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">The operation</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Every run is a new way through.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Chog Heist starts with a focused solo loop: observe, infiltrate,
            collect, and extract. The foundation is designed to grow without
            compromising that core.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature.title} className="group rounded-3xl border border-white/10 bg-card/60 p-7 transition-colors hover:border-primary/35 hover:bg-card">
              <div className="flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-2xl bg-primary/15 text-primary">
                  <feature.icon className="size-5" />
                </span>
                <span className="font-mono text-xs text-white/25">0{index + 1}</span>
              </div>
              <p className="mt-8 font-mono text-xs uppercase tracking-[0.22em] text-violet-300">{feature.eyebrow}</p>
              <h3 className="mt-2 text-2xl font-bold text-white">{feature.title}</h3>
              <p className="mt-3 leading-7 text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-16 sm:flex-row sm:items-center lg:px-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.26em] text-primary">Prototype access</p>
            <h2 className="mt-2 text-3xl font-black text-white">The vault is waiting.</h2>
          </div>
          <Link href="/play" className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-6 font-bold")}>
            Launch game prototype <ArrowRight data-icon="inline-end" />
          </Link>
        </div>
      </section>
    </main>
  );
}
