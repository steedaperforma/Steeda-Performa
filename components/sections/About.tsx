import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Instagram, ArrowRight } from "lucide-react";

export function About() {
    return (
        <Section id="about" className="bg-bg">
            <Container>
                <div className="grid gap-12 lg:grid-cols-[45%_55%] lg:gap-12">
                    <div>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                            Quem é a Steeda
                        </h2>
                        <div className="mt-8 space-y-8 text-lg text-muted">
                            <p className="leading-relaxed">
                                A Steeda é uma <strong className="text-ink">consultora e implementadora estratégica</strong> para
                                marcas próprias. Operamos como torre de comando, conectando
                                processo, times e tecnologias para transformar o digital em
                                resultado mensurável, com rotina, governança e direção clara do
                                que priorizar.
                            </p>
                            <div className="border-l-4 border-primary pl-6 py-1">
                                <p className="italic text-ink">
                                    "Não é sobre 'fazer mais posts'. É sobre transformar o digital em
                                    uma operação com cadência, indicadores e execução que melhora toda
                                    semana."
                                </p>
                            </div>

                            {/* Stylized Cycle Diagram */}
                            <div className="mt-10">
                                <p className="font-display text-xs font-bold text-primary uppercase tracking-widest mb-8 text-center sm:text-left">
                                    Seu ciclo semanal com a Steeda:
                                </p>

                                <div className="relative">
                                    <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
                                        {[
                                            { step: "01", label: "Análise" },
                                            { step: "02", label: "Priorização" },
                                            { step: "03", label: "Execução" },
                                            { step: "04", label: "Otimização" }
                                        ].map((item, index) => (
                                            <div key={index} className="group flex flex-col items-center justify-center bg-white border border-ink/5 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 hover:border-primary/20 relative cursor-default">
                                                <span className="text-2xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                                    {item.step}
                                                </span>
                                                <span className="text-sm font-bold text-ink text-center">
                                                    {item.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 h-full">
                        <a
                            href="https://www.instagram.com/caiosteeda/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group h-full"
                        >
                            <Card className="bg-white h-full shadow-sm group-hover:shadow-md transition-shadow duration-300 overflow-hidden border-ink/5 flex flex-col">
                                <div className="relative h-96 w-full overflow-hidden bg-muted/10">
                                    <Image
                                        src="/caio.webp"
                                        alt="Caio Moreira"
                                        width={600}
                                        height={800}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                                        priority
                                    />
                                </div>
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-display text-lg font-bold text-ink mb-1 uppercase tracking-wide text-primary">Caio Moreira</h3>
                                    <p className="text-xs font-semibold text-ink/60 mb-3">CEO & Fundador</p>
                                    <p className="text-sm leading-relaxed text-muted mb-6">
                                        Administrador e especialista em Marketing e Inteligência Digital, atua como consultor empresarial e palestrante, com experiência prática em estruturação e crescimento de operações no digital.
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                                        <Instagram size={14} />
                                        <span>Instagram</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        </a>

                        <a
                            href="https://www.instagram.com/tamirissteeda/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group h-full"
                        >
                            <Card className="bg-white h-full shadow-sm group-hover:shadow-md transition-shadow duration-300 overflow-hidden border-ink/5 flex flex-col">
                                <div className="relative h-96 w-full overflow-hidden bg-muted/10">
                                    <Image
                                        src="/tamiris.webp"
                                        alt="Tamiris Moreira"
                                        width={600}
                                        height={800}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                                        priority
                                    />
                                </div>
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <h3 className="font-display text-lg font-bold text-ink mb-1 uppercase tracking-wide text-primary">Tamiris Moreira</h3>
                                    <p className="text-xs font-semibold text-ink/60 mb-3">Fundadora</p>
                                    <p className="text-sm leading-relaxed text-muted mb-6">
                                        Publicitária, especialista em comunicação e vendas. Lidera a frente de relacionamento, posicionamento e integração entre estratégia e execução.
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wide opacity-80 group-hover:opacity-100 transition-opacity">
                                        <Instagram size={14} />
                                        <span>Instagram</span>
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    </div>
                </div>
            </Container>
        </Section >
    );
}
