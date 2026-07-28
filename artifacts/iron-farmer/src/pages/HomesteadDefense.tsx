import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import tradmomImg from '@assets/tradmom3_1785110411053.png';

const skills = [
  "Regular perimeter patrols",
  "Cameras and motion lighting",
  "Observation posts (OP) and listening posts (LP)",
  "Confined space tactics",
  "Natural choke points",
  "Concentric zone control",
  "Rally zones and escape routes",
  "Quick livestock lockdown",
  "Silent signals for livestock",
  "Situational drills and contingency",
  "Radio communication",
];

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
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1]">
            Homestead Defense Training
          </h1>
        </FadeIn>
      </section>

      {/* Full-bleed image — object-top ensures the URL watermark at the bottom is visible */}
      <section className="w-full">
        <FadeIn>
          <div className="w-full overflow-hidden" style={{ maxHeight: '85vh' }}>
            <img
              src={tradmomImg}
              alt="Homestead family"
              className="w-full object-cover object-top"
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
                <h2 className="text-3xl font-serif text-[#2B2B28] mb-6">Protect what matters most</h2>
                <p className="font-sans text-lg text-[#4A5240] leading-relaxed">
                  Our Homestead Defense program is tailored to landowners who value competence over bravado. Whether you're new to firearms or seeking to improve existing three-dimensional skills, our instruction emphasizes safety, confidence, and lawful defensive practices suited to the realities of rural living. All Firearm training is conducted on your private property by qualified instructors using non-lethal simulation platforms. Safety is paramount. Children are welcome to join at your discretion.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="border-t border-[#D9CABA] pt-10">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] mb-8">You will learn</p>
                <ul className="space-y-4">
                  {skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="mt-2 w-1.5 h-1.5 bg-[#B59A72] shrink-0" />
                      <span className="font-sans text-lg text-[#4A5240] leading-relaxed">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="border-t border-[#D9CABA] pt-10 flex flex-col sm:flex-row gap-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-4 bg-[#2B2B28] text-[#F5F2EC] px-8 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#4A5240] transition-colors"
                >
                  Request an Encrypted Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#B59A72] self-center max-w-xs">
                  Available exclusively to existing Iron Farmer clients following a completed site assessment.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
