import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Mic,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import { experience, profile, projects, skills, certificates} from "./data";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="app">
      <Navbar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <main>
        <Hero onAsk={() => setChatOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      <AIWidget open={chatOpen} setOpen={setChatOpen} />
    </div>
  );
}



function Navbar({ mobileOpen, setMobileOpen }) {
  const links = ["about", "skills", "projects", "experience","certificates","contact"];

  return (
    <header className="navbar">
      <a className="brand" href="#top" onClick={() => setMobileOpen(false)}>
        <span className="brand-mark">R</span>
        <span>Rishi Priyesh<span className="brand-dot">.</span></span>
      </a>

      <nav className={mobileOpen ? "nav-links mobile-active" : "nav-links"}>
        {links.map((item) => (
          <a key={item} href={`#${item}`} onClick={() => setMobileOpen(false)}>
            {item.charAt(0).toUpperCase()+item.slice(1)}
          </a>
        ))}
        <a className="nav-cta" href="#contact" onClick={() => setMobileOpen(false)}>
          Let's Talk <ArrowRight size={15} />
        </a>
      </nav>

      <button className="menu-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
        {mobileOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero({ onAsk }) {
  const roles = [
  "AI/ML Engineer",
  "Machine Learning Engineer",
  "Generative AI Engineer",
  "Python Developer",
  "AI Engineer",
];

const [roleIndex, setRoleIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setRoleIndex((prev) => (prev + 1) % roles.length);
  }, 1200);

  return () => clearInterval(interval);
}, []);

  return (
    <section className="hero" id="top">

      <div className="hero-copy">

        <div className="status-pill">
          <span className="pulse"></span>
          Available for opportunities
        </div>

        <p className="eyebrow">HELLO, I'M</p>

        <h1 className="hero-name">
          <span className="gradient-text">
            Gattu Rishi Priyesh
          </span>
        </h1>

        <h2 className="role-role">{roles[roleIndex]}</h2>

          <p className="hero-text">
            I build intelligent applications using Python,
            machine learning, LLMs, RAG, FastAPI and modern
            AI infrastructure.
          </p>

          <div className="hero-skills">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Neural Networks</span>
            <span>LangChain</span>
            <span>LangGraph</span>
            <span>RAG</span>
            <span>FastAPI</span>
            <span>Docker</span>
            <span>SQL</span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="primary-btn">
              View Projects
              <ArrowRight size={17} />
            </a>

            <button className="secondary-btn" onClick={onAsk}>
              <Bot size={17} />
              Ask Rishi AI
            </button>
          </div>

          <div className="socials">
            <a
              href="https://github.com/rishipriyesh5603-oss"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/rishi-priyesh-b37183320"
              target="_blank"
              rel="noreferrer"
              className="social-btn"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:rishipriyesh5603@gmail.com"
              className="social-btn"
            >
              Email ✉
            </a>
          </div>

        </div>


          <div className="hero-photo-wrap">

            <img
              src="/profile.png"
              alt="Gattu Rishi Priyesh"
            />

            <div className="tech-roles">
              <span className="tech-role-main">AI Engineer/Machine Learning Engineer.</span>
            </div>

          </div>

        </section>
  );
}


