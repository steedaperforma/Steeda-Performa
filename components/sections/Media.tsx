"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const mediaItems = [
    {
        source: "Interage Goiânia",
        title: "Steeda promove imersão exclusiva em vinícola e conecta empresários goianos a plataformas líderes em tecnologia",
        url: "https://interagegoiania.com.br/steeda-promove-imersao-exclusiva-em-vinicola-e-conecta-empresarios-goianos-a-plataformas-lideres-em-tecnologia/",
        color: "from-blue-600 to-indigo-900"
    },
    {
        source: "De Minuto a Minuto",
        title: "Steeda promove imersão em vinícola e conecta empresários a plataformas líderes em tecnologia",
        url: "https://www.deminutoaminuto.com.br/2026/01/22/steeda-promove-imersao-em-vinicola-e-conecta-empresarios-a-plataformas-lideres-em-tecnologia/",
        color: "from-orange-500 to-red-900"
    },
    {
        source: "A Redação",
        title: "Autoridades prestigiam posse da nova diretoria da Faculdade de Medicina da UFG",
        url: "https://aredacao.com.br/autoridades-prestigiam-posse-da-nova-diretoria-da-faculdade-de-medicina-da-ufg/",
        color: "from-red-600 to-red-900"
    },
    {
        source: "Curta Mais",
        title: "Evento em Goiás aposta em tour luxuoso por vinícola para atrair empresários",
        url: "https://curtamais.com.br/goiania/evento-em-goias-aposta-em-tour-luxuoso-por-vinicola-para-atrair-empresarios/",
        color: "from-pink-600 to-purple-900"
    },
    {
        source: "Portal Notícias Goiás",
        title: "Projeto Dominguinho reúne João Gomes, Mestrinho e Jota.Pê em Goiânia",
        url: "https://portalnoticiasgoias.com.br/projeto-dominguinho-reune-joao-gomes-mestrinho-e-jota-pe-em-goiania/",
        color: "from-green-600 to-emerald-900"
    },
    {
        source: "Informe 62",
        title: "Evento em Goiás aposta em tour luxuoso por vinícola para atrair empresários",
        url: "https://informe62.com.br/evento-em-goias-aposta-em-tour-luxuoso-por-vinicola-para-atrair-empresarios-curta-mais/",
        color: "from-yellow-600 to-orange-900"
    },
    {
        source: "O Manuscrito",
        title: "Steeda promove imersão exclusiva em vinícola",
        url: "https://omanuscritonoticias.blogspot.com/2026/01/steeda-promove-imersao-exclusiva-em.html",
        color: "from-zinc-600 to-zinc-900"
    },
    {
        source: "DM.com.br",
        title: "Steeda promove imersão exclusiva em vinícola e conecta empresários goianos",
        url: "https://www.dm.com.br/cotidiano/steeda-promove-imersao-exclusiva-em-vinicola-e-conecta-empresarios-goianos-a-plataformas-lideres-em",
        color: "from-blue-500 to-blue-800"
    },
    {
        source: "Na Rede Notícias",
        title: "Steeda promove imersão exclusiva em vinícola e conecta empresários",
        url: "https://naredenoticias.com/noticia/149/steeda-promove-imersao-exclusiva-em-vinicola-e-conecta-empresarios-goianos-a-lideres-em-tecnologia-digital",
        color: "from-cyan-600 to-cyan-900"
    },
    {
        source: "Diário do Estado GO",
        title: "Cobertura completa do evento (PDF)",
        url: "https://diariodoestadogo.com.br/wp-content/uploads/2026/02/3922.pdf",
        color: "from-slate-700 to-slate-900"
    },
    {
        source: "A Redação",
        title: "Público goianiense lota show do projeto Dominguinho",
        url: "https://aredacao.com.br/publico-goianiense-lota-show-do-projeto-dominguinho-em-noite-de-forro-veja-como-foi/",
        color: "from-red-600 to-red-900"
    },
    {
        source: "STG News",
        title: "Steeda promove imersão em vinícola e conecta empresários goianos a líderes em tecnologia",
        url: "https://stgnews.com.br/steeda-promove-imersao-em-vinicola-e-conecta-empresarios-goianos-a-lideres-em-tecnologia/",
        color: "from-purple-600 to-indigo-900"
    },
];

export function Media() {
    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <Section className="bg-bg border-y border-border overflow-hidden">
            <Container>
                <div className="mb-12 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Na mídia
                        </h2>
                        <p className="mt-2 text-muted">O que estão falando sobre a Steeda</p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className="flex gap-2 hidden md:flex">
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-border hover:border-primary transition-colors"
                            onClick={() => scroll('left')}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            className="rounded-full border-border hover:border-primary transition-colors"
                            onClick={() => scroll('right')}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div className="relative -mx-4 px-4 md:-mx-8 md:px-8">
                    {/* Mobile Arrows (Overlay) */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10 md:hidden">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full shadow-lg bg-white/90 backdrop-blur-sm border border-border h-10 w-10 text-ink"
                            onClick={() => scroll('left')}
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </Button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10 md:hidden">
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full shadow-lg bg-white/90 backdrop-blur-sm border border-border h-10 w-10 text-ink"
                            onClick={() => scroll('right')}
                        >
                            <ChevronRight className="h-5 w-5" />
                        </Button>
                    </div>

                    <div
                        ref={scrollRef}
                        className="grid grid-rows-2 grid-flow-col gap-6 overflow-x-auto pb-8 snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <style jsx global>{`
                            .hide-scrollbar::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>
                        {mediaItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-[300px] md:w-[350px] bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl snap-start hide-scrollbar"
                            >
                                {/* Cover Placeholder */}
                                <div className={`h-40 w-full bg-gradient-to-br ${item.color} relative p-6 flex flex-col justify-between group-hover:brightness-110 transition-all duration-500`}>
                                    <div className="bg-white/10 backdrop-blur-md self-start px-3 py-1 rounded-full border border-white/20 text-xs font-bold text-white uppercase tracking-wider">
                                        {item.source}
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-ink mb-4 line-clamp-3 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center text-sm font-bold text-primary">
                                        Ler matéria <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
