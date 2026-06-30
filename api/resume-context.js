// This file holds Vaishnavi's resume content, merged from her full-stack/backend,
// AI/ML, and robotics resume versions into one comprehensive profile.
// Edit this text directly any time her experience changes — no other code needs to change.

const RESUME_CONTEXT = `
NAME: Vaishnavi Satish
ROLE FOCUS: Software Engineer (Full-Stack / Backend / AI-ML), open to Frontend, Backend, Fullstack,
and Mobile-adjacent rotational software engineering roles, as well as AI/ML and Robotics/Autonomy roles.

CONTACT
- Email: vaishnavimsatish@gmail.com
- Phone: +1 (765) 775-7868
- LinkedIn: linkedin.com/in/vaisatish
- GitHub: github.com/vaishnavisatish
- Portfolio: vaishnavisatish.github.io/Portfolio
- Location: San Francisco, CA, US (also affiliated with Purdue University, West Lafayette, IN)

OBJECTIVE / SUMMARY
Software Engineer with experience building scalable web applications, RESTful APIs, full-stack systems,
and AI-powered / GenAI systems using modern frontend frameworks, cloud services, and Agile development
practices. Deep hands-on experience with LLM fine-tuning, RAG (Retrieval-Augmented Generation) architectures,
agentic workflows (LangGraph), and scalable backend engineering (Python, Go, FastAPI, Node.js). Also has
robotics/autonomy experience: ROS2, SLAM, autonomous navigation, computer vision, and embodied AI. Proven
track record of shipping measurable, production-grade results across full-stack, backend, AI/ML, and
robotics domains. Comfortable working across the stack — frontend, backend, cloud infra, and applied ML.

EDUCATION
- Purdue University, West Lafayette, IN — M.S. in Engineering (Autonomy and AI focus), GPA 4.0/4.0,
  Aug 2024 – May 2026
- VNRVJIET (India) — B.Tech, Electronics and Instrumentation Engineering, Minor in AI/ML, GPA 8.9/10.0,
  graduated May 2024

PROFESSIONAL EXPERIENCE

1) Saama Technologies, LLC — Software Engineering Intern (AI), Campbell, CA — August 2025 – December 2025
   - Full-stack Search Integration: Designed and deployed a production-ready Article Search API using a
     RAG-based architecture on AWS (AWS Bedrock + OpenSearch), replacing legacy systems and delivering
     production-ready features used by enterprise clients — reduced costs by 90% while achieving 97%
     retrieval accuracy across 50,000+ articles.
   - Built an OCR-driven RAG pipeline (AWS Textract + LangChain + FAISS) to extract and summarize clinical
     trial protocols, improving retrieval accuracy by roughly 60%.
   - Automated CI/CD ingestion pipelines: Built an automated ingestion pipeline (in Go) using Argo CD for
     daily Knowledge Base updates across 50,000+ KB articles with semantic chunking, enabling zero-downtime
     daily refreshes and optimized backend data retrieval.
   - Automated R script generation and self-correction via a LangGraph LLM agent (GPT-4o + tool calling),
     reducing analyst effort by 40% and eliminating about 200 manual edits per week.
   - Interactive System Design: Worked in Agile sprints with cross-functional engineering and UX teams,
     designing a multi-turn interactive LLM feedback loop with retrieval reranking (Cohere) for document
     search and code generation on a Pfizer-facing product — boosted task accuracy by 30% and raised user
     satisfaction from 3.2 to 4.4 out of 5 through iterative UI/UX refinements.
   - Backend API Development: Built a high-throughput batch-processing API (FastAPI + Celery + Redis) for
     SDTM clinical data processing, sustaining 1,000 requests/minute with p95 latency under 200ms — a 10x
     throughput improvement over the prior synchronous system.
   - Computer Vision & UX: Developed a computer vision model (CNN + post-processing) to extract and
     structure handwritten addresses from Kiosk camera images, achieving 98% field-level accuracy,
     collaborating with engineering teams to convert raw data into structured, user-friendly address fields.
   - Engineered a production-grade multi-agent LangGraph workflow for SDTM domain mapping/classification
     with LLM-as-a-Judge validation, achieving 95% mapping accuracy across 40+ domain types and an 85%
     success rate in automated testing.

2) Pitney Bowes Inc. — Data Science Intern, Shelton, CT — June 2025 – August 2025
   - Built a GPT-powered synthetic data generation pipeline for HS code classification: curated a
     domain-specific dataset and designed a question-generation bot for data augmentation, improving
     ambiguous HS code classification accuracy to 94%.
   (Note: some role details overlap with the Saama internship across resume versions — both reflect the
   same period of applied AI/backend work; treat the above as the consolidated, most detailed account.)

PROJECTS
- Full-stack AI Agent with Web Integration: Built a full-stack application using FastAPI (backend) and
  Streamlit (frontend) supporting real-time, interactive chat with conversation memory. Integrated the
  Tavily Search API for dynamic tool use, letting the agent resolve real-world queries via live web search.
- LangGraph-Based AI Agent with Web Search Integration (Full-Stack): Built a multi-tool AI agent using
  LangGraph and OpenAI/Groq LLMs for real-time query resolution (e.g., customer support), reducing average
  resolution time by 35%. Full-stack app with a React frontend and FastAPI backend, persistent conversation
  memory, deployed on AWS EC2 via Docker.
- Self-Improving (Agentic) RAG System with Online Learning Loop: Built a self-correcting LangGraph system
  featuring DSPy prompt optimization and DPO-based QLoRA fine-tuning for continuous adaptation. Implemented
  an LLM-as-a-Judge retry loop to diagnose reasoning failures, reducing failure rates by 40% and achieving a
  RAGAS faithfulness score of 0.91 versus a 0.67 baseline.
- ChatPDF — RAG over PDFs via AWS Bedrock: Built a responsive web interface for natural-language queries
  over uploaded PDFs. Backend architected with AWS Bedrock Titan Embeddings + FAISS vector storage for
  high-speed similarity search and context retrieval, achieving sub-500ms query latency at scale.
- Instruction-Tuned GPT-2 (Built from Scratch): Implemented core transformer components — including
  multi-head attention — from scratch in PyTorch, then QLoRA fine-tuned the model for instruction
  following, achieving an evaluation score of 80 on MT-Bench-style prompts. Demonstrates strong grasp of
  AI/transformer fundamentals, not just usage of existing libraries.
- Real-Time Manufacturing Machine Performance Monitoring: Built batch analytics pipelines processing
  500,000+ sensor records per day using SQL transformations and ML models. Built KPI monitoring dashboards
  in Grafana and data validation workflows, reducing incident response time by 35% and achieving 92%
  failure detection accuracy.
- Autonomous Mapping & Navigation (ROS2 + Gazebo): Built a full SLAM-based navigation system from scratch
  on a TurtleBot3, with frontier exploration, occupancy grid mapping, and motion planning for real-time
  autonomous navigation in unmapped environments. Achieved 96% map coverage with under 5cm localization
  error.
- Haptic-Feedback Robotic Arm for Telemedicine: Built a C++ robotic teleoperation system for remote
  surgical assistance using OpenCV and MediaPipe, achieving 94% pose estimation accuracy and enabling
  real-time motion replication via closed-loop visual servoing, haptic force feedback, and inverse
  kinematics with 3% end-effector error in simulation.
- Autonomous Lane Switching via Eye-Gaze Tracking (CARLA Simulation): Engineered a full perception-control
  pipeline in CARLA for gaze-driven autonomous lane changes. Integrated YOLOv8 for real-time obstacle
  detection and trained a Random Forest classifier on gaze features, achieving 96% accuracy at 10ms latency.

SKILLS
- Languages: Python, Java, JavaScript (ES6+), Go, C++, SQL
- Frontend: React, HTML5, CSS3, Streamlit, responsive & dynamic web UI development
- Backend & APIs: FastAPI, Node.js, Express-style REST API design, distributed systems fundamentals,
  system design, Celery, Redis
- Databases: PostgreSQL, MySQL, MongoDB
- Cloud & DevOps: AWS (S3, EC2, Bedrock, Textract), Docker, Kubernetes (basics), Terraform, CI/CD
  (GitHub Actions, Jenkins, Argo CD), Git, GitHub
- AI & GenAI: LLMs (GPT-4o, LLaMA), RAG pipeline design, QLoRA/LoRA fine-tuning, DPO/RLHF, prompt
  engineering, PyTorch, Hugging Face, Pandas, NumPy
- Agentic AI: LangGraph, multi-agent orchestration, tool use, persistent memory, self-correction loops
- LLM Evaluation: RAGAS, LLM-as-a-Judge, TruLens, Weights & Biases, MLflow
- Vector & Search: FAISS, OpenSearch, Pinecone, ChromaDB, semantic chunking, retrieval reranking (Cohere)
- Robotics & Simulation: ROS2, Gazebo, CARLA, SLAM, autonomous navigation, perception, control (MPC/PID),
  visual servoing, frontier exploration, occupancy grid mapping, TensorRT/ONNX
- Computer Vision: YOLOv8, MediaPipe, OpenCV
- Process: Agile/Scrum methodologies, cross-functional collaboration with design/UX/backend teams

PUBLICATIONS (Peer-Reviewed)
- "Improving Semantic Segmentation of Medical Images with Fine-Tuning Techniques" — JATIT, Aug 2024.
  Investigated fine-tuning strategies for deep learning models in medical image segmentation, demonstrating
  measurable improvements in pixel-level accuracy on clinical imaging datasets.
- "Forecasting Global Recession and Its Likely Fallout on India's Economy Using Machine Learning" — IEEE,
  Oct 2023. Applied ML models to macroeconomic indicators to forecast global recession probability and
  model downstream impacts on India's economy.

CAREER INTERESTS
Open to AI Engineering, ML Engineering, Full-Stack AI, and general Software Engineering roles (including
entry-level / rotational programs spanning frontend, backend, fullstack, or mobile-adjacent tracks).
Comfortable working in fast-paced, Agile/Scrum environments, learning new stacks quickly, and
collaborating cross-functionally with design, product, and engineering teams. Has applied generative AI
and agentic systems in real production settings, in addition to traditional full-stack web development.
`;

module.exports = { RESUME_CONTEXT };
