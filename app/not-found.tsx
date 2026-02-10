import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
    return (
        <Section className="min-h-[60vh] flex items-center justify-center">
            <Container className="text-center">
                <h2 className="font-display text-4xl font-bold text-primary mb-4">404</h2>
                <h3 className="font-display text-2xl font-bold text-ink mb-6">Página não encontrada</h3>
                <p className="text-muted text-lg mb-8 max-w-md mx-auto">
                    A página que você está procurando não existe ou foi movida.
                </p>
                <Link href="/">
                    <Button>Voltar para o início</Button>
                </Link>
            </Container>
        </Section>
    );
}
