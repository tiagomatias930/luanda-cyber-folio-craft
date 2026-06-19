import { useState } from "react";
import { Terminal, X } from "lucide-react";
import TerminalSection from "../components/TerminalSection";

const Index = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white font-sans">
      {/* Portfolio Iframe */}
      <div className={`h-full w-full transition-transform duration-700 ease-in-out ${isTerminalOpen ? "scale-[0.96] blur-[2px] opacity-40 pointer-events-none" : "scale-100"}`}>
        <iframe
          src="/portfolio.html"
          title="Tiago Matias Portfolio"
          className="h-full w-full border-0"
        />
      </div>

      {/* Interactive Terminal Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
          isTerminalOpen 
            ? "translate-y-0 opacity-100 pointer-events-auto" 
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-zinc-800 bg-black shadow-2xl rounded-sm">
          {/* Header Close button */}
          <button 
            onClick={() => setIsTerminalOpen(false)}
            className="absolute top-4 right-4 z-50 text-zinc-500 hover:text-white transition-colors duration-200 flex items-center gap-1.5 font-mono text-xs border border-zinc-800 px-2.5 py-1.5 hover:bg-zinc-900 rounded-sm"
          >
            <X size={14} />
            <span>CLOSE [ESC]</span>
          </button>
          
          <div className="p-2 md:p-6">
            <TerminalSection />
          </div>
        </div>
      </div>

      {/* Floating System Trigger Badge */}
      <button
        onClick={() => setIsTerminalOpen(!isTerminalOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 border border-white/20 bg-black text-white px-5 py-3 hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-mono text-xs tracking-wider uppercase font-semibold shadow-2xl hover:scale-105"
        style={{ borderRadius: "2px" }}
      >
        {isTerminalOpen ? (
          <>
            <X size={14} />
            <span>Close Console</span>
          </>
        ) : (
          <>
            <Terminal size={14} className="animate-pulse" />
            <span>System Console</span>
          </>
        )}
      </button>
    </main>
  );
};

export default Index;
