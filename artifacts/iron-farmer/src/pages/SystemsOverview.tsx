import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const systems = [
  {
    title: "Passive Calorie System",
    desc: "Our flagship methodology for engineering autonomous food production infrastructure.",
    path: "/systems/passive-calorie-system",
    img: "/images/pcs-diagram.jpg"
  },
  {
    title: "Plant Guilds",
    desc: "Companion planted polycultures acting as a single, resilient biological organism.",
    path: "/systems/plant-guilds",
    img: "/images/blog-guilds.jpg"
  },
  {
    title: "Site Preparation",
    desc: "Precision grading, soil amendment, and structural earthworks for long-term stability.",
    path: "/systems/site-preparation",
    img: "/images/home-serv-1.jpg"
  },
  {
    title: "Risk Assessment",
    desc: "Comprehensive property audits analyzing environmental, logistical, and physical vulnerabilities.",
    path: "/systems/risk-assessment",
    img: "/images/blog-water.jpg"
  }
];

export default function SystemsOverview() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA]">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            Engineered Systems
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] max-w-2xl leading-relaxed">
            Infrastructure designed for permanence. We approach land like architects approach a structure: with intention, precision, and an eye toward deep time.
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
          {systems.map((system, i) => (
            <FadeIn key={system.title} delay={i * 0.1}>
              <Link href={system.path} className="group block">
                <div className="aspect-[4/3] overflow-hidden bg-[#E8E4D9] border border-[#D9CABA] mb-8 relative">
                  <img 
                    src={system.img} 
                    alt={system.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>
                <div className="border-t border-[#D9CABA] pt-6 flex justify-between items-start gap-4">
                  <div>
                    <h2 className="text-3xl font-serif text-[#2B2B28] mb-3">{system.title}</h2>
                    <p className="font-sans text-[#4A5240] text-sm max-w-md">{system.desc}</p>
                  </div>
                  <div className="w-10 h-10 border border-[#D9CABA] flex items-center justify-center rounded-none group-hover:bg-[#2B2B28] group-hover:text-[#F5F2EC] transition-colors shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
