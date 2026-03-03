import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function GateboundSection() {
  const { ref, isVisible } = useScrollReveal();
  const [viewMode, setViewMode] = useState<'ui' | 'api'>('ui');

  return (
    <section 
      id="gatebound"
      ref={ref} 
      className="relative w-full py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 relative z-10">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(176,38,255,0.05)] mb-6">
                <span className="w-2 h-2 rounded-full bg-neon-purple animate-pulse shadow-[0_0_10px_rgba(176,38,255,0.6)]"></span>
                <span className="text-xs font-display font-bold tracking-[0.2em] text-gray-300 uppercase">
                  Pricing Intelligence
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-5xl font-display font-extrabold tracking-tighter text-white mb-6">
                Meet <br className="block sm:hidden" /><span className="bg-gradient-to-r from-neon-purple to-cyber-blue bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(176,38,255,0.2)] whitespace-nowrap">Gatebound.</span>
              </h2>
              
              <p className="text-xl text-gray-400 font-body leading-relaxed max-w-xl">
                Improve margin on every transfer. Our dynamic pricing engine updates continuously from flight signals, local demand clusters, and fleet availability.
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
          <div className={`w-full lg:w-1/2 relative transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-neon-purple/10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#050505]/60 backdrop-blur-3xl border border-white/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col group hover:border-white/10 transition-colors duration-500">
              
              {/* Mockup Header */}
              <div className="h-12 border-b border-white/5 flex items-center justify-between px-4 gap-2 bg-white/[0.01]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-red-500/80 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-yellow-500/80 transition-colors"></div>
                  <div className="w-3 h-3 rounded-full bg-white/20 hover:bg-green-500/80 transition-colors"></div>
                  <div className="ml-4 px-2 py-1 rounded bg-white/5 border border-white/5 text-[10px] text-gray-500 font-mono tracking-wider">
                    gatebound_yield_engine
                  </div>
                </div>

                {/* View Mode Toggle */}
                <div className="flex bg-black/40 p-1 rounded-md border border-white/10">
                  <button
                    onClick={() => setViewMode('ui')}
                    className={`px-3 py-1 text-[10px] font-mono rounded transition-all ${
                      viewMode === 'ui'
                        ? 'bg-white/10 text-white shadow-sm'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    UI View
                  </button>
                  <button
                    onClick={() => setViewMode('api')}
                    className={`px-3 py-1 text-[10px] font-mono rounded transition-all ${
                      viewMode === 'api'
                        ? 'bg-white/10 text-white shadow-sm'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    API Response
                  </button>
                </div>
              </div>

              {/* Data Visualization area */}
              <div className="flex-grow p-0 flex flex-col justify-end gap-3 relative overflow-hidden">
                {viewMode === 'ui' ? (
                  <>
                    {/* SVG Graph Area */}
                    <div className="absolute inset-0 z-0 flex items-end overflow-hidden rounded-b-2xl">
                  <div className="relative w-full h-[70%]">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black)] pointer-events-none"></div>

                    <svg 
                      viewBox="0 0 1000 300" 
                      preserveAspectRatio="none" 
                      className="absolute bottom-0 w-full h-full"
                    >
                      <defs>
                        <linearGradient id="area-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="rgba(176,38,255,0.4)" />
                          <stop offset="100%" stopColor="rgba(176,38,255,0.0)" />
                        </linearGradient>
                        <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#00f0ff" />
                          <stop offset="50%" stopColor="#b026ff" />
                          <stop offset="100%" stopColor="#00f0ff" />
                        </linearGradient>
                        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="8" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>
                      
                      {/* Area Gradient */}
                      <path 
                        d="M 0 250 C 75 250, 75 220, 150 220 C 225 220, 225 150, 300 150 C 375 150, 375 180, 450 180 C 525 180, 525 100, 600 100 C 675 100, 675 120, 750 120 C 825 120, 825 40, 900 40 C 950 40, 975 30, 1000 30 L 1000 300 L 0 300 Z"
                        fill="url(#area-gradient)"
                        className={`transition-all duration-700 ease-in-out origin-bottom ${isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`}
                        style={{ transitionDelay: '300ms' }}
                      />
                      
                      {/* Animated Line Graph */}
                      <path 
                        d="M 0 250 C 75 250, 75 220, 150 220 C 225 220, 225 150, 300 150 C 375 150, 375 180, 450 180 C 525 180, 525 100, 600 100 C 675 100, 675 120, 750 120 C 825 120, 825 40, 900 40 C 950 40, 975 30, 1000 30"
                        fill="none"
                        stroke="url(#line-gradient)"
                        strokeWidth="3"
                        filter="url(#glow)"
                        vectorEffect="non-scaling-stroke"
                        strokeDasharray="1500"
                        strokeDashoffset={isVisible ? 0 : 1500}
                        className="transition-all duration-[2000ms] ease-out"
                        style={{ transitionDelay: '100ms' }}
                      />
                    </svg>

                    {/* Glowing Data Points */}
                    {[
                      { left: '30%', top: '50%', color: 'cyber-blue', delay: '700ms' },
                      { left: '45%', top: '60%', color: 'cyber-blue', delay: '900ms' },
                      { left: '60%', top: '33.33%', color: 'neon-purple', delay: '1100ms' },
                      { left: '75%', top: '40%', color: 'neon-purple', delay: '1300ms' },
                      { left: '90%', top: '13.33%', color: 'neon-purple', delay: '1500ms' },
                      { left: '100%', top: '10%', color: 'white', delay: '1700ms', pulse: true },
                    ].map((point, i) => (
                      <div 
                        key={i}
                        className={`absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full z-10 transition-all duration-500 scale-0 ${isVisible ? 'scale-100 opacity-100' : 'opacity-0'}`}
                        style={{ 
                          left: point.left, 
                          top: point.top, 
                          transitionDelay: point.delay,
                          backgroundColor: point.color === 'white' ? '#fff' : point.color === 'neon-purple' ? '#b026ff' : '#00f0ff',
                          boxShadow: `0 0 15px 2px ${point.color === 'white' ? '#fff' : point.color === 'neon-purple' ? 'rgba(176,38,255,0.8)' : 'rgba(0,240,255,0.8)'}`
                        }}
                      >
                        {point.pulse && (
                          <div className="absolute inset-0 rounded-full animate-ping bg-white opacity-70"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating UI Elements */}
                <div className={`absolute top-1/4 right-6 z-10 p-5 rounded-2xl bg-gradient-to-br from-[#0a0a0a]/90 to-[#050505]/90 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 delay-500 transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_20px_rgba(176,38,255,0.05)] pointer-events-none"></div>
                  {/* Neon top accent line */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-70"></div>
                  
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-xs font-mono tracking-widest text-gray-400 uppercase">Sample Surge</div>
                    <div className="px-2 py-0.5 rounded-full bg-neon-purple/20 border border-neon-purple/30 text-[9px] text-neon-purple font-bold">ACTIVE</div>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="text-4xl font-display font-bold text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                      2.1x
                    </div>
                    <div className="text-neon-purple text-xl animate-bounce mb-1 drop-shadow-[0_0_8px_rgba(176,38,255,0.8)]">↑</div>
                  </div>
                  <div className="mt-3 w-full bg-black/50 h-1.5 rounded-full overflow-hidden border border-white/5">
                    <div className="bg-gradient-to-r from-neon-purple to-cyber-blue h-full w-[85%] rounded-full shadow-[0_0_15px_rgba(176,38,255,0.6)] relative">
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                </div>

                <div className={`absolute bottom-6 left-6 z-10 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyber-blue rounded-l-xl shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                  <div className="flex items-center gap-4 pl-2">
                    <div className="relative w-10 h-10 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                      <svg className="w-5 h-5 text-cyber-blue drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {/* Radar sweep effect or pulse */}
                      <span className="absolute inset-0 rounded-full border border-cyber-blue animate-ping opacity-20"></span>
                    </div>
                    <div>
                      <div className="text-sm text-white font-display font-bold tracking-wider drop-shadow-md">FLIGHT AF458</div>
                      <div className="text-[11px] text-cyber-blue mt-0.5 font-mono">Landed • 350 pax influx</div>
                    </div>
                  </div>
                </div>
                  </>
                ) : (
                  <div className="absolute inset-0 bg-[#0a0a0a] p-6 overflow-auto font-mono text-sm leading-loose">
                    <pre className="text-gray-300">
{`{
  `}<span className="text-cyber-blue">"endpoint"</span>{`: `}<span className="text-green-400">"/v1/yield/surge"</span>{`,
  `}<span className="text-cyber-blue">"mode"</span>{`: `}<span className="text-green-400">"sample"</span>{`,
  `}<span className="text-cyber-blue">"flight_id"</span>{`: `}<span className="text-green-400">"AF458"</span>{`,
  `}<span className="text-cyber-blue">"pax_influx"</span>{`: `}<span className="text-neon-purple">350</span>{`,
  `}<span className="text-cyber-blue">"fleet_availability"</span>{`: `}<span className="text-neon-purple">0.12</span>{`,
  `}<span className="text-cyber-blue">"recommended_surge"</span>{`: `}<span className="text-neon-purple">2.1</span>{`,
  `}<span className="text-cyber-blue">"confidence_band"</span>{`: `}<span className="text-green-400">"high"</span>{`,
  `}<span className="text-cyber-blue">"latency_band"</span>{`: `}<span className="text-green-400">"low"</span>{`
}`}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
