import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ConsultationButton } from '@/components/ConsultationButton';
import { ArrowRight } from 'lucide-react';
import survivalGuildImg from '@assets/IF-survival-guild_1785194532368.png';
import plantGuildImg from '@assets/Plant-guild_1785195383600.png';

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
            Just like people, plants are stronger together. Carefully designed cooperative plant relationships reduce maintenance and support each other through nutrient cycling, living mulch, pest management and more. Every PCS deploys a carefully selected Guild.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto">
        <FadeIn>
          {/* Image wrapper — relative so the title-band overlay can be positioned over it */}
          <div className="w-full overflow-hidden relative">
            <img
              src={survivalGuildImg}
              alt="Florida Survival Crop Guild"
              className="w-full h-full object-cover"
            />
            {/* Covers the baked-in "FLORIDA PERMACULTURE SURVIVAL CROP GUILD" title band */}
            <div
              className="absolute top-0 left-0 w-full flex flex-col items-center justify-center"
              style={{ height: '14%', background: 'rgba(10, 21, 7, 0.97)' }}
            >
              <div style={{ fontFamily: 'sans-serif', fontSize: 'clamp(12px, 2vw, 28px)', fontWeight: 800, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.12em', lineHeight: 1 }}>
                Florida Survival Crop Guild
              </div>
              <div style={{ fontFamily: 'sans-serif', fontSize: 'clamp(8px, 1vw, 13px)', fontWeight: 600, color: '#c9a96e', textTransform: 'uppercase', letterSpacing: '0.18em', marginTop: '6px' }}>
                Calorie Production&nbsp;&nbsp;•&nbsp;&nbsp;Food Security&nbsp;&nbsp;•&nbsp;&nbsp;Resilience
              </div>
            </div>
          </div>
          {/* Disclaimer */}
          <p className="mt-3 font-sans text-xs italic text-[#7a7669]">
            Crops used in your system may vary.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <FadeIn>
              <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">The Guild Platoon</h2>
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
          <div className="overflow-hidden">
            <img
              src={plantGuildImg}
              alt="Lush plant guild"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-16 max-w-[1400px] mx-auto text-center">
        <FadeIn>
          <ConsultationButton className="inline-flex items-center gap-4 bg-[#2B2B28] text-[#F5F2EC] px-8 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#4A5240] transition-colors" />
        </FadeIn>
      </section>
    </div>
  );
}
