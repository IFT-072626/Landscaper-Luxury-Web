import { FadeIn } from '@/components/ui/fade-in';
import { Link } from 'wouter';
import dogImg from '@assets/pyranese1_1785110709168.png';

const articles = [
  {
    category: "Soil",
    date: "October 14, 2025",
    desc: "How we inoculate estate subsoils to create an autonomous nutrient distribution system, reducing fertilizer dependency to zero.",
    img: "/images/blog-soil.jpg"
  },
  {
    category: "Water",
    date: "September 02, 2025",
    desc: "Designing keyline earthworks that capture millions of gallons of rainfall, hydrating landscapes entirely without pumps.",
    img: "/images/blog-water.jpg"
  },
  {
    category: "Systems",
    date: "August 18, 2025",
    desc: "Moving beyond traditional orchard rows to highly integrated, pest-resistant biological assemblies.",
    img: "/images/blog-guilds.jpg"
  },
  {
    category: "Harvest",
    date: "July 24, 2025",
    desc: "Why heritage nut cultivars and perennial root crops outcompete annual agriculture in resilience and yield over a fifty-year horizon.",
    img: "/images/blog-harvest.jpg"
  }
];

export default function Blog() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA]">
        <FadeIn>
          <div className="flex items-start justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
                Intel
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] max-w-2xl leading-relaxed">
                Observations, methodologies, and technical writings from the field.
              </p>
            </div>
            <div className="shrink-0 w-32 md:w-48 lg:w-56">
              <img
                src={dogImg}
                alt="Iron Farmer guardian"
                className="w-full h-auto object-cover"
              />
            </div>
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
                    src={article.img}
                    alt={article.category}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                  />
                </div>
                <p className="font-sans text-sm text-[#4A5240] leading-relaxed max-w-lg">
                  {article.desc}
                </p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
