import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const forYou = [
    "você tem marca própria e quer crescer com previsibilidade",
    "seu digital está “rodando”, mas sem governança e KPI (indicadores) claros",
    "seu time executa muito e mede pouco (ou mede e não decide)",
    "você quer integrações e automações sem virar caos operacional",
    "você precisa de direção para priorizar o que realmente move receita, margem e recorrência",
];

const notForYou = [
    "você busca solução pontual e sem acompanhamento",
    "você não tem disponibilidade para implementar melhorias com consistência",
    "você quer “a ferramenta do mês” sem processo e sem rotina de indicadores",
    "você quer apenas opinião, sem plano, priorização e validação de impacto",
];

export function TargetAudience() {
    return (
        <Section id="target" className="bg-bg relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-ink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>

            <Container className="relative z-10">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                        Para quem é a Steeda
                    </h2>
                    <p className="mt-4 text-lg text-muted">
                        Descubra se nossa metodologia é o que sua operação precisa agora.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                    {/* For You */}
                    <div className="rounded-2xl bg-white p-8 shadow-sm border-2 border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-150" />

                        <div className="relative z-10">
                            <div className="mb-8 flex flex-col items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 mb-4 shadow-inner">
                                    <Check className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-ink">Isso é para você se...</h3>
                            </div>
                            <ul className="space-y-4">
                                {forYou.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-base text-ink/80 leading-relaxed bg-green-50/50 p-3 rounded-lg border border-green-100/50">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <div className="w-5 h-5 rounded-full bg-green-200 flex items-center justify-center">
                                                <Check className="h-3 w-3 text-green-700" strokeWidth={3} />
                                            </div>
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Not For You */}
                    <div className="rounded-2xl bg-white p-8 shadow-sm border-2 border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-transform duration-500 group-hover:scale-150" />

                        <div className="relative z-10">
                            <div className="mb-8 flex flex-col items-center text-center">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600 mb-4 shadow-inner">
                                    <X className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-ink">Não é para você se...</h3>
                            </div>
                            <ul className="space-y-4">
                                {notForYou.map((item, i) => (
                                    <li key={i} className="flex gap-4 text-base text-muted leading-relaxed bg-gray-50 p-3 rounded-lg border border-gray-100">
                                        <div className="flex-shrink-0 mt-0.5">
                                            <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center">
                                                <X className="h-3 w-3 text-red-700" strokeWidth={3} />
                                            </div>
                                        </div>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
