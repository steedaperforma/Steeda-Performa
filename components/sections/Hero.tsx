"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <Section className="relative bg-[#f8fafc] text-neutral-950 overflow-hidden min-h-[90vh] flex flex-col justify-center items-center pt-24 md:pt-32 pb-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none select-none">
                {/* Noise Texture - Inverted for Light Mode */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                {/* Grid Pattern - Gray for Light Mode */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-40" />
            </div>

            <Container className="relative z-10 flex-grow flex flex-col justify-center">
                <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">

                    {/* Eyebrow Label */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-sm font-medium text-orange-600 shadow-sm">
                        Consultoria de Alta Performance
                    </div>

                    {/* Main Headline */}
                    <h1 className="font-display text-[2.5rem] sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] text-neutral-900 mb-8 break-words">
                        <span className="inline md:block">
                            Estratégia e stack
                        </span>{' '}
                        <span className="inline md:block">
                            para <span className="text-orange-600">marcas próprias</span>
                        </span>{' '}
                        <span className="inline md:block">
                            crescerem com
                        </span>{' '}
                        <span className="inline md:block">
                            previsibilidade.
                        </span>
                    </h1>

                    {/* Description / Lead */}
                    <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
                        Atuamos como sua torre de comando: conectamos processo, times, dados e tecnologia para transformar operações digitais em máquinas de resultado.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 mb-20">
                        <Button
                            size="lg"
                            className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-14 text-base shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 w-full sm:w-auto"
                            asChild
                        >
                            <a href="#contact">
                                Quero um diagnóstico (gratuito)
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 rounded-full px-8 h-14 text-base bg-white/50 backdrop-blur-sm w-full sm:w-auto"
                            asChild
                        >
                            <a href="#method">
                                <PlayCircle className="mr-2 w-5 h-5 text-orange-600" />
                                Ver como funciona
                            </a>
                        </Button>
                    </div>

                    {/* Pillars - Pill Design (Flow Layout) */}
                    <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                        {pillars.map((pillar, idx) => (
                            <div
                                key={idx}
                                className="px-5 py-2.5 rounded-full bg-white border border-neutral-200 shadow-sm text-sm text-neutral-600 font-medium hover:scale-105 hover:border-orange-400 hover:bg-orange-50 hover:text-neutral-900 hover:shadow-lg hover:shadow-orange-500/15 transition-all duration-300 cursor-default select-none animate-in fade-in slide-in-from-bottom-4"
                                style={{ animationDelay: `${idx * 100}ms` }}
                            >
                                {pillar}
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}

const pillars = [
    "Planejamento mensal",
    "Performance (mídia e estratégia por funil)",
    "CRM & Retenção (governança + automações)",
    "Jornada & Narrativa (cadência que vira receita)",
    "CRO/UX (otimização contínua)",
    "Integrações via API (dados e rastreio)",
    "Acompanhamento semanal (priorização e cobrança)"
];