function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="about-section" id="about">

      {/* Section heading */}
      <div className="about-header">
        <span className="about-eyebrow">01 / ABOUT</span>

        <h2>
          Turning ideas into{" "}
          <span>intelligent products.</span>
        </h2>

        <p>
          I enjoy taking a problem from raw data and experimentation
          to a usable AI application.
        </p>
      </div>


      {/* About content */}
      <div className="about-content">

        {/* Main introduction */}
        <div className="about-main">

          <div className="about-icon">
            ✦
          </div>

          <h3>AI/ML & Generative AI</h3>

          <p>
            I am an AI/ML Engineer passionate about Artificial Intelligence,
            Machine Learning, Deep Learning and Generative AI. I enjoy
            building intelligent applications that solve real-world
            problems using Python, Large Language Models, RAG and modern
            AI technologies.
          </p>

          <p>
            My focus is on turning ideas into practical AI solutions —
            from data processing and machine learning models to
            production-ready LLM and RAG applications.
          </p>

        </div>


        {/* Stats */}
        <div className="about-stats">

          <div className="about-stat">
            <strong>04+</strong>
            <span>AI/ML Projects</span>
          </div>

          <div className="about-stat">
            <strong>10+</strong>
            <span>Technologies</span>
          </div>

          <div className="about-stat">
            <strong>01</strong>
            <span>AI/ML Internship</span>
          </div>

        </div>


        {/* Focus */}
        <div className="about-focus">

          <span className="focus-label">
            PRIMARY FOCUS
          </span>

          <div className="focus-tags">
            <span>Artificial Intelligence</span>
            <span>Machine Learning</span>
            <span>Generative AI</span>
            <span>RAG</span>
            <span>LLMs</span>
            <span>Docker</span>
            <span>SQL (MySQL,Postgres SQL)</span>
            <span>FastAPI</span>
            <span>AI Applications</span>
            <span>AI Agents</span>
          </div>

        </div>

      </div>

    </section>
  );
}

