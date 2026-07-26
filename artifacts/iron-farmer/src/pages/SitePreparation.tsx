import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';

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
            Custom Site Preparation
          </h1>
          <p className="font-sans text-xl text-[#4A5240] max-w-3xl leading-relaxed">
            Before we plant, we sculpt. The physical topography of your land dictates its potential. We execute precision earthworks to master water flow and soil stability.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="w-full aspect-[21/9] bg-[#2B2B28] border border-[#D9CABA] overflow-hidden mb-24">
            <img 
              src="/images/home-serv-1.jpg" 
              alt="Precision grading and earthworks" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </FadeIn>
        
        <div className="grid md:grid-cols-3 gap-12 border-t border-[#D9CABA] pt-12">
          <FadeIn delay={0.1}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] mb-4">01. Survey & Mapping</h3>
            <p className="font-sans text-sm text-[#2B2B28] leading-relaxed">
              High-resolution LiDAR topography and hydrological modeling. We map every micro-watershed and solar aspect before moving a single yard of soil.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] mb-4">02. Precision Grading</h3>
            <p className="font-sans text-sm text-[#2B2B28] leading-relaxed">
              Keyline plowing and swale excavation using laser-guided equipment to ensure water moves exactly where it is needed, passively.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] mb-4">03. Soil Amendment</h3>
            <p className="font-sans text-sm text-[#2B2B28] leading-relaxed">
              Deep ripping, mineral balancing, and massive organic matter integration to kickstart the biological engine of the property.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
