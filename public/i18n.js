(function() {
  const translations = {
    // Document Title
    "page.title.portfolio": "Tiago Matias — Software Developer | Software Engineer",
    "page.title.projects": "Tiago Matias — Front-end Developer | Software Engineer (Web & Mobile)",

    // Nav
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.cta": "<span class=\"ms sm\">mail</span> <span>Contact</span>",
    "back_to_home": "<span class=\"ms sm\">arrow_back</span> Back to Home",
    "all": "All",
    "title_projects": "All <em style=\"font-style:italic;color:var(--accent)\">projects</em>",
    
    // Hero
    "hero.eyebrow": "<span class=\"ms sm fill\" style=\"color:green\">fiber_manual_record</span> Available for opportunities",
    "hero.desc": "Software Developer with over 3 years of practical experience in Web, Mobile, and Systems Automation applications.",
    "hero.download_cv": "<span class=\"ms sm\">download</span> View CV",
    "hero.view_projects": "View Projects <span class=\"ms sm\">arrow_forward</span>",
    
    // About
    "about.title": "About me",
    "about.subtitle": "Software Developer &amp;<br /><em style=\"font-style:italic;color:var(--accent)\">Software Engineer</em>",
    "about.p1": "Software Developer with over 3 years of hands-on experience in web, mobile, and system automation applications. Full-cycle development engagement.",
    "about.p2": "Experience in technical volunteering with the <strong>United Nations Volunteers (UNV)</strong>, collaboration with international teams at <strong>Expo Japan 2025 (Osaka)</strong>, and in a digital transformation program in the Oil &amp; Gas sector (<strong>Pumangol</strong>).",
    "about.p3": "Familiarity with data engineering, automation with n8n, payment gateway integration, and version control with Git/GitLab. Continuously developing skills in automated testing (Jest, React Testing Library).",
    "about.p4": "Software Engineering education from <strong>42Luanda</strong> (Common Core completed and Advanced Specialization currently in progress). Communication in native Portuguese and technical/intermediate English, with hands-on experience working with international teams.",
    "about.meta.loc": "<strong><span class=\"ms sm\">location_on</span> Location</strong><span>Talatona, Luanda, Angola</span>",
    "about.meta.edu": "<strong><span class=\"ms sm\">school</span> Education</strong><span>42 Luanda — Software Engineering</span>",
    "about.meta.email": "<strong><span class=\"ms sm\">mail</span> Email</strong><span><a href=\"mailto:tiagomatias072@gmail.com\">tiagomatias072@gmail.com</a></span>",
    "about.meta.lang": "<strong><span class=\"ms sm\">language</span> Languages</strong><span>Portuguese (Native) · English (Technical/Intermediate)</span>",

    // Skills
    "skills.title": "Skills",
    "skills.subtitle": "What I know how to <em style=\"font-style:italic;color:var(--accent)\">build</em>",
    "skills.prog_sys": "Systems Programming",
    "skills.cyber": "Cybersecurity",
    "skills.frontend": "Front-end & Mobile",
    "skills.backend": "Back-end & APIs",
    "skills.web_design": "Web Design",
    "skills.devops": "Tools &amp; DevOps",
    "skills.ai": "AI & Multimedia",
    
    // Projects
    "projects.title": "Portfolio",
    "projects.subtitle": "Selected <em style=\"font-style:italic;color:var(--accent)\">projects</em>",
    "projects.more": "View more projects <span class=\"ms sm\" style=\"font-weight: bold; margin-left: 4px;\">arrow_forward</span>",
    "project.btn.view": "View Project <span class=\"ms sm\">open_in_new</span>",
    "project.btn.video": "View Video <span class=\"ms sm\">play_circle</span>",
    "project.btn.service": "View Service <span class=\"ms sm\">open_in_new</span>",
    "project.btn.explore": "Explore Solution <span class=\"ms sm\">open_in_new</span>",
    "project.badge.hackathon": "HACKATHON",
    "project.badge.featured": "FEATURED",
    "project.badge.active": "GITHUB FEATURED",
    "project.badge.ctf": "CYBERSECURITY COMPETITION",
    "project.badge.event": "EVENT",
    "project.badge.mobile": "MOBILE",
    "project.badge.agrotech": "AGROTECH",
    "project.badge.networking": "NETWORKING",
    "project.badge.security": "SECURITY",
    "project.badge.game": "GAME",
    "project.badge.ux": "UI/UX",
    "project.badge.private": "Private",
    "project.badge.soon": "Soon",
    "project.unavailable": "Unavailable <span class=\"ms sm\">open_in_new</span>",
    
    "proj.tutor.desc": "Ngola Tutor is a full-stack web application that acts as a patient AI tutor. It helps students understand problems step-by-step without giving direct answers – encouraging them to discover solutions on their own in a pedagogical way.",
    "proj.fenix.desc": "High-performance platform to transform abstract goals into achievements. Based on the method of Brian Tracy.",
    "proj.lbu.desc": "Landing Page presenting AI Agent development services that help companies automate tasks. Supported by AI agents I developed to respond and optimize the entire service.",
    
    // Highlights ticker
    "highlight.active": "Gemini Tutor - Gemini Live Agent Challenge (Currently Ngola Tutor)",
    "highlight.github": "Tiago Matias is one of the most active GitHub users in Angola.",
    "highlight.unspoken": "Chronicles of the Unspoken - Google DeepMind Hackathon 2026",
    "highlight.ctf_full": "Achieved great prominence in the last two Cybersecurity competitions on Hack The Box",
    "highlight.gamejam": "Global Game Jam 2026",
    "highlight.unspoken_game": "Chronicles of the Unspoken - Criminal Investigation Game",
    
    // Experience
    "exp.title": "Journey",
    "exp.subtitle": "Experience &amp;<br /><em style=\"font-style:italic;color:var(--accent)\">Education</em>",
    "exp.work_title": "Work Experience",
    "exp.edu_title": "Academic Education",
    "exp.can_do_title": "What I Can Do",
    
    "exp.unv.role": "Junior Technical Software Developer — Innovation &amp; Development",
    "exp.unv.desc": "• Online Volunteer (UNV), providing support in digital research and development for social impact projects in Artificial Intelligence, climate-smart agriculture, and digital presence.<br />• Contributed to platform analysis, technical recommendations, and knowledge documentation for international teams.",
    "exp.pumangol.role": "Web Design Developer (UI/UX)",
    "exp.pumangol.desc": "• Designed UI/UX interfaces for the Oil &amp; Gas sector digital transformation program, producing high-fidelity prototypes for multiple platforms.<br />• Collaborated with multidisciplinary teams (product, engineering, and business) in an agile environment (Scrum), delivering interactive prototypes aligned with client requirements and corporate visual consistency standards.",
    "exp.pfg.role": "Technology Freelancer",
    "exp.pfg.desc": "• Provided remote technical programming guidance to Brazilian clients, covering JavaScript, TypeScript, Python, and Cisco Packet Tracer.<br />• Developed and corrected academic and professional projects, including technical reports and software components, focusing on code quality and deadline compliance.",
    "exp.expo.role": "Prompt Engineer — International Project",
    "exp.expo.desc": "• Produced a 2D animated video using Artificial Intelligence for the Angola Pavilion at Expo Japan 2025.<br />• Collaborated on an Angola-Japan international cooperation project, communicating in English with global teams and partners, meeting international deadlines and quality standards.",
    "exp.agriconnect.role": "Mobile Software Developer",
    "exp.agriconnect.desc": "• Developed cross-platform mobile applications with React Native and Flutter for a startup in the agricultural sector.<br />• Implemented reusable front-end interfaces in React.js and TypeScript (strict typing), consuming REST APIs with a Python backend.<br />• Participated in the complete development cycle — from component design to deployment — using Git for team version control.<br />• Responsible for the startup's digital presence and identity — from landing page development to product visual design.",
    "exp.odoma.role": "Junior Software Developer",
    "exp.odoma.desc": "• Developed internal company applications, including the sandbox dashboard and team management panels.<br />• Responsible for onboarding and mentoring new members of the technical team.<br />• Project management and delivery tracking.",
    "exp.nutriscan.role": "Independent Project | React Native",
    "exp.nutriscan.desc": "• Developed a mobile nutrition tracking application with Artificial Intelligence, reaching over 80 users in more than 7 countries, with reusable component architecture and REST API consumption.",
    "exp.cert_title": "Certifications &amp; Achievements",
    "exp.cert.library": "Access my Library of Certifications &amp; Achievements",
    
    "exp.edu.degree": "Computer Science — Software Engineering",
    "exp.edu.piscina": "Piscine",
    "exp.edu.phase_completed": "Completed",
    "exp.edu.common_core": "Common Core",
    "exp.edu.specialization": "Specialization",
    "exp.edu.phase_current": "In progress",
    
    "cando.web_mobile": "Web & Mobile Development",
    "cando.automation": "Systems Automation &amp; n8n",
    "cando.uiux": "UI/UX Design &amp; Prototyping",
    "cando.pentesting": "Pentesting &amp; Network Security",
    "cando.systems": "Systems Development (C/C++/Python)",
    "cando.ai": "AI Integration &amp; Intelligent Solutions",
    "cando.tests": "Mobile and Web Application Testing",
    "cando.video": "Video Editing & AI Production",
    "cando.social": "Social Media & Automated Content Creation with AI",
    
    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Let's<br /><em>work</em><br />together.",
    "contact.desc": "Available for freelance positions. If you have a real problem to solve — I want to hear about it.",
    "contact.box_desc": "// Ready for the next challenge",
    
    "footer.copy": "© 2026 Tiago Matias · Luanda, Angola",
    
    // projects.html specific filters
    "filter.all": "All",
    "filter.web": "Web",
    "filter.mobile": "Mobile",
    "filter.security": "Security",
    "filter.design": "Design",
    "filter.ai": "AI",
    "filter.social": "Social Media",
    "project.badge.featured_projects": "FEATURED",
    
    // project descriptions in projects.html
    "desc.skillarcode": "Competition platform for prompt engineering. During development, I was responsible for the entire design and front-end, including the integration of AIs and LLMs.",
    "desc.chronicles": "An immersive RPG tactical game based on criminal investigation where the player has to solve a crime by investigating, collecting clues, and interviewing witnesses.",
    "desc.nexus": "An application that connects digital influencers with brands. It was the first mobile project I developed in a team, and it was a very rewarding experience where I learned a lot about collaborative development.",
    "desc.agriconnect": "Developed cross-platform mobile applications with React Native and Flutter for a startup in the agricultural sector. Implemented reusable front-end interfaces in React.js and TypeScript, consuming REST APIs with a Python backend.",
    "desc.ngolatutor": "Ngola Tutor is a full-stack web application that acts as a patient AI tutor. It helps students understand problems step-by-step without giving direct answers – encouraging them to discover solutions on their own.",
    "desc.strongstream": "Complete SaaS application for multi-streaming, allowing simultaneous broadcasting to YouTube, Twitch, Facebook, TikTok, Instagram, and LinkedIn through Restream integration.",
    "desc.meowloop": "Third-person action game with Sci-Fi style puzzles, inspired by the classic Schrödinger's Cat and intercontinental semi-finalist in GameJampes.",
    "desc.waf": "Custom WAF in C++ with real-time threat detection and blocking for Linux.",
    "desc.angolavibes": "Interactive PWA for tourism, gastronomy, and lifestyle in Angola with authentic recommendations, focusing on influencers promoting tourist spots and Angolan gastronomy.",
    "desc.nutriscan": "Developed a mobile nutrition tracking application with Artificial Intelligence, reaching more than 80 users in over 7 countries, featuring a reusable component architecture and REST API consumption.",
    "desc.fedigital": "Prototyping of an application for tithe and offering management with automated treasury via WhatsApp.",
    "desc.pembe": "Official website for the Angolan theatre group Pembé Na Mwindo — complete digital presence.",
    "desc.tchissola": "Animated video crafted with generative AI exhibited at the Angola Pavilion during Expo Japan 2025.",
    "desc.reverse": "PHP script to establish an interactive shell on target servers. Tool designed for penetration testing.",
    "desc.fenix": "High-performance platform to transform abstract goals into achievements. Based on the method of Brian Tracy.",
    "desc.nobodysee": "A website to hide and discover metadata. With Nobody See, you can conceal confidential messages inside images, videos, or documents.",
    "desc.heetch": "Prototyping of the Heetch ride-hailing app with comprehensive UX, focusing on accessibility and optimizing user flow.",
    "desc.lbudev": "Landing Page presenting AI Agent development services that help companies automate tasks. Supported by AI agents I developed to respond and optimize the service.",
    "desc.frota": "Demo video of the Frota+ fleet management system, presented as a solution for an innovation challenge initiated by Pumangol."
  };

  const originalTexts = new Map();
  let originalPageTitle = "";

  function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  }

  function setCookie(name, value, days) {
    if (days === undefined) days = 365;
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "; expires=" + date.toUTCString();
    document.cookie = name + "=" + value + expires + "; path=/";
    
    // Sync googtrans cookie for backwards compatibility
    const googleTransVal = "/pt/" + value;
    document.cookie = "googtrans=" + googleTransVal + "; path=/";
    document.cookie = "googtrans=" + googleTransVal + "; domain=" + location.hostname + "; path=/";
  }

  function getStoredLanguage() {
    const stored = localStorage.getItem("lang") || getCookie("lang");
    if (stored === "en" || stored === "pt") return stored;
    
    const googtrans = getCookie("googtrans");
    if (googtrans) {
      if (googtrans.endsWith("/en") || googtrans.endsWith("|en")) return "en";
      if (googtrans.endsWith("/pt") || googtrans.endsWith("|pt")) return "pt";
    }
    return "pt";
  }

  function translatePage(lang) {
    localStorage.setItem("lang", lang);
    setCookie("lang", lang);
    
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    
    // Update document title
    if (!originalPageTitle) {
      originalPageTitle = document.title;
    }
    const isProjectsPage = location.pathname.includes("projects");
    if (lang === "en") {
      document.title = isProjectsPage ? translations["page.title.projects"] : translations["page.title.portfolio"];
    } else {
      document.title = originalPageTitle;
    }

    const currentLangDisplay = document.getElementById("currentLangDisplay");
    if (currentLangDisplay) {
      currentLangDisplay.textContent = lang.toUpperCase();
    }

    const resumeDownloadLink = document.getElementById("resumeDownloadLink");
    if (resumeDownloadLink) {
      const file = lang === "en" ? "Tiago_Matias_CV_EN.pdf" : "Tiago_Matias_CV.pdf";
      resumeDownloadLink.href = "/asset/" + file;
      resumeDownloadLink.download = file;
    }

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function(el) {
      const key = el.getAttribute("data-i18n");
      
      if (!originalTexts.has(el)) {
        originalTexts.set(el, el.innerHTML);
      }
      
      if (lang === "en") {
        const translation = translations[key];
        if (translation !== undefined) {
          el.innerHTML = translation;
        }
      } else {
        el.innerHTML = originalTexts.get(el);
      }
    });

    if (window.updateTypewriterRoles) {
      window.updateTypewriterRoles(lang);
    }
  }

  window.changeLanguage = function(langCode) {
    if (langCode !== "pt" && langCode !== "en") return;
    translatePage(langCode);
    
    // Close switcher dropdown
    const langMenu = document.getElementById("langMenu");
    if (langMenu) {
      langMenu.classList.remove("show");
    }

    // Sync across frames if iframe is present
    try {
      window.parent.postMessage({ type: "LANGUAGE_CHANGED", lang: langCode }, "*");
      document.querySelectorAll("iframe").forEach(function(iframe) {
        if (iframe.contentWindow) {
          iframe.contentWindow.postMessage({ type: "LANGUAGE_CHANGED", lang: langCode }, "*");
        }
      });
    } catch (e) {}
  };

  // Listen to postMessage for language synchronization
  window.addEventListener("message", function(e) {
    if (e.data && e.data.type === "LANGUAGE_CHANGED") {
      const lang = e.data.lang;
      if (lang === "en" || lang === "pt") {
        const current = localStorage.getItem("lang") || "pt";
        if (current !== lang) {
          translatePage(lang);
        }
      }
    }
  });

  // Initialization
  function init() {
    if (!originalPageTitle) {
      originalPageTitle = document.title;
    }

    // Cache original Portuguese texts before any replacement
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function(el) {
      if (!originalTexts.has(el)) {
        originalTexts.set(el, el.innerHTML);
      }
    });

    const activeLang = getStoredLanguage();
    translatePage(activeLang);

    // Bind event listeners for UI switcher interaction
    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");
    if (langBtn && langMenu) {
      langBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        langMenu.classList.toggle("show");
      });
      document.addEventListener("click", function() {
        langMenu.classList.remove("show");
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
