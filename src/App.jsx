import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Github, 
  Linkedin, 
  FileText, 
  Award, 
  BookOpen, 
  Briefcase, 
  Code, 
  GraduationCap,
  ExternalLink,
  MapPin,
  Download
} from 'lucide-react';

// --- CONTENT CONFIGURATION ---
// Edit this object to update your portfolio content
const DATA = {
  profile: {
    name: "Dr. Alex Chen",
    title: "AI Research Scientist & Engineer",
    affiliation: "Postdoc at Stanford AI Lab (SAIL)",
    shortBio: "I research the intersection of Large Language Models and Reinforcement Learning. My goal is to build agents that can reason, plan, and act in complex open-world environments.",
    location: "Palo Alto, CA",
    email: "alex.chen@example.edu",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      scholar: "https://google.scholar.com",
      twitter: "https://twitter.com"
    }
  },
  about: [
    "I am currently a Postdoctoral Researcher at Stanford University, working with Prof. Jane Doe. I completed my Ph.D. in Computer Science at MIT CSAIL.",
    "My research interests span Computer Vision, Natural Language Processing, and Robotics. Specifically, I am interested in how embodied agents can leverage large-scale pre-trained models to generalize to new tasks with minimal supervision.",
    "Previously, I interned at Google DeepMind and FAIR (Meta AI)."
  ],
  education: [
    {
      degree: "Ph.D. in Computer Science",
      school: "Massachusetts Institute of Technology (MIT)",
      year: "2019 - 2024",
      details: "Thesis: 'Self-Supervised Learning for Embodied Agents'. Advisor: Prof. Alan Turing."
    },
    {
      degree: "B.S. in Electrical Engineering",
      school: "University of California, Berkeley",
      year: "2015 - 2019",
      details: "Graduated Summa Cum Laude. GPA: 4.0/4.0"
    }
  ],
  experience: [
    {
      role: "Research Scientist Intern",
      company: "Google DeepMind",
      year: "Summer 2023",
      location: "London, UK",
      description: "Developed a novel algorithm for offline reinforcement learning in robotics. Published findings at NeurIPS 2023."
    },
    {
      role: "AI Engineer Intern",
      company: "Meta AI (FAIR)",
      year: "Summer 2022",
      location: "Menlo Park, CA",
      description: "Worked on large-scale training infrastructure for LLaMA-based models. Optimized inference latency by 30%."
    }
  ],
  publications: [
    {
      title: "Scaling Laws for Autoregressive Generative Modeling",
      authors: "Alex Chen, Sarah Smith, John Doe",
      venue: "ICML 2024 (Oral Presentation)",
      links: { pdf: "#", code: "#", website: "#" }
    },
    {
      title: "Towards Generalist Robots: Learning from Internet-Scale Data",
      authors: "Alex Chen, David Lee",
      venue: "CVPR 2023",
      links: { pdf: "#", code: "#" }
    },
    {
      title: "Efficient Fine-Tuning of Transformers",
      authors: "Emily White, Alex Chen",
      venue: "NeurIPS 2022",
      links: { pdf: "#" }
    }
  ],
  projects: [
    {
      name: "OpenAgent",
      description: "An open-source framework for building autonomous agents using LLMs. Featured on GitHub Trending.",
      tech: ["Python", "PyTorch", "LangChain"],
      link: "#"
    },
    {
      name: "Vision-Language-Nav",
      description: "A simulator for testing vision-language navigation agents in photo-realistic environments.",
      tech: ["Unity", "C#", "Python"],
      link: "#"
    }
  ],
  awards: [
    { name: "NVIDIA Graduate Fellowship", year: "2022" },
    { name: "Best Paper Award Finalist, CVPR", year: "2023" },
    { name: "NSF Graduate Research Fellowship", year: "2019" }
  ]
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  // Simple smooth scroll handler
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-100 selection:text-slate-900">
      
      {/* Mobile Header */}
      <div className="lg:hidden p-6 border-b border-slate-100">
        <h1 className="text-2xl font-serif font-bold tracking-tight">{DATA.profile.name}</h1>
        <p className="text-slate-600 mt-1">{DATA.profile.title}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          
          {/* --- LEFT SIDEBAR (Fixed on Desktop) --- */}
          <aside className="lg:col-span-4 lg:sticky lg:top-12 lg:h-[calc(100vh-6rem)] flex flex-col justify-between mb-12 lg:mb-0">
            <div>
              {/* Profile Image Placeholder - Replace src with your actual image */}
              <div className="w-32 h-32 rounded-full bg-slate-200 mb-6 overflow-hidden relative group">
                 {/* Uncomment below and add image URL */}
                 {/* <img src="/api/placeholder/150/150" alt="Profile" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" /> */}
                 <div className="flex items-center justify-center h-full text-slate-400 text-4xl font-serif">AC</div>
              </div>

              <h1 className="hidden lg:block text-4xl font-serif font-bold tracking-tight text-slate-900 mb-2">
                {DATA.profile.name}
              </h1>
              
              <div className="space-y-1 mb-6">
                <p className="text-lg font-medium text-slate-800">{DATA.profile.title}</p>
                <p className="text-slate-600">{DATA.profile.affiliation}</p>
                <div className="flex items-center text-slate-500 text-sm mt-2">
                  <MapPin size={14} className="mr-1.5" />
                  {DATA.profile.location}
                </div>
              </div>

              {/* Navigation */}
              <nav className="hidden lg:block space-y-1 mb-8">
                {['about', 'publications', 'experience', 'projects', 'awards'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-left px-3 py-2 text-sm uppercase tracking-widest transition-all duration-200 border-l-2 ${
                      activeSection === item 
                        ? 'border-slate-900 text-slate-900 pl-4 font-semibold' 
                        : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contact & Socials */}
            <div className="space-y-4">
               <a 
                href={`mailto:${DATA.profile.email}`}
                className="flex items-center text-slate-600 hover:text-blue-700 transition-colors text-sm"
              >
                <Mail size={16} className="mr-2" />
                {DATA.profile.email}
              </a>
              
              <div className="flex gap-4 mt-4">
                <SocialIcon href={DATA.profile.social.github} icon={<Github size={18} />} />
                <SocialIcon href={DATA.profile.social.linkedin} icon={<Linkedin size={18} />} />
                <SocialIcon href={DATA.profile.social.scholar} icon={<GraduationCap size={18} />} />
              </div>

              <a href="#" className="inline-flex items-center mt-6 text-xs font-semibold border border-slate-200 rounded px-3 py-2 hover:bg-slate-50 transition-colors">
                <Download size={14} className="mr-2" />
                Download CV
              </a>
            </div>
          </aside>

          {/* --- RIGHT MAIN CONTENT --- */}
          <main className="lg:col-span-8 space-y-20">
            
            {/* ABOUT SECTION */}
            <section id="about" className="scroll-mt-20">
              <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-6 lg:hidden">About</h2>
              <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
                {DATA.about.map((paragraph, idx) => (
                  <p key={idx} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </section>

            {/* EDUCATION SECTION */}
            <section id="education" className="scroll-mt-20">
               <SectionHeader icon={<GraduationCap size={20} />} title="Education" />
               <div className="space-y-8 border-l border-slate-100 pl-6 ml-3">
                 {DATA.education.map((edu, idx) => (
                   <div key={idx} className="relative">
                     <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full border-2 border-white bg-slate-300"></div>
                     <h3 className="text-lg font-semibold text-slate-900">{edu.school}</h3>
                     <div className="flex justify-between items-baseline mb-1">
                        <span className="text-slate-700 font-medium">{edu.degree}</span>
                        <span className="text-slate-400 text-sm font-mono">{edu.year}</span>
                     </div>
                     <p className="text-slate-500 text-sm italic">{edu.details}</p>
                   </div>
                 ))}
               </div>
            </section>

            {/* PUBLICATIONS SECTION */}
            <section id="publications" className="scroll-mt-20">
              <SectionHeader icon={<BookOpen size={20} />} title="Selected Publications" />
              <div className="space-y-6">
                {DATA.publications.map((pub, idx) => (
                  <div key={idx} className="group flex flex-col sm:flex-row gap-2 sm:gap-4 transition-all hover:bg-slate-50/50 p-3 -mx-3 rounded-lg">
                    <div className="text-slate-400 font-mono text-xs sm:w-16 pt-1 shrink-0">
                      {pub.venue.split(' ')[0]}
                    </div>
                    <div>
                      <h3 className="text-base font-serif font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {pub.title}
                      </h3>
                      <p className="text-slate-600 text-sm mt-1 mb-2">{pub.authors}</p>
                      <div className="flex items-center flex-wrap gap-3 text-xs">
                        <span className="font-medium text-slate-500 italic">{pub.venue}</span>
                        <div className="flex gap-2 ml-auto sm:ml-0">
                          {Object.entries(pub.links).map(([key, url]) => (
                            <a 
                              key={key} 
                              href={url}
                              className="px-2 py-1 border border-slate-200 rounded text-slate-500 hover:border-slate-400 hover:text-slate-900 transition-colors uppercase tracking-wider font-medium text-[10px]"
                            >
                              {key}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* EXPERIENCE SECTION */}
            <section id="experience" className="scroll-mt-20">
              <SectionHeader icon={<Briefcase size={20} />} title="Experience" />
              <div className="space-y-8">
                {DATA.experience.map((job, idx) => (
                  <div key={idx}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                      <h3 className="text-lg font-semibold text-slate-900">{job.company}</h3>
                      <span className="text-slate-400 text-sm font-mono">{job.year}</span>
                    </div>
                    <div className="text-slate-700 font-medium text-sm mb-2 flex items-center">
                      {job.role} <span className="mx-2 text-slate-300">•</span> {job.location}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                      {job.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="scroll-mt-20">
              <SectionHeader icon={<Code size={20} />} title="Projects & Open Source" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DATA.projects.map((project, idx) => (
                  <a 
                    key={idx} 
                    href={project.link}
                    className="block p-5 rounded border border-slate-100 hover:border-slate-300 hover:shadow-sm transition-all bg-slate-50/30"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-slate-900">{project.name}</h3>
                      <ExternalLink size={14} className="text-slate-400" />
                    </div>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-[10px] font-mono text-slate-500">
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                ))}
              </div>
            </section>

             {/* AWARDS SECTION */}
             <section id="awards" className="scroll-mt-20 pb-12">
              <SectionHeader icon={<Award size={20} />} title="Honors & Awards" />
              <ul className="space-y-3">
                {DATA.awards.map((award, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm text-slate-700">
                    <span className="font-mono text-slate-400 min-w-[40px]">{award.year}</span>
                    <span>{award.name}</span>
                  </li>
                ))}
              </ul>
            </section>
            
            <footer className="pt-12 border-t border-slate-100 text-slate-400 text-xs text-center lg:text-left">
              <p>© {new Date().getFullYear()} {DATA.profile.name}. All rights reserved.</p>
              <p className="mt-1">Built with React & Tailwind.</p>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
};

// --- HELPER COMPONENTS ---

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-2">
    <span className="text-slate-400">{icon}</span>
    <h2 className="text-xl font-serif font-bold text-slate-900">{title}</h2>
  </div>
);

const SocialIcon = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer"
    className="text-slate-400 hover:text-slate-900 hover:scale-110 transition-all"
  >
    {icon}
  </a>
);

export default Portfolio;