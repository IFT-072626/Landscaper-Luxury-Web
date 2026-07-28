import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import { ConsultationButton } from '@/components/ConsultationButton';
import { ArrowRight } from 'lucide-react';
import dogImg from '@assets/pyranese1_1785110709168.png';
import headerBg from '@assets/IF-AOA_1785195909779.png';

const articles = [
  {
    category: "Soil",
    date: "October 14, 2025",
  },
  {
    category: "Water",
    date: "September 02, 2025",
  },
  {
    category: "Systems",
    date: "August 18, 2025",
  },
  {
    category: "Harvest",
    date: "July 24, 2025",
  }
];

export default function Blog() {
  return (
    <div className="pt-24 pb-32">
      {/* Header with background image */}
      <section className="relative px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA] overflow-hidden">
        {/* Background image */}
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
              Intel Report
            </h1>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] max-w-2xl leading-relaxed">
              THE FOOD FREEDOM REPORT (FFR)
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-24">
          {articles.map((article, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <Link href="#" className="group block">
                <div className="aspect-[3/2] overflow-hidden bg-[#2B2B28] mb-8 border border-[#D9CABA]">
                  <img
                    src={dogImg}
                    alt={article.category}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <div className="flex gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[#B59A72]">
                  <span>{article.category}</span>
                  <span className="text-[#D9CABA]">•</span>
                  <span>{article.date}</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-8 max-w-[1400px] mx-auto text-center">
        <FadeIn>
          <ConsultationButton className="inline-flex items-center gap-4 bg-[#2B2B28] text-[#F5F2EC] px-8 py-5 font-mono text-xs uppercase tracking-[0.15em] hover:bg-[#4A5240] transition-colors" />
        </FadeIn>
      </section>
    </div>
  );
}
