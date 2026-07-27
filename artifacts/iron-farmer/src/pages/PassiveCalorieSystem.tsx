import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import pcsGraphic from '@assets/PCS-Final-Graphic_1785188076267.png';

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
            Passive Calorie System (PCS)™
          </h1>
          <p className="font-sans text-xl text-[#4A5240] max-w-3xl leading-relaxed">
            A system designed to meet the annual caloric needs of one individual up to a traditional family of four based on conservative crop yields.
          </p>
        </FadeIn>
      </section>

      <section className="w-full">
        <FadeIn>
          <div className="w-full overflow-hidden">
            <img
              src={pcsGraphic}
              alt="Passive Calorie System Diagram"
              className="w-full h-full object-cover"
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
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">PCS-1</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  Base plan requires a minimum 1/4 acre of usable land (10,890 sq ft). Contains five PCS modules — each 80'×60". Mix &amp; match crops to equal the goal of 1,000,000 annual calories (2,500×365) with a buffer. Includes fruit trees and multi-function mineral-rich support species. Animal systems, water systems, and defense training can be added à la carte if desired.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border-t border-[#2B2B28] pt-6">
                <div className="font-mono text-xs text-[#B59A72] mb-4">02</div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">PCS-2</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  Requires a minimum of 1/2 acre (21,780 sq ft). Contains 10 PCS modules — each 80'×60". Mix and match crops to equal the goal of 2,000,000 annual calories (5,000×365) with a buffer. Includes fruit trees and multi-function mineral-rich support species. Animal systems, water systems, and defense training can be added à la carte if desired.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border-t border-[#2B2B28] pt-6">
                <div className="font-mono text-xs text-[#B59A72] mb-4">03</div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">PCS-3</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  The primary calorie engines. We select heritage nut and fruit cultivars genetically matched to your microclimate, providing dense, storable nutrition that produces for generations, not seasons.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="border-t border-[#2B2B28] pt-6">
                <div className="font-mono text-xs text-[#B59A72] mb-4">04</div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">PCS-4</h4>
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
