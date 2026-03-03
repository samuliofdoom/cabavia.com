import { useScrollReveal } from '../hooks/useScrollReveal';
import { LineChart, Cpu, Network } from 'lucide-react';

const capabilities = [
  {
    icon: LineChart,
    title: 'Predictive Demand Models',
    text: 'Utilizing historic flight data and weather APIs to forecast fleet requirements up to 48 hours ahead.',
    delay: 'delay-100'
  },
  {
    icon: Cpu,
    title: 'Dynamic Yield Engine',
    text: 'Algorithmic surge pricing that updates continuously as localized saturation changes.',
    delay: 'delay-300'
  },
  {
    icon: Network,
    title: 'Graph-based Routing',
    text: 'Real-time dispatch optimization using advanced graph algorithms to minimize empty legs.',
    delay: 'delay-500'
  }
];

export default function CoreCapabilities() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section ref={ref} className="relative py-20 sm:py-24 px-6 bg-[#0a0a0a] overflow-hidden z-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h2 className={`text-2xl md:text-3xl font-display font-medium text-white/80 mb-12 sm:mb-16 text-center transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Built on deep tech, <span className="text-cyber-blue">not just APIs.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div 
                key={index}
                className={`flex flex-col items-start p-7 sm:p-10 rounded-2xl bg-[#111111] border border-white/5 border-t-cyber-blue/50 shadow-[0_0_30px_rgba(0,240,255,0.02)] transition-all duration-700 transform hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,240,255,0.05)] ${cap.delay} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <div className="p-4 rounded-xl bg-cyber-blue/10 mb-6 border border-cyber-blue/20">
                  <Icon className="w-8 h-8 text-cyber-blue" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-white mb-4">
                  {cap.title}
                </h3>
                <p className="text-white/60 font-body leading-relaxed">
                  {cap.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
