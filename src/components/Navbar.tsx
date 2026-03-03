import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Yield Engine', href: '#gatebound' },
  { name: 'Dispatch', href: '#dashbound' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'About Us', href: '#about' }
];

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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out flex justify-center ${
        isScrolled ? 'pt-4' : 'pt-6 sm:pt-8'
      }`}
    >
      <div 
        className={`flex items-center justify-between transition-all duration-700 ease-out ${
          isScrolled 
            ? 'w-[92%] max-w-5xl bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 sm:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
            : 'w-[98%] max-w-7xl bg-transparent border-transparent py-2 px-6 sm:px-8'
        }`}
      >
        {/* Logo */}
        <a href="/" className="relative z-10 group flex items-center gap-3">
          {/* SVG Logomark: Abstract Data Node */}
          <div className="relative flex items-center justify-center w-8 h-8 transition-transform duration-500 group-hover:scale-110">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-cyber-blue/20 blur-md rounded-full group-hover:bg-neon-purple/30 transition-colors duration-500"></div>
            
            <svg viewBox="0 0 32 32" className="w-8 h-8 relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>CabAvia logo</title>
              {/* Outer connection ring */}
              <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" className="text-white/20 stroke-dasharray-[2_4] animate-[spin_10s_linear_infinite]" />
              
              {/* Data Nodes */}
              <path d="M16 6 L26 12 L26 22 L16 28 L6 22 L6 12 Z" stroke="url(#logo-grad)" strokeWidth="2" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(0,240,255,0.6)]" />
              
              {/* Inner structure forming an abstract 'C' and 'A' */}
              <path d="M16 12 L10 16 L16 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 16 L16 20 L16 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Center hot-node */}
              <circle cx="16" cy="20" r="2" fill="#00f0ff" className="animate-pulse" />
              
              <defs>
                <linearGradient id="logo-grad" x1="6" y1="6" x2="26" y2="28" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="100%" stopColor="#b026ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          <div className="font-display font-extrabold text-2xl tracking-tighter text-white">
            CAB<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-neon-purple drop-shadow-[0_0_12px_rgba(0,240,255,0.4)] transition-all duration-500 group-hover:from-neon-purple group-hover:to-cyber-blue">AVIA</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-body text-sm font-semibold text-gray-300 hover:text-white transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue transition-all group-hover:w-full shadow-[0_0_8px_rgba(0,240,255,0.8)]"></span>
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block relative z-10">
          <a href="/#waitlist" className="inline-flex bg-white text-[#050505] hover:bg-cyber-blue font-display font-bold text-sm tracking-widest uppercase rounded-full px-6 py-2.5 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5">
            Join Waitlist
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          type="button"
          className="md:hidden relative z-50 text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} className="text-cyber-blue" /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`
        fixed inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 px-6 pt-24 pb-10 overflow-y-auto
        transition-all duration-500 md:hidden z-40
        ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}>
        {navLinks.map((link, i) => (
          <a 
            key={link.name} 
            href={link.href} 
            className={`font-display text-3xl sm:text-4xl font-bold text-white transition-all duration-300 hover:text-cyber-blue hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: `${i * 100}ms` }}
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <button
          type="button"
          className={`mt-4 w-full max-w-xs bg-cyber-blue text-[#0a0a0a] font-display font-bold text-base tracking-wide rounded-full px-8 py-4 shadow-[0_0_15px_rgba(0,240,255,0.5)] hover:shadow-[0_0_25px_rgba(0,240,255,0.8)] transition-all duration-300 ${mobileMenuOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
          style={{ transitionDelay: '300ms' }}
          onClick={() => {
            setMobileMenuOpen(false);
            window.location.href = '/#waitlist';
          }}
        >
          JOIN WAITLIST
        </button>
      </div>
    </header>
  );
};

export default Navbar;
