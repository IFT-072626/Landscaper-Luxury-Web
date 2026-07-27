import { FadeIn } from '@/components/ui/fade-in';
import logoImg from '@assets/b49dc479-cac7-409a-9331-b7118b9f3c48_1785111974760.png';

export default function Mission() {
  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA]">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            Permanence, intelligence, craft, and land stewardship.
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72]">
            Our Mission & Ethos
          </p>
        </FadeIn>
      </section>

      {/* Body */}
      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="aspect-[3/4] overflow-hidden bg-[#1a1a18] flex items-center justify-center p-8">
                <img 
                  src={logoImg}
                  alt="Iron Farmer Emblem" 
                  className="w-full h-full object-contain"
                />
              </div>
            </FadeIn>
          </div>
          
          <div className="lg:col-span-7 font-sans text-lg text-[#4A5240] leading-relaxed space-y-8 pt-8">
            <FadeIn delay={0.2}>
              <p className="text-2xl font-serif text-[#2B2B28] leading-snug">
                We believe that the ultimate luxury is sovereignty. True wealth is an estate that sustains itself, independent of fragile global supply chains.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p>
                Iron Farmer was founded on a simple premise: modern landscaping is purely aesthetic and ultimately parasitic. It consumes water, fuel, and labor to produce nothing but appearance. We approach the land differently. We see acreage as an engine. 
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p>
                By applying principles of regenerative agriculture, hydrological engineering, and architectural precision, we design and install systems that yield thousands of calories per acre, autonomously. This is not hobby farming. This is engineered resilience. 
              </p>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="my-16 h-px w-full bg-[#D9CABA]" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#2B2B28] mb-6">Our Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-serif text-xl text-[#2B2B28] mb-3">Permanence</h4>
                  <p className="text-sm">We design for the century, not the season. Infrastructure should compound in value over time.</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#2B2B28] mb-3">Intelligence</h4>
                  <p className="text-sm">Every element serves multiple functions. The design does the heavy lifting, replacing human labor.</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#2B2B28] mb-3">Craft</h4>
                  <p className="text-sm">Utility must be beautiful. Our installations read as high-end architecture, flawlessly executed.</p>
                </div>
                <div>
                  <h4 className="font-serif text-xl text-[#2B2B28] mb-3">Stewardship</h4>
                  <p className="text-sm">We leave the soil richer, the water cleaner, and the ecology more robust than we found it.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wide Image */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="w-full aspect-[21/9] overflow-hidden bg-[#2B2B28]">
            <img 
              src="/images/mission-2.jpg" 
              alt="Mature food forest" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
