import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProblemStatement() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section 
      ref={ref} 
      className="relative flex flex-col items-center justify-center min-h-[55vh] px-6 py-20 sm:py-28 md:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[800px] h-[400px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-8 sm:gap-10">
        
        {/* Neon Label */}
        <div 
          className={`inline-flex items-center gap-3 transition-all duration-700 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="w-8 h-[1px] bg-cyber-blue/50"></div>
          <span className="text-cyber-blue font-display text-xs sm:text-sm tracking-[0.25em] font-bold uppercase drop-shadow-[0_0_8px_rgba(0,240,255,0.4)]">
            The Problem
          </span>
          <div className="w-8 h-[1px] bg-cyber-blue/50"></div>
        </div>

        {/* Massive Headline */}
        <h2 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight transition-all duration-700 delay-200 transform break-words hyphens-auto ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          Static pricing leaves money on the table.<br className="hidden md:block"/>
          <span className="text-white/40 block mt-2">Manual dispatch bleeds margin.</span>
        </h2>

        {/* Supporting Subtext */}
        <p 
          className={`max-w-2xl text-base sm:text-lg md:text-xl text-white/60 font-body leading-relaxed transition-all duration-700 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          The mobility industry operates on legacy architecture built for a different era. We are rebuilding the stack from the ground up.
        </p>

      </div>
    </section>
  );
}
