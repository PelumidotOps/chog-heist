import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, Construction } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ComingSoonProps {
  description: string;
  icon?: LucideIcon;
  title: string;
}

export function ComingSoon({ description, icon: Icon = Construction, title }: ComingSoonProps) {
  return (
    <main id="main-content" className="vault-grid grid min-h-[calc(100dvh-4.5rem)] place-items-center px-6 py-20">
      <section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-card/75 p-8 text-center shadow-2xl shadow-violet-950/40 backdrop-blur sm:p-12">
        <span className="mx-auto grid size-14 place-items-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
          <Icon className="size-7" />
        </span>
        <p className="mt-7 font-mono text-xs uppercase tracking-[0.28em] text-primary">System reserved</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-muted-foreground">{description}</p>
        <Link href="/" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-8 rounded-full border-white/15 bg-white/5 px-5 text-white")}>
          <ArrowLeft data-icon="inline-start" /> Back to home
        </Link>
      </section>
    </main>
  );
}
