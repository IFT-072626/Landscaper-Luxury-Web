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
            A system designed to meet the annual caloric needs of one adult - up to a traditional family of four based on conservative estimates.
          </p>
        </FadeIn>
      </section>

      {/* PCS Graphic with annotation overlays */}
      <section className="w-full">
        <FadeIn>
          <div className="w-full overflow-hidden relative">
            <img
              src={pcsGraphic}
              alt="Passive Calorie System Diagram"
              className="w-full h-full object-cover"
            />

            {/* PCS Channel™ annotation — points to water trench at base of mound (low side) */}
            <div className="absolute" style={{ left: '8%', top: '56%' }}>
              {/* Line from label to channel */}
              <svg
                className="absolute"
                style={{ left: '100%', top: '50%', transform: 'translateY(-50%)', width: '48px', height: '18px', overflow: 'visible' }}
                viewBox="0 0 48 18"
              >
                <line x1="0" y1="9" x2="48" y2="9" stroke="white" strokeWidth="1" />
                <circle cx="48" cy="9" r="2.5" fill="white" />
              </svg>
              <div style={{ background: 'rgba(255,255,255,0.92)', padding: '3px 7px', border: '1px solid rgba(0,0,0,0.35)' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '10px', fontWeight: 700, letterSpacing: '0.06em', color: '#1a1a18', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  PCS Channel™
                </span>
              </div>
            </div>

            {/* RootVault™ annotation — points to bottom woody debris layer of mound */}
            <div className="absolute" style={{ left: '8%', top: '62%' }}>
              <svg
                className="absolute"
                style={{ left: '100%', top: '50%', transform: 'translateY(-50%)', width: '80px', height: '18px', overflow: 'visible' }}
                viewBox="0 0 80 18"
              >
                <line x1="0" y1="9" x2="80" y2="9" stroke="white" strokeWidth="1" />
                <circle cx="80" cy="9" r="2.5" fill="white" />
              </svg>
              <div style={{ background: 'rgba(255,255,255,0.92)', padding: '3px 7px', border: '1px solid rgba(0,0,0,0.35)' }}>
                <span style={{ fontFamily: 'monospace', fontSize: '10px', fontWeight: 700, letterSpacing: '0.06em', color: '#1a1a18', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  RootVault™
                </span>
              </div>
            </div>
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
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">PCS GRID-5</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  Designed for one adult eating 2,500 kcals/day. Base plan requires a minimum 1/4 acre of usable land (10,890 sq ft). Contains five PCS modules — each 80'×60". Mix &amp; match crops to equal the goal of 1,000,000 annual calories (2,500×365) with a buffer. Includes fruit trees and multi-function mineral-rich support species. Animal systems, water systems, and defense training can be added à la carte if desired.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border-t border-[#2B2B28] pt-6">
                <div className="font-mono text-xs text-[#B59A72] mb-4">02</div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">PCS GRID-10</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  Designed for two adults eating 5,000 calories per day. Requires a minimum of 1/2 acre (21,780 sq ft). Contains 10 PCS modules — each 80'×60". Mix and match crops to equal the goal of 2,000,000 annual calories (5,000×365) with a buffer. Includes fruit trees and multi-function mineral-rich support species. Animal systems, water systems, and defense training can be added à la carte if desired.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="border-t border-[#2B2B28] pt-6">
                <div className="font-mono text-xs text-[#B59A72] mb-4">03</div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">PCS GRID-15</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  Designed for two adults and one child eating 6,600 kcals/day. Requires a minimum of 3/4 acre usable land (14,520 sq ft). Contains 15 PCS modules — each 80'×60". Mix &amp; match crops to equal the goal of 2,500,000 annual calories (6,600×365) with a buffer. Includes fruit trees and multi-function mineral-rich support species. Animal systems, water systems, and defense training can be added à la carte if desired.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="border-t border-[#2B2B28] pt-6">
                <div className="font-mono text-xs text-[#B59A72] mb-4">04</div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-4">PCS GRID-20</h4>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                  Designed for two adults and two children eating 8,200 kcals/day. Requires a minimum of 1 acre usable land (43,560 sq ft). Contains 20 PCS modules — each 80'×60". Mix &amp; match crops to equal the goal of 3,000,000 annual calories (8,200×365) with a buffer. Includes fruit trees and multi-function mineral-rich support species. Animal systems, water systems, and defense training can be added à la carte if desired.
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
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
