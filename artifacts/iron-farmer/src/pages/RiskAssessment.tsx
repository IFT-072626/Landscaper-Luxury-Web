import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight, ShieldAlert } from 'lucide-react';

export default function RiskAssessment() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <Link href="/systems" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B59A72] hover:text-[#2B2B28]">Systems</Link>
            <span className="text-[#D9CABA]">—</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2B2B28]">Estate Audit</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            Risk Assessment
          </h1>
          <p className="font-sans text-xl text-[#4A5240] max-w-3xl leading-relaxed">
            A property is only as resilient as its weakest system. We conduct exhaustive audits to identify and mitigate environmental, logistical, and physical vulnerabilities.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <FadeIn>
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28] mb-4 border-b border-[#D9CABA] pb-2">
                <ShieldAlert className="w-4 h-4 text-[#B59A72]" /> Supply Chain Fragility
              </div>
              <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                Analysis of inputs required to keep the estate operational. We identify dependencies on external grid power, municipal water, imported fertilizers, and fuel, mapping pathways to autonomy.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28] mb-4 border-b border-[#D9CABA] pb-2">
                <ShieldAlert className="w-4 h-4 text-[#B59A72]" /> Hydrological Vulnerability
              </div>
              <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                Evaluating drought resilience and flood risk. We model extreme weather events against your current topography to ensure the land can absorb shock rather than erode.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28] mb-4 border-b border-[#D9CABA] pb-2">
                <ShieldAlert className="w-4 h-4 text-[#B59A72]" /> Physical Security Architecture
              </div>
              <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                Invisible hardening of the property perimeter. We assess sightlines, natural barriers, and chokepoints, providing recommendations for landscaping that serves dual purposes of food production and access denial.
              </p>
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <div className="aspect-[3/4] bg-[#2B2B28] border border-[#D9CABA] overflow-hidden p-2">
            <img 
              src="/images/blog-water.jpg" 
              alt="Water management analysis" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </FadeIn>
      </section>
      
      <section className="mt-24 py-16 border-y border-[#D9CABA] bg-[#E8E4D9]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="font-serif text-2xl text-[#2B2B28]">Ready to audit your estate?</h3>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-4 bg-[#2B2B28] text-[#F5F2EC] px-8 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#4A5240] transition-colors"
          >
            Request an Assessment <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
