import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-[#0a0a0a]/80 border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="relative z-10 group">
          <div className="font-display font-extrabold text-2xl tracking-tighter text-white transition-transform group-hover:scale-105">
            CAB<span className="text-cyber-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">AVIA</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {['Platform', 'Solutions', 'Vision'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="font-body text-sm font-semibold text-gray-300 hover:text-white transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue transition-all group-hover:w-full shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block relative z-10">
          <button className="bg-cyber-blue text-[#0a0a0a] font-display font-bold text-sm tracking-widest uppercase rounded-full px-6 py-2.5 shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] hover:scale-105 transition-all duration-300">
            Join Waitlist
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-10 text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className="text-cyber-blue" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`
        fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8
        transition-all duration-500 md:hidden z-0
        ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        {['Platform', 'Solutions', 'Vision'].map((item, i) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className={`font-display text-4xl font-bold text-white transition-all duration-300 hover:text-cyber-blue hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <button 
          className={`mt-8 bg-cyber-blue text-[#0a0a0a] font-display font-bold text-lg tracking-wide rounded-full px-10 py-4 shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] transition-all duration-300 ${mobileMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          style={{ transitionDelay: '300ms' }}
        >
          JOIN WAITLIST
        </button>
      </div>
    </header>
  );
};

export default Navbar;
