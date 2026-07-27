import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import heroVideo from '@assets/Drone_surveilling_Florida_homestead_202607171633_1785107479357.mp4';
import pcsImg from '@assets/PCS2_1785181146836.png';
import siteImg from '@assets/IF-1-acre_1785180909087.png';
import guildImg from '@assets/IF-survival-guild_1785181168212.png';
import chinaImg from '@assets/China-First_1785187101802.png';
import aoaImg from '@assets/IF-AOA_1785187101816.png';
import crackerCowImg from '@assets/Crackercows_1785187101816.jpg';

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
              Iron Farmer designs, installs, and maintains a repeatable modular system of security crops tailored to your microclimate.
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
                <h3 className="text-4xl md:text-5xl font-serif text-[#2B2B28]">The Passive Calorie System™</h3>
              </div>
              <Link href="/systems/passive-calorie-system" className="hidden md:inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-[#4A5240] hover:text-[#2B2B28] transition-colors">
                Explore the system <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="overflow-hidden bg-[#2B2B28]">
                <img 
                  src={pcsImg}
                  alt="Passive Calorie System" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-sans text-lg text-[#4A5240] leading-relaxed">
                <p>
                  The Passive Calorie system (PCS) is not a garden. Conventional gardens require continual inputs and offer negative yields. The PCS grows into a natural capital asset over time. Every crop is selected with intentionality to accomplish a specific objective. Productivity is engineered—not left to chance.
                </p>
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
                  desc: "",
                  img: siteImg,
                  link: "/systems/site-preparation"
                },
                {
                  title: "Plant Guilds",
                  desc: "",
                  img: guildImg,
                  link: "/systems/plant-guilds"
                },
                {
                  title: "Animal Systems",
                  desc: "",
                  img: crackerCowImg,
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
                  {serv.desc && <p className="font-sans text-[#4A5240] mb-4 text-sm">{serv.desc}</p>}
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
                The next step after installing your PCS. We offer specialized infrastructure enhancements focusing on defensive site preparation and property readiness training. Integrated seamlessly into the landscape.
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
                A custom detailed vulnerability report showing potential areas of approach (AOAs) and recommended readiness and cover/concealment positions.
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

      {/* Intel */}
      <section className="py-24 px-6 lg:px-12 border-t border-[#D9CABA]">
        <div className="max-w-[1400px] mx-auto">
          <FadeIn>
            <div className="mb-12 md:flex md:items-end justify-between border-b border-[#D9CABA] pb-8">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#B59A72] mb-4">Journal</h2>
                <h3 className="text-4xl md:text-5xl font-serif text-[#2B2B28]">Intel</h3>
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
                    src={chinaImg}
                    alt="Iron Farmer Passive Calorie System" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <div className="flex gap-4 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B59A72]">
                  <span>Soil</span>
                  <span className="text-[#D9CABA]">•</span>
                  <span>Oct 14</span>
                </div>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/blog" className="group block">
                <div className="aspect-[16/9] overflow-hidden bg-[#2B2B28] mb-6">
                  <img 
                    src={aoaImg}
                    alt="Florida Cracker Sheep" 
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <div className="flex gap-4 mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B59A72]">
                  <span>Water</span>
                  <span className="text-[#D9CABA]">•</span>
                  <span>Sep 02</span>
                </div>
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
