"use client";

import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    variable: "--font-display",
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const manrope = Manrope({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["400", "500", "600"],
});

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html lang="pt-BR">
            <body className={`${spaceGrotesk.variable} ${manrope.variable} antialiased font-body bg-bg text-ink`}>
                <div className="min-h-screen flex items-center justify-center p-4">
                    <div className="text-center">
                        <h2 className="font-display text-4xl font-bold text-destructive mb-4">
                            Erro Crítico
                        </h2>
                        <p className="text-muted text-lg mb-8">
                            Ocorreu um erro fatal na aplicação.
                        </p>
                        <button
                            onClick={() => reset()}
                            className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
                        >
                            Tentar novamente
                        </button>
                    </div>
                </div>
            </body>
        </html>
    );
}
