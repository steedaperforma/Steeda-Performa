import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const fabricSteps = [
    {
        letter: "F",
        title: "Fundamentação estratégica",
        desc: "Diagnóstico do estágio, metas, posicionamento, público e prioridades.",
    },
    {
        letter: "A",
        title: "Arquitetura digital",
        desc: "Estrutura de e-commerce, páginas, rastreio e integrações para sustentar conversão.",
    },
    {
        letter: "B",
        title: "Base de comunidade",
        desc: "Construção e ativação de base (VIP), relacionamento e consistência de comunicação.",
    },
    {
        letter: "R",
        title: "Relacionamento automatizado",
        desc: "Automações, segmentações, réguas e jornadas para o cliente certo no momento certo.",
    },
    {
        letter: "I",
        title: "Impulsionamento com tráfego",
        desc: "Aquisição e remarketing com leitura por etapa do funil e foco em eficiência.",
    },
    {
        letter: "C",
        title: "Conversão e fidelização",
        desc: "CRO/UX, recompra, LTV (valor do tempo de vida) e estratégias de recorrência.",
    },
    {
        letter: "A",
        title: "Acompanhamento e análise",
        desc: "Rotina semanal de performance, decisões por KPI e otimização contínua.",
    },
];

export function MethodFabrica() {
    return (
        <Section id="method" className="bg-bg relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-[800px] w-[800px] bg-primary/3 rounded-full blur-3xl opacity-50" />

            <Container>
                <div className="mb-16 text-center animate-fade-in-up">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm bg-primary/10 px-3 py-1 rounded-full border border-primary/20">Metodologia Exclusiva</span>
                    <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl text-center">
                        O Método F.A.B.R.I.C.A.
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto text-lg text-muted leading-relaxed">
                        Não é apenas teoria. É um sistema de estruturação e aceleração
                        validado em mais de 300 operações.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {fabricSteps.map((step, idx) => (
                        <Card
                            key={step.letter + idx}
                            variant="glass"
                            hoverEffect="lift"
                            className="group relative overflow-hidden transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                            <CardContent className="p-8 h-full flex flex-col pt-8">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-bold text-primary transition-all group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                                    {step.letter}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-ink group-hover:text-primary transition-colors">{step.title}</h3>
                                <p className="text-base text-muted leading-relaxed">{step.desc}</p>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Result Card */}
                    <div className="col-span-1 md:col-span-1 lg:col-span-2 rounded-2xl bg-gradient-to-br from-primary to-orange-600 p-8 shadow-xl shadow-primary/20 flex flex-col justify-center items-start text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl relative overflow-hidden group animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 transition-transform duration-700 group-hover:scale-110" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
                        <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay" />

                        <div className="relative z-10 w-full">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wide mb-6 backdrop-blur-md border border-white/20 transition-all duration-300 group-hover:bg-white/30 cursor-default select-none">
                                <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                O Resultado Final
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Aceleração Contínua
                            </h3>

                            <p className="text-white/90 text-lg leading-relaxed max-w-xl font-medium">
                                Um acompanhamento completo que entrega <strong className="text-white bg-white/10 px-1 rounded">direção, execução e governança</strong> para transformar sua operação em uma máquina de vendas.
                            </p>


                        </div>
                    </div>
                </div>

                <div className="mt-16 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
                    <a href="#contact">
                        <Button size="lg" className="rounded-full h-14 px-12 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-transform duration-300">
                            Quero aplicar na minha operação
                        </Button>
                    </a>
                </div>

            </Container>
        </Section>
    );
}