function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      icon: "⚙",
      skills: ["Python", "SQL", "HTML5", "CSS", "JavaScript"],
    },
    {
      title: "Database",
      icon: "⚙",
      skills: ["MySQL", "Postgres SQL", "Vertor DB"],
    },
    {
      title: "AI",
      icon: "⚙",
      skills: ["Machine Learning", "Deep Learning", "Generative AI", "RAG", "LLM", "Prompt Engineering"],
    },
    {
      title: "Libraries",
      icon: "⚙",
      skills: ["Matplotlib", "Seaborn","Scikit-Learn","PyTorch", "LangChain", "LangGraph"],
    },
    {
      title: "Backend",
      icon: "⚙",
      skills: ["FastAPI", "PostgreSQL"],
    },
    {
      title: "Vector DB",
      icon: "⚙",
      skills: ["FAISS", "ChromaDB"],
    },
    {
      title: "Deployment and API's",
      icon: "⚙",
      skills: ["FastAPI", "RestAPI Design", "Streamlit Cloud", "Docker", "GCP", "Vercel", "Render"],
    },
    {
      title: "Tools",
      icon: "⚙",
      skills: ["Hugging Face","Git & GitHub", "Visual Studio Code", "Jupyter Notebook"],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <p className="skills-eyebrow">02 / SKILLS</p>

          <h2>
            Tools I use to build.
          </h2>

          <p className="skills-description">
            A practical stack across ML, GenAI, backend engineering and deployment.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div
              className="skill-card"
              key={group.title}
              style={{ "--delay": `${index * 0.05}s` }}
            >
              <div className="skill-card-title">
                <span className="skill-icon">{group.icon}</span>
                <h3>{group.title}</h3>
              </div>

              <div className="skill-pills">
                {group.skills.map((skill) => (
                  <span className="skill-pill" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      number: "01",
      category: "Generative AI / RAG",
      title: "AI Knowledge Assistant",
      description:
        "A document-question answering platform using PDF processing, embeddings, vector retrieval and LLM-based responses.",
      tech: [
        "FastAPI",
        "Ollama",
        "LLAMA 3.3 7B",
        "ChromaDB",
        "Streamlit",
        "Render",
        "Docker",
      ],
      github: "#",
      demo: "https://ai-knowledge-assistant-5603.streamlit.app/",
    },
    {
      number: "02",
      category: "Generative AI / Full Stack",
      title: "AI Voice Assistant-Portfolio",
      description:
        "An interactive AI portfolio with an AI assistant that answers recruiter questions using grounded portfolio context.",
      tech: [
        "React",
        "Vite",
        "FastAPI",
        "Groq",
        "Render",
        "Llama",
        "Vercel",
      ],
      github: "#",
      demo: "#",
    },
        {
      number: "03",
      category: "Deep Learning / Computer Vision",
      title: "Plant Disease Detection",
      description:
        "An AI-powered plant disease classification system using MobileNetV2 transfer learning to identify 38 plant and disease classes from leaf images.",
      tech: [
        "Python",
        "TensorFlow",
        "Keras",
        "MobileNetV2",
        "CNN",
        "Streamlit",
      ],
      github: "https://github.com/rishipriyesh5603-oss/plantguard-ai",
      demo: "https://plantguard-ai-3112.streamlit.app/",
    },
    {
      number: "04",
      category: "Machine Learning",
      title: "Wine Quality Prediction",
      description:
        "A machine learning application that predicts wine quality from chemical properties using preprocessing, model training and evaluation.",
      tech: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Streamlit",
      ],
      github: "#",
      demo: "#",
    },
    {
      number: "05",
      category: "Data Analytics",
      title: "Crime Analysis Dashboard",
      description:
        "An analytics project exploring crime patterns, categories and trends through data analysis and visualization.",
      tech: [
        "Python",
        "Pandas",
        "Matplotlib",
        "Power BI",
      ],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        {/* HEADING */}
        <div className="projects-heading">
          <p className="projects-eyebrow">03 / PROJECTS</p>

          <h2>Selected work.</h2>

          <p className="projects-description">
            Projects that show how I apply AI and software engineering
            to real applications.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article
              className={`project-card ${project.number === "02" ? "featured-project" : ""}`}
              key={project.number}
              style={{ "--delay": `${index * 0.08}s` }}
            >
              <div className="project-card-top">

                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

              </div>

              {project.number === "02" && (
                <div className="featured-label">
                  This Project
                </div>
              )}

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span
                    className="project-tech-pill"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub ↗
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link project-link-primary"
                >
                  View Project ↗
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="section-title reveal">
        <p className="eyebrow">04 / EXPERIENCE</p>
        <h2>Where I've learned by building.</h2>
        <p className="section-subtitle">
          Hands-on experience turning data, machine learning and AI concepts
          into practical applications.
        </p>
      </div>

      <div className="experience-grid">

        {/* EXPERIENCE CARD */}
        <div className="experience-card reveal">
          <div className="experience-top">
            <div>
              <p className="experience-label">AI/ML INTERN</p>
              <h3>Datavalley.ai</h3>
            </div>

            <span className="experience-date">
              AI / ML
            </span>
          </div>

          <p className="experience-description">
            Developed and Deployed AI/ML and Generative AI workflows using Python,
            including data preprocessing, feature engineering, model development,
            and evaluation. Worked with LLM applications, prompt engineering,
            RAG concepts, and AI-Assisted solutions using modern GenAI tools.
          </p>

          <div className="experience-skills">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Data Processing</span>
            <span>Pandas</span>
            <span>Scikit-learn</span>
          </div>
        </div>

        {/* RESUME CARD */}
        <div className="resume-card reveal">
          <div>
            <p className="experience-label">RESUME</p>

            <h3>Want the complete profile?</h3>

            <p>
              View my resume for education, experience, projects, skills
              and certifications.
            </p>
          </div>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            View Resume  <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="certificates-section">
      <div className="section-title reveal">
        <p className="eyebrow">05 / CERTIFICATES</p>

        <h2>Certifications that back my skills.</h2>

        <p className="section-subtitle">
          Certifications and professional training across AI, Python,
          data structures and cloud computing.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate) => (
          <article
            className="certificate-card"
            key={certificate.number}
          >
            <div className="certificate-header">
              <span className="certificate-number">
                {certificate.number}
              </span>

              <span className="certificate-type">
                {certificate.type}
              </span>
            </div>

            <div className="certificate-body">
              <span className="certificate-issuer">
                {certificate.issuer}
              </span>

              <h3>{certificate.title}</h3>

              <p>{certificate.description}</p>

              <div className="certificate-meta">
                <span>{certificate.date}</span>
              </div>

              {certificate.file && (
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-button"
                >
                  View Certificate ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card reveal">

        <div className="contact-content">
          <p className="contact-eyebrow">06 / CONTACT</p>

          <h2>Let's build something useful.</h2>

          <p className="contact-description">
            Open to AI/ML, Generative AI and software engineering
            opportunities, internships and collaborations.
          </p>

          <div className="contact-actions">
            <a
              href={`mailto:${profile.email}`}
              className="contact-primary"
            >
              Get in touch <Mail size={16} />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-secondary"
            >
              LinkedIn <ExternalLink size={16} />
            </a>
          </div>
        </div>

        <div className="contact-orbit">
          <span>AI</span>
          <span>ML</span>
          <span>LLM</span>
          <span>GenAI</span>
          <span>RAG</span>
        </div>

      </div>
    </section>
  );
}


function AIWidget({ open, setOpen }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! I'm Rishi AI. Ask me about my skills, projects, experience, certifications, or technical background.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const toggleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert(
        "Voice input is not supported in this browser. Please use Google Chrome or Microsoft Edge."
      );
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    const recognition = new SpeechRecognition();

    recognitionRef.current = recognition;

    recognition.lang = "en-IN";
    recognition.continuous = false;
    recognition.interimResults = true;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      let transcript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }

      setMessage(transcript);
    };

    recognition.onerror = (event) => {
      console.error("Voice input error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognition.start();
  };

  const sendMessage = async () => {
    const text = message.trim();

    if (!text || loading) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.response ||
            data.answer ||
            data.message ||
            "Sorry, I couldn't find an answer.",
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting to the AI service right now. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!open) {
    return (
      <button
        className="ai-floating-button"
        onClick={() => setOpen(true)}
        aria-label="Ask Rishi AI"
      >
        <Bot size={20} />
        <span>Ask Rishi AI</span>
      </button>
    );
  }

  return (
    <div className="ai-widget">
      <div className="ai-widget-header">
        <div className="ai-widget-title">
          <div className="ai-widget-icon">
            <Bot size={20} />
          </div>

          <div>
            <h3>Rishi AI</h3>
            <span>Online • Portfolio Assistant</span>
          </div>
        </div>

        <button
          className="ai-close-button"
          onClick={() => setOpen(false)}
          aria-label="Close AI"
        >
          <X size={19} />
        </button>
      </div>

      <div className="ai-widget-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`ai-message ${
              msg.role === "user"
                ? "ai-message-user"
                : "ai-message-bot"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {loading && (
          <div className="ai-message ai-message-bot ai-typing">
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}
      </div>

      <div className="ai-widget-input-area">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask me about Rishi..."
          rows="1"
        />

        {/* Voice Input */}
        <button
          type="button"
          className={`ai-voice-button ${
            isListening ? "listening" : ""
          }`}
          onClick={toggleVoiceInput}
          disabled={loading}
          aria-label={
            isListening
              ? "Stop voice input"
              : "Start voice input"
          }
          title={
            isListening
              ? "Stop listening"
              : "Speak your question"
          }
        >
          <Mic size={18} />
        </button>

        {/* Send */}
        <button
          type="button"
          onClick={sendMessage}
          disabled={!message.trim() || loading}
          aria-label="Send message"
          title="Send message"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}


function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-left">
        <div className="footer-brand">
          <span className="footer-logo">R</span>
          <span>Gattu Rishi Priyesh.</span>
        </div>

        <p>
          AI/ML Engineer building intelligent applications with
          machine learning and Generative AI.
        </p>
      </div>

      <div className="footer-right">

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <p className="copyright">
          © 2026 Gattu Rishi Priyesh. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default App;