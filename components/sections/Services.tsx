import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

export function Services() {
    return (
        <Section id="services" className="bg-bg">
            <Container>
                <div className="mb-16 text-center">
                    <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                        Como a Steeda atua
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Consultoria */}
                    <Card className="border-border bg-white shadow-sm">
                        <CardHeader>
                            <div className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Direção</div>
                            <CardTitle className="text-xl">Consultoria estratégica</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted">
                                Diagnóstico, objetivos, indicadores, gargalos e prioridades por impacto. A Steeda define o plano e a ordem correta de execução para o time sair do achismo e ganhar clareza do que fazer.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Implementação */}
                    <Card className="border-border bg-white shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-primary px-3 py-1 text-xs font-bold text-white rounded-bl-lg">Core</div>
                        <CardHeader>
                            <div className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Estrutura</div>
                            <CardTitle className="text-xl">Implementação</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted">
                                Estrutura técnica e operacional: jornada, CRM, automações, integrações, tracking e ajustes críticos de arquitetura. Implementação com lógica de governança e documentação.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Gestão */}
                    <Card className="border-border bg-white shadow-sm">
                        <CardHeader>
                            <div className="mb-2 text-sm font-bold uppercase tracking-wider text-primary">Rotina</div>
                            <CardTitle className="text-xl">Gestão e acompanhamento</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted">
                                Ritual semanal de performance com análise, priorização, orientação e validação de impacto. O foco é evolução contínua e mensurável — não reuniões que não mudam nada.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </Section>
    );
}
