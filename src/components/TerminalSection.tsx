import { useState, useRef, useEffect, useCallback } from "react";
import { Terminal as TerminalIcon } from "lucide-react";

interface TerminalLine {
  type: "input" | "output" | "error" | "ascii" | "system";
  content: string;
}

const ASCII_BANNER = `
 ████████╗██╗ █████╗  ██████╗  ██████╗ 
 ╚══██╔══╝██║██╔══██╗██╔════╝ ██╔═══██╗
    ██║   ██║███████║██║  ███╗██║   ██║
    ██║   ██║██╔══██║██║   ██║██║   ██║
    ██║   ██║██║  ██║╚██████╔╝╚██████╔╝
    ╚═╝   ╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝
       M A T I A S  —  P O R T F O L I O
`;

const COMMANDS: Record<string, () => string[]> = {
  help: () => [
    "Available commands:",
    "",
    "  whoami        — About me",
    "  skills        — Technical skills",
    "  projects      — My projects",
    "  experience    — Work experience",
    "  education     — Education info",
    "  contact       — How to reach me",
    "  socials       — Social media links",
    "  languages     — Languages I speak",
    "  certifications— Certifications & platforms",
    "  cat resume    — Download resume",
    "  clear         — Clear terminal",
    "  help          — Show this menu",
    "",
    "Tip: Type any command above to explore!",
  ],
  whoami: () => [
    "┌─────────────────────────────────────────────┐",
    "│  Tiago Matias                                │",
    "│  Software Engineer | 42Luanda Student        │",
    "│  Location: Luanda, Angola 🇦🇴                 │",
    "├─────────────────────────────────────────────┤",
    "│  Passionate about software development,      │",
    "│  cybersecurity, penetration testing, and      │",
    "│  building secure applications.                │",
    "│                                               │",
    "│  Currently studying at 42Luanda with a focus  │",
    "│  on systems programming, algorithms,          │",
    "│  collaborative coding, and automation.        │",
    "└─────────────────────────────────────────────┘",
  ],
  skills: () => [
    "╔══════════════════════════════════════════════╗",
    "║            TECHNICAL SKILLS                  ║",
    "╠══════════════════════════════════════════════╣",
    "║  Programming:                                ║",
    "║    C/C++  ████████████████████░░  90%        ║",
    "║    Python ████████████████████░░  85%        ║",
    "║    TS/JS  █████████████████░░░░░  89%        ║",
    "║                                              ║",
    "║  Systems & DevOps:                           ║",
    "║    Linux  ████████████████████░░  90%        ║",
    "║    Docker ████████████████████░░  92%        ║",
    "║    Git    ████████████████████░░  90%        ║",
    "║                                              ║",
    "║  Security:                                   ║",
    "║    PenTest ███████████████████░░  80%        ║",
    "║    Network █████████████████░░░░  70%        ║",
    "║                                              ║",
    "║  Design:                                     ║",
    "║    Figma · Adobe UX · Canva · Miro           ║",
    "╚══════════════════════════════════════════════╝",
  ],
  projects: () => [
    "┌──────────────────────────────────────────────┐",
    "│  PROJECTS                                     │",
    "├──────────────────────────────────────────────┤",
    "│                                               │",
    "│  [01] Genioshell                              │",
    "│       Shell implementation in C               │",
    "│                                               │",
    "│  [02] Web Application Firewall                │",
    "│       Custom WAF with real-time detection      │",
    "│                                               │",
    "│  [03] Reverse Engineering Tool                │",
    "│       PHP Reverse Shell                       │",
    "│                                               │",
    "│  [04] 42skillar                               │",
    "│       Prompt engineering learning platform     │",
    "│                                               │",
    "│  [05] Pembé Na Mwindo                         │",
    "│       Website for theatre group               │",
    "│                                               │",
    "│  [06] NUTRISCAN App                           │",
    "│       Nutrition management mobile app          │",
    "│                                               │",
    "│  [07] Angola Vibes                            │",
    "│       Tourism guide platform PWA              │",
    "│                                               │",
    "│  [08] Fenix Goals                             │",
    "│       Goal tracking with AI                   │",
    "│                                               │",
    "│  Type 'help' for more commands                │",
    "└──────────────────────────────────────────────┘",
  ],
  experience: () => [
    "── EXPERIENCE ──────────────────────────────────",
    "",
    "  ▸ 42SKILLAR — Web Application Developer",
    "    Full-stack development of learning platform",
    "",
    "  ▸ PEMBE NA MWINDO — Website Developer",
    "    Official website for theatre group",
    "",
    "  ▸ HEETCH EASY — UI/UX Designer",
    "    Prototype design for transportation app",
    "",
    "  ▸ FÉ DIGITAL — UI/UX Designer",
    "    Prototype design for Tithe app",
    "",
    "  ▸ NUTRISCAN APP — Mobile App Developer",
    "    Nutrition management application",
    "",
    "  ▸ ANGOLA VIBES — Web Application Developer",
    "    Full-stack development of tourism guide",
    "",
  ],
  education: () => [
    "── EDUCATION ───────────────────────────────────",
    "",
    "  🎓 42 Luanda, Angola",
    "     Studying Computer Science",
    "",
    "     Focus: Systems Programming, Algorithms,",
    "     Collaborative Coding, Networking & Security",
    "",
  ],
  contact: () => [
    "── CONTACT ─────────────────────────────────────",
    "",
    "  📧 Email:    tiagomatias072@gmail.com",
    "  📍 Location: Luanda, Angola",
    "",
    "  Open to collaborations and opportunities!",
    "",
  ],
  socials: () => [
    "── SOCIAL LINKS ────────────────────────────────",
    "",
    "  GitHub:   github.com/tiagomatias930",
    "  LinkedIn: linkedin.com/in/tiago-matias-062b88217",
    "  Behance:  behance.net/tiagomatias42",
    "",
  ],
  languages: () => [
    "── LANGUAGES ───────────────────────────────────",
    "",
    "  Portuguese  ████████████████████  100%  (Native)",
    "  English     ████████░░░░░░░░░░░░   40%  (Learning)",
    "",
  ],
  certifications: () => [
    "── CERTIFICATIONS & PLATFORMS ──────────────────",
    "",
    "  ▸ 42 Luanda — Software Engineering Student",
    "  ▸ HackTheBox — Cybersecurity Challenges",
    "  ▸ TryHackMe — Security Training",
    "  ▸ 42CTF — Capture The Flag Competitions",
    "",
  ],
  "cat resume": () => [
    "Downloading resume...",
    "✓ Resume downloaded successfully!",
  ],
};

