# 📧 Email Agent
 
An AI-powered web app that generates professional emails in Italian based on a simple description of what you want to communicate.
 
## 🚀 Demo
 
Just describe what you need to say — the agent writes a complete, professional email for you.
 
## 🧠 How It Works
 
1. The user describes the email content in plain language
2. The request is sent to the **Groq API** (LLaMA 3.3 70B)
3. The AI generates a polished, professional email in Italian
4. The result is displayed instantly in the browser
## 🛠️ Tech Stack
 
| Layer    | Technology              |
|----------|-------------------------|
| Frontend | HTML, CSS, JavaScript   |
| Backend  | Node.js, Express        |
| AI Model | Groq API (LLaMA 3.3 70B)|
 
## ⚙️ Setup
 
### Prerequisites
 
- [Node.js](https://nodejs.org/) installed
- A [Groq API key](https://console.groq.com/)
### Installation
 
1. Clone the repository:
```bash
   git clone https://github.com/Rizzo-08/Email-Agent.git
   cd Email-Agent
```
 
2. Install dependencies:
```bash
   npm install
```
 
3. Create a `.env` file in the root directory:
```
   GROQ_API_KEY=your_api_key_here
```
 
4. Start the server:
```bash
   node server.js
```
 
5. Open your browser and go to `http://localhost:3000`
## 📁 Project Structure
 
```
Email-Agent/
│
├── index.html        # Frontend UI
├── server.js         # Express backend & Groq API integration
├── package.json      # Project dependencies
├── .env              # API key (not included in repo)
└── .gitignore
```
 
## 🔒 Environment Variables
 
| Variable       | Description              |
|----------------|--------------------------|
| `GROQ_API_KEY` | Your Groq API secret key |
 
> ⚠️ Never commit your `.env` file. It's already included in `.gitignore`.
 
## 📄 License
 
This project is open source and available under the [MIT License](LICENSE).
