import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import GateboundSection from './components/GateboundSection';
import DashboundSection from './components/DashboundSection';

function App() {
  return (
    <div className="app-wrapper min-h-screen bg-[#0a0a0a] text-white font-body overflow-x-hidden relative selection:bg-cyber-blue selection:text-[#0a0a0a] flex flex-col">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 bg-noise mix-blend-overlay pointer-events-none z-50"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative flex-grow flex flex-col z-10">
        <Hero />
        <GateboundSection />
        <DashboundSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
