import { Container } from "@/components/ui/Container";
import { MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { CONTACT, ADDRESS, COMPANY } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="bg-neutral-950 text-white pt-20 pb-8">
            <Container>
                {/* Top Section: Brand + Columns */}
                <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr] mb-16">
                    {/* Brand Column */}
                    <div className="space-y-5">
                        <Link href="/" className="block">
                            <img
                                src="/logo-dark.svg"
                                alt="Steeda Performa"
                                className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <p className="text-sm text-neutral-400 leading-relaxed max-w-xs">
                            Consultoria e implementação estratégica para operações que buscam governança, previsibilidade e resultado mensurável.
                        </p>
                        <div className="flex gap-3 pt-2">
                            <a
                                href={CONTACT.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-300 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                <Instagram className="h-[18px] w-[18px]" />
                            </a>
                            <a
                                href={CONTACT.whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-300 hover:bg-[#25D366] hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                <MessageCircle className="h-[18px] w-[18px]" />
                            </a>
                            <a
                                href={`mailto:${CONTACT.email}`}
                                aria-label="Email"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-neutral-300 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-pointer"
                            >
                                <Mail className="h-[18px] w-[18px]" />
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">Navegação</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#about" className="text-neutral-400 hover:text-orange-400 transition-colors">Sobre</Link></li>
                            <li><Link href="#method" className="text-neutral-400 hover:text-orange-400 transition-colors">Método F.A.B.R.I.C.A.</Link></li>
                            <li><Link href="#target" className="text-neutral-400 hover:text-orange-400 transition-colors">Serviços</Link></li>
                            <li><Link href="#experience" className="text-neutral-400 hover:text-orange-400 transition-colors">Steeda Experience</Link></li>
                            <li><Link href="#faq" className="text-neutral-400 hover:text-orange-400 transition-colors">Dúvidas Frequentes</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">Recursos</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#contact" className="text-neutral-400 hover:text-orange-400 transition-colors">Diagnóstico Gratuito</Link></li>
                            <li>
                                <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-orange-400 transition-colors">
                                    Fale pelo WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${CONTACT.email}`} className="text-neutral-400 hover:text-orange-400 transition-colors">
                                    Contato por Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Location */}
                    <div>
                        <h4 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-5">Localização</h4>
                        <div className="flex items-start gap-3 text-sm text-neutral-400">
                            <MapPin className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                            <div>
                                <p className="leading-relaxed">
                                    {ADDRESS.street}<br />
                                    {ADDRESS.neighborhood}, {ADDRESS.city} - {ADDRESS.state}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-neutral-400 mt-4">
                            <MessageCircle className="h-5 w-5 text-orange-500 shrink-0" />
                            <a href={CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors">
                                {CONTACT.phoneFormatted}
                            </a>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-neutral-400 mt-4">
                            <Mail className="h-5 w-5 text-orange-500 shrink-0" />
                            <a href={`mailto:${CONTACT.email}`} className="hover:text-orange-400 transition-colors">
                                {CONTACT.email}
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-neutral-500">
                        <span>© 2026 Steeda Performa.</span>
                        <span className="hidden md:inline">·</span>
                        <span>{COMPANY.cnpj}</span>
                    </div>
                    <p className="text-xs text-neutral-600">
                        Desenvolvido com excelência & performance por STEEDA.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
