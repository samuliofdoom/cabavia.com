import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useAnimationFrame } from 'framer-motion';
import { canSubmit, isWaitlistHash, submitToFormspree, validateEmail } from '../lib/waitlist';

// Physics parameters for the living orbs
const ORBS = [
  { id: 1, size: 400, color: 'bg-cyber-blue', filter: 'blur-[120px]', speed: 0.0001, offset: 0 },
  { id: 2, size: 500, color: 'bg-neon-purple', filter: 'blur-[150px]', speed: 0.00008, offset: Math.PI / 2 },
  { id: 3, size: 350, color: 'bg-cyber-blue', filter: 'blur-[100px]', speed: 0.00015, offset: Math.PI },
  { id: 4, size: 450, color: 'bg-neon-purple', filter: 'blur-[130px]', speed: 0.00012, offset: Math.PI * 1.5 },
];

export default function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [lastSubmittedAtMs, setLastSubmittedAtMs] = useState<number | null>(null);
  const [waitlistHighlighted, setWaitlistHighlighted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const waitlistRef = useRef<HTMLDivElement>(null);
  const cooldownMs = 8000;
  const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  
  // Track mouse position for the repulsion effect
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      // Normalize mouse position relative to container center (-1 to 1)
      mousePos.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: ((e.clientY - rect.top) / rect.height) * 2 - 1
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let timeoutId: number | null = null;

    const highlightWaitlist = () => {
      const pathHash = `${window.location.pathname}${window.location.hash}`;
      if (!isWaitlistHash(window.location.hash) && !isWaitlistHash(pathHash)) {
        return;
      }

      setWaitlistHighlighted(true);
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
      timeoutId = window.setTimeout(() => {
        setWaitlistHighlighted(false);
      }, 2200);
      waitlistRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    highlightWaitlist();
    window.addEventListener('hashchange', highlightWaitlist);

    return () => {
      window.removeEventListener('hashchange', highlightWaitlist);
      if (timeoutId !== null) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateEmail(email);
    if (!validation.ok) {
      setStatus('error');
      setErrorMessage(validation.message);
      return;
    }

    const nowMs = Date.now();
    if (!canSubmit({ lastSubmittedAtMs, nowMs, cooldownMs })) {
      setStatus('error');
      setErrorMessage('Please wait a few seconds before submitting again.');
      return;
    }

    if (!formspreeEndpoint) {
      setStatus('error');
      setErrorMessage('Waitlist is temporarily unavailable. Please email hello@cabavia.com.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const result = await submitToFormspree({
      endpoint: formspreeEndpoint,
      email: validation.value,
      source: 'hero',
      honeypot,
    });

    if (result.ok) {
      setStatus('success');
      setEmail('');
      setHoneypot('');
      setLastSubmittedAtMs(nowMs);
      return;
    }

    setStatus('error');
    setErrorMessage(result.message);
  };

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Dynamic Background: Deep purple radial gradient combined with a subtle grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(176,38,255,0.08)_0%,rgba(10,10,10,1)_100%)]"></div>
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        
        {/* Physics-driven atmospheric orbs */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen">
          {ORBS.map((orb) => (
            <PhysicsOrb key={orb.id} orb={orb} mouseRef={mousePos} />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto p-4 sm:p-6 mt-20 sm:mt-16 w-full">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mx-auto opacity-0 animate-fade-in-up shadow-[0_0_20px_rgba(0,240,255,0.05)]">
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyber-blue animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.6)]"></span>
          <span className="text-[10px] sm:text-xs font-display font-bold tracking-[0.2em] text-gray-300 uppercase">
            Platform Early Access
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold tracking-tighter opacity-0 animate-fade-in-up animation-delay-100 leading-[1.1] sm:leading-[1.05] text-white px-2 sm:px-0">
          AI-First
          <br className="hidden sm:block" />
          <span className="relative inline-block mt-2 sm:mt-1">
            <span className="bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
              Mobility 
            </span>
            <span className="block sm:inline-block mt-1 sm:mt-0 sm:ml-4 bg-gradient-to-r from-cyber-blue to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.2)]">
              Intelligence
            </span>
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 font-body max-w-2xl mx-auto opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed font-medium px-4 sm:px-0">
          Building data-driven dispatch, pricing, and demand forecasting for modern transfer operators.
        </p>

        {/* CTA Form Placeholder */}
        <div
          id="waitlist"
          ref={waitlistRef}
          className={`pt-6 sm:pt-8 opacity-0 animate-fade-in-up animation-delay-300 w-full max-w-md mx-auto px-4 sm:px-0 transition-all duration-500 ${waitlistHighlighted ? 'rounded-2xl ring-1 ring-cyber-blue/60 bg-cyber-blue/[0.03] shadow-[0_0_30px_rgba(0,240,255,0.25)]' : ''}`}
        >
          <div className="relative group">
            {/* Animated border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue to-neon-purple rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            
            {status === 'success' ? (
              <div className="relative flex items-center justify-center bg-[#050505] border border-cyber-blue/30 text-cyber-blue rounded-xl p-4 shadow-[0_0_20px_rgba(0,240,255,0.2)] backdrop-blur-xl animate-fade-in-up">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <title>Waitlist submission succeeded</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-display font-bold text-center">Thanks for joining the waitlist! We'll be in touch.</span>
              </div>
            ) : (
              <form 
                className="relative flex flex-col sm:flex-row items-center bg-[#050505] border border-white/10 group-focus-within:border-cyber-blue/50 rounded-xl p-1 shadow-2xl backdrop-blur-xl transition-all duration-300 group-focus-within:shadow-[0_0_30px_rgba(0,240,255,0.15)] gap-2 sm:gap-0"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="company_website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access..." 
                  className="flex-grow w-full sm:w-auto bg-transparent text-white placeholder-gray-500 font-body px-5 py-3.5 outline-none disabled:opacity-50 text-sm md:text-base text-center sm:text-left"
                  required
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="relative w-full sm:w-auto flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#050505] font-display font-bold hover:bg-cyber-blue hover:text-[#050505] hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden shrink-0 min-w-[140px] transform hover:-translate-y-0.5"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0a0a0a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <title>Submitting waitlist request</title>
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
              </form>
            )}
          </div>

          {status === 'error' && errorMessage ? (
            <p className="mt-4 text-xs text-red-400 font-body tracking-wide">{errorMessage}</p>
          ) : null}
          
          <p className="text-xs text-gray-500 font-body mt-4 tracking-wide">
            Limited spots available for beta testing.
          </p>
        </div>

      </div>
    </div>
  );
}

// Sub-component for individual physics-driven orbs
function PhysicsOrb({ orb, mouseRef }: { orb: typeof ORBS[0], mouseRef: React.MutableRefObject<{x: number, y: number}> }) {
  const controls = useAnimation();
  const orbRef = useRef<HTMLDivElement>(null);
  
  // Custom animation loop for smooth, continuous physics calculation
  useAnimationFrame((time) => {
    if (!orbRef.current) return;
    
    // Base orbital movement using sine/cosine
    const baseX = Math.cos(time * orb.speed + orb.offset) * 25; // % of screen
    const baseY = Math.sin(time * (orb.speed * 1.5) + orb.offset) * 20; // slightly different speed for figure-8s
    
    // Calculate cursor interaction
    const orbNormX = baseX / 50; 
    const orbNormY = baseY / 50;
    
    // Calculate distance between mouse and the base position of this orb
    const dx = mouseRef.current.x - orbNormX;
    const dy = mouseRef.current.y - orbNormY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    let interactX = 0;
    let interactY = 0;
    
    // Soft, spring-like gravity. 
    // By using 'dx' directly instead of 'dx/distance', we avoid the singularity at distance=0
    // which caused the rapid whipping/rotating effect.
    if (distance < 1.2) {
      // intensity fades to 0 at the edge of the radius
      const intensity = (1.2 - distance); 
      const pull = 15; // strength of the spring
      
      interactX = dx * intensity * pull;
      interactY = dy * intensity * pull;
    }

    // Apply combined transformation smoothly
    controls.set({
      x: `calc(${baseX}vw + ${interactX}vw)`,
      y: `calc(${baseY}vh + ${interactY}vh)`,
    });
  });

  return (
    <motion.div
      ref={orbRef}
      animate={controls}
      className={`absolute top-1/2 left-1/2 rounded-full ${orb.color} ${orb.filter}`}
      style={{
        width: orb.size,
        height: orb.size,
        marginLeft: -(orb.size / 2),
        marginTop: -(orb.size / 2),
      }}
    />
  );
}
