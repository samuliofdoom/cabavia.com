import { useScrollReveal } from '../hooks/useScrollReveal';

export default function DashboundSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section 
      ref={ref} 
      className="relative w-full py-24 md:py-32 overflow-hidden bg-[radial-gradient(ellipse_at_bottom,rgba(0,240,255,0.03)_0%,rgba(10,10,10,1)_100%)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Visual / Dashboard Mockup */}
          <div className={`w-full lg:w-1/2 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-cyber-blue/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="relative w-full aspect-square md:aspect-[4/3] bg-[#0a0a0a]/90 backdrop-blur-3xl border border-cyber-blue/20 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.1)] overflow-hidden flex flex-col group hover:border-cyber-blue/40 transition-colors duration-500">
              
              {/* Header Grid Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
              
              <div className="h-10 border-b border-cyber-blue/10 flex items-center justify-between px-4 gap-2 bg-cyber-blue/[0.02]">
                <div className="text-[10px] text-cyber-blue font-mono tracking-[0.2em] uppercase">
                  Terminal // Dashbound
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue/50"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue/50"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue/50"></span>
                </div>
              </div>

              {/* Node Network Visual */}
              <div className="flex-grow relative overflow-hidden">
                {/* Radar Sweep Effect */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-cyber-blue/20 rounded-full animate-[spin_10s_linear_infinite] [mask-image:linear-gradient(to_right,black,transparent)] opacity-50`}></div>
                
                {/* SVG Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300">
                  <path d="M50 250 Q150 150 200 100 T350 50" fill="none" stroke="#00f0ff" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
                  <path d="M100 50 Q200 150 300 250" fill="none" stroke="#b026ff" strokeWidth="1.5" strokeDasharray="3 6" className="animate-[dash_15s_linear_infinite_reverse]" />
                  <path d="M50 150 L350 150" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.2" />
                </svg>

                {/* Animated Glowing Nodes */}
                <div className="absolute top-[20%] right-[15%] w-4 h-4 bg-neon-purple rounded-full shadow-[0_0_20px_rgba(176,38,255,1)] animate-bounce">
                  <div className="absolute inset-0 w-full h-full rounded-full border-2 border-neon-purple animate-ping opacity-75"></div>
                </div>

                <div className="absolute bottom-[20%] left-[15%] w-5 h-5 bg-cyber-blue rounded-full shadow-[0_0_20px_rgba(0,240,255,1)] animate-pulse animation-delay-300">
                  <div className="absolute inset-0 w-full h-full rounded-full border-2 border-cyber-blue animate-ping opacity-50"></div>
                </div>
                
                <div className="absolute top-[45%] left-[45%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                  <div className="absolute inset-0 w-full h-full rounded-full border border-white animate-ping opacity-30 animation-delay-700"></div>
                </div>

                {/* Status Panels */}
                <div className={`absolute bottom-4 right-4 p-3 bg-black/60 backdrop-blur-md border border-white/5 rounded-lg w-40 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono mb-2">
                    <span>FLEET EFFICIENCY</span>
                    <span className="text-cyber-blue">98.2%</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="w-[98%] h-full bg-cyber-blue shadow-[0_0_10px_rgba(0,240,255,0.5)]"></div>
                  </div>
                </div>

                {/* CLI Text Overlay */}
                <div className="absolute top-4 left-4 font-mono text-[9px] text-cyber-blue/70 leading-relaxed max-w-[200px]">
                  <div>&gt; INIT ROUTING_ENGINE</div>
                  <div className="animate-pulse delay-100">&gt; OPTIMIZING NODES...</div>
                  <div className="delay-200">&gt; VEHICLE V-293 RE-ROUTED</div>
                  <div className="delay-300 text-neon-purple">&gt; ZERO IDLE TIME CONFIRMED</div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Text Content */}
          <div className="w-full lg:w-1/2 space-y-8 relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyber-blue/30 bg-cyber-blue/5 backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)] mb-6">
                <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
                <span className="text-xs font-display font-bold tracking-[0.2em] text-cyber-blue uppercase">
                  Dispatch Automation
                </span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white mb-6">
                Command with <span className="bg-gradient-to-l from-cyber-blue to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">Dashbound.</span>
              </h2>
              
              <p className="text-xl text-gray-400 font-body leading-relaxed max-w-xl">
                Perfectly orchestrated fleet logistics. Zero idle time. Zero empty legs. A centralized command center that predicts where your vehicles need to be before they get there.
              </p>
              
              <div className="mt-8 space-y-6">
                {/* Feature List */}
                {[
                  { title: "Node Optimization", desc: "Automated routing algorithms reduce empty mileage by 40%." },
                  { title: "Real-time Tracking", desc: "Sub-second latency updates on vehicle positioning and ETA." }
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