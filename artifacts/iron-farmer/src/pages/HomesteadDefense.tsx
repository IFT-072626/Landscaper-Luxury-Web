import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import tradmomImg from '@assets/tradmom3_1785110411053.png';

export default function HomesteadDefense() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA]">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <Link href="/systems" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B59A72] hover:text-[#2B2B28] transition-colors">Systems</Link>
            <span className="text-[#D9CABA]">—</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2B2B28]">Premium Add-On</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            Homestead Defense Training
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] max-w-2xl leading-relaxed">
            Property readiness. Family preparedness. A premium service for serious landowners.
          </p>
        </FadeIn>
      </section>

      {/* Full-bleed image */}
      <section className="w-full">
        <FadeIn>
          <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden">
            <img
              src={tradmomImg}
              alt="Homestead family"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <FadeIn>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-[#2B2B28] sticky top-32">
                Service Overview
              </h3>
            </FadeIn>
          </div>
          <div className="lg:col-span-8 space-y-16">
            <FadeIn delay={0.1}>
              <div className="border-t border-[#D9CABA] pt-10">
                <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">Designed for the Prepared Family</h2>
                <p className="font-sans text-lg text-[#4A5240] leading-relaxed">
                  True resilience extends beyond food production. Iron Farmer's Homestead Defense Training program is a comprehensive, property-specific curriculum developed for landowners who understand that the security of their estate and family is a design problem — one that demands the same precision and foresight applied to every other system we build.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border-t border-[#D9CABA] pt-10">
                <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">Site Security Design</h2>
                <p className="font-sans text-lg text-[#4A5240] leading-relaxed">
                  We conduct a full topographic and perimeter analysis of your property, identifying natural chokepoints, sight lines, and structural vulnerabilities. Our design team then develops a site security plan that integrates seamlessly with your landscape architecture — using terrain, vegetation, and built elements to create layered, passive security without the aesthetic of a fortification.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="border-t border-[#D9CABA] pt-10">
                <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">Property Readiness Training</h2>
                <p className="font-sans text-lg text-[#4A5240] leading-relaxed">
                  Delivered by experienced instructors, our on-site training program covers property communication protocols, medical response fundamentals, patrol patterns, and decision frameworks for the rural landowner. This is not a weekend course. It is a curated, multi-session engagement designed around your land, your family, and your specific circumstances.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="border-t border-[#D9CABA] pt-10 flex flex-col sm:flex-row gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-[#2B2B28] text-[#F5F2EC] px-8 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#4A5240] transition-colors"
                >
                  Apply for Access <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#B59A72] self-center max-w-xs">
                  This service is available exclusively to existing Iron Farmer clients following a completed site assessment.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
