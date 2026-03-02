import { Database, Activity, Brain, Share2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const nodes = [
  {
    title: 'Ingestion',
    desc: 'Live Flight APIs & Weather Data',
    icon: Database,
  },
  {
    title: 'Processing',
    desc: 'Real-time Event Stream',
    icon: Activity,
  },
  {
    title: 'Intelligence',
    desc: 'ML Yield & Demand Models',
    icon: Brain,
  },
  {
    title: 'Distribution',
    desc: 'Global Dispatch Nodes',
    icon: Share2,
  }
];

export default function ArchitectureSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="architecture" ref={ref} className="relative w-full py-24 md:py-32 overflow-hidden bg-[#0a0a0a]">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full max-h-[600px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-20 md:mb-32 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="w-8 h-px bg-cyber-blue/50"></span>
            <h2 className="text-xs md:text-sm tracking-[0.2em] text-cyber-blue uppercase font-display font-semibold">Data Pipeline</h2>
            <span className="w-8 h-px bg-cyber-blue/50"></span>
          </div>
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight break-words hyphens-auto">Infrastructure / <br className="block sm:hidden" />Cloud Native</h3>
          <p className="text-gray-400 max-w-2xl mx-auto font-body text-base md:text-lg">
            Our enterprise-grade architecture processes millions of data points in real-time, leveraging distributed cloud nodes to optimize fleet deployment instantly.
          </p>
        </div>

        {/* Nodes Grid */}
        <div className="relative">
          {/* Horizontal Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[12.5%] right-[12.5%] h-px bg-white/10 z-0">
            <div 
              className={`h-full bg-gradient-to-r from-cyber-blue via-neon-purple to-cyber-blue transition-all duration-[1.5s] ease-in-out delay-500`}
              style={{ 
                width: isVisible ? '100%' : '0%',
                boxShadow: '0 0 15px 1px rgba(0, 240, 255, 0.5)'
              }} 
            />
          </div>

          {/* Vertical Connection Line (Mobile) */}
          <div className="block lg:hidden absolute top-[60px] bottom-[60px] left-1/2 w-px bg-white/10 z-0 -translate-x-1/2">
            <div 
              className={`w-full bg-gradient-to-b from-cyber-blue via-neon-purple to-cyber-blue transition-all duration-[1.5s] ease-in-out delay-500`}
              style={{ 
                height: isVisible ? '100%' : '0%',
                boxShadow: '0 0 15px 1px rgba(0, 240, 255, 0.5)'
              }} 
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {nodes.map((node, i) => {
              const Icon = node.icon;
              return (
                <div 
                  key={i} 
                  className={`flex flex-col relative transition-all duration-700 ease-out`}
                  style={{ 
                    opacity: isVisible ? 1 : 0, 
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transitionDelay: `${300 + i * 200}ms` 
                  }}
                >
                  {/* Glowing Dots on the line (Desktop) */}
                  <div 
                    className="hidden lg:block absolute top-[60px] left-1/2 w-2 h-2 rounded-full bg-white z-20 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 delay-[1000ms]"
                    style={{ 
                      opacity: isVisible ? 1 : 0,
                      boxShadow: isVisible ? '0 0 10px 2px rgba(255, 255, 255, 0.8)' : 'none'
                    }}
                  />

                  {/* Node Card */}
                  <div className="group relative z-10 bg-[#050505]/60 border border-white/5 backdrop-blur-xl rounded-2xl p-8 hover:bg-white/[0.02] hover:border-cyber-blue/30 transition-all duration-500 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset,0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden h-full flex flex-col items-center text-center hover:-translate-y-2">
                    {/* Inner Gradient Hover Effect */}
                    <div className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-br from-cyber-blue/10 to-transparent rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 text-[10px] font-mono font-bold text-white/20 group-hover:text-cyber-blue/50 transition-colors tracking-widest z-20">
                      0{i + 1}
                    </div>

                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-20 group-hover:border-cyber-blue/40 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-500 bg-[#111111]">
                      <Icon className="w-6 h-6 text-gray-300 group-hover:text-cyber-blue transition-colors duration-500 relative z-30" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-20 flex flex-col flex-grow">
                      <h4 className="text-lg md:text-xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {node.title}
                      </h4>
                      <p className="text-gray-400 font-body text-sm leading-relaxed">
                        {node.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
