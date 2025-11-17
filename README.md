# Hospital Management System (HMS) – Frontend Only  
This project is a **React-based frontend** for a Hospital Management System.  
It uses **static sample data** (no backend required) and is fully containerized using **Docker + Nginx**.

---

## 📌 Features
- Dashboard with hospital overview  
- Branches list (sample data)  
- Patients list (sample data)  
- Responsive, clean UI  
- No backend needed  
- Ready for deployment using Docker  

---

## 📁 Project Structure
```
hms-frontend/
├── Dockerfile
├── nginx.conf
├── package.json
├── public/
│   └── index.html
└── src/
    ├── App.js
    ├── App.css
    └── index.js
```

---

## 🚀 Run Locally (Development Mode)
### 1. Install dependencies
```
npm install
```

### 2. Start the React development server
```
npm start
```

App runs at: **http://localhost:3000**

---

## 🐳 Docker Deployment (Production Build)
### 1. Build Docker Image
```
docker build -t hms-frontend .
```

### 2. Run Container
```
docker run -d --name hms -p 3000:80 hms-frontend
```

Visit: **http://localhost:3000**

---

## 📝 Notes
- All sample data is stored directly in `App.js`.
- No backend or database is needed.
- Ideal for demos, submissions, and Docker practice.

---

## 📤 Submit to GitHub
```
git add .
git commit -m "Added HMS frontend-only Dockerized version"
git push origin main
```

---

## 📄 Author
This HMS frontend demo is created for academic deployment and Docker practice.
