# Rishi AI Portfolio

A modern AI/ML portfolio with an integrated AI assistant.

## Architecture

- Frontend: React + Vite
- Backend: FastAPI
- LLM: Groq Chat Completions API
- Model: `llama-3.3-70b-versatile`
- Deployment target: Vercel (frontend) + Render/Railway (backend)

The chatbot is grounded with the portfolio information in `backend/app/data.py`.
It is intentionally not a generic chatbot: it should answer questions about Rishi's skills, projects, experience, education, and contact information.

## 1. Run the backend

```bash
cd backend
python -m venv .venv
```

Windows:
```bash
.venv\Scripts\activate
```

macOS/Linux:
```bash
source .venv/bin/activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Copy `.env.example` to `.env` and add your Groq API key:
```env
GROQ_API_KEY=your_key_here
FRONTEND_ORIGIN=http://localhost:5173
```

Start:
```bash
uvicorn app.main:app --reload --port 8000
```

Backend:
http://localhost:8000

Swagger:
http://localhost:8000/docs

## 2. Run the frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend:
http://localhost:5173

Create `frontend/.env` if needed:
```env
VITE_API_URL=http://localhost:8000
```

## 3. Production deployment

### Backend

Deploy `backend` to Render/Railway/Fly.io or another Python host.

Build/install:
```bash
pip install -r requirements.txt
```

Start command:
```bash
uvicorn app.main:app --host 0.0.0.0 --port $PORT
```

Set:
- `GROQ_API_KEY`
- `FRONTEND_ORIGIN=https://your-vercel-domain.vercel.app`

### Frontend

Deploy `frontend` to Vercel.

Build command:
```bash
npm run build
```

Output directory:
```text
dist
```

Set:
```env
VITE_API_URL=https://your-backend-domain.example.com
```

## 4. Customize before publishing

Edit:
- `backend/app/data.py` — your real resume/project facts
- `frontend/src/data.js` — portfolio display data
- `frontend/src/App.jsx` — name, headline and sections
- `frontend/src/index.css` — visual style
- `frontend/public/resume.pdf` — put your real resume here

Do not put `GROQ_API_KEY` in frontend code. The key belongs only in the backend environment.

## AI portfolio project for your resume

Suggested title:

**AI-Powered Portfolio Assistant**

Suggested description:

Built and deployed an AI-powered personal portfolio using React, FastAPI and Groq LLMs. Implemented a grounded conversational assistant that answers recruiter questions using structured portfolio context, with a responsive UI, API integration, CORS configuration and production deployment.

## Important

This project uses the LLM for natural-language responses, but the portfolio facts are supplied by your backend. Update `data.py` with only information that is actually true about you.
