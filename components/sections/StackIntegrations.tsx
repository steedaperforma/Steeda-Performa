import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Check, Zap } from "lucide-react";

const problemsResolved = [
    "reduz falhas de rastreio e inconsistências de origem entre canais (UTMs, eventos e atribuição)",
    "elimina retrabalho do time com integrações e automações que conversam entre si",
    "cria uma base utilizável (captura, enriquecimento e segmentação) para relacionamento e recompra",
    "acelera decisões com indicadores limpos e comparáveis semana após semana",
    "sustenta previsibilidade operacional com rotina, padrões e documentação",
];

const keyPoints = [
    "Integrações via API e eventos para capturar comportamento, origem e etapa do funil",
    "Padronização de tracking e governança de dados (UTMs, nomeação, eventos, campos e regras)",
    "Automações e segmentações (RFM, recorrência, VIP) para ativar base com cadência e intenção"
];

export function StackIntegrations() {
    return (
        <Section className="bg-neutral-950 text-white overflow-hidden relative">
            {/* Ambient Background & Reflections - Warm Tones */}
            <div className="absolute top-0 right-0 h-[800px] w-[800px] bg-orange-500/10 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-[600px] w-[600px] bg-red-900/10 rounded-full blur-[100px] opacity-10 translate-y-1/3 -translate-x-1/4 pointer-events-none" />

            <Container className="relative z-10">
                <div className="grid gap-16 lg:grid-cols-2 items-center">

                    {/* Left Column: Content */}
                    <div className="relative">
                        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-bold text-primary mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(255,72,0,0.2)]">
                            <Zap className="mr-2 h-4 w-4" fill="currentColor" />
                            Diferencial Hard
                        </div>

                        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-6 leading-tight">
                            Agência Stack: <br />
                            <span className="text-gray-400">tecnologia como operação</span> <br />
                            <span className="text-primary/90 text-2xl md:text-3xl">(não como ferramenta)</span>
                        </h2>

                        <div className="prose prose-invert prose-lg text-gray-300 mb-10 leading-relaxed">
                            <p>
                                A Steeda é uma agência stack: a gente conecta estratégia com tecnologia aplicada para a operação rodar com consistência. Isso significa estruturar e integrar as camadas que sustentam crescimento — dados, rastreio, CRM, automações e canais — com regras claras, padronização e rotina de performance.
                            </p>
                            <p className="font-medium text-white border-l-4 border-primary pl-4">
                                O objetivo é simples: tirar a empresa do modo “remendo” e colocar em modo governança, onde marketing, comercial e pós-venda trabalham no mesmo sistema de decisões.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <span className="w-8 h-1 bg-primary rounded-full" />
                                O que isso resolve na prática
                            </h3>
                            <ul className="space-y-4">
                                {problemsResolved.map((item, i) => (
                                    <li key={i} className="flex gap-4 items-start group">
                                        <div className="mt-1.5 h-2 w-2 rounded-full bg-primary shrink-0 group-hover:bg-white transition-colors duration-300 shadow-[0_0_10px_rgba(255,72,0,0.5)]" />
                                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Reflective Card */}
                    <div className="relative lg:sticky lg:top-8">
                        {/* Glossy Card Effect */}
                        <div className="relative rounded-3xl overflow-hidden p-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-3xl opacity-50 pointer-events-none" />

                            <div className="relative rounded-[22px] bg-black/40 backdrop-blur-xl border border-white/10 p-8 lg:p-12 shadow-2xl lg:min-h-[540px] flex flex-col justify-center">
                                {/* Light Reflection */}
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                                <h3 className="text-2xl font-bold text-white mb-8 lg:mb-12 border-b border-white/10 pb-4">
                                    Pontos-chave
                                </h3>

                                <ul className="space-y-8 lg:space-y-12">
                                    {keyPoints.map((point, i) => (
                                        <li key={i} className="relative pl-6">
                                            {/* Connecting Line effect */}
                                            {i !== keyPoints.length - 1 && (
                                                <div className="absolute left-[11px] top-8 bottom-[-48px] w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
                                            )}

                                            <div className="absolute left-0 top-1.5 h-[22px] w-[22px] rounded-full border border-primary/50 bg-primary/10 flex items-center justify-center shadow-[0_0_10px_rgba(255,72,0,0.3)]">
                                                <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                            </div>

                                            <p className="text-lg text-gray-200 font-medium leading-snug">
                                                {point}
                                            </p>
                                        </li>
                                    ))}
                                </ul>

                                {/* Bottom Glow */}
                                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </Section>
    );
}
