# Superhero App

This is a **Node.js** project with a React frontend (presumably), using **PostgreSQL** as the database. The project consists of two parts: **server** and **client**.

---

## 💻 Requirements

- **Node.js**: version **20+**
- **PostgreSQL**: running server
- npm (Node Package Manager)
- Git (for cloning the repository)

---

## ⚡ Installation

Clone the repository:

```bash
git clone <your_repository>
cd <project_folder>

# In the server folder
cd server
npm install

# In the client folder
cd ../client
npm install

cp .env.example .env
PORT=3000
DATABASE_URL=postgresql://username:password@localhost:5432/dbname

cd server
npm run start:dev

cd client
npm run start:dev
