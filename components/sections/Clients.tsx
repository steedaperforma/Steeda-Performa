import { Container } from "@/components/ui/Container";

const clients = [
    "buriti.webp",
    "donna.webp",
    "free option.webp",
    "hugme.webp",
    "lepink.webp",
    "manga rosa pink.webp",
    "mc company.webp",
    "mega moda park.webp",
    "mega moda.webp",
    "mega polo.webp",
    "minimoda.webp",
    "moda amora.webp",
    "orion.webp",
    "owzzy.webp",
    "pannu.webp",
    "supla nutri.webp"
];

export function Clients() {
    return (
        <section className="py-12 bg-bg overflow-hidden border-t border-ink/5">
            <Container>
                <div className="text-center mb-10">
                    <h2 className="font-display text-2xl font-bold text-ink">Marcas que aceleram com a Steeda</h2>
                    <p className="mt-2 text-muted">Marcas próprias que confiam em nossa torre de comando para crescer.</p>
                </div>

                {/* 
                    Marquee Wrapper 
                    Matches Partners.tsx style
                */}
                <div
                    className="relative flex w-full overflow-hidden mask-linear-fade [--gap:2rem] [--duration:40s]"
                    style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
                >
                    <div className="flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee">
                        {clients.map((client, i) => (
                            <div key={`a-${i}`} className="relative group flex h-28 w-48 shrink-0 items-center justify-center rounded-xl border border-transparent bg-white/40 p-5 transition-all hover:bg-white hover:shadow-lg hover:border-gray-100">
                                <img
                                    src={`/clients/${client}`}
                                    alt={client.replace('.webp', '')}
                                    className="h-full w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                    <div
                        aria-hidden="true"
                        className="flex min-w-full shrink-0 items-center justify-around gap-[var(--gap)] animate-marquee ml-[var(--gap)]"
                    >
                        {clients.map((client, i) => (
                            <div key={`b-${i}`} className="relative group flex h-28 w-48 shrink-0 items-center justify-center rounded-xl border border-transparent bg-white/40 p-5 transition-all hover:bg-white hover:shadow-lg hover:border-gray-100">
                                <img
                                    src={`/clients/${client}`}
                                    alt={client.replace('.webp', '')}
                                    className="h-full w-full object-contain grayscale opacity-60 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
