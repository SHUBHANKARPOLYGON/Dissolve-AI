# 🧠 DissolveAI

DissolveAI is a full-stack, AI-powered codebase analysis application. It allows developers to input a GitHub repository URL, instantly clone and process the codebase and its issues, and interact with the code using Retrieval-Augmented Generation (RAG) powered by Google Gemini and Groq.

**Live Demo**: [dissolve.ai.shubhankartiwary.com](https://dissolve.ai.shubhankartiwary.com)

---

## ✨ Features

* 📥 **Instant Repo Ingestion**: Clones public GitHub repositories, extracts file contents, and pulls active issues using the GitHub API.
* 🧠 **Advanced RAG Engine**: Chunks and embeds repository data into a vector index for highly accurate, context-aware AI responses.
* ⚡ **Multi-Model Support**: Switch seamlessly between **Google Gemini** (Pro/Flash) and **Groq's** ultra-fast models.
* ☁️ **Serverless Architecture**: Backend powered by [Modal](https://modal.com) for high-performance CPU allocation and persistent volume storage.
* 🔄 **Dual Environment**: Fully configured to run locally (via Uvicorn) for free development or on the cloud for production.
* 🔐 **Authentication**: Firebase-powered user authentication.

---

## 🛠️ Tech Stack

**Frontend:**
* React (Vite)
* Firebase (Auth)
* Deployed on: **Render**

**Backend:**
* Python & FastAPI
* Pandas & FAISS (Data Processing & Vector Storage)
* Google Generative AI SDK & Groq SDK
* Hosted on: **Modal**

---