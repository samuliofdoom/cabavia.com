import { useScrollReveal } from '../hooks/useScrollReveal';

export default function GateboundSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref} 
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neon-purple/30 bg-neon-purple/5 backdrop-blur-md shadow-[0_0_15px_rgba(176,38,255,0.15)] mb-6">
                <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse shadow-[0_0_10px_rgba(176,38,255,0.8)]"></span>
                <span className="text-xs font-display font-bold tracking-[0.2em] text-neon-purple uppercase">
                  Pricing Intelligence
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6">
                Meet <span className="bg-gradient-to-r from-neon-purple to-cyber-blue bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(176,38,255,0.3)]">Gatebound.</span>
              </h2>
              
              <p className="text-xl text-gray-400 font-body leading-relaxed max-w-xl">
                Maximize margin on every transfer. Our AI-driven dynamic pricing engine adjusts instantly based on real-time flight data, local demand clusters, and your fleet availability.
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md">
                  <svg className="w-5 h-5 text-cyber-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-display font-bold">Predictive Surges</h4>
                  <p className="text-sm text-gray-500">Anticipate demand before it happens.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual / UI Mockup */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(176,38,255,0.15)] overflow-hidden flex flex-col">
              
              {/* Mockup Header */}
              <div className="h-12 border-b border-white/10 flex items-center px-4 gap-2 bg-white/[0.02]">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <div className="ml-4 px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-500 font-mono tracking-wider">
                  gatebound_yield_engine
                </div>
              </div>

              {/* Data Visualization area */}
              <div className="flex-grow p-6 flex flex-col justify-end gap-3 relative">
                
                {/* Graph Bars */}
                <div className="absolute inset-0 p-6 flex items-end justify-between gap-2 z-0">
                  {[40, 65, 30, 85, 55, 95, 45, 70, 80, 50, 90, 60].map((height, i) => (
                    <div key={i} className="w-full relative group">
                      <div 
                        className={`w-full rounded-t-sm transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0 h-0'} ${
                          height > 80 ? 'bg-gradient-to-t from-neon-purple/20 to-neon-purple/80 shadow-[0_0_15px_rgba(176,38,255,0.4)]' : 
                          'bg-white/10'
                        }`}
                        style={{ height: isVisible ? `${height}%` : '0%', transitionDelay: `${i * 50}ms` }}
                      ></div>
                    </div>
                  ))}
                </div>

                {/* Floating UI Elements */}
                <div className={`absolute top-1/4 right-8 z-10 p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-neon-purple/30 shadow-[0_0_30px_rgba(176,38,255,0.2)] transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="text-xs text-gray-400 mb-1">Live Surge</div>
                  <div className="text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                    2.4x <span className="text-neon-purple text-lg animate-pulse">↑</span>
                  </div>
                  <div className="mt-2 w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-neon-purple h-full w-[85%] rounded-full shadow-[0_0_10px_rgba(176,38,255,0.8)]"></div>
                  </div>
                </div>

                <div className={`absolute bottom-8 left-8 z-10 p-4 rounded-xl bg-black/60 backdrop-blur-xl border border-cyber-blue/30 shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyber-blue/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse"></span>
                    </div>
                    <div>
                      <div className="text-xs text-cyber-blue font-bold tracking-wider">FLIGHT AF458</div>
                      <div className="text-[10px] text-gray-400">Landed • 350 pax influx</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}