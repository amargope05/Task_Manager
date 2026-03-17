# 📝 Task Manager Application

A simple full-stack **Task Manager App** built using **React (Frontend)** and **Node.js + Express (Backend)**.
This application allows users to **add tasks, view tasks, and mark tasks as completed**, with clean UI and basic state handling.

---

## 🚀 Features

* ✅ Add new tasks (with validation)
* 📋 View all tasks
* ✔️ Mark tasks as completed
* 💾 LocalStorage support (fallback persistence)
* 🔄 Backend API integration
* ⚡ Loading, success, and error state handling
* 🎯 Clean and minimal UI (no external UI libraries)

---

## 🏗️ Tech Stack

### Frontend

* React (Hooks: `useState`, `useEffect`)
* Axios
* Basic HTML & CSS

### Backend

* Node.js
* Express.js
* UUID (for unique task IDs)

---

## 📁 Project Structure

```id="g0m3w8"
task-manager/
│
├── backend/
│   ├── server.js
│   └── routes/
│       └── tasks.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskInput.js
│   │   │   └── TaskList.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash id="7b1n3q"
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---

### 2️⃣ Install Dependencies

#### Backend

```bash id="1f1j7x"
cd backend
npm install
```

#### Frontend

```bash id="m3d2zx"
cd ../frontend
npm install
```

---

## ▶️ Running the Application

### ✅ Start Backend Server

```bash id="j6c6xz"
cd backend
node server.js
```

* Backend runs on → http://localhost:5000

---

### ✅ Start Frontend

```bash id="8q4l9m"
cd frontend
npm start
```

* Frontend runs on → http://localhost:3000

---

## 🔌 API Endpoints

| Method | Endpoint       | Description            |
| ------ | -------------- | ---------------------- |
| GET    | /api/tasks     | Fetch all tasks        |
| POST   | /api/tasks     | Create a new task      |
| PUT    | /api/tasks/:id | Mark task as completed |

---

## 📌 Functional Requirements Covered

* ✔️ Task input validation (cannot be empty)
* ✔️ Add Task button disabled when input is empty
* ✔️ Tasks displayed with status (Pending / Completed)
* ✔️ Mark Complete updates backend + UI
* ✔️ Completed tasks do not show action button
* ✔️ Error, loading, and success states handled

---

## 🎨 UI & UX Guidelines

* Simple and readable interface
* Clear labels and buttons
* Minimal styling using plain CSS
* Focus on functionality over design

---

## ⚠️ Constraints Followed

* ❌ No authentication
* ❌ No external form libraries
* ❌ No external state management libraries
* ✅ React Hooks used
* ✅ Controlled components implemented
* ✅ Clean API structure

---

## 🧠 Key Learnings / Concepts

* Full-stack integration (React ↔ Express)
* REST API design
* State management using hooks
* Controlled inputs & validation
* Error handling in async operations
* LocalStorage fallback strategy

---

## 🚀 Future Improvements

* 🔐 Add authentication (JWT)
* 🗄️ Replace in-memory DB with MongoDB/PostgreSQL
* ⚡ Add optimistic UI updates
* 📡 Real-time updates using WebSockets
* 🐳 Dockerize the application
* ☁️ Deploy using CI/CD pipelines

---

## 👨‍💻 Author

**Amar Gope**
Full Stack Developer | AI/ML Enthusiast

---

## 📄 License

This project is open-source and available under the MIT License.

---

## ⭐ Support

If you found this project helpful, please ⭐ the repository!
