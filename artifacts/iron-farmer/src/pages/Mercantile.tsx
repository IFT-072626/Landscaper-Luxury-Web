import { FadeIn } from '@/components/ui/fade-in';

const products = [
  { name: "Titanium Hand Trowel", category: "Tools", price: "$145", img: "/images/blog-soil.jpg" },
  { name: "Heritage Comfrey Root Cuttings", category: "Resilient Starts", price: "$45", img: "/images/blog-guilds.jpg" },
  { name: "Estate Topography Field Guide", category: "Gear", price: "$85", img: "/images/pcs-diagram.jpg" },
  { name: "Mycorrhizal Inoculant Blend", category: "Resilient Starts", price: "$60", img: "/images/mission-1.jpg" },
  { name: "Forged Pruning Shears", category: "Tools", price: "$220", img: "/images/blog-harvest.jpg" },
  { name: "Seed Bank Vault", category: "Rations", price: "$450", img: "/images/home-serv-2.jpg" },
];

export default function Mercantile() {
  return (
    <div className="pt-24 pb-32">
      <section className="px-6 lg:px-12 py-20 max-w-[1400px] mx-auto border-b border-[#D9CABA]">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl font-serif text-[#2B2B28] max-w-4xl leading-[1.1] mb-8">
            Mercantile
          </h1>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#B59A72] max-w-2xl leading-relaxed">
            Curated equipment, specialized genetics, and field gear. Available exclusively to our clients and select partners. (Catalog view only)
          </p>
        </FadeIn>
      </section>

      <section className="px-6 lg:px-12 py-24 max-w-[1400px] mx-auto">
        <div className="flex gap-8 mb-12 border-b border-[#D9CABA] pb-4 overflow-x-auto">
          <button className="font-mono text-xs uppercase tracking-[0.15em] text-[#2B2B28] font-bold whitespace-nowrap">All Items</button>
          <button className="font-mono text-xs uppercase tracking-[0.15em] text-[#B59A72] hover:text-[#2B2B28] whitespace-nowrap">Tools</button>
          <button className="font-mono text-xs uppercase tracking-[0.15em] text-[#B59A72] hover:text-[#2B2B28] whitespace-nowrap">Gear</button>
          <button className="font-mono text-xs uppercase tracking-[0.15em] text-[#B59A72] hover:text-[#2B2B28] whitespace-nowrap">Rations</button>
          <button className="font-mono text-xs uppercase tracking-[0.15em] text-[#B59A72] hover:text-[#2B2B28] whitespace-nowrap">Resilient Starts</button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {products.map((product, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group cursor-pointer">
                <div className="aspect-square bg-[#E8E4D9] mb-6 overflow-hidden border border-[#D9CABA]">
                  <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-multiply"
                  />
                </div>
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="font-serif text-xl text-[#2B2B28] mb-1">{product.name}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#B59A72]">{product.category}</p>
                  </div>
                  <span className="font-mono text-sm text-[#2B2B28]">{product.price}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
