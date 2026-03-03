import { Plane, Star, Building2, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const useCases = [
  {
    id: 'airport-transfer-fleets',
    title: 'Airport Transfer Fleets',
    description: 'Automate dispatch and meet-and-greet execution precisely synchronized with actual gate arrivals.',
    icon: Plane,
    color: 'from-cyber-blue/20',
    delay: 100,
    offset: 'lg:mt-0',
  },
  {
    id: 'chauffeur-networks',
    title: 'Chauffeur Networks',
    description: 'Deliver white-glove consistency at scale, seamlessly managing complex multi-leg itineraries and VIP demands.',
    icon: Star,
    color: 'from-neon-purple/20',
    delay: 300,
    offset: 'lg:mt-16',
  },
  {
    id: 'corporate-shuttle-operators',
    title: 'Corporate Shuttle Operators',
    description: 'Optimize vehicle utilization and routing in real-time based on dynamic employee shift patterns and traffic conditions.',
    icon: Building2,
    color: 'from-blue-500/20',
    delay: 500,
    offset: 'lg:mt-8',
  }
];

export default function UseCasesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="relative w-full py-20 sm:py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyber-blue/5 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div 
          className="max-w-3xl mb-12 sm:mb-16 md:mb-24 transition-all duration-700 ease-out"
          style={{ 
            opacity: isVisible ? 1 : 0, 
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <span className="w-8 h-px bg-white/30"></span>
            <span className="text-xs md:text-sm tracking-[0.2em] text-white/60 uppercase font-display font-semibold">Built For</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-medium text-white leading-tight tracking-tight break-words hyphens-auto">
            Infrastructure for modern <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">mobility networks.</span>
          </h2>
        </div>

        {/* Cards Grid / Staggered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {useCases.map((useCase) => (
            <div 
              key={useCase.id}
              className={`group relative p-6 sm:p-8 md:p-10 rounded-3xl bg-gradient-to-b from-[#111111] to-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] mt-0 ${useCase.offset}`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: `${useCase.delay}ms`,
                transitionDuration: '800ms'
              }}
            >
              {/* Internal Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${useCase.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full blur-3xl -mr-20 -mt-20`}></div>
              
              {/* Top Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ease-out">
                  <useCase.icon className="w-6 h-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-display font-medium text-white mb-4">
                  {useCase.title}
                </h3>
                <p className="text-white/60 text-sm md:text-base leading-relaxed font-body">
                  {useCase.description}
                </p>
              </div>

              {/* Bottom Action */}
               <div className="relative z-10 mt-8 sm:mt-12 flex items-center text-xs font-semibold uppercase tracking-wider text-white/40 group-hover:text-white transition-colors duration-300">
                <span>Explore Capability</span>
                <ChevronRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
