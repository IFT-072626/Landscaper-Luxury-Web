import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import heroVideo from '@assets/Drone_surveilling_Florida_homestead_202607171633_1785107479357.mp4';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[100dvh] overflow-hidden bg-[#2B2B28]">
        <div className="absolute inset-0 w-full h-full">
          <video
            src={heroVideo}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#2B2B28]/90" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 mt-16">
          <FadeIn>
            <h1 className="text-[#F5F2EC] text-5xl md:text-7xl lg:text-8xl font-serif max-w-5xl leading-[1.1] mb-6">
              Systemized Food Sovereignty
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-[#D9CABA] font-mono text-sm md:text-base uppercase tracking-[0.2em] max-w-2xl mb-12">
              For the resilient estate
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 bg-[#F5F2EC] text-[#2B2B28] px-8 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#D9CABA] transition-colors"
            >
              Schedule a Property Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Philosophy Statement */}
      <section className="py-24 md:py-32 px-6 lg:px-12 border-b border-[#D9CABA]">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-2xl md:text-4xl font-serif leading-snug text-[#2B2B28]">
              Iron Farmer designs permanent food production infrastructure for property owners who understand that resilience is a design problem, not a product purchase.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Passive Calorie System */}
      <section className="py-32 px-6 lg:px-12 bg-[#F5F2EC]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-16 md:flex md:items-end justify-between border-b border-[#D9CABA] pb-8">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B59A72] mb-4">Core Methodology</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-[#2B2B28]">The Passive Calorie System</h3>
              </div>
              <Link href="/systems/passive-calorie-system" className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#4A5240] hover:text-[#2B2B28] transition-colors">
                Explore the system <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-square md:aspect-[4/3] bg-[#E8E4D9] border border-[#D9CABA] overflow-hidden">
                <img 
                  src="/images/pcs-diagram.jpg" 
                  alt="Passive Calorie System Schematic" 
                  className="w-full h-full object-contain p-8 mix-blend-multiply"
                />
              </div>
              <div className="space-y-8 font-sans text-lg text-[#4A5240] leading-relaxed">
                <p>
                  We engineer landscapes that capture energy, direct water, and compound biological capital. Our approach replaces high-maintenance annual agriculture with self-regulating perennial systems.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-[#D9CABA]">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28] mb-2">01. Water</h4>
                    <p className="text-sm">Passive earthworks, swales, and catchment geometry.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28] mb-2">02. Soil</h4>
                    <p className="text-sm">Mycelial inoculation and bio-char integration.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28] mb-2">03. Guilds</h4>
                    <p className="text-sm">Companion planted polycultures acting as single organisms.</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28] mb-2">04. Harvest</h4>
                    <p className="text-sm">Continuous decadal yield with diminishing labor inputs.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 lg:px-12 border-t border-[#D9CABA]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Site Preparation",
                  desc: "Precision grading, soil amendment, and structural earthworks.",
                  img: "/images/home-serv-1.jpg",
                  link: "/systems/site-preparation"
                },
                {
                  title: "Plant Guilds",
                  desc: "Engineered biological assemblies for robust calorie production.",
                  img: "/images/home-serv-2.jpg",
                  link: "/systems/plant-guilds"
                },
                {
                  title: "Water Systems",
                  desc: "Resilient hydration infrastructure moving water purely by gravity.",
                  img: "/images/home-serv-3.jpg",
                  link: "/systems"
                }
              ].map((serv, i) => (
                <Link key={i} href={serv.link} className="group block">
                  <div className="aspect-[3/2] overflow-hidden bg-[#2B2B28] mb-6">
                    <img 
                      src={serv.img} 
                      alt={serv.title} 
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <h4 className="font-serif text-2xl text-[#2B2B28] mb-3">{serv.title}</h4>
                  <p className="font-sans text-[#4A5240] mb-4 text-sm">{serv.desc}</p>
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-[#B59A72] group-hover:text-[#2B2B28] transition-colors flex items-center gap-2">
                    View Service <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Premium Add-on Section */}
      <section className="py-24 px-6 lg:px-12 bg-[#E8E4D9]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-[#2B2B28] text-[#F5F2EC] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] mb-6">
                <ShieldCheck className="w-3 h-3" /> Exclusive Add-on
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-[#2B2B28] mb-6">
                Site Security & Readiness
              </h2>
              <p className="font-sans text-[#4A5240] text-sm md:text-base mb-8">
                For our full-estate clients, we offer specialized infrastructure enhancements focusing on defensive site preparation and property readiness training. Integrated seamlessly into the landscape.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#2B2B28] border-b border-[#2B2B28] pb-1 hover:text-[#B59A72] hover:border-[#B59A72] transition-colors">
                Request details securely
              </Link>
            </FadeIn>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-8">
            <FadeIn delay={0.2} className="bg-[#F5F2EC] p-8 border border-[#D9CABA]">
              <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28] mb-4">Site Security Design</h4>
              <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                Architectural integration of access control, sightline management, and structural hardening. We design physical security that reads as premium landscape architecture, completely invisible to the untrained eye.
              </p>
            </FadeIn>
            <FadeIn delay={0.3} className="bg-[#F5F2EC] p-8 border border-[#D9CABA]">
              <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-[#2B2B28] mb-4">Property Readiness Training</h4>
              <p className="font-sans text-sm text-[#4A5240] leading-relaxed">
                Expert-led operational onboarding for your estate. We ensure you and your staff understand how to operate, maintain, and secure the systems we build, transitioning theory into capability.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Recent Field Notes */}
      <section className="py-24 px-6 lg:px-12 border-t border-[#D9CABA]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-12 md:flex md:items-end justify-between border-b border-[#D9CABA] pb-8">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B59A72] mb-4">Journal</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-[#2B2B28]">Field Notes</h3>
              </div>
              <Link href="/blog" className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#4A5240] hover:text-[#2B2B28] transition-colors">
                Read all dispatches <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Link href="/blog" className="group block">
                <div className="aspect-[16/9] overflow-hidden bg-[#2B2B28] mb-6">
                  <img 
                    src="/images/blog-soil.jpg" 
                    alt="Engineering the Mycelial Network" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <div className="flex gap-4 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B59A72]">
                  <span>Soil</span>
                  <span className="text-[#D9CABA]">•</span>
                  <span>Oct 14</span>
                </div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-3 group-hover:text-[#4A5240] transition-colors">Engineering the Mycelial Network</h4>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/blog" className="group block">
                <div className="aspect-[16/9] overflow-hidden bg-[#2B2B28] mb-6">
                  <img 
                    src="/images/blog-water.jpg" 
                    alt="Gravity as Infrastructure" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <div className="flex gap-4 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B59A72]">
                  <span>Water</span>
                  <span className="text-[#D9CABA]">•</span>
                  <span>Sep 02</span>
                </div>
                <h4 className="text-2xl font-serif text-[#2B2B28] mb-3 group-hover:text-[#4A5240] transition-colors">Gravity as Infrastructure</h4>
              </Link>
            </FadeIn>
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/blog" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#4A5240]">
              Read all dispatches <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
