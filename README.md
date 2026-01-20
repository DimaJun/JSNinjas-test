# Superhero App

This is a **Nest.js** project with a **React** frontend, using **PostgreSQL** as the database. The project consists of two parts: **server** and **client**.

---

## 💻 Requirements

- **Node.js**: version **24+**
- **PostgreSQL**: running server (with the created database)
- npm (Node Package Manager)
- Git (for cloning the repository)

---

## ⚡ Installation

### Cloning:

```bash
git clone https://github.com/DimaJun/JSNinjas-test.git
cd JSNinjas-test
```

### In the client folder
```bash
npm install
npm run start:dev
```

### In the server folder
```bash
npm install
cp .env.example .env (change variables to yours)
npx prisma migrate deploy
npx prisma generate
npm run start dev
```
