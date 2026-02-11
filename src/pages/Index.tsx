import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Github, Linkedin, Mail, ExternalLink, Download, Terminal, Lock, Server, Database, Figma, Moon, Sun, Briefcase, MapPin, BookOpen, Video } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import TerminalSection from "@/components/TerminalSection";
import VisitorCounter from "@/components/VisitorCounter";

const Index = () => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Scroll effect na header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mount component to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Função para fazer download do currículo
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/asset/Moderno.pdf';
    link.download = 'Curriculum Vitae.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Função para abrir o Gmail com email pré-preenchido
  const handleGetInTouch = () => {
    const subject = encodeURIComponent('Portfolio Contact - Opportunity Discussion');
    const body = encodeURIComponent(`Hello Tiago,

I found your portfolio and would like to discuss potential opportunities.

Best regards,`);
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=tiagomatias072@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
  };

  const skills = [
    { name: "C/C++", level: "Advanced", category: "Programming" },
    { name: "Python", level: "Advanced", category: "Programming" },
    { name: "JavaScript/TypeScript", level: "Intermediate", category: "Programming" },
    { name: "React Native", level: "Intermediate", category: "Frontend" },
    { name: "Figma", level: "Intermediate", category: "Frontend" },
    { name: "Adobe UX", level: "Intermediate", category: "Frontend" },
    { name: "Canva", level: "Intermediate", category: "Frontend" },
    { name: "Linux", level: "Advanced", category: "Systems" },
    { name: "Windows", level: "Intermediate", category: "Systems" },
    { name: "Penetration Testing", level: "Intermediate", category: "Security" },
    { name: "Network Security", level: "Intermediate", category: "Security" },
    { name: "Red Team", level: "Intermediate", category: "Security" },
    { name: "Docker", level: "Intermediate", category: "DevOps" },
    { name: "Git", level: "Advanced", category: "Tools" },
    { name: "Github", level: "Advanced", category: "Tools" },
    { name: "Bash/Shell", level: "Advanced", category: "Scripting" }
  ];

  const projects = [
    {
      title: "Genioshell",
      description: "A complete shell implementation in C with advanced features like piping, redirections, and built-in commands.",
      tech: ["C", "Linux", "System Programming"],
      link: "#",
      highlight: false,
      image: null
    },
    {
      title: "Web Application Firewall",
      description: "Custom WAF implementation with real-time threat detection and blocking.",
      tech: ["C++", "Network Security", "Linux"],
      link: "#",
      highlight: true,
      image: null
    },
    {
      title: "Reverse Engineering Tool",
      description: "This script allows an attacker to gain an interactive shell on a target web server or on a target running PHP. It works by establishing a connection back to the attacker's machine. PHP Reverse Shell.",
      tech: ["Python", "Sherlock", "Reverse Shell"],
      link: "https://github.com/tiagomatias930/reverse_shell.git",
      highlight: false,
      image: "/reverse.png"
    },
    {
      title: "Heetch Easy",
      description: "A prototype of heetch's taxi service with a new mode of transportation.",
      tech: ["Canva", "Figma"],
      link: "https://www.behance.net/gallery/210297691/Heetch-Easy",
      highlight: false,
      image: "/heetch.png"
    },
    {
      title: "Toolkit for CTF",
      description: "Static and dynamic malware analysis platform with sandbox environment.",
      tech: ["learn", "toolkit", "Security"],
      link: "https://github.com/tiagomatias930/ctf-tools.git",
      highlight: false,
      image: null
    },
    {
      title: "ModExpress.apk",
      description: "A mobile application that simulates bank withdrawals without a card.",
      tech: ["React-Native", "TypeScript", "Css3"],
      link: "#",
      highlight: true,
      image: null
    },
    {
      title: "SkillarCode",
      description: "A web application that aims to solve technological problems and provide practical learning in prompt engineering, challenging users to solve real-world challenges.",
      tech: ["React-Native", "TypeScript", "Css3"],
      link: "https://42skillar.geniomatias.me",
      highlight: true,
      image: "/42skillar.png"
    },
    {
      title: "FéDigital",
      description: "A mobile app focused on simplifying the submission of tithes and offerings with treasury automation via WhatsApp.",
      tech: ["Figma", "Adobe UX", "Sketch", "Canva"],
      link: "https://www.behance.net/gallery/236411581/FDigital",
      highlight: true,
      image: "/fe.png"
    },
    {
      title: "Mixa App",
      description: "Banking/mobile-first app to manage balance, payments, transfers, cards, and access to an AI assistant.",
      tech: ["React-native", "Vite.js", "Twilio CSS", "Heroicons"],
      link: "https://github.com/tiagomatias930/mixa_base_aplication.git",
      highlight: false,
      image: null
    },
    {
      title: "Pembé Na Mwindo",
      description: "Official website for the Pembe na Mwindo theatre group to increase their digital presence and audience.",
      tech: ["Vite.js", "Twilio CSS", "Canva", "Figma", "Picsart"],
      link: "https://pembenamwindo.vercel.app/",
      highlight: true,
      image: "/pembe.png"
    },
    {
      title: "NUTRISCAN App",
      description: "An innovative mobile application designed to optimize your health and wellness journey with nutrition management.",
      tech: ["Vite.js", "Expo", "Canva"],
      link: "https://com-wnutriscan-19285553.br.uptodown.com/android",
      highlight: true,
      image: "/nutriscan.png"
    },
    {
      title: "Tchissola's Dream",
      description: "A story based on real events, written by Engineer Albina Assis, featured at the Angolan pavilion at Expo Japan 2025.",
      tech: ["ChatGpt/Sora", "Hailuoai", "Canva", "Capcut"],
      link: "https://drive.google.com/file/d/1ixnzPZSUT-ElCwkdAm5f_nU8EnbxJy4i/view?usp=sharing",
      highlight: true,
      image: "/tshicole.png"
    },
    {
      title: "Chronicles of the Unspoken",
      description: "An immersive tactical RPG experience utilizing Gemini 2.5 Live API to transform voice and movements into commands.",
      tech: ["Studio AI", "Gemini 2.5 Live API", "Canva", "ReactJs"],
      link: "https://chronicles-of-the-unspoken.vercel.app/",
      highlight: true,
      image: "/chron.png"
    },
        {
      title: "Angola Vibes",
      description: "It is a progressive web application (PWA) that functions as an interactive guide to tourism, gastronomy, and lifestyle in Angola. Developed with a focus on real, cost-effective experiences, the application connects travelers and locals through authentic recommendations from cultural ambassador Jessi Madalena.",
      tech: ["React", "Supabase", "Vite.js", "Tailwind CSS"],
      link: "https://visite-angola.vercel.app/",
      highlight: true,
      image: "/Screenshot from 2026-02-03 15-36-05.png"
    },
      
    {
      title: "Fenix Goals",
      description: "Is a high-performance platform developed to transform abstract goals into tangible achievements. The system is based on Brian Tracy's 12-Step Phoenix Seminar, combining success psychology with generative artificial intelligence.",
      tech: ["TypeScript", "HTML"],
      link: "https://fenix-goals.vercel.app",
      highlight: true,
      image: "/Screenshot from 2026-02-11 02-17-16.png"
    }
  ];


  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-slate-800 ">
        <div className="container mx-auto px-6 py-4 max-w-6xl ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-8">
              <nav className="hidden md:flex space-x-8">
                <a href="#home" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">Home</a>
                <a href="#about" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">About</a>
                <a href="#resume" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">Resume</a>
                <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">Portfolio</a>
                <a href="#terminal" className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors">Terminal</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-black min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 text-white leading-tight">
              TIAGO<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">MATIAS</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 font-light">SOFTWARE ENGINEER</p>
            <p className="text-gray-500 text-sm mb-8 max-w-sm leading-relaxed">Student at 42Luanda focusing on software development, mobile application development and web development, penetration testing, and network security.            </p>
            <div className="flex gap-4 mb-12">
              <Button 
                size="lg" 
                className="border border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400/10 font-medium"
                onClick={handleDownloadResume}
              >
                Resume
              </Button>
              <Button 
                size="lg" 
                className="border border-gray-600 text-gray-300 bg-transparent hover:bg-slate-800 font-medium"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Portfolio
              </Button>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/tiagomatias930" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/tiago-matias-062b88217" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://www.behance.net/tiagomatias42" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-cyan-400 transition-colors">
                <Figma size={20} />
              </a>
              <a href="mailto:tiagomatias072@gmail.com" className="text-gray-500 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="w-full aspect-square-[4/4] rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 p-1">
                <img 
                  src="/jame.jpg" 
                  alt="Tiago Matias"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/10 rounded-lg border border-cyan-400/30 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-black border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="hidden lg:block">
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700">
                <img 
                  src="/ternoMatias(1).png" 
                  alt="Tiago Matias"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-5xl font-bold mb-2 text-white">ABOUT</h2>
              <p className="text-cyan-400 text-sm font-medium mb-8">tiagomatias072@gmail.com</p>
              
              <p className="text-gray-400 text-base leading-relaxed mb-6">
