import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Layers, Users, Database, BarChart3, Radio, ShoppingCart } from "lucide-react";

const items = [
    {
        icon: Users,
        title: "Jornada do cliente e narrativa",
        desc: "Estruturamos a comunicação por etapa do funil, alinhando mensagem, oferta e timing para reduzir ruído e aumentar conversão. Você ganha clareza do que comunicar em aquisição, consideração, conversão e pós-compra — com consistência entre canais.",
    },
    {
        icon: Layers,
        title: "Comunidade e relacionamento",
        desc: "Criamos cadência e campanhas para ativar base, aquecer público e gerar vendas com consistência. VIP não é “grupo parado”: é estratégia de relacionamento com agenda, segmentação e campanha por objetivo.",
    },
    {
        icon: Database,
        title: "CRM sem caos",
        desc: "Organizamos o CRM para virar máquina de relacionamento. Definimos regras, campos essenciais, segmentações e automações. Sem bagunça, sem retrabalho e com governança.",
    },
    {
        icon: BarChart3,
        title: "Performance e KPIs",
        desc: "Definimos quais indicadores importam para o seu estágio e como transformar número em decisão. Implementamos rotina de leitura e priorização para você saber o que fazer toda semana.",
    },
    {
        icon: Radio,
        title: "Integrações e stack",
        desc: "Desenhamos sua pilha de tecnologia com lógica de processo e dados. Integrações como arquitetura para garantir rastreio, automação e consistência operacional.",
    },
    {
        icon: ShoppingCart,
        title: "Arquitetura de e-commerce",
        desc: "Evoluímos a jornada de compra com foco em conversão e confiança. O objetivo é vender mais com o mesmo tráfego e preparar escala.",
    },
];

export function Structure() {
    return (
        <Section className="bg-bg relative overflow-hidden border-t border-ink/5">
            <Container className="relative z-10">
                <div className="mb-20 text-center max-w-3xl mx-auto">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Entregas</span>
                    <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl">
                        O que a Steeda estrutura
                    </h2>
                    <p className="mt-6 text-lg text-muted leading-relaxed">
                        Transformamos sua operação com ações práticas que geram previsibilidade e escala.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {items.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="group relative flex flex-col h-full bg-white rounded-3xl p-8 shadow-sm border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary/10">
                                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm group-hover:shadow-md">
                                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                                </div>

                                <h3 className="text-xl font-bold text-ink mb-4 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-muted leading-relaxed flex-grow">
                                    {item.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
