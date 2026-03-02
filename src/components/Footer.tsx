import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-[#0a0a0a] pt-16 pb-8 overflow-hidden z-20 mt-auto">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-cyber-blue/40 to-transparent blur-[2px]"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2 space-y-4">
            <div className="font-display font-bold text-2xl tracking-tighter text-white">
              CAB<span className="text-cyber-blue drop-shadow-[0_0_8px_rgba(0,240,255,0.3)]">AVIA</span>
            </div>
            <p className="text-gray-400 font-body text-sm leading-relaxed max-w-sm mt-4">
              Engineering the next generation of digital infrastructure.
              High-performance, scalable systems for the future.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-display font-bold tracking-widest text-xs uppercase opacity-80">Platform</h4>
            <ul className="space-y-3 font-body text-sm text-gray-500">
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Architecture</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Performance</a></li>
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-display font-bold tracking-widest text-xs uppercase opacity-80">Connect</h4>
            <ul className="space-y-3 font-body text-sm text-gray-500">
              <li><a href="#" className="hover:text-neon-purple transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Support</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-neon-purple transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-500 font-body text-xs">
            © 2026 CabAvia. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-gray-500">
            <a href="#" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <span className="sr-only">Twitter</span>
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <span className="sr-only">GitHub</span>
              <Github size={18} />
            </a>
            <a href="#" className="hover:text-white transition-colors hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={18} />
            </a>
          </div>
          
          <div className="flex gap-6 text-gray-500 font-body text-xs">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
