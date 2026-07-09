import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Location', href: '#location' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-2' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`relative flex items-center justify-between rounded-2xl px-6 py-4 transition-all duration-500 ${
            isScrolled ? 'glass shadow-lg bg-paper/80 overflow-hidden' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex-shrink-0 relative z-10 flex items-center gap-4 group">
            <div className={`absolute inset-0 bg-[#4e3322]/80 blur-lg rounded-full scale-125 transition-all duration-500 ${isScrolled ? 'opacity-80 scale-110' : 'opacity-100'}`}></div>
            <img 
              src="https://plain-apac-prod-public.komododecks.com/202607/09/yHB01SaYZIWWnYh9A0v0/image.png" 
              alt="Niwasa Homestay" 
              className={`relative z-10 transition-all duration-500 ${isScrolled ? 'h-11 md:h-12 drop-shadow-sm' : 'h-16 md:h-[4.6rem] drop-shadow-[0_0_20px_rgba(78,51,34,0.9)]'} w-auto object-contain group-hover:scale-105`} 
              loading="eager"
            />
            <span 
              className={`relative z-10 transition-all duration-500 tracking-[0.2em] ${isScrolled ? 'text-base md:text-xl text-ink' : 'text-lg md:text-2xl text-paper drop-shadow-[0_0_10px_rgba(78,51,34,0.9)]'}`} 
              style={{ fontFamily: '"Loretta Display Medium", "Loretta Display", "Playfair Display", serif', fontWeight: 500 }}
            >
              NIWASA
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled ? 'text-ink/80 hover:text-accent' : 'text-paper/90 hover:text-paper drop-shadow-md'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#book"
              className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all hover:scale-105 ${
                isScrolled 
                  ? 'bg-accent text-paper shadow-md hover:bg-accent/90 hover:shadow-lg' 
                  : 'glass text-paper hover:bg-paper/20'
              }`}
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-10 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled || isMobileMenuOpen ? 'text-ink' : 'text-paper'} />
            ) : (
              <Menu className={isScrolled ? 'text-ink' : 'text-paper'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 p-6 glass-panel rounded-2xl flex flex-col space-y-6 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-ink hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#book"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-accent text-paper text-center py-3 rounded-xl font-medium shadow-md"
            >
              Book Your Stay
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
