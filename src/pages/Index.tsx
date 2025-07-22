import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Code, Globe, Github, Linkedin, Mail, ExternalLink, Download, Terminal, Lock, Server, Database, User, Figma } from "lucide-react";

const Index = () => {
  // Função para fazer download do currículo
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/src/asset/Cv.pdf'; // Caminho para seu arquivo na pasta public
    link.download = 'Curriculum Vitae.pdf'; // Nome que aparecerá no download
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
      title: "42Shell",
      description: "A complete shell implementation in C with advanced features like piping, redirections, and built-in commands.",
      tech: ["C", "Linux", "System Programming"],
      link: "#",
      highlight: false
    },
    {
      title: "Reverse Engineering Tool",
      description: "This script allows an attacker to gain an interactive shell on a target web server or on a target running PHP. It works by establishing a connection back to the attacker's machine. PHP Reverse Shell.",
      tech: ["Python", "Sherlock", "Reverse Shell"],
      link: "https://github.com/tiagomatias930/reverse_shell.git",
      highlight: true
    },
    {
      title: "Web Application Firewall",
      description: "Custom WAF implementation with real-time threat detection and blocking.",
      tech: ["C++", "Network Security", "Linux"],
      link: "#",
      highlight: true
    },
    {
      title: "Toolkit for CTF",
      description: "Static and dynamic malware analysis platform with sandbox environment.",
      tech: ["learn", "toolkit", "Security"],
      link: "https://github.com/tiagomatias930/ctf-tools.git",
      highlight: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-gradient">Portfolio</div>
            <div className="flex space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-slide-up">
            {/* Profile Photo Space */}
            <div className="mb-8 flex justify-center">
              <div className="relative cyber-profile">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-1 shadow-lg shadow-primary/20">
                  <div className="w-full h-full rounded-full bg-card border-2 border-primary/30 flex items-center justify-center overflow-hidden hover:border-primary/50 transition-colors">
                    <img 
                      src="src/asset/IMG-20250626-WA0003(1).jpg" 
                      alt="Photo" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg cyber-glow">
                  <Shield className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient glitch-text">Cyber Security</span>
              <br />
              <span className="text-foreground">Software Engineer</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm studant at 42Luanda passionate about cybersecurity, system programming, and building secure applications.ining platforms..
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="cyber-glow cyber-button" onClick={handleDownloadResume}>
                <Download className="mr-2 h-5 w-5"  />
                Download Resume
              </Button>
              <Button variant="outline" size="lg" className="cyber-border hover:cyber-glow" onClick={handleGetInTouch}>
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gradient">About Me</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I am a passionate software engineer who graduated from 42Luanda, where I developed a 
                solid foundation in systems programming, algorithms and collaborative coding, web design, networking, automation.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
              My curiosity also led me to explore reverse engineering, Lua bytecode analysis, and flag decoding in Capture The
              Flag (CTF) competitions participating in challenges on hack the box, 42ctf, tryhackme, and other cybersecurity tra.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/20 text-primary border-primary/30">42Luanda Graduate</Badge>
                <Badge className="bg-accent/20 text-accent border-accent/30">Cybersecurity Enthusiast</Badge>
                <Badge className="bg-primary/20 text-primary border-primary/30">System Programming</Badge>
              </div>
            </div>
            <div className="relative">
              <Card className="cyber-card cyber-border bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Terminal className="mr-2 h-5 w-5 text-primary" />
                    42 Projects Completed
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Libft</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">C</Badge>
                      <Badge className="bg-primary/20 text-primary">125</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>ft_printf</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">C</Badge>
                      <Badge className="bg-primary/20 text-primary">100</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Born2beroot</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">Virtual Machine Manager</Badge>
                      <Badge className="bg-primary/20 text-primary">116</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Get next line</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">File manipulation in c</Badge>
                      <Badge className="bg-primary/20 text-primary">100</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Fract-ol</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">Graphic interphace</Badge>
                      <Badge className="bg-primary/20 text-primary">100</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>push_swap</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">Algorithms</Badge>
                      <Badge className="bg-primary/20 text-primary">108</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Philosophers</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">Threading</Badge>
                      <Badge className="bg-primary/20 text-primary">100</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Minitalk</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">Signal manipulation in c</Badge>
                      <Badge className="bg-primary/20 text-primary">100</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Minishell</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">Created my mini-shell</Badge>
                      <Badge className="bg-primary/20 text-primary">98</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>cub3d</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">3D Graphics</Badge>
                      <Badge className="bg-primary/20 text-primary">101</Badge>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>CPP Modules 00-04</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">C++</Badge>
                      <Badge className="bg-accent/20 text-accent">80-90</Badge>
                    </div>
                  </div>
                <div className="flex justify-between items-center">
                    <span>NetPractice</span>
                    <div className="flex gap-2">
                      <Badge variant="outline">Computer Networking</Badge>
                      <Badge className="bg-primary/20 text-primary">100</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 grid-bg">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Programming", "Security", "Systems", "Tools", "Frontend", "DevOps"].map((category) => (
              <Card key={category} className="cyber-card cyber-border bg-card/50 backdrop-blur-sm hover:cyber-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
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
                      <div key={skill.name} className="flex justify-between items-center">
                        <span className="text-sm">{skill.name}</span>
                        <Badge 
                          variant={skill.level === "Advanced" ? "default" : "secondary"}
                          className={skill.level === "Advanced" ? "bg-primary/20 text-primary" : ""}
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
      <section id="projects" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`cyber-card cyber-border bg-card/50 backdrop-blur-sm hover:cyber-glow transition-all duration-300 ${
                  project.highlight ? 'ring-1 ring-primary/30' : ''
                }`}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Button variant="ghost" size="sm" className="cyber-border p-2 hover:cyber-glow">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="cyber-border">
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gradient">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Interested in collaborating on cybersecurity projects or discussing opportunities in secure software development? 
            Let's connect and build something secure together.
          </p>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg" className="cyber-border hover:cyber-glow cyber-button" onClick={() => window.open("https://github.com/tiagomatias930", "_blank")}>
              <Github className="mr-2 h-5 w-5"  />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="cyber-border hover:cyber-glow cyber-button" onClick={() => window.open("www.linkedin.com/in/tiago-matias-062b88217", "_blank")} >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button size="lg" className="cyber-glow cyber-button" onClick={() => window.open("https://www.behance.net/tiagomatias42", "_blank")}>
              <Figma className="mr-2 h-5 w-5" />
              Behance Prototype
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Portfolio. Built with React & TypeScript.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;