⭐ Connectify – Real-Time Video Communication Platform (Zoom Clone)

Connectify is a modern full-stack video communication platform built using React, Node.js, Express, MongoDB, WebRTC, and Socket.io. It provides secure real-time meetings, user authentication, meeting history, and a clean responsive UI.

✨ Features

🎥 Real-Time Video Calling using WebRTC + Socket.io

🔐 JWT Authentication (Login & Signup)

🚀 One-Click Meeting Creation

👥 Guest Mode – join without an account

📅 Meeting History stored in MongoDB

📱 Fully Responsive UI

⚡ Fast P2P connection for low-latency calls

🛠 Tech Stack
| Category      | Technologies               |
| ------------- | -------------------------- |
| **Frontend**  | React.js |
| **Backend**   | Node.js, Express.js        |
| **Database**  | MongoDB, Mongoose          |
| **Real-time** | WebRTC, Socket.io          |
| **Auth**      | JWT                        |


📁 Project Structure
Zoom/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── routes/
│   ├── config/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   └── contexts/
    └── public/

⚙️ Getting Started
✅ Prerequisites

Node.js (v14+)

npm (v6+)

MongoDB (local or Atlas)

🔧 Installation
1️⃣ Clone the repository
git clone https://github.com/Mahi-1905/Zoom.git
cd Zoom

2️⃣ Backend setup
cd backend
npm install

3️⃣ Frontend setup
cd ../frontend
npm install

🔑 Environment Variables
Backend .env
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret_key
PORT=5000

Frontend .env
REACT_APP_BACKEND_URL=http://localhost:5000

▶️ Running the Application
Start Backend
cd backend
npm start

Start Frontend
cd frontend
npm start

🤝 Contributing
Fork the repository
git checkout -b feature/AmazingFeature
git commit -m "Add AmazingFeature"
git push origin feature/AmazingFeature
Open a Pull Request

🛡 Security

Protected backend routes

JWT authentication

Password hashing

Secure P2P communication

📄 License

Licensed under the MIT License.

📞 Contact

Mahi Tyagi
📧 tyagimahi716@gmail.com

🔗 GitHub: https://github.com/Mahi-1905
