import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparentMode = isHome && !isScrolled;

  const navClass = cn(
    "fixed top-0 w-full z-50 transition-all duration-500 border-b",
    transparentMode 
      ? "bg-transparent border-transparent text-white" 
      : "bg-[#F5F2EC]/95 backdrop-blur-md border-[#D9CABA] text-[#2B2B28]"
  );

  const links = [
    { label: "Mission", href: "/mission" },
    { 
      label: "Systems", 
      href: "/systems",
      sublinks: [
        { label: "Overview", href: "/systems" },
        { label: "Passive Calorie System", href: "/systems/passive-calorie-system" },
        { label: "Plant Guilds", href: "/systems/plant-guilds" },
        { label: "Site Preparation", href: "/systems/site-preparation" },
        { label: "Risk Assessment", href: "/systems/risk-assessment" },
        { label: "Homestead Defense Training", href: "/systems/homestead-defense" },
      ]
    },
    { label: "Principles", href: "/principles" },
    { label: "Intel", href: "/blog" },
    { label: "Mercantile", href: "/mercantile" },
  ];

  return (
    <header className={navClass}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-4 group">
          <span className="font-serif text-2xl tracking-[0.2em] font-medium uppercase">Iron Farmer</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <div key={link.label} className="relative group">
              <Link 
                href={link.href}
                className={cn(
                  "font-mono text-xs uppercase tracking-[0.15em] py-2 flex items-center gap-1",
                  "hover:opacity-70 transition-opacity"
                )}
              >
                {link.label}
                {link.sublinks && <ChevronDown className="w-3 h-3" />}
              </Link>
              
              {link.sublinks && (
                <div className="absolute top-full left-0 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-[#2B2B28] text-[#F5F2EC] p-6 flex flex-col gap-4 min-w-[240px] border border-[#4A5240]">
                    {link.sublinks.map(sub => (
                      <Link 
                        key={sub.label} 
                        href={sub.href}
                        className="font-mono text-xs uppercase tracking-[0.1em] hover:text-[#B59A72] transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link 
            href="/contact"
            className={cn(
              "font-mono text-xs uppercase tracking-[0.15em] px-6 py-3 transition-colors",
              transparentMode 
                ? "bg-white text-[#2B2B28] hover:bg-[#F5F2EC]" 
                : "bg-[#2B2B28] text-[#F5F2EC] hover:bg-[#4A5240]"
            )}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F5F2EC] text-[#2B2B28] border-b border-[#D9CABA] p-6 flex flex-col gap-6 shadow-xl">
          {links.map((link) => (
            <div key={link.label} className="flex flex-col gap-4 border-b border-[#D9CABA] pb-4">
              <Link 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm uppercase tracking-[0.15em]"
              >
                {link.label}
              </Link>
              {link.sublinks && (
                <div className="flex flex-col gap-3 pl-4 border-l border-[#D9CABA]">
                  {link.sublinks.map(sub => (
                    <Link 
                      key={sub.label} 
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-mono text-xs uppercase tracking-[0.1em] text-[#4A5240]"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link 
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-xs uppercase tracking-[0.15em] bg-[#2B2B28] text-[#F5F2EC] text-center py-4"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
