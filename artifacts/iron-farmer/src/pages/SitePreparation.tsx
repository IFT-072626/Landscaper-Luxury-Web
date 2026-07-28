import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import ifOneAcre from '@assets/IF-1-acre_1785201954817.png';

export default function SitePreparation() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <Link href="/systems" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B59A72] hover:text-[#2B2B28]">Systems</Link>
            <span className="text-[#D9CABA]">—</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2B2B28]">Structural Earthworks</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            Regenerative Site Preparation
          </h1>
          <p className="font-sans text-xl text-[#4A5240] max-w-3xl leading-relaxed">
            We strategically integrate animals to prepare the way for your PCS modules.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="w-full aspect-[21/9] bg-[#2B2B28] border border-[#D9CABA] overflow-hidden mb-24">
            <img 
              src={ifOneAcre}
              alt="1 Acre Food Production System diagram" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-12 border-t border-[#D9CABA] pt-12">
          <FadeIn delay={0.1}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] mb-4">01. Observation & Consultation</h3>
            <p className="font-sans text-sm text-[#2B2B28] leading-relaxed">
              Levels are used to find the contour of your land. You choose your crops from a list we provide. We recommend the best location for your PCS system, test your soil, and evaluate livestock viability.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] mb-4">02. Preparation & Installation</h3>
            <p className="font-sans text-sm text-[#2B2B28] leading-relaxed">
              After soil analysis, we integrate livestock during earthworks which begins to activate soil biology right away. Then we begin digging the PCS modules, fill half the trench with woody material, build the berms and plant. This process repeats for each module.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] mb-4">03. Maintenance Plan</h3>
            <p className="font-sans text-sm text-[#2B2B28] leading-relaxed">
              Our monthly service is for our clients who are serious about sovereignty. We put boots on the ground, check for pests and pestilence, monitor progress, perform updated risk assessments, and fertilize with organic compost and manure teas. Your subscription also includes first year SAP analysis and access to the Iron Farmer private member group.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
