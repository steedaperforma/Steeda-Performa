"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Event() {
    const [selectedOption, setSelectedOption] = useState<"guest" | "sponsor" | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Touch Navigation State
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const minSwipeDistance = 50;

    const getLink = () => {
        if (selectedOption === "guest") return "https://forms.monday.com/forms/e7fc2c6e546f99eadfc7ad22b3e38118?r=use1";
        if (selectedOption === "sponsor") return "https://forms.monday.com/forms/a7be3b727d526028f26cb1a2a8844b7a?r=use1";
        return "#";
    };

    const nextImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }, []);

    const prevImage = useCallback(() => {
        setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, []);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextImage, prevImage]);

    // Touch Handlers
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) nextImage();
        if (isRightSwipe) prevImage();
    };

    return (
        <Section id="experience" className="bg-neutral-950 text-white relative overflow-hidden py-24">
            {/* Optimized Background - Removed heavy blurs and external assets */}
            <div className="absolute inset-0 bg-neutral-950 pointer-events-none select-none">
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-950" />

                {/* Simplified Gloss Effect - Static instead of heavy pulse */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-orange-500/5 blur-[100px] rounded-full mix-blend-screen" />

                {/* Performance Optimized Noise Texture (Base64) */}
                <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                {/* Simplified Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)] opacity-20" />
            </div>

            <Container className="relative z-10">
                {/* Header & Content Section */}
                <div className="grid lg:grid-cols-1 gap-12 text-center mb-16">
                    <div>
                        <span className="inline-block rounded-full bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-500 mb-6 border border-orange-500/20">
                            Sessão do Evento
                        </span>
                        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                            Steeda Experience: <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200">Avanço Digital 2026</span>
                        </h2>

                        <div className="max-w-3xl mx-auto space-y-6 text-xl text-gray-300">
                            <p>
                                A Steeda Experience reúne empresários de marcas próprias, líderes de operação e soluções parceiras para discutir e aplicar, na prática, processo, tecnologia e performance.
                            </p>
                            <p className="text-lg text-gray-400">
                                É um ambiente de alto nível para alinhar estratégia, stack, governança e rotina de execução com foco em crescimento mensurável.
                            </p>
                        </div>
                    </div>

                    {/* Participation Form */}
                    <div className="max-w-2xl mx-auto w-full bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                        <p className="text-white font-medium mb-6 text-center border-b border-white/10 pb-4">
                            A próxima edição está em preparação e terá vagas limitadas.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            <div
                                onClick={() => setSelectedOption("guest")}
                                className={cn(
                                    "flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 cursor-pointer border text-center h-full group",
                                    selectedOption === "guest"
                                        ? "bg-orange-500/10 border-orange-500 shadow-[0_0_15px_rgba(255,80,0,0.1)]"
                                        : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10"
                                )}
                            >
                                <div className={cn(
                                    "h-6 w-6 rounded-full border flex items-center justify-center shrink-0 transition-colors mb-3",
                                    selectedOption === "guest" ? "border-orange-500 bg-orange-500" : "border-white/30 group-hover:border-white/50"
                                )}>
                                    {selectedOption === "guest" && <div className="h-2.5 w-2.5 rounded-full bg-white" />}
                                </div>
                                <span className={cn("text-sm", selectedOption === "guest" ? "text-white font-medium" : "text-gray-300")}>
                                    Quero participar como convidado
                                </span>
                            </div>

                            <div
                                onClick={() => setSelectedOption("sponsor")}
                                className={cn(
                                    "flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-200 cursor-pointer border text-center h-full group",
                                    selectedOption === "sponsor"
                                        ? "bg-orange-500/10 border-orange-500 shadow-[0_0_15px_rgba(255,80,0,0.1)]"
                                        : "bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10"
                                )}
                            >
                                <div className={cn(
                                    "h-6 w-6 rounded-full border flex items-center justify-center shrink-0 transition-colors mb-3",
                                    selectedOption === "sponsor" ? "border-orange-500 bg-orange-500" : "border-white/30 group-hover:border-white/50"
                                )}>
                                    {selectedOption === "sponsor" && <div className="h-2.5 w-2.5 rounded-full bg-white" />}
                                </div>
                                <span className={cn("text-sm", selectedOption === "sponsor" ? "text-white font-medium" : "text-gray-300")}>
                                    Quero patrocinar como parceiro
                                </span>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            disabled={!selectedOption}
                            asChild={!!selectedOption}
                            className={cn(
                                "w-full rounded-full h-12 text-base font-medium transition-all duration-300",
                                selectedOption
                                    ? "bg-orange-600 hover:bg-orange-500 text-white shadow-[0_0_20px_rgba(255,80,0,0.3)] hover:shadow-[0_0_30px_rgba(255,80,0,0.5)] transform hover:-translate-y-1"
                                    : "bg-white/10 text-gray-500 cursor-not-allowed"
                            )}
                        >
                            {selectedOption ? (
                                <a href={getLink()} target="_blank" rel="noopener noreferrer">
                                    Entrar na Lista de Espera
                                </a>
                            ) : (
                                "Selecione uma opção acima"
                            )}
                        </Button>
                    </div>
                </div>

                {/* Full Width Gallery Section */}
                <div className="relative group select-none max-w-5xl mx-auto">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-orange-500 rounded-full" />
                            Galeria do Evento
                        </h3>
                        <div className="flex gap-2">
                            <button
                                onClick={prevImage}
                                className="p-2 rounded-full bg-white/5 hover:bg-orange-600 text-white border border-white/10 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={nextImage}
                                className="p-2 rounded-full bg-white/5 hover:bg-orange-600 text-white border border-white/10 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Main Featured Image - Cinematic Aspect Ratio */}
                    <div
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                        className="relative aspect-[4/5] md:aspect-[21/10] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 mb-4 group-hover:border-white/20 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                        <Image
                            key={currentImageIndex}
                            src={`/images/event/${galleryImages[currentImageIndex]}`}
                            alt={`Steeda Experience ${currentImageIndex + 1}`}
                            fill
                            className="object-contain bg-black/80 transition-all duration-500 animate-in fade-in zoom-in-95"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1000px"
                            priority={true}
                        />

                        {/* Overlay Gradient for Text readability if needed */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs text-white/80 font-mono z-10">
                            {currentImageIndex + 1} / {galleryImages.length}
                        </div>
                    </div>

                    {/* Thumbnails Strip */}
                    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mask-linear-fade">
                        {galleryImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={cn(
                                    "relative h-16 w-24 shrink-0 rounded-lg overflow-hidden border transition-all duration-300",
                                    currentImageIndex === idx
                                        ? "border-orange-500 ring-2 ring-orange-500/30 opacity-100 scale-105 z-10"
                                        : "border-white/10 opacity-40 hover:opacity-100 hover:border-white/30 grayscale hover:grayscale-0"
                                )}
                            >
                                <Image
                                    src={`/images/event/${img}`}
                                    alt={`Thumbnail ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="96px"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}

const galleryImages = [
    "DSC08480.ARW.webp", "DSC08486.ARW.webp", "DSC08489.ARW.webp", "DSC08491.ARW.webp",
    "DSC08494.ARW.webp", "DSC08495.ARW.webp", "DSC08497.ARW.webp", "DSC08498.ARW.webp",
    "DSC08499.ARW.webp", "DSC08500.ARW.webp", "DSC08512.ARW.webp", "DSC08522.ARW.webp",
    "DSC08527.ARW.webp", "DSC08530.ARW.webp", "DSC08533.ARW.webp", "DSC08535.ARW.webp"
];
