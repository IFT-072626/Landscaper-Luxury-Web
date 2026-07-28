import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import chickensImg from '@assets/crackerchickens_1785201456901.png';
import pigImg from '@assets/kunekune_1785201456904.jfif';
import sheepImg from '@assets/Crackersheep1_1785201456903.jfif';
import cattleImg from '@assets/Crackercows_1785201456903.jpg';

const systems = [
  {
    title: "Cracker Chickens",
    desc: "Brought by the Spanish in the 1800's. These birds survive on minimal feed. Alert and agile to easily evade predators.",
    path: "/systems/passive-calorie-system",
    img: chickensImg
  },
  {
    title: "Kunekune Pigs",
    desc: "Forage-based survival. Minimal rooting. Docile. Manageable size. Must meet acreage requirement.",
    path: "/systems/plant-guilds",
    img: pigImg
  },
  {
    title: "Cracker Sheep",
    desc: "Naturally Hardy. Parasite resistant. Descended from Spanish sheep. Thrive without human intervention. Must meet acreage requirement.",
    path: "/systems/site-preparation",
    img: sheepImg
  },
  {
    title: "Cracker Cattle",
    desc: "Superior forage ability. Thrive on low-nutrition brush. Resilient to pests and predators. Light and compact bodies handle intense heat. Must meet acreage requirement.",
    path: "/systems/risk-assessment",
    img: cattleImg
  }
];

export default function SystemsOverview() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA]">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            Resilient Genetics
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] max-w-2xl leading-relaxed">
            Florida "Cracker" selected livestock adapted for heat, humidity, drought and poor forage. Resilience first.
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
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