I am a passionate software engineer and student at 42Luanda, where I developed a solid foundation in systems programming, algorithms, collaborative coding, web design, networking, and automation.              </p>
              
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                My curiosity has also led me to explore reverse engineering, Lua bytecode analysis, and flag decoding in Capture The Flag (CTF) competitions, participating in challenges on HackTheBox, 42CTF, TryHackMe, and other cybersecurity platforms.
              </p>

              <div className="space-y-3 text-sm">
                <div className="text-gray-500">
                  <span className="text-gray-400 font-medium">Location:</span> Luanda, Angola
                </div>
                <div className="text-gray-500">
                  <span className="text-gray-400 font-medium">Education:</span> 42Luanda - Software Engineering
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Resume Section */}
      <section id="resume" className="py-24 px-6 bg-black border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-white">RESUME</h2>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Column 1 - Skills */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8">SOFTWARE SKILLS</h3>
              <div className="space-y-6">
                {[
                  { name: "C/C++", level: 90 },
                  { name: "Python", level: 70 },
                  { name: "React/TypeScript", level: 90 },
                  { name: "Linux/Bash", level: 80 },
                  { name: "Web Design", level: 90 },
                  { name: "Docker", level: 92 },
                  { name: "Git/Github", level: 90 },
                  { name: "Networking Computer", level: 70 },
                  { name: "React-native/Expo", level: 70 },
                  { name: "Penetration Testing", level: 80 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mt-12 mb-8">LANGUAGES</h3>
              <div className="space-y-6">
                {[
                  { name: "Portuguese", level: 100 },
                  { name: "English", level: 40 }                
                ].map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">{lang.name}</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" 
                        style={{ width: `${lang.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mt-12 mb-6">PERSONAL SKILLS</h3>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>Problem Solving - Logical Thinking</li>
                <li>Collaboration - Communication</li>
                <li>Time Management - Organisation</li>
                <li>Adaptability - Learning Mindset</li>
              </ul>
            </div>

            {/* Column 2 - Experience & Education */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8">EXPERIENCE</h3>
              <div className="space-y-8">
                {[
                  {
                    title: "SKILLARCODE",
                    subtitle: "Web Application Developer",
                    description: "Full-stack development of learning platform"
                  },
                  {
                    title: "PEMBE NA MWINDO",
                    subtitle: "Website Developer",
                    description: "Official website for theatre group"
                  },
                  {
                    title: "HEETCH EASY",
                    subtitle: "UI/UX Designer",
                    description: "Prototype design for transportation app"
                  },

                  {
                    title: "Fé Digital",
                    subtitle: "UI/UX Designer",
                    description: "Prototype design for Tithe app"
                  },
                  {
                    title: "NUTRÍSCAN APP",
                    subtitle: "Mobile App Developer",
                    description: "Nutrition management application"
                  }, 
                  {
                    title: "ANGOLA VIBES",
                    subtitle: "Web Application Developer",
                    description: "Full-stack development of tourism guide platform"
                  }, 
                  {
                    title: "Nova Angola",
                    subtitle: "Appplication Developer",
                    description: "In processing the development of a mobile application for the Nova Angola project, The solution integrates geolocation functionalities, AI image analysis, health screening, and secure authentication to foster data-driven community actions in real time."
                  }
                ].map((exp, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center flex-shrink-0">
                      <Briefcase size={18} className="text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-gray-200 font-bold text-sm">{exp.title}</h4>
                      <p className="text-gray-500 text-xs mb-1">{exp.subtitle}</p>
                      <p className="text-gray-600 text-xs">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-white mt-12 mb-8">EDUCATION</h3>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-400/20 border border-cyan-400/50 flex items-center justify-center flex-shrink-0">
                  <BookOpen size={18} className="text-cyan-400" />
                </div>
                <div>
                  <h4 className="text-gray-200 font-bold text-sm">Studying Computer Science</h4>
                  <p className="text-gray-500 text-xs">42 Luanda, Angola</p>
                </div>
              </div>
            </div>

            {/* Column 3 - What Can I Do & Hobbies */}
            <div>
              <h3 className="text-xl font-bold text-white mb-8">WHAT CAN I DO ?</h3>
              <ul className="space-y-3 text-gray-400 text-sm mb-12">
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>Logo & Stationery Design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>Branding & Catalog</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>Web/Mobile Development</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>UI/UX Design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">→</span>
                  <span>System Development</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-8">DESIGN SKILLS</h3>
              <ul className="space-y-3 text-gray-400 text-sm mb-12">
                <li className="flex gap-2">
                  <span className="text-cyan-400">◆</span>
                  <span>Figma - Prototyping & Wireframing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">◆</span>
                  <span>Adobe Suite - Design & Branding</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">◆</span>
                  <span>Stitch - Prototyping & Wireframing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">◆</span>
                  <span>Canva - Quick Design</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">◆</span>
                  <span>Miro</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">◆</span>
                  <span>Marvelapp</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">◆</span>
                  <span>Material UI</span>
                </li>
              </ul>

              <h3 className="text-xl font-bold text-white mb-6">HOBBIES & INTERESTS</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-2">
                    <Code size={20} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-xs text-center">Programming</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-2">
                    <Briefcase size={20} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-xs text-center">Trading</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-2">
                    <Video size={20} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-xs text-center">Video editing</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-2">
                    <Terminal size={20} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-xs text-center">CTF Challenges</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-2">
                    <Lock size={20} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-xs text-center">Security</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center mb-2">
                    <Figma size={20} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-xs text-center">Design UI/UX</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-black border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-16 text-white">PORTFOLIO</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={project.title} className="relative group">
                {/* Imagem que aparece ao passar o mouse */}
                {project.image && (
                  <div className="absolute inset-0 rounded-lg overflow-hidden opacity-0 group-hover:opacity-35 transition-opacity duration-300 z-20 pointer-events-none">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                )}
                
                {/* Card do projeto */}
                <Card 
                  className={`bg-slate-900 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden relative h-full ${
                    project.image ? 'group-hover:bg-transparent' : ''
                  }`}
                  onMouseEnter={() => setHoveredProject(project.title)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-base text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </CardTitle>
                      </div>
                      {project.link && project.link !== "#" && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-gray-500 hover:text-cyan-400 p-0 h-auto w-auto"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className={project.image && hoveredProject === project.title ? 'opacity-0' : 'opacity-100'}>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          className="bg-slate-800 text-cyan-400 border border-cyan-400/30 text-xs hover:bg-cyan-400/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <TerminalSection />

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-black border-t border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">LET'S CONNECT</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto text-base leading-relaxed">
Interested in collaborating on cybersecurity projects or discussing opportunities in secure development?

Let's connect and build something secure together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              className="border border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400/10 font-medium"
              onClick={() => window.open("https://github.com/tiagomatias930", "_blank")}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button 
              className="border border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400/10 font-medium"
              onClick={() => window.open("https://www.linkedin.com/in/tiago-matias-062b88217", "_blank")}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button 
              className="border border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400/10 font-medium"
              onClick={() => window.open("https://www.behance.net/tiagomatias42", "_blank")}
            >
              <Figma className="mr-2 h-4 w-4" />
              Behance
            </Button>
            <Button 
              className="border border-cyan-400 text-cyan-400 bg-transparent hover:bg-cyan-400/10 font-medium"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-950 text-gray-500 text-center border-t border-slate-800">
        <div className="container mx-auto max-w-6xl space-y-3">
          <VisitorCounter />
          <p className="text-sm">&copy; 2026 Tiago Matias. Developed with React, TypeScript, and ❤️</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
