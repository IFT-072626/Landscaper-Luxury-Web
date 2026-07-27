import { FadeIn } from '@/components/ui/fade-in';

export default function Principles() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA]">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            The Framework
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72]">
            Our Operating Principles
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[800px] mx-auto">
        <div className="space-y-32">
          <FadeIn>
            <div className="relative">
              <span className="absolute -left-12 md:-left-24 top-2 font-mono text-4xl text-[#D9CABA] opacity-50">1</span>
              <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">Resilience</h2>
              <p className="font-sans text-lg text-[#4A5240] leading-relaxed">
                The world has entered a period of increasing uncertainty. Global conflicts, supply chain disruptions, and resource competition have revealed just how dependent modern agriculture is on fuel, fertilizer, and complex distribution networks.
              </p>
              <p className="font-sans text-lg text-[#4A5240] leading-relaxed mt-6">
                Food security is no longer something to assume—it is something to cultivate. Establishing perennial food systems on productive land transforms a property from a passive asset into a resilient one. These living systems produce year after year, requiring less intervention while increasing ecological health, property value, and long-term independence. Our Passive Calorie System (PCS) is designed for adversity. Resilience is built before crisis. Together we can steward land capable of sustaining families through whatever tomorrow may bring.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="relative">
              <span className="absolute -left-12 md:-left-24 top-2 font-mono text-4xl text-[#D9CABA] opacity-50">2</span>
              <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">Sovereignty</h2>
              <p className="font-sans text-lg text-[#4A5240] leading-relaxed">
                Every human being on the face of this earth has an unalienable right to grow food. There is no regulatory body irrespective of size or power that can take this right away. Nor is there one with which we would comply should it attempt to do so.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative">
              <span className="absolute -left-12 md:-left-24 top-2 font-mono text-4xl text-[#D9CABA] opacity-50">III</span>
              <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">Capture Energy, Leak Nothing</h2>
              <p className="font-sans text-lg text-[#4A5240] leading-relaxed">
                Water leaving your property is lost capital. Leaves blown away are exported fertility. A well-designed estate operates as a closed loop—capturing sunlight, banking water in the soil, and recycling every scrap of organic matter back into the system.
              </p>
            </div>
          </FadeIn>

          <FadeIn>
            <div className="relative">
              <span className="absolute -left-12 md:-left-24 top-2 font-mono text-4xl text-[#D9CABA] opacity-50">IV</span>
              <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">Design from Patterns to Details</h2>
              <p className="font-sans text-lg text-[#4A5240] leading-relaxed">
                We do not start by asking what tree to plant. We start by looking at the macro patterns: watershed, climate, solar arc, and topography. Only once the structural foundation is engineered do we select the species that fit the niches created.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
