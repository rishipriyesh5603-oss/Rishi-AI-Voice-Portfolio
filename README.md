# Rishi AI Portfolio

### AI-Powered Personal Portfolio with an Integrated LLM Assistant

A modern full-stack AI/ML portfolio that combines a responsive React interface with a FastAPI backend and an LLM-powered personal assistant.

The assistant allows recruiters and visitors to interact with my portfolio using natural-language questions about my **skills, projects, experience, education, certifications, and technical background**.

---

## 🚀 Live Application

🌐 **Portfolio:**  
https://rishi-ai-voice-portfolio.vercel.app

⚡ **Backend API:**  
https://rishi-ai-voice-portfolio.onrender.com

📚 **API Documentation:**  
https://rishi-ai-voice-portfolio.onrender.com/docs

---

## ✨ Features

- 🤖 **AI Portfolio Assistant** — Ask questions about my professional profile using natural language.
- 💼 **Project Showcase** — Explore my AI/ML, Generative AI, data analytics, and software projects.
- 🧠 **LLM Integration** — Uses Groq-powered LLM inference for conversational responses.
- ⚡ **FastAPI Backend** — Lightweight REST API handling AI requests.
- ⚛️ **React + Vite Frontend** — Fast and responsive modern UI.
- 📄 **Resume Access** — Directly view my professional resume.
- 🔗 **GitHub & LinkedIn Integration** — Easy access to professional profiles and project repositories.
- 📱 **Responsive Design** — Optimized for desktop, tablet, and mobile devices.
- ☁️ **Cloud Deployment** — Frontend and backend independently deployed to production.

---

## 🧠 AI Assistant

The portfolio includes a dedicated AI assistant called **Rishi AI**.

Visitors can ask questions such as:

> "Who is Rishi?"

> "What are Rishi's strongest projects?"

> "What technologies does Rishi work with?"

> "Tell me about the AI Knowledge Assistant."

> "What experience does Rishi have with Generative AI?"

The assistant generates responses using portfolio-specific context rather than requiring visitors to manually search through the entire website.

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │       Visitor       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React + Vite      │
                    │      Frontend       │
                    │       Vercel        │
                    └──────────┬──────────┘
                               │
                         REST API
                               │
                               ▼
                    ┌─────────────────────┐
                    │       FastAPI       │
                    │       Backend       │
                    │       Render        │
                    └──────────┬──────────┘
                               │
                         LLM Request
                               │
                               ▼
                    ┌─────────────────────┐
                    │      Groq API       │
                    │   LLM Inference     │
                    └──────────┬──────────┘
                               │
                         AI Response
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Rishi AI Chat    │
                    └─────────────────────┘
```

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3

### Backend

- Python
- FastAPI
- Uvicorn
- Pydantic
- REST API
- CORS

### AI / Generative AI

- Groq API
- Large Language Models (LLMs)
- Prompt Engineering
- Context-based AI responses

### Deployment

- Vercel — Frontend
- Render — Backend

### Development

- Git
- GitHub
- VS Code
- npm
- Python Virtual Environment

