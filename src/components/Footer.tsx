const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#050505] pt-16 md:pt-20 pb-8 overflow-hidden z-20 mt-auto">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 pb-12 border-b border-white/5">
          <div className="lg:col-span-5 text-center lg:text-left">
            <a href="/" className="inline-flex items-center gap-3 group relative z-10 justify-center lg:justify-start">
              <div className="relative flex items-center justify-center w-8 h-8 transition-transform duration-500 group-hover:scale-110">
                <div className="absolute inset-0 bg-cyber-blue/20 blur-md rounded-full group-hover:bg-neon-purple/30 transition-colors duration-500" />
                <svg viewBox="0 0 32 32" className="w-8 h-8 relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>CabAvia logo</title>
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" className="text-white/20" />
                  <path d="M16 6 L26 12 L26 22 L16 28 L6 22 L6 12 Z" stroke="url(#footer-logo-grad)" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M16 12 L10 16 L16 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 16 L16 20 L16 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="16" cy="20" r="2" fill="#00f0ff" />
                  <defs>
                    <linearGradient id="footer-logo-grad" x1="6" y1="6" x2="26" y2="28" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#00f0ff" />
                      <stop offset="100%" stopColor="#b026ff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="font-display font-extrabold text-3xl tracking-tighter text-white">
                CAB<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-neon-purple">AVIA</span>
              </div>
            </a>

            <p className="mt-5 text-gray-400 font-body text-sm md:text-base leading-relaxed max-w-md">
              AI-first dispatch, pricing, and demand intelligence for modern transfer operators.
            </p>
          </div>

          <nav className="lg:col-span-3 text-center lg:text-left" aria-label="Footer">
            <h4 className="text-white/70 font-display font-bold tracking-[0.18em] text-xs uppercase mb-4">Product</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><a href="/#gatebound" className="text-gray-400 hover:text-cyber-blue transition-colors">Yield Engine</a></li>
              <li><a href="/#dashbound" className="text-gray-400 hover:text-cyber-blue transition-colors">Dispatch</a></li>
              <li><a href="/#how-it-works" className="text-gray-400 hover:text-cyber-blue transition-colors">How It Works</a></li>
              <li><a href="/#about" className="text-gray-400 hover:text-cyber-blue transition-colors">About</a></li>
            </ul>
          </nav>

          <div className="lg:col-span-4 lg:pl-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
              <h4 className="text-white font-display font-semibold text-lg text-center lg:text-left">Ready to modernize fleet economics?</h4>
              <p className="mt-2 text-gray-400 text-sm font-body leading-relaxed">
                Join the early cohort shaping AI-native operations for ground mobility.
              </p>
              <a
                href="/#waitlist"
                className="mt-5 inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white text-[#050505] px-5 py-2.5 font-display font-bold text-xs tracking-[0.14em] uppercase hover:bg-cyber-blue transition-colors"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs font-body text-gray-500">
          <p>© 2026 CabAvia. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span className="text-white/20">|</span>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
