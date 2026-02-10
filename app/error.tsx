"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        if (process.env.NODE_ENV === "development") {
            console.error(error);
        }
    }, [error]);

    return (
        <Section className="min-h-[60vh] flex items-center justify-center">
            <Container className="text-center">
                <h2 className="font-display text-3xl font-bold text-destructive mb-4">
                    Algo deu errado!
                </h2>
                <p className="text-muted text-lg mb-8 max-w-md mx-auto">
                    Encontramos um erro inesperado. Tente recarregar a página.
                </p>
                <div className="flex justify-center gap-4">
                    <Button onClick={() => reset()}>Tentar novamente</Button>
                    <Button variant="outline" onClick={() => window.location.href = "/"}>
                        Voltar para o início
                    </Button>
                </div>
            </Container>
        </Section>
    );
}
