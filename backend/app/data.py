PORTFOLIO = {
    "name": "Gattu Rishi Priyesh",
    "headline": "AI/ML Engineer | Generative AI | RAG | Python",
    "location": "Hyderabad, India",
    "summary": (
        "Gattu Rishi Priyesh is an aspiring AI/ML and Generative AI engineer focused on "
        "Python, machine learning, deep learning, LLM applications, RAG systems, "
        "FastAPI and practical AI products."
    ),
    "skills": {
        "Programming": ["Python", "SQL", "JavaScript", "HTML", "CSS"],
        "Data": ["NumPy", "Pandas", "Matplotlib", "Power BI"],
        "Machine Learning": ["Scikit-learn", "Regression", "Classification", "Random Forest", "Model Evaluation"],
        "Deep Learning": ["TensorFlow", "PyTorch", "Neural Networks"],
        "Generative AI": ["LLMs", "RAG", "LangChain", "LangGraph", "Prompt Engineering", "Embeddings"],
        "Backend": ["FastAPI", "REST APIs", "PostgreSQL"],
        "Vector/AI Infrastructure": ["FAISS", "ChromaDB", "Sentence Transformers"],
        "Deployment/Tools": ["Docker", "Git", "GitHub", "Streamlit", "Jupyter", "VS Code"],
    },
    "projects": [
        {
            "name": "AI Knowledge Assistant",
            "type": "Generative AI / RAG",
            "description": (
                "A document-question answering platform that accepts documents, "
                "processes and chunks content, creates embeddings, stores vector representations, "
                "retrieves relevant context and generates answers with an LLM."
            ),
            "stack": ["Python", "FastAPI", "PostgreSQL", "Redis", "Celery", "ChromaDB", "FAISS", "RAG", "Docker"],
            "highlights": [
                "REST API backend with FastAPI",
                "Asynchronous document processing with Celery and Redis",
                "Vector retrieval using ChromaDB/FAISS",
                "LLM-based question answering",
            ],
        },
        {
            "name": "Plant Disease Detection",
            "type": "Deep Learning / Computer Vision",
            "description": (
                "A CNN-based deep learning project that detects and classifies "
                "plant diseases from leaf images. The model uses image preprocessing, "
                "data augmentation, CNN training, validation, and performance evaluation "
                "to identify different plant disease categories."
            ),
            "stack": [
                "Python",
                "TensorFlow",
                "Keras",
                "CNN",
                "NumPy",
                "Matplotlib",
                "Jupyter Notebook"
            ],
            "highlights": [
                "CNN-based image classification",
                "Plant leaf image preprocessing and augmentation",
                "Model training and validation",
                "Disease classification using deep learning",
                "Performance evaluation"
            ]
        },
        {
            "name": "AI-Powered Portfolio Assistant",
            "type": "Generative AI / Full Stack",
            "description": (
                "An interactive personal portfolio where recruiters can ask an AI assistant "
                "questions about skills, projects, experience and background."
            ),
            "stack": ["React", "Vite", "FastAPI", "Groq", "Llama 3", "REST API", "Vercel"],
            "highlights": [
                "Grounded responses using structured portfolio context",
                "Separate frontend and backend architecture",
                "Responsive recruiter-focused interface",
                "Production-ready API integration",
            ],
        },
        {
            "name": "Wine Quality Prediction",
            "type": "Machine Learning",
            "description": (
                "A supervised machine learning project for predicting wine quality from "
                "chemical properties using preprocessing, model training and evaluation."
            ),
            "stack": ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Streamlit"],
            "highlights": [
                "Data preprocessing and exploratory analysis",
                "Classification/regression experimentation",
                "Model evaluation and interactive Streamlit interface",
            ],
        },
        {
            "name": "Crime Analysis Dashboard",
            "type": "Data Analytics",
            "description": (
                "An analytics project focused on exploring crime patterns and presenting "
                "useful trends through data visualization."
            ),
            "stack": ["Python", "Pandas", "Matplotlib", "Power BI"],
            "highlights": [
                "Data cleaning and exploratory analysis",
                "Trend and category analysis",
                "Interactive dashboard-oriented reporting",
            ],
        },
    ],
    "experience": [
        {
            "company": "Datavalley.ai",
            "role": "AI/ML Intern",
            "description": (
                "Worked on practical AI/ML tasks involving Python, data processing and machine-learning workflows."
            ),
        }
    ],
        "certificates": [
        {
            "number": "01",
            "title": "AI Engineer Professional Training Programme",
            "issuer": "Datavalley",
            "description": (
                "Professional training covering Generative AI, machine learning, "
                "RAG systems, LLM applications and AI engineering workflows."
            ),
            "date": "Nov 2025 – Present",
        },
        {
            "number": "02",
            "title": "Python Programming Lesson Plan",
            "issuer": "CodeTantra",
            "description": (
                "Certificate of completion for the Python Programming Lesson Plan."
            ),
        },
        {
            "number": "03",
            "title": "Data Structures Using Python Programming",
            "issuer": "CodeTantra",
            "description": (
                "Certificate of completion for Data Structures using Python Programming."
            ),
        },
        {
            "number": "04",
            "title": "Python Programming Certification Test Series",
            "issuer": "Sanfoundry",
            "description": (
                "Python Programming Certification Test Series certification."
            ),
        },
        {
            "number": "05",
            "title": "Cloud Computing Certification Test Series",
            "issuer": "Sanfoundry",
            "description": (
                "Cloud Computing Certification Test Series certification."
            ),
        },
    ],
"education": "Bachelor of Technology (B.Tech) in Computer Science Engineering",
    "contact": {
        "email": "rishipriyesh5603@gmail.com",
        "linkedin": "https://www.linkedin.com/in/rishi-priyesh-b37183320",
        "github": "https://github.com/rishipriyesh5603-oss",
    },
}



def portfolio_context() -> str:
    return f"""
Name: {PORTFOLIO['name']}
Headline: {PORTFOLIO['headline']}
Location: {PORTFOLIO['location']}
Summary: {PORTFOLIO['summary']}

Skills:
{PORTFOLIO['skills']}

Projects:
{PORTFOLIO['projects']}

Experience:
{PORTFOLIO['experience']}

Certificates:
{PORTFOLIO['certificates']}

Education:
{PORTFOLIO['education']}

Contact:
{PORTFOLIO['contact']}
"""
