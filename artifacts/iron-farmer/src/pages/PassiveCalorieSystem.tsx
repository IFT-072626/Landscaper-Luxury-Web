import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function PassiveCalorieSystem() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <Link href="/systems" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B59A72] hover:text-[#2B2B28]">Systems</Link>
            <span className="text-[#D9CABA]">—</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2B2B28]">Flagship Methodology</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            The Passive Calorie System
          </h1>
          <p className="font-sans text-xl text-[#4A5240] max-w-3xl leading-relaxed">
            A comprehensive architectural approach to biological infrastructure, designing land to yield thousands of calories with progressively diminishing human input.
          </p>
        </FadeIn>
      </section>

      <section className="w-full">
        <FadeIn>
          <div className="w-full h-[60vh] md:h-[80vh] bg-[#E8E4D9] border-y border-[#D9CABA] overflow-hidden flex items-center justify-center p-12">
            <img 
              src="/images/pcs-diagram.jpg" 
              alt="System Diagram" 
              className="max-w-full max-h-full object-contain mix-blend-multiply"
            />
          </div>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#2B2B28] sticky top-32">
              System Architecture
            </h3>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12 gap-y-16">
            <FadeIn>
              <div className="border-t border-[#2B2B28] pt-6">
                <div className="font-mono text-xs text-[#B59A72] mb-4">01</div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">Hydrological Design</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  We shape the earth to act as a sponge. Through precision swales, keyline design, and gravity-fed catchment systems, we ensure every drop of water is captured, slowed, and infiltrated into the soil rather than lost to runoff.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border-t border-[#2B2B28] pt-6">
                <div className="font-mono text-xs text-[#B59A72] mb-4">02</div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">Mycelial Integration</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  Soil is not dirt; it is a biological network. We inoculate the subterranean layer with specific fungi that mine minerals, distribute water, and act as the communication array for the entire plant system.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border-t border-[#2B2B28] pt-6">
                <div className="font-mono text-xs text-[#B59A72] mb-4">03</div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">Perennial Canopy</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  The primary calorie engines. We select heritage nut and fruit cultivars genetically matched to your microclimate, providing dense, storable nutrition that produces for generations, not seasons.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="border-t border-[#2B2B28] pt-6">
                <div className="font-mono text-xs text-[#B59A72] mb-4">04</div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">Understory Autonomy</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  Beneath the canopy, we engineer herbaceous layers that fix nitrogen, repel pests, and dynamically accumulate nutrients, effectively replacing fertilizer and pesticides with biological functions.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-24 max-w-[1400px] mx-auto text-center">
        <FadeIn>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-4 bg-[#2B2B28] text-[#F5F2EC] px-8 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#4A5240] transition-colors"
          >
            Assess your property for this system <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
