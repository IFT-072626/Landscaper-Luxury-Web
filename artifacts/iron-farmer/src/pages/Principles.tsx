import { FadeIn } from '@/components/ui/fade-in';

export default function Principles() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA]">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            The Intellectual Framework
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
              <span className="absolute -left-12 md:-left-24 top-2 font-mono text-4xl text-[#D9CABA] opacity-50">I</span>
              <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">Work with Biology, Not Against It</h2>
              <p className="font-sans text-lg text-[#4A5240] leading-relaxed">
                Conventional landscaping is a continuous war against nature. We spend billions fighting succession—mowing, weeding, spraying. At Iron Farmer, we recognize that nature always wins. Therefore, we design systems that harness ecological succession, allowing nature to do the work for us.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="relative">
              <span className="absolute -left-12 md:-left-24 top-2 font-mono text-4xl text-[#D9CABA] opacity-50">II</span>
              <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">Redundancy is Reliability</h2>
              <p className="font-sans text-lg text-[#4A5240] leading-relaxed">
                A monoculture is highly efficient until a single pest destroys it entirely. We build diverse polycultures. If one crop fails, the system yields five others. True resilience is found in overlapping functions and biological diversity.
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
