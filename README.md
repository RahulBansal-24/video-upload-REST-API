# 🎥 Videos REST API

A simple **RESTful API** built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)** to manage video records.  
This API allows users to **create**, **read**, **update**, and **delete** video entries stored in a MongoDB database.

---

## 🚀 Features
- Add new videos with title, description, and video URL  
- Retrieve all uploaded videos  
- Update existing videos by ID  
- Delete videos by ID  
- Includes validation and clean error handling  

---

## 🛠️ Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose ODM**
- **CORS** (Cross-Origin Resource Sharing)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone this repository
```bash
git clone https://github.com/RahulBansal-24/video-upload-REST-API.git
cd video-upload-REST-API
```

### 2️⃣ Install dependencies
```bash
npm install express mongoose cors dotenv
```

### 3️⃣ Run the project locally
```bash
node server.js
```

Server will start on (http://localhost:8080)

---

## 💾 Database Connection

The MongoDB connection string is defined inside server.js.
Here for devTown team testing actual DB string is given 
but general format is:

const MONGO_URL = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/podcast";  
  
Insert your mongoDB **username** and **password** in respective spaces

---

## 🌍 Deploying on Render

If you want to deploy this **Video Upload REST API** from this repository on your own Render account, follow these steps 👇  

---

### 1️⃣ Log in to Render
Go to [https://render.com](https://render.com)  
Sign up or log in with your **GitHub account**.

---

### 2️⃣ Create a New Web Service
- From your Render dashboard, click **New +** → **Web Service**
- Choose **“Build and deploy from a Git repository”**
- Connect your GitHub account (if not already connected)
- Select **your forked repository** (or this one if cloned directly from RahulBansal-24)

---

### 3️⃣ Configure the Service
Fill in the details as follows:

| Setting | Value |
|----------|--------|
| **Name** | `video-upload-rest-api` |
| **Environment** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node server.js` |

Then click **Create Web Service**.

---

### 4️⃣ Deploy
Render will automatically:
- Clone the repository  
- Install dependencies (`npm install`)  
- Start the server (`node server.js`)

Once deployment completes, you’ll see logs like:  

MongoDB connected

---

## 🧪 Testing the API Using Postman

You can test all CRUD operations of this API using [Postman](https://www.postman.com/).

---

### 1️⃣ Base URL
Use your deployed URL:  

https://video-upload-rest-api.onrender.com/api/videos


---

### 2️⃣ Test the Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| **GET** | `/api/videos` | Retrieve all videos |
| **POST** | `/api/videos` | Add a new video |
| **PUT** | `/api/videos/:id` | Update an existing video by ID |
| **DELETE** | `/api/videos/:id` | Delete a video by ID |

---


## 📡 API Endpoints

### 🌐 Base URL
http://localhost:8080/api/videos


---

### ▶️ 1. **POST /api/videos**
**Description:** Add a new video record.

**Request Body (JSON):**
```json
{
  "title": "JavaScript Basics Tutorial",
  "description": "An introductory video covering JavaScript fundamentals, variables, and functions.",
  "videoUrl": "https://www.youtube.com/watch?v=W6NZfCO5SIk"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Video added successfully",
  "data": {
      "title": "JavaScript Basics Tutorial",
      "description": "An introductory video covering JavaScript fundamentals, variables, and functions.",
      "videoUrl": "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      "_id": "690c8d011d7eebe17a57895a",
      "createdAt": "2025-11-06T11:56:49.036Z",
      "updatedAt": "2025-11-06T11:56:49.039Z",
      "__v": 0
  }
}
```

**Error (400):**
```json
{
{
  "success": false,
  "message": "Bad request: title and videoUrl are required"
}

}
```

---

### 📋 2. **GET /api/videos**
**Description:** Retrieve all videos (sorted by newest first).


**Success Response (200):**
```json
{
  "success": true,
  "data": [
      {
          "_id": "690c8d011d7eebe17a57895a",
          "title": "JavaScript Basics Tutorial",
          "description": "An introductory video covering JavaScript fundamentals, variables, and functions.",
          "videoUrl": "https://www.youtube.com/watch?v=W6NZfCO5SIk",
          "createdAt": "2025-11-06T11:56:49.036Z",
          "updatedAt": "2025-11-06T11:56:49.039Z",
          "__v": 0
      }
  ]
}
```


---

### ✏️ 3. **PUT /api/videos/:id**
**Description:** Update an existing video by its ID.

**Request Body (JSON):**
```json
{
  "title": "Mastering JavaScript Fundamentals",
  "description": "Updated version with more detailed explanations of variables, functions, and control structures for better learning."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "video updated successfully",
  "data": {
      "_id": "690c8d011d7eebe17a57895a",
      "title": "Mastering JavaScript Fundamentals",
      "description": "Updated version with more detailed explanations of variables, functions, and control structures for better learning.",
      "videoUrl": "https://www.youtube.com/watch?v=W6NZfCO5SIk",
      "createdAt": "2025-11-06T11:56:49.036Z",
      "updatedAt": "2025-11-06T12:10:08.656Z",
      "__v": 0
  }
}
```

**Error (404):**
```json
{
  "success": false,
  "message": "Video not found"
}
```

---

### 🗑️ **4. DELETE /api/videos/:id**
**Description:** Delete a video by its ID.

**Success Response (200):**
```json
{
  "success": true,
  "message": "Video deleted successfully"
}
```

**Error (404):**
```json
{
  "success": false,
  "message": "Video not found"
}
```

---

## 🏠 Root Route

**Endpoint:**  
GET http://localhost:8080/


**Description:**  
This route is used to check if the server is running successfully.

**Response (Text):**
Welcome to Videos API 🎥