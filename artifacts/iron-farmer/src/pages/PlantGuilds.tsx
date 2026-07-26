import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function PlantGuilds() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <Link href="/systems" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#B59A72] hover:text-[#2B2B28]">Systems</Link>
            <span className="text-[#D9CABA]">—</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2B2B28]">Biological Assembly</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            Plant Guilds
          </h1>
          <p className="font-sans text-xl text-[#4A5240] max-w-3xl leading-relaxed">
            In nature, plants do not grow in isolation. They form strategic alliances. We design engineered polycultures where every plant performs a distinct role, eliminating the need for external inputs.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto">
        <FadeIn>
          <div className="w-full aspect-[16/9] bg-[#E8E4D9] border border-[#D9CABA] overflow-hidden">
            <img 
              src="/images/plant-guilds-botanical.jpg" 
              alt="Botanical illustration of a plant guild" 
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">The Anatomy of a Guild</h2>
              <p className="font-sans text-[#4A5240] mb-8 leading-relaxed">
                A traditional orchard is fragile—a monoculture requiring constant defense. A plant guild is an impenetrable fortress. By surrounding a central calorie-producing tree with specific companion species, we create a self-sustaining micro-ecosystem.
              </p>
              
              <div className="space-y-6 font-sans text-sm text-[#2B2B28]">
                <div className="flex gap-4 border-b border-[#D9CABA] pb-4">
                  <span className="font-mono font-bold w-32">Nitrogen Fixers</span>
                  <span className="text-[#4A5240]">Pull atmospheric nitrogen and feed it to the roots.</span>
                </div>
                <div className="flex gap-4 border-b border-[#D9CABA] pb-4">
                  <span className="font-mono font-bold w-32">Dynamic Accumulators</span>
                  <span className="text-[#4A5240]">Deep taproots mine calcium, potassium, and phosphorus from deep subsoil.</span>
                </div>
                <div className="flex gap-4 border-b border-[#D9CABA] pb-4">
                  <span className="font-mono font-bold w-32">Insectaries</span>
                  <span className="text-[#4A5240]">Attract predatory wasps and pollinators, eliminating the need for pesticides.</span>
                </div>
                <div className="flex gap-4 border-b border-[#D9CABA] pb-4">
                  <span className="font-mono font-bold w-32">Ground Cover</span>
                  <span className="text-[#4A5240]">Living mulch that suppresses weeds and retains soil moisture.</span>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="aspect-square bg-[#2B2B28] overflow-hidden">
             <img 
              src="/images/blog-guilds.jpg" 
              alt="Lush plant understory" 
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
