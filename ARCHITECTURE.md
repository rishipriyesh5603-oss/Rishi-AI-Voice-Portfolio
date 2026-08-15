# Architecture

```text
                    ┌──────────────────────────┐
                    │      Recruiter / User    │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │ React + Vite Frontend    │
                    │       Vercel             │
                    └────────────┬─────────────┘
                                 │ POST /api/chat
                                 ▼
                    ┌──────────────────────────┐
                    │      FastAPI Backend     │
                    │   Render / Railway       │
                    └────────────┬─────────────┘
                                 │
                      Portfolio context
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │     Groq Chat API        │
                    │ Llama 3.3 70B Versatile  │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    Grounded portfolio answer
```

The frontend never receives the Groq API key.
