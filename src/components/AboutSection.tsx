import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const gcpServices = ['Cloud Run', 'Cloud SQL', 'BigQuery', 'Vertex AI', 'Cloud Storage', 'Cloud Monitoring'];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section 
      id="about" 
      ref={ref} 
      className="relative w-full py-32 md:py-48 overflow-hidden bg-[#050505] border-t border-white/5"
    >
      {/* Background aesthetic details */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyber-blue/5 rounded-full blur-[150px] pointer-events-none opacity-50 translate-x-1/3 -translate-y-1/3"></div>
      
      {/* Structural grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20"
           style={{ 
             backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
             backgroundSize: '100px 100px'
           }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Massive Statement */}
          <div 
            className={`col-span-1 lg:col-span-7 transition-all duration-1000 ease-out`}
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)' 
            }}
          >
            <div className="inline-flex items-center space-x-3 mb-8">
              <span className="w-12 h-px bg-cyber-blue"></span>
              <span className="text-xs md:text-sm tracking-[0.2em] text-cyber-blue uppercase font-display font-semibold">
                About Us
              </span>
            </div>
            
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-bold text-white leading-[1.05] tracking-tight">
              We are building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">operating system</span> for global ground mobility.
            </h2>
          </div>

          {/* Right Column: Origin & CTA */}
          <div 
            className={`col-span-1 lg:col-span-5 flex flex-col pt-4 lg:pt-24 transition-all duration-1000 ease-out delay-300`}
            style={{ 
              opacity: isVisible ? 1 : 0, 
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)' 
            }}
          >
            <div className="relative">
              {/* Decorative accent */}
              <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-blue/20 to-transparent hidden lg:block"></div>
              
              <p className="text-gray-400 font-body text-lg md:text-xl leading-relaxed mb-10">
                CabAvia is built by a founding team with experience across mobility operations, pricing systems, and applied AI. We focus on helping transfer operators run tighter dispatch, improve utilization, and scale reliably.
              </p>

              <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-body">
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-white/50 uppercase tracking-[0.14em] text-[11px]">Company</p>
                  <p className="mt-1 text-white/85">CabAvia</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-white/50 uppercase tracking-[0.14em] text-[11px]">Stage</p>
                  <p className="mt-1 text-white/85">Pre-funded product startup</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-white/50 uppercase tracking-[0.14em] text-[11px]">Focus</p>
                  <p className="mt-1 text-white/85">Airport transfer and chauffeur operators</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-white/50 uppercase tracking-[0.14em] text-[11px]">Contact</p>
                  <p className="mt-1 text-white/85">hello@cabavia.com</p>
                </div>
              </div>

              <div className="mb-10 rounded-2xl border border-cyber-blue/25 bg-cyber-blue/[0.04] p-5">
                <p className="text-xs tracking-[0.18em] uppercase font-display font-semibold text-cyber-blue">Built on Google Cloud</p>
                <p className="mt-2 text-sm text-white/70 font-body leading-relaxed">
                  MVP stack designed for fast iteration with enterprise-grade reliability.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {gcpServices.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-body tracking-wide text-white/80"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <a 
                href="mailto:hello@cabavia.com"
                className="group relative inline-flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border border-white/20 text-white font-display font-medium uppercase tracking-widest text-sm transition-all duration-300 hover:border-cyber-blue hover:text-cyber-blue overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyber-blue/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                <span className="relative z-10">Partner with us</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] pointer-events-none"></div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
