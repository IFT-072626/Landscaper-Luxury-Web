import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
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
          {/* Image with overlays covering baked-in SWALE and MOUND PLANTING ZONE labels */}
          <div className="w-full aspect-[21/9] bg-[#2B2B28] border border-[#D9CABA] overflow-hidden mb-24 relative">
            <img
              src={ifOneAcre}
              alt="1 Acre Food Production System diagram"
              className="w-full h-full object-cover opacity-90"
            />

            {/* ── PCS CHANNEL 1 (covers SWALE 1 top) ── */}
            <div className="absolute" style={{ left: '11%', top: '6%' }}>
              <div style={{ background: 'rgba(8,25,12,0.9)', border: '1px solid rgba(255,255,255,0.5)', padding: '3px 7px', minWidth: '82px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '9px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.5 }}>
                  PCS CHANNEL
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '7.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>
                  80 FT LONG<br />30" WIDE
                </div>
              </div>
            </div>

            {/* ── PCS CHANNEL 2 (covers SWALE 2) ── */}
            <div className="absolute" style={{ left: '11%', top: '40%' }}>
              <div style={{ background: 'rgba(8,25,12,0.9)', border: '1px solid rgba(255,255,255,0.5)', padding: '3px 7px', minWidth: '82px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '9px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.5 }}>
                  PCS CHANNEL
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '7.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>
                  80 FT LONG<br />30" WIDE
                </div>
              </div>
            </div>

            {/* ── PCS CHANNEL 3 (covers SWALE 3) ── */}
            <div className="absolute" style={{ left: '11%', top: '61%' }}>
              <div style={{ background: 'rgba(8,25,12,0.9)', border: '1px solid rgba(255,255,255,0.5)', padding: '3px 7px', minWidth: '82px' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '9px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.5 }}>
                  PCS CHANNEL
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: '7.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>
                  80 FT LONG<br />30" WIDE
                </div>
              </div>
            </div>

            {/* ── RootVault 1 (covers MOUND PLANTING ZONE 1) ── */}
            <div className="absolute" style={{ left: '48%', top: '17%' }}>
              <div style={{ background: 'rgba(8,25,12,0.9)', border: '1px solid rgba(255,255,255,0.5)', padding: '5px 10px', minWidth: '64px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '9px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.5, whiteSpace: 'nowrap' }}>
                  RootVault
                </div>
              </div>
            </div>

            {/* ── RootVault 2 (covers MOUND PLANTING ZONE 2) ── */}
            <div className="absolute" style={{ left: '48%', top: '41%' }}>
              <div style={{ background: 'rgba(8,25,12,0.9)', border: '1px solid rgba(255,255,255,0.5)', padding: '5px 10px', minWidth: '64px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '9px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.5, whiteSpace: 'nowrap' }}>
                  RootVault
                </div>
              </div>
            </div>

            {/* ── RootVault 3 (covers MOUND PLANTING ZONE 3) ── */}
            <div className="absolute" style={{ left: '48%', top: '62%' }}>
              <div style={{ background: 'rgba(8,25,12,0.9)', border: '1px solid rgba(255,255,255,0.5)', padding: '5px 10px', minWidth: '64px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '9px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.5, whiteSpace: 'nowrap' }}>
                  RootVault
                </div>
              </div>
            </div>

            {/* ── Covers baked-in "FLORIDA CRACKER SHEEP / 4 HEAD" — re-renders without "4 HEAD" ── */}
            <div className="absolute" style={{ left: '79%', top: '21%', width: '20%', height: '20%' }}>
              <div style={{ background: 'rgba(8,25,12,0.97)', border: '1px solid rgba(255,255,255,0.5)', padding: '6px 10px', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontFamily: 'monospace', fontSize: '9px', fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em', lineHeight: 1.6, textAlign: 'center', whiteSpace: 'nowrap' }}>
                  FLORIDA<br />CRACKER SHEEP
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12 border-t border-[#D9CABA] pt-12">
          <FadeIn delay={0.1}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] mb-4">01. Observation & Consultation</h3>
            <p className="font-sans text-sm text-[#2B2B28] leading-relaxed">
              We determine the contour of your growing area and observe sunlight patterns to find the best location for your PCS system. We provide a list of resilient crops to choose from. We then analyze your soil profile and evaluate livestock viability if desired.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] mb-4">02. Preparation & Installation</h3>
            <p className="font-sans text-sm text-[#2B2B28] leading-relaxed">
              After soil analysis, we integrate livestock during earthworks which begins to activate soil biology right away. Then we begin digging the PCS modules.
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

      <section className="px-6 lg:px-12 pt-20 max-w-[1400px] mx-auto text-center">
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
