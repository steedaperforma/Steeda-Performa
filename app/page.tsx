import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";

import { About } from "@/components/sections/About";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { MethodFabrica } from "@/components/sections/MethodFabrica";
import { Structure } from "@/components/sections/Structure";
import { StackIntegrations } from "@/components/sections/StackIntegrations";

import { Media } from "@/components/sections/Media";
import { Clients } from "@/components/sections/Clients";
import { Event } from "@/components/sections/Event";
import { DiagnosticForm } from "@/components/sections/DiagnosticForm";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Signature } from "@/components/sections/Signature";
import { Partners } from "@/components/sections/Partners";

import { AnimatedSection } from "@/lib/animations";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <Partners />
      </AnimatedSection>

      <AnimatedSection>
        <Signature />
      </AnimatedSection>

      <AnimatedSection>
        <About />
      </AnimatedSection>

      <AnimatedSection>
        <Clients />
      </AnimatedSection>

      <AnimatedSection>
        <TargetAudience />
      </AnimatedSection>

      <AnimatedSection>
        <Structure />
      </AnimatedSection>

      <AnimatedSection>
        <MethodFabrica />
      </AnimatedSection>

      <AnimatedSection>
        <StackIntegrations />
      </AnimatedSection>

      <AnimatedSection>
        <Event />
      </AnimatedSection>

      <AnimatedSection>
        <Media />
      </AnimatedSection>

      <AnimatedSection>
        <DiagnosticForm />
      </AnimatedSection>

      <AnimatedSection>
        <FAQ />
      </AnimatedSection>

      <AnimatedSection>
        <Footer />
      </AnimatedSection>

      <WhatsAppFloat />
    </main>
  );
}
