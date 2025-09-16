# 📝 ToDo App - Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js) 
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express) 
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-brightgreen?logo=mongodb) 
![Render](https://img.shields.io/badge/Deployed%20on-Render-blue?logo=render)

This is the **backend API** for the WeFund Crowdfunding Platform, built with **Node.js, Express.js, and MongoDB**.  
It provides REST APIs for managing tasks (CRUD operations).  

The backend is deployed on **Render**, and the frontend is deployed separately on **Vercel**.

---

## 🚀 Features

- User authentication (JWT-based login/signup)
- Create, Read, Update and Delete to your own campaigns
- View and Donate to other person's campaigns
- MongoDB database integration
- Secure environment variable handling
- RESTful API design

---

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB + Mongoose** - Database & ODM
- **JWT** - Authentication
- **Render** - Deployment

---

## 📂 Project Structure
```
backend/
├── controllers/ 
│ ├── campaignControllers.js
│ └── donationControllers.js
│ └── userControllers.js
├── cronJobjs/
│ ├── updateBalance.js
│
├── data/
│ ├── config.env
│ └── database.js
│
├── middlewares/
│ ├── auth.js
│ └── error.js
│
├── models/
│ ├── campaignModel.js
│ ├── donationModel.js
│ ├── userModel.js
│
├── routes/ 
│ ├── campaignRoutes.js
│ ├── donationRoutes.js
│ ├── userRoutes.js
│
├── utils/ 
│ └── features.js
│
├── app.js 
├── server.js 
├── package.json
└── package-lock.json 

```

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/shaileshadole/WeFund
cd WeFund

```

Install dependencies:
```
npm install
```

Create a .env file in the root folder and add:
```
PORT=4000
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
```

Run locally:
```
npm start
```


**Deploy 🚀**

🔗 Related Repositories
Frontend (Vercel): [todo-frontend](https://github.com/shaileshadole/WeFund-frontend)

---

## 🧑‍💻 Author

**Shailesh Adole**  
GitHub: [shaileshadole](https://github.com/shaileshadole)

---

## 🚀 Let's Connect

- 🌐 [LinkedIn](https://www.linkedin.com/in/shailesh-adole-01306a303/)
- ✉️ [Email](adoleshailesh2@gmail.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).