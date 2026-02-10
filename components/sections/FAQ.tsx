"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/constants";

const faqs = [
    {
        q: "O diagnóstico é realmente gratuito? O que eu recebo?",
        a: "Sim. O diagnóstico estratégico é gratuito e acontece em uma conversa objetiva. Você recebe um mapa do seu estágio atual, os principais gargalos priorizados por impacto e um plano inicial de próximos passos alinhado ao método F.A.B.R.I.C.A.",
    },
    {
        q: "A Steeda é agência de tráfego ou consultoria?",
        a: "A Steeda atua como consultoria e implementadora estratégica, com acompanhamento. O foco é estruturar a operação (processo, dados, CRM, jornada, stack) e guiar a evolução semanal com indicadores claros.",
    },
    {
        q: "Vocês implementam ou apenas recomendam?",
        a: "Implementamos. Além da direção e priorização, a Steeda também estrutura integrações, governança de CRM, automações e ajustes de arquitetura necessários para a operação rodar com consistência.",
    },
    {
        q: "A Steeda atende qualquer segmento ou só moda?",
        a: "Atendemos marcas próprias de diferentes segmentos. O método é baseado em estrutura operacional, jornada do cliente, dados, CRM e rotina de performance — aplicável a operações que querem previsibilidade e governança.",
    },
    {
        q: "Preciso ter um time interno para funcionar?",
        a: "Não precisa ser um time grande, mas é importante ter disponibilidade de execução. A Steeda traz direção, plano e governança, e a evolução acontece quando as melhorias são implementadas com consistência.",
    },
    {
        q: "O que significa “stack” na prática?",
        a: "É o conjunto de tecnologias e integrações que sustentam sua operação digital (dados, rastreio, CRM, automações, canais). A Steeda organiza essa pilha com lógica de processo e governança para evitar retrabalho e inconsistência."
    },
    {
        q: "O que são integrações via API e por que isso importa?",
        a: "Integrações via API conectam sistemas para que dados e ações conversem automaticamente (eventos, origem, cadastros, status, segmentações). Isso reduz falhas de rastreio, aumenta automação e melhora a qualidade das decisões."
    },
    {
        q: "Como vocês evitam que CRM e automações virem caos?",
        a: "Com governança: regras, segmentações, padronização de dados, jornadas bem definidas e validação contínua. CRM não é “disparo”. É relacionamento com lógica e cadência."
    },
    {
        q: "Em quanto tempo eu começo a ver evolução?",
        a: "A evolução começa quando as prioridades são implementadas. Em geral, ajustes de estrutura e governança geram clareza e impacto inicial rapidamente, enquanto ganhos consistentes em eficiência, conversão e recorrência se consolidam com a rotina semanal de performance."
    },
    {
        q: "A Steeda vai citar ou impor ferramentas específicas?",
        a: "Não. A Steeda trabalha com lógica de processo e dados, escolhendo soluções de acordo com o estágio da operação e com a melhor relação entre simplicidade, governança e resultado."
    },
    {
        q: "Como funciona o acompanhamento semanal?",
        a: "Acompanhamento semanal significa: leitura de indicadores, priorização por impacto, orientação do plano da semana, cobrança de execução e validação do impacto após a entrega. A operação evolui com cadência, não por “reunião mensal”."
    },
    {
        q: "Depois do diagnóstico, qual é o próximo passo?",
        a: "Se fizer sentido para o seu estágio, a Steeda apresenta o caminho recomendado: direção estratégica, plano de implementação e modelo de acompanhamento para evoluir por etapas do método F.A.B.R.I.C.A."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section id="faq" className="bg-white">
            <Container>
                <div className="mb-16 text-center">
                    <h2 className="font-display text-4xl font-bold tracking-tight text-ink mb-4">
                        Dúvidas frequentes
                    </h2>
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Entenda como a Steeda ajuda sua operação a evoluir com governança e previsibilidade.
                    </p>
                </div>

                <div className="grid gap-x-12 gap-y-4 lg:grid-cols-2 items-start">
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            faq={faq}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </div>

                <div className="mt-16 text-center flex flex-col items-center gap-6">
                    <p className="text-muted">
                        Ainda tem dúvidas?
                    </p>
                    <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                            Fale conosco no WhatsApp
                        </Button>
                    </a>
                </div>
            </Container>
        </Section>
    )
}

function FAQItem({ faq, isOpen, onClick }: { faq: { q: string, a: string }, isOpen: boolean, onClick: () => void }) {
    return (
        <div className={`transition-all duration-300 border-b border-border last:border-0 ${isOpen ? 'bg-gray-50/50' : 'bg-transparent'}`}>
            <button
                onClick={onClick}
                className="flex w-full items-start justify-between py-8 px-4 text-left font-medium text-ink transition-colors focus:outline-none hover:text-primary"
            >
                <span className={`text-base font-semibold leading-snug pr-4 ${isOpen ? 'text-primary' : 'text-ink'}`}>{faq.q}</span>
                {isOpen ? (
                    <Minus className="h-4 w-4 text-primary shrink-0 mt-1" />
                ) : (
                    <Plus className="h-4 w-4 text-muted/50 shrink-0 mt-1" />
                )}
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-4 pb-6 pt-0">
                    <p className="text-muted leading-relaxed text-sm">
                        {faq.a}
                    </p>
                </div>
            </div>
        </div>
    )
}
