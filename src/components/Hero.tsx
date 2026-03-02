import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center min-h-screen">
      {/* Dynamic Background: Deep purple radial gradient combined with a subtle grid */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(176,38,255,0.08)_0%,rgba(10,10,10,1)_100%)]"></div>
        {/* Subtle dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        
        {/* Glowing atmospheric orbs */}
        <div className="absolute top-1/4 left-[10%] w-[30vw] h-[30vw] min-w-[300px] bg-cyber-blue opacity-10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-[10%] w-[40vw] h-[40vw] min-w-[400px] bg-neon-purple opacity-10 rounded-full mix-blend-screen filter blur-[150px] animate-pulse animation-delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-8 max-w-5xl mx-auto p-6 mt-16">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-blue/30 bg-cyber-blue/5 backdrop-blur-md mx-auto opacity-0 animate-fade-in-up shadow-[0_0_20px_rgba(0,240,255,0.1)]">
          <span className="w-2 h-2 rounded-full bg-cyber-blue animate-pulse shadow-[0_0_10px_rgba(0,240,255,0.8)]"></span>
          <span className="text-xs font-display font-bold tracking-[0.2em] text-cyber-blue uppercase">
            Platform Early Access
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight opacity-0 animate-fade-in-up animation-delay-100 leading-[1.1] text-white">
          AI-First
          <br />
          <span className="relative inline-block mt-2">
            <span className="bg-gradient-to-r from-cyber-blue to-neon-purple bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,240,255,0.3)]">
              Mobility Intelligence
            </span>
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-400 font-body max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-200 leading-relaxed">
          Building data-driven dispatch, pricing, and demand forecasting for modern transfer operators.
        </p>

        {/* CTA Form Placeholder */}
        <div className="pt-8 opacity-0 animate-fade-in-up animation-delay-300 w-full max-w-md mx-auto">
          <div className="relative group">
            {/* Animated border glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyber-blue to-neon-purple rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            
            {status === 'success' ? (
              <div className="relative flex items-center justify-center bg-[#0a0a0a] border border-cyber-blue/50 text-cyber-blue rounded-xl p-4 shadow-[0_0_20px_rgba(0,240,255,0.3)] backdrop-blur-xl animate-fade-in-up">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-display font-bold text-center">Thanks for joining the waitlist! We'll be in touch.</span>
              </div>
            ) : (
              <form 
                className="relative flex items-center bg-[#0a0a0a] border border-white/10 rounded-xl p-1 shadow-2xl backdrop-blur-xl transition-all duration-300"
                onSubmit={handleSubmit}
              >
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email to join the waitlist..." 
                  className="flex-grow bg-transparent text-white placeholder-gray-500 font-body px-4 py-3 outline-none disabled:opacity-50"
                  required
                  disabled={status === 'loading'}
                />
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="relative flex items-center justify-center px-6 py-3 rounded-lg bg-white text-[#0a0a0a] font-display font-bold hover:bg-cyber-blue hover:text-[#0a0a0a] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden shrink-0 min-w-[140px]"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0a0a0a]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          
          <p className="text-xs text-gray-500 font-body mt-4 tracking-wide">
            Limited spots available for beta testing.
          </p>
        </div>

      </div>
    </div>
  );
}