const TerminalSection = () => {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "ascii", content: ASCII_BANNER },
    { type: "system", content: "Welcome to Tiago Matias' portfolio terminal." },
    { type: "system", content: 'Type "help" to see available commands.\n' },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();

    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: cmd },
    ];

    if (trimmed === "") {
      setLines(newLines);
      return;
    }

    if (trimmed === "clear") {
      setLines([
        { type: "ascii", content: ASCII_BANNER },
        { type: "system", content: "Terminal cleared." },
        { type: "system", content: 'Type "help" to see available commands.\n' },
      ]);
      return;
    }

    if (trimmed === "cat resume") {
      const output = COMMANDS["cat resume"]();
      setLines([
        ...newLines,
        ...output.map((line) => ({ type: "output" as const, content: line })),
      ]);
      // Trigger download
      const link = document.createElement("a");
      link.href = "/asset/Moderno.pdf";
      link.download = "Curriculum Vitae.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      return;
    }

    const handler = COMMANDS[trimmed];
    if (handler) {
      const output = handler();
      setLines([
        ...newLines,
        ...output.map((line) => ({ type: "output" as const, content: line })),
      ]);
    } else {
      setLines([
        ...newLines,
        {
          type: "error",
          content: `command not found: ${trimmed}. Type "help" for available commands.`,
        },
      ]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(currentInput);
      setCommandHistory((prev) => [currentInput, ...prev]);
      setHistoryIndex(-1);
      setCurrentInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      } else {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const allCommands = Object.keys(COMMANDS);
      const matches = allCommands.filter((c) =>
        c.startsWith(currentInput.toLowerCase())
      );
      if (matches.length === 1) {
        setCurrentInput(matches[0]);
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getLineClass = (type: TerminalLine["type"]) => {
    switch (type) {
      case "input":
        return "text-cyan-400";
      case "output":
        return "text-gray-300";
      case "error":
        return "text-red-400";
      case "ascii":
        return "text-cyan-500 font-bold";
      case "system":
        return "text-gray-500 italic";
      default:
        return "text-gray-300";
    }
  };

  return (
    <section id="terminal" className="py-24 px-6 bg-black border-t border-slate-800">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl font-bold mb-4 text-white">TERMINAL</h2>
        <p className="text-gray-400 mb-12 text-base">
          Explore my portfolio through an interactive terminal. Type <span className="text-cyan-400 font-mono">"help"</span> to get started.
        </p>

        {/* Terminal Window */}
        <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl shadow-cyan-500/5">
          {/* Title Bar */}
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs font-mono">
              <TerminalIcon size={14} />
              <span>tiago@portfolio:~</span>
            </div>
            <div className="w-16"></div>
          </div>

          {/* Terminal Body */}
          <div
            ref={terminalRef}
            className="bg-[#0a0e14] p-6 h-[480px] overflow-y-auto font-mono text-sm cursor-text scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
            onClick={focusInput}
          >
            {lines.map((line, idx) => (
              <div key={idx} className={`whitespace-pre-wrap ${getLineClass(line.type)}`}>
                {line.type === "input" ? (
                  <span>
                    <span className="text-green-400">tiago@portfolio</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-500">$ </span>
                    <span className="text-white">{line.content}</span>
                  </span>
                ) : (
                  line.content
                )}
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center">
              <span className="text-green-400">tiago@portfolio</span>
              <span className="text-gray-500">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-500">$ </span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-white outline-none border-none font-mono text-sm caret-cyan-400"
                autoFocus
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
              />
            </div>
          </div>
        </div>

        <p className="text-gray-600 text-xs mt-4 text-center font-mono">
          Supports: Tab autocomplete · ↑↓ command history · clear
        </p>
      </div>
    </section>
  );
};

export default TerminalSection;
