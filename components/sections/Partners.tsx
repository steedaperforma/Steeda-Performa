"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";


// Explicit list to control order if needed, otherwise matches folder
const partners = [
    "Bonifiq.webp", "Dinamize.webp", "Inbazz.webp", "Nuvemshop.webp",
    "Revi.webp", "Widde.webp", "adzy.webp", "bling.webp", "google ads.webp",
    "martz.webp", "meta.webp", "shopfy.webp", "tiktok ads.webp",
    "uappi.webp", "vtex.webp", "wiki.webp"
];

export function Partners() {
    return (
        <Section className="pt-0 pb-20 border-b border-border bg-bg text-center overflow-hidden">
            <Container>
                <div className="flex flex-col items-center justify-center space-y-8">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/80">
                        Soluções parceiras e integrações
                    </p>

                    {/* 
                        Marquee Wrapper 
                        --gap: Defines the spacing between items
                        --duration: Defines the speed (slower for larger items)
                    */}
                    <div
                        className="relative flex w-full overflow-hidden mask-linear-fade [--gap:2rem] [--duration:40s]"
                        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                    >
                        <div className="flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee">
                            {partners.map((logo, index) => (
                                <PartnerLogo key={`original-${index}`} logo={logo} />
                            ))}
                        </div>
                        <div
                            aria-hidden="true"
                            className="flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee ml-[var(--gap)]"
                        >
                            {partners.map((logo, index) => (
                                <PartnerLogo key={`duplicate-${index}`} logo={logo} />
                            ))}
                        </div>
                    </div>
                </div>


            </Container>
        </Section>
    );
}

function PartnerLogo({ logo }: { logo: string }) {
    return (
        <div className="relative group flex h-28 w-48 shrink-0 items-center justify-center rounded-xl border border-transparent bg-white/40 p-5 transition-all hover:bg-white hover:shadow-lg hover:border-gray-100">
            <Image
                src={`/partners/${logo}`}
                alt={logo.replace(".webp", "")}
                width={192}
                height={112}
                className="h-full w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
            />
        </div>
    );
}
