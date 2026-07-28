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

      {/* PCS Graphic with SVG annotation overlay */}
      <section className="w-full">
        <FadeIn>
          <div className="w-full overflow-hidden relative">
            <img
              src={pcsGraphic}
              alt="Passive Calorie System Diagram"
              className="w-full h-full object-cover"
            />

            {/* Full-image SVG overlay — coordinate system is 0-100 in both axes */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* ── PCS Channel™ — label on left, line extending right to touch the water trench ── */}
              <rect x="1" y="53.2" width="12.5" height="5.2" rx="0" fill="rgba(255,255,255,0.92)" stroke="rgba(0,0,0,0.38)" strokeWidth="0.15" />
              <text x="1.6" y="55.4" fontFamily="monospace" fontSize="1.5" fontWeight="700" fill="#1a1a18" letterSpacing="0.04">PCS CHANNEL</text>
              <text x="1.6" y="57.4" fontFamily="monospace" fontSize="1.3" fontWeight="700" fill="#1a1a18" letterSpacing="0.04">™</text>
              {/* line to water */}
              <line x1="13.5" y1="55.8" x2="23.5" y2="57.5" stroke="white" strokeWidth="0.25" />
              <circle cx="23.5" cy="57.5" r="0.55" fill="white" />

              {/* ── RootVault™ — label on left, line extending further right to touch the wood pile ── */}
              <rect x="1" y="60.2" width="12" height="5.2" rx="0" fill="rgba(255,255,255,0.92)" stroke="rgba(0,0,0,0.38)" strokeWidth="0.15" />
              <text x="1.6" y="62.4" fontFamily="monospace" fontSize="1.5" fontWeight="700" fill="#1a1a18" letterSpacing="0.04">ROOTVAULT</text>
              <text x="1.6" y="64.4" fontFamily="monospace" fontSize="1.3" fontWeight="700" fill="#1a1a18" letterSpacing="0.04">™</text>
              {/* line to wood pile */}
              <line x1="13" y1="62.8" x2="36.5" y2="63.5" stroke="white" strokeWidth="0.25" />
              <circle cx="36.5" cy="63.5" r="0.55" fill="white" />
            </svg>
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
            Request an Encrypted Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
