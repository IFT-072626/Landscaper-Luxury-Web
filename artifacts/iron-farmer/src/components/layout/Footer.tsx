import { Link } from 'wouter';

export function Footer() {
  return (
    <footer className="bg-[#2B2B28] text-[#F5F2EC] pt-24 pb-12 px-6 lg:px-12 border-t border-[#4A5240]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
        <div className="col-span-1 lg:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <span className="font-serif text-3xl tracking-[0.2em] font-medium uppercase">Iron Farmer</span>
          </Link>
          <p className="font-sans text-[#D9CABA] max-w-md text-sm leading-relaxed">
            Permanent Food Infrastructure for the Resilient Estate.
          </p>
        </div>
        
        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-[#B59A72] mb-6">Services</h4>
          <ul className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.1em]">
            <li><Link href="/systems/passive-calorie-system" className="hover:text-[#B59A72] transition-colors">Passive Calorie System</Link></li>
            <li><Link href="/systems/plant-guilds" className="hover:text-[#B59A72] transition-colors">Plant Guilds</Link></li>
            <li><Link href="/systems/site-preparation" className="hover:text-[#B59A72] transition-colors">Site Preparation</Link></li>
            <li><Link href="/systems/risk-assessment" className="hover:text-[#B59A72] transition-colors">Risk Assessment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs uppercase tracking-[0.15em] text-[#B59A72] mb-6">Company</h4>
          <ul className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.1em]">
            <li><Link href="/mission" className="hover:text-[#B59A72] transition-colors">Mission</Link></li>
            <li><Link href="/principles" className="hover:text-[#B59A72] transition-colors">Principles</Link></li>
            <li><Link href="/mercantile" className="hover:text-[#B59A72] transition-colors">Mercantile</Link></li>
            <li><Link href="/blog" className="hover:text-[#B59A72] transition-colors">Field Notes</Link></li>
            <li><Link href="/contact" className="hover:text-[#B59A72] transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8 border-t border-[#4A5240] flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[#8a8a8a]">
        <p>&copy; 2026 Iron Farmer. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
