import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Globe, Github, Linkedin, Mail, ExternalLink, Download, Terminal, Lock, Server, Database, User, Figma, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";

const Index = () => {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

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
      highlight: false
    },
    {
      title: "Web Application Firewall",
      description: "Custom WAF implementation with real-time threat detection and blocking.",
      tech: ["C++", "Network Security", "Linux"],
      link: "#",
      highlight: true
    },
    {
      title: "Reverse Engineering Tool",
      description: "This script allows an attacker to gain an interactive shell on a target web server or on a target running PHP. It works by establishing a connection back to the attacker's machine. PHP Reverse Shell.",
      tech: ["Python", "Sherlock", "Reverse Shell"],
      link: "https://github.com/tiagomatias930/reverse_shell.git",
      highlight: false
    },
    {
      title: "Heetch Easy",
      description: "A prototype of heetch's taxi service with a new mode of transportation.",
      tech: ["Canva", "Figma"],
      link: "https://www.behance.net/gallery/210297691/Heetch-Easy",
      highlight: false
    },
    {
      title: "Toolkit for CTF",
      description: "Static and dynamic malware analysis platform with sandbox environment.",
      tech: ["learn", "toolkit", "Security"],
      link: "https://github.com/tiagomatias930/ctf-tools.git",
      highlight: false
    },
    {
      title: "ModExpress.apk",
      description: "A mobile application that simulates bank withdrawals without a card.",
      tech: ["React-Native", "TypeScript", "Css3"],
      link: "#",
      highlight: true
    },
    {
      title: "42skillar",
      description: "A web application that aims to solve technological problems and provide practical learning in prompt engineering, challenging users to solve real-world challenges.",
      tech: ["React-Native", "TypeScript", "Css3"],
      link: "https://42skillar.geniomatias.me",
      highlight: true
    },
    {
      title: "FéDigital",
      description: "A mobile app focused on simplifying the submission of tithes and offerings with treasury automation via WhatsApp.",
      tech: ["Figma", "Adobe UX", "Sketch", "Canva"],
      link: "https://www.behance.net/gallery/236411581/FDigital",
      highlight: true
    },
    {
      title: "Mixa App",
      description: "Banking/mobile-first app to manage balance, payments, transfers, cards, and access to an AI assistant.",
      tech: ["React-native", "Vite.js", "Twilio CSS", "Heroicons"],
      link: "https://github.com/tiagomatias930/mixa_base_aplication.git",
      highlight: true
    },
    {
      title: "Pembé Na Mwindo",
      description: "Official website for the Pembe na Mwindo theatre group to increase their digital presence and audience.",
      tech: ["Vite.js", "Twilio CSS", "Canva", "Figma", "Picsart"],
      link: "https://pembenamwindo.vercel.app/",
      highlight: true
    },
    {
      title: "NUTRISCAN App",
      description: "An innovative mobile application designed to optimize your health and wellness journey with nutrition management.",
      tech: ["Vite.js", "Expo", "Canva"],
      link: "https://com-wnutriscan-19285553.br.uptodown.com/android",
      highlight: true
    },
    {
      title: "Tchissola's Dream",
      description: "A story based on real events, written by Engineer Albina Assis, featured at the Angolan pavilion at Expo Japan 2025.",
      tech: ["ChatGpt/Sora", "Hailuoai", "Canva", "Capcut"],
      link: "https://drive.google.com/file/d/1ixnzPZSUT-ElCwkdAm5f_nU8EnbxJy4i/view?usp=sharing",
      highlight: true
    },
    {
      title: "Chronicles of the Unspoken",
      description: "An immersive tactical RPG experience utilizing Gemini 2.5 Live API to transform voice and movements into commands.",
      tech: ["Studio AI", "Gemini 2.5 Live API", "Canva", "Figma"],
      link: "https://ai.studio/apps/drive/17Ndmpn-a8lNcYpo76eUGGL1Z9_flb80f?fullscreenApplet=true",
      highlight: true
    }
  ];

  const stats = [
    { number: "12+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Skills Mastered" },
    { number: "24/7", label: "Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header id="header" className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isHeaderScrolled 
          ? 'bg-white/95 shadow-lg' 
          : 'bg-white/10 backdrop-blur-md'
      }`}>
        <div className="container mx-auto px-6 py-4 max-w-6xl">
          <div className="flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold text-gradient">Tiago Matias</a>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className={`transition-colors duration-300 font-medium ${
                isHeaderScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
              }`}>Início</a>
              <a href="#about" className={`transition-colors duration-300 font-medium ${
                isHeaderScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
              }`}>Sobre</a>
              <a href="#skills" className={`transition-colors duration-300 font-medium ${
                isHeaderScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
              }`}>Skills</a>
              <a href="#projects" className={`transition-colors duration-300 font-medium ${
                isHeaderScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
              }`}>Projetos</a>
              <a href="#contact" className={`transition-colors duration-300 font-medium ${
                isHeaderScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
              }`}>Contato</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-primary to-accent min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <div className="animate-slide-up">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative cyber-profile">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white/10 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white/5 border-2 border-white/30 flex items-center justify-center overflow-hidden hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                    <img 
                      src="/jame.jpg" 
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl cyber-glow">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white text-shadow-lg">
              Cyber Security <br /> Software Engineer
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Passionate about cybersecurity, system programming, and building secure applications. 
              42Luanda student with expertise in C/C++, penetration testing, and network security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 cyber-glow font-bold" onClick={handleDownloadResume}>
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button size="lg" className="bg-white/10 text-white border-2 border-white hover:bg-white/20 font-bold backdrop-blur-sm" onClick={handleGetInTouch}>
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold mb-8 text-gradient">Sobre Mim</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Sou um engenheiro de software apaixonado e estudante da 42Luanda, onde desenvolvi uma base sólida em programação de sistemas, algoritmos, codificação colaborativa, design web, networking e automação.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Minha curiosidade também me levou a explorar engenharia reversa, análise de bytecode Lua, e decodificação de flags em competições Capture The Flag (CTF), participando em desafios no HackTheBox, 42CTF, TryHackMe e outras plataformas de cibersegurança.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 text-sm">42Luanda Student</Badge>
                <Badge className="bg-accent/20 text-accent border border-accent/30 px-4 py-2 text-sm">Cybersecurity</Badge>
                <Badge className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 text-sm">System Programming</Badge>
                <Badge className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 text-sm">Prompt Engineering</Badge>
                <Badge className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 text-sm">Mobile Dev</Badge>
              </div>
            </div>
            <div className="animate-slide-up">
              <Card className="cyber-card cyber-border bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Terminal className="mr-2 h-5 w-5 text-primary" />
                    42 Projects Completed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Libft", tech: "C", score: "125" },
                    { name: "ft_printf", tech: "C", score: "100" },
                    { name: "Born2beroot", tech: "VM Manager", score: "116" },
                    { name: "Get next line", tech: "C", score: "100" },
                    { name: "Fract-ol", tech: "Graphics", score: "100" },
                    { name: "push_swap", tech: "Algorithms", score: "108" },
                    { name: "Philosophers", tech: "Threading", score: "100" },
                    { name: "Minitalk", tech: "Signals", score: "100" },
                    { name: "Minishell", tech: "Shell", score: "98" },
                    { name: "cub3d", tech: "3D Graphics", score: "101" },
                    { name: "CPP Modules", tech: "C++", score: "90" },
                    { name: "Inception", tech: "Docker", score: "100" }
                  ].map((project) => (
                    <div key={project.name} className="flex justify-between items-center pb-2 border-b border-border/30">
                      <span className="text-sm font-medium">{project.name}</span>
                      <div className="flex gap-2">
                        <Badge variant="outline" className="text-xs">{project.tech}</Badge>
                        <Badge className="bg-primary/20 text-primary text-xs font-bold">{project.score}</Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 grid-bg">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Programming", "Security", "Systems", "Tools", "Frontend", "DevOps"].map((category) => (
              <Card key={category} className="cyber-card cyber-border bg-white/70 backdrop-blur-sm hover:cyber-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    {category === "Security" && <Lock className="mr-2 h-5 w-5 text-accent" />}
                    {category === "Programming" && <Code className="mr-2 h-5 w-5 text-primary" />}
                    {category === "Systems" && <Server className="mr-2 h-5 w-5 text-primary" />}
                    {category === "Tools" && <Terminal className="mr-2 h-5 w-5 text-accent" />}
                    {category === "Frontend" && <Globe className="mr-2 h-5 w-5 text-primary" />}
                    {category === "DevOps" && <Database className="mr-2 h-5 w-5 text-accent" />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skills.filter(skill => skill.category === category).map((skill) => (
                      <div key={skill.name} className="flex justify-between items-center pb-1">
                        <span className="text-sm text-foreground">{skill.name}</span>
                        <Badge 
                          className={skill.level === "Advanced" ? "bg-primary/20 text-primary text-xs" : "bg-secondary text-foreground text-xs"}
                        >
                          {skill.level}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.title} 
                className={`cyber-card cyber-border bg-white/70 backdrop-blur-sm hover:cyber-glow transition-all duration-300 ${
                  project.highlight ? 'ring-2 ring-primary/40' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {project.description}
                      </CardDescription>
                    </div>
                    {project.link && project.link !== "#" && (
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="cyber-border p-2 hover:cyber-glow flex-shrink-0"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="cyber-border text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8 text-gradient">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in collaborating on cybersecurity projects or discussing opportunities in secure software development? 
            Let's connect and build something secure together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button variant="outline" size="lg" className="cyber-border hover:cyber-glow font-bold" onClick={() => window.open("https://github.com/tiagomatias930", "_blank")}>
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="cyber-border hover:cyber-glow font-bold" onClick={() => window.open("https://www.linkedin.com/in/tiago-matias-062b88217", "_blank")}>
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg cyber-glow font-bold" onClick={() => window.open("https://www.behance.net/tiagomatias42", "_blank")}>
              <Figma className="mr-2 h-5 w-5" />
              Behance
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg cyber-glow font-bold" onClick={handleDownloadResume}>
              <Download className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-foreground text-white text-center border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <p>&copy; 2025 Tiago Matias Portfolio. Desenvolvido com React, TypeScript e ❤️</p>
          <p className="text-white/60 text-sm mt-2">Implementação completa de servidor HTTP seguindo os padrões da 42.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
