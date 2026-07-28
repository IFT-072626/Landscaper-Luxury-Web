import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import logoImg from '@assets/IF-Logo-Final_1785170420424.png';

export default function Mission() {
  return (
    <div className="pt-24 pb-32">
      {/* Header */}
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA]">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            Our mission is to systemize food sovereignty.
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72]">
            Our Mission
          </p>
        </FadeIn>
      </section>

      {/* Body */}
      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-5">
            <FadeIn>
              <div className="w-full overflow-hidden bg-[#1a1a18]">
                <img
                  src={logoImg}
                  alt="Iron Farmer Emblem"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-7 font-sans text-lg text-[#4A5240] leading-relaxed space-y-8 pt-8">
            <FadeIn delay={0.2}>
              <p>
                We believe the homesteading movement has become unnecessarily confusing. The space is saturated with "lunatic" personalities, competing philosophies, countless growing methods, patriot mythology and an overall lack of urgency. We are on a mission to cut through the noise, limit the endless options, and install repeatable, modular food systems designed for adversity.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p>Our approach is simple:</p>
              <ol className="mt-4 space-y-4 list-none">
                {[
                  "Calculate the caloric requirements you or your family would need if going to the grocery store was no longer an option.",
                  "Produce those calories using the most resilient crops available and suitable to your climate.",
                  "Grow them in systems that require the absolute minimum maintenance once established.",
                  "Establish them as one harmonious, self-regenerating ecosystem.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="font-mono text-[#B59A72] shrink-0">{i + 1}.</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p>
                Our Passive Calorie System™ (PCS) accomplishes exactly that.
              </p>
              <p className="mt-6 font-serif text-xl text-[#2B2B28] leading-snug">
                Think of it as a caloric contingency plan.
              </p>
              <p className="mt-6">
                This modular approach creates consistency, simplifies expansion, and eliminates much of the labor-intensive disappointment often associated with annual crops. Every species we plant serves multiple functions, and just as every soldier on a battlefield has a role, the system is designed with redundancy in mind. If one species fails, another is prepared to fill its ecological and nutritional role.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-16 max-w-[1400px] mx-auto text-center">
        <FadeIn>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#2B2B28] text-[#F5F2EC] px-8 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#4A5240] transition-colors"
          >
            Request an Encrypted Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
