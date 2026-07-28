import { FadeIn } from '@/components/ui/fade-in';
import { useState } from 'react';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import headerBg from '@assets/mercantile1_1785196036094.jfif';
import shovelsImg from '@assets/bamboo_shovel_1785198157911.png';
import warhorseImg from '@assets/IF-warhorse_1785198180880.png';
import jerkeyImg from '@assets/smoked_beef_jerky_1785198157914.png';
import startsImg from '@assets/food_forest_nursery_starts_1785198157913.png';
import sheepImg from '@assets/Crackersheep1_1785198157913.jfif';

const products = [
  { name: "Tools",              category: "Tools",              img: shovelsImg },
  { name: "Gear",               category: "Gear",               img: warhorseImg },
  { name: "Rations",            category: "Rations",            img: jerkeyImg },
  { name: "Hardy Starts",       category: "Hardy Starts",       img: startsImg },
  { name: "Resilient Genetics", category: "Resilient Genetics", img: sheepImg },
];

const tabs = ["All Items", "Tools", "Gear", "Rations", "Hardy Starts", "Resilient Genetics"];

export default function Mercantile() {
  const [active, setActive] = useState("All Items");

  const visible = active === "All Items"
    ? products
    : products.filter(p => p.category === active);

  return (
    <div className="pt-24 pb-32">
      {/* Header with background image */}
      <section className="relative px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={headerBg}
            alt=""
            className="w-full h-full object-cover"
            style={{ opacity: 0.18 }}
          />
        </div>
        <FadeIn>
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
              Mercantile
            </h1>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] max-w-2xl leading-relaxed">
              The Iron Farmer Mercantile
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="flex gap-8 mb-12 border-b border-[#D9CABA] pb-4 overflow-x-auto">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              className={`font-mono text-xs uppercase tracking-[0.15em] whitespace-nowrap transition-colors ${
                active === tab
                  ? "text-[#2B2B28] font-bold"
                  : "text-[#B59A72] hover:text-[#2B2B28]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {visible.map((product, i) => (
            <FadeIn key={product.category} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="aspect-square bg-[#E8E4D9] mb-6 overflow-hidden border border-[#D9CABA]">
                  <img
                    src={product.img}
                    alt={product.category}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#B59A72]">{product.category}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-8 max-w-[1400px] mx-auto text-center">
        <FadeIn>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 bg-[#2B2B28] text-[#F5F2EC] px-8 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#4A5240] transition-colors"
          >
            Request a Consultation <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
