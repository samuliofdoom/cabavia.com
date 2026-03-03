import { useScrollReveal } from '../hooks/useScrollReveal';

export default function DashboundSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="dashbound"
      ref={ref} 
      className="relative w-full py-20 sm:py-24 md:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,rgba(0,240,255,0.03)_0%,rgba(10,10,10,1)_100%)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 sm:gap-16 lg:gap-24">
          
          {/* Left Visual / Dashboard Mockup */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-cyber-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#050505]/60 backdrop-blur-3xl border border-white/5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col group hover:border-white/10 transition-colors duration-500">
              
              {/* Header Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
              
              <div className="h-10 border-b border-white/5 flex items-center justify-between px-4 gap-2 bg-white/[0.01]">
                <div className="text-[10px] text-gray-500 font-mono tracking-[0.2em] uppercase">
                  Terminal // Dashbound
                </div>
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                  <span className="w-2 h-2 rounded-full bg-white/20"></span>
                </div>
              </div>

              {/* Node Network Visual */}
              <div className="flex-grow relative overflow-hidden">
                {/* Radar Sweep Effect */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-cyber-blue/10 rounded-full animate-[spin_30s_linear_infinite] [mask-image:linear-gradient(to_right,black,transparent)] opacity-40`}></div>
                
                {/* SVG Connecting Lines & Map Background */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="line-glow-1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#00f0ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#b026ff" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="line-glow-2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#b026ff" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#b026ff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#00f0ff" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="glow-blur" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Faint Geographic Map / Grid Background */}
                  <g className="opacity-40">
                    <path d="M 20 80 Q 80 50 120 100 T 250 120 T 380 90 M 50 280 Q 150 220 200 260 T 350 200 M 180 30 Q 220 80 200 150 T 260 280" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
                    {/* Abstract grid blocks simulating city blocks */}
                    <rect x="40" y="40" width="30" height="20" fill="rgba(255,255,255,0.02)" />
                    <rect x="80" y="50" width="20" height="40" fill="rgba(255,255,255,0.015)" />
                    <rect x="300" y="150" width="40" height="30" fill="rgba(255,255,255,0.02)" />
                    <rect x="250" y="200" width="50" height="20" fill="rgba(255,255,255,0.01)" />
                    <rect x="150" y="220" width="30" height="30" fill="rgba(255,255,255,0.015)" />
                    
                    {/* Faint topographical contour lines */}
                    <path d="M -50 150 C 100 100 200 200 450 150" fill="none" stroke="rgba(0,240,255,0.06)" strokeWidth="0.5" />
                    <path d="M -50 160 C 100 110 200 210 450 160" fill="none" stroke="rgba(0,240,255,0.03)" strokeWidth="0.5" />
                    <path d="M -50 170 C 100 120 200 220 450 170" fill="none" stroke="rgba(0,240,255,0.015)" strokeWidth="0.5" />
                  </g>

                  {/* Connecting Lines with Glowing Gradients */}
                  <g filter="url(#glow-blur)">
                    <path d="M50 250 Q150 150 200 100 T350 50" fill="none" stroke="url(#line-glow-1)" strokeWidth="1.5" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                    <path d="M100 50 Q200 150 300 250" fill="none" stroke="url(#line-glow-2)" strokeWidth="1.5" strokeDasharray="3 6" className="animate-[dash_15s_linear_infinite_reverse]" />
                    <path d="M50 150 L350 150" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.2" />
                    
                    {/* Additional data link lines */}
                    <path d="M200 100 L300 250" fill="none" stroke="url(#line-glow-1)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.6" className="animate-[dash_10s_linear_infinite]" />
                    <path d="M50 250 L100 50" fill="none" stroke="url(#line-glow-2)" strokeWidth="0.5" strokeDasharray="2 4" opacity="0.6" className="animate-[dash_12s_linear_infinite_reverse]" />
                  </g>
                </svg>

                {/* Animated Glowing Nodes */}
                <div className="absolute top-[20%] right-[15%] w-3 h-3 bg-neon-purple rounded-full shadow-[0_0_15px_rgba(176,38,255,0.8)] animate-pulse">
                  <div className="absolute inset-0 w-full h-full rounded-full border border-neon-purple animate-ping opacity-50 duration-700"></div>
                </div>

                <div className="absolute bottom-[20%] left-[15%] w-4 h-4 bg-cyber-blue rounded-full shadow-[0_0_15px_rgba(0,240,255,0.8)] animate-pulse animation-delay-300">
                  <div className="absolute inset-0 w-full h-full rounded-full border border-cyber-blue animate-ping opacity-30 duration-700"></div>
                </div>
                
                <div className="absolute top-[45%] left-[45%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  <div className="absolute inset-0 w-full h-full rounded-full border border-white animate-ping opacity-20 animation-delay-700 duration-700"></div>
                </div>

                {/* Status Panels */}
                <div className={`absolute bottom-3 right-3 sm:bottom-4 sm:right-4 p-2.5 sm:p-3 bg-[#050505]/80 backdrop-blur-xl border border-white/5 rounded-lg w-32 sm:w-40 transition-all duration-500 delay-300 shadow-xl ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                  <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-2">
                    <span>PILOT EFFICIENCY</span>
                    <span className="text-white">~98%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[98%] h-full bg-cyber-blue shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                  </div>
                </div>

                {/* CLI Text Overlay */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 font-mono text-[9px] sm:text-[10px] text-gray-400 leading-relaxed max-w-[160px] sm:max-w-[200px] bg-[#050505]/40 backdrop-blur-md p-2 sm:p-3 rounded border border-white/5">
                  <div className="text-white">&gt; init route_engine</div>
                  <div className="animate-pulse delay-100">&gt; optimizing_nodes...</div>
                  <div className="delay-200 text-cyber-blue">&gt; vehicle v-293 rerouted</div>
                  <div className="delay-300 text-neon-purple">&gt; idle_time: minimized</div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 relative z-10">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.05)] mb-6">
                <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.6)]"></span>
                <span className="text-xs font-display font-bold tracking-[0.2em] text-gray-300 uppercase">
                  Dispatch Automation
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-5xl lg:text-6xl xl:text-5xl font-display font-extrabold tracking-tight sm:tracking-tighter text-white mb-6">
                Command with <br className="block sm:hidden xl:block" /><span className="bg-gradient-to-l from-cyber-blue to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.2)] whitespace-nowrap">Dashbound.</span>
              </h2>
              
              <p className="text-lg sm:text-xl text-gray-400 font-body leading-relaxed max-w-xl">
                Fleet logistics from one command layer. Lower idle time, fewer empty legs, and better placement decisions before demand peaks.
              </p>
              
               <div className="mt-8 space-y-5 sm:space-y-6">
                {/* Feature List */}
                {[
                  { title: "Node Optimization", desc: "Automated routing algorithms target lower empty mileage in pilot operations." },
                  { title: "Real-time Tracking", desc: "Low-latency updates on vehicle positioning and ETA." }
                ].map((feature, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center backdrop-blur-sm">
                        <div className="w-2 h-2 bg-cyber-blue rounded-full shadow-[0_0_8px_rgba(0,240,255,0.8)]"></div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-display font-bold text-lg">{feature.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
      
      {/* CSS Utilities for Animations inline */}
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
      `}</style>
    </section>
  );
}
