import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";

const deliverables = [
    "Leitura do estágio atual e gargalos priorizados",
    "Plano de 7, 30 e 60 dias para destravar receita",
    "Definição da stack de tecnologia ideal",
    "Próximos passos para aplicar o método Steeda",
];

export function DiagnosticForm() {
    return (
        <Section id="contact" className="bg-bg border-t border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />

            <Container className="relative z-10">
                <div className="flex flex-col items-center gap-16">
                    {/* Header & Value Proposition */}
                    <div className="w-full max-w-4xl text-center">
                        <h2 className="font-display text-4xl font-bold tracking-tight text-ink mb-6 sm:text-5xl">
                            Diagnóstico estratégico <span className="text-primary inline-flex relative pl-2">
                                (gratuito)
                                <svg className="absolute w-full h-2 bottom-1 left-2 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" /></svg>
                            </span>
                        </h2>
                        <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto mb-12">
                            Mapeamos seus gargalos, definimos prioridades e entregamos um plano de ação prático baseado no método que já escalou mais de 300 marcas.
                        </p>

                        {/* Deliverables Cards */}
                        <div className="mb-12">
                            <h3 className="text-lg font-bold text-ink mb-8 flex items-center justify-center gap-2 uppercase tracking-wide text-sm opacity-80">
                                O que você recebe na sessão:
                            </h3>
                            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 text-left">
                                {deliverables.map((item, i) => (
                                    <div key={i} className="bg-white dark:bg-zinc-900/50 p-6 rounded-xl border border-border/50 shadow-sm hover:border-primary/50 transition-all group h-full flex flex-col items-start gap-4 hover:-translate-y-1 hover:shadow-md">
                                        <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                                            <CheckCircle2 className="h-5 w-5" />
                                        </div>
                                        <p className="text-sm text-ink leading-relaxed font-semibold">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />
                    </div>

                    {/* Form Container */}
                    <div className="w-full max-w-3xl">
                        <Card variant="glass" className="p-1 sm:p-2 border-primary/20 bg-white/80 dark:bg-zinc-900/80 shadow-2xl shadow-primary/5">
                            <div className="rounded-xl overflow-hidden bg-white dark:bg-black relative">
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-orange-400 to-primary animate-shimmer" />
                                <iframe
                                    src="https://forms.monday.com/forms/embed/e4ec85d5a2176b6da902d5d583eeaa11?r=use1"
                                    width="100%"
                                    height="1000"
                                    loading="lazy"
                                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                                    style={{ border: 0, background: 'transparent' }}
                                    className="w-full"
                                    title="Diagnóstico Form"
                                ></iframe>
                            </div>
                        </Card>
                        <p className="text-center text-sm text-muted mt-6 flex items-center justify-center gap-1">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            Seus dados estão seguros e não enviaremos spam.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    )
}
