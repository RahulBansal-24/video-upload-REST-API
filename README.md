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

### 3️⃣ Run the project
```bash
node server.js
```

### 4️⃣ Server will start on (http://localhost:8080)

---

## 💾 Database Connection

The MongoDB connection string is defined inside server.js.
Here for devTown team testing actual DB string is given 
but general format is:

const MONGO_URL = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/podcast";

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
  "title": "JavaScript Basics",
  "description": "Introduction to JS fundamentals",
  "videoUrl": "https://youtu.be/example-link"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Video added successfully!",
  "data": {
    "_id": "6737e4d91b4b283e45f2f4cb",
    "title": "JavaScript Basics",
    "description": "Introduction to JS fundamentals",
    "videoUrl": "https://youtu.be/example-link",
    "createdAt": "2025-10-28T14:00:00.000Z",
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
      "_id": "6737e4d91b4b283e45f2f4cb",
      "title": "JavaScript Basics",
      "description": "Introduction to JS fundamentals",
      "videoUrl": "https://youtu.be/example-link",
      "createdAt": "2025-10-28T14:00:00.000Z",
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
  "title": "JavaScript Basics - Updated",
  "description": "Improved explanation with examples",
  "videoUrl": "https://youtu.be/new-example-link"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Video updated successfully",
  "data": {
    "_id": "6737e4d91b4b283e45f2f4cb",
    "title": "JavaScript Basics - Updated",
    "description": "Improved explanation with examples",
    "videoUrl": "https://youtu.be/new-example-link",
    "createdAt": "2025-10-28T14:00:00.000Z",
    "updatedAt": "2025-11-06T10:00:00.000Z",
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