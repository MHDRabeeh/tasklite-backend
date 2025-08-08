# TaskLite Backend (MERN Stack)

This is the **backend API** for the **TaskLite Task Manager** application.  
It handles **User Authentication** (Register & Login) and **Task Management** (Create, Read, Update, Delete, Change Status).

---

## 🚀 Features
- User Registration & Login.
- Create, Read, Update, Delete (CRUD) for tasks.
- Change task status (PATCH).
- MongoDB + Mongoose for database.
- Express.js API routes.
- Error handling with proper HTTP status codes.
- CORS enabled for frontend access.

---

## 📦 Tech Stack
- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **pnpm** (Package Manager)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/MHDRabeeh/tasklite-backend

2️⃣ Install dependencies
pnpm install
3️⃣ Configure environment variables
PORT=4000
MONGO_URI="mongodb://127.0.0.1:27017/tasklite"
5️⃣ Start the server
 pnpm run dev



 Server runs at:

http://localhost:4000


MY backend routes are:

http://localhost:4000/api/user/ → User Auth (register, login)

http://localhost:4000/api/user/todo → Todo CRUD & status

| Method | Endpoint             | Description       | Body JSON Example                                     |
| ------ | -------------------- | ----------------- | ----------------------------------------------------- |
| POST   | `/api/user/register` | Register new user | `{ "username": "John", "email": "john@example.com" }` |
| POST   | `/api/user/login`    | Login user        | `{ "email": "john@example.com" }`                     |








| Method | Endpoint             | Description              | Body JSON Example                                                                                                                                     |
| ------ | -------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| GET    | `/api/user/todo/:id` | Get all todos for a user | *Nobody*                                                                                                                                             |
| POST   | `/api/user/todo`     | Create a new todo        | `{ "title": "Sample Task", "description": "Details", "status": "To  Do", "userId": "USER_ID", "priority": "High", "dueDate": "2025-08-10T00:00:00Z" }` |


| PUT    | `/api/user/todo/:id` | Update a todo            | `{ "title": "Updated", "description": "Updated", "status": "In Progress", "priority": "Medium", "dueDate": "2025-08-12T00:00:00Z" }`   

               |
| DELETE | `/api/user/todo/:id` | Delete a todo            | *No body*    

                                                                                                                                         |
| PATCH  | `/api/user/todo/:id` | Change todo status       | `{ "status": "Done" }`                                                                                                                                |



