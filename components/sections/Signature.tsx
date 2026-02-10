
"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function Signature() {
    return (
        <Section className="py-24 md:py-32 bg-bg relative overflow-hidden group cursor-default">
            {/* Ambient Background Gradient that moves on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none translate-x-[-100%] group-hover:translate-x-[100%] ease-in-out" style={{ transitionDuration: '1.5s' }} />

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <img src="/logo.svg" alt="Steeda Logo" className="h-8 w-auto mx-auto mb-6 opacity-90" />

                    <h2 className={cn(
                        "font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight",
                        "transition-all duration-500 ease-out group-hover:scale-[1.01]"
                    )}>
                        <span className="inline text-transparent bg-clip-text bg-gradient-to-b from-ink to-ink/70 mb-2">
                            "Crescimento digital não é ter um canal.{" "}
                        </span>
                        <span className="inline bg-clip-text text-transparent bg-gradient-to-r from-[#ff4800] via-[#ff6b00] to-[#ff8c42] animate-shimmer bg-[length:200%_auto]">
                            É ter uma operação conectada com processo, dados e rotina de performance."
                        </span>
                    </h2>

                    <div className="w-32 h-1.5 bg-gradient-to-r from-[#ff4800] to-[#ff8c42] mx-auto rounded-full shadow-[0_0_20px_rgba(255,72,0,0.5)] transition-all duration-500 group-hover:w-64" />
                </div>
            </Container>
        </Section>
    );
}
