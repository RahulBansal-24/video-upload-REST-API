//server creation

//importing dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//initializing express
const app = express();

app.use(cors());
app.use(express.json());

//database url
const Mongo_url =
  "enter your mongoDB url here"; // Tip: add "/<database_name>" after mongoDB link to create a database with that name"

//DB connection establish and checking
mongoose
  .connect(Mongo_url)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err.message));

//defining schema
const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  videoUrl: {
    type: String, 
    required: [true, "videoUrl is required"],
    trim: true
  },
  createdAt: {
    //data of creation date
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    //data of updation date
    type: Date,
  },
});

//middleware: update 'updatedAt' before saving
videoSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

//creating model
const video = mongoose.model("videos", videoSchema);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Videos API 🎥");
});

//post method with endpoint POST /api/videos
//Add a new video record

app.post("/api/videos", async (req, res) => {
  try {
    const { title, description, videoUrl } = req.body;
    
    //validating required fields
    if (!title || !videoUrl) {
      return res.status(400).json({success: false, message: "Bad request : Title and videoUrl are required" });
    }

    const newvideo = new video({ title, description, videoUrl });

    //saving newvideo
    await newvideo.save();

    return res.status(201).json({success: true,
         message: "Video added successfully",
         data: newvideo });
  } catch (error) {
    res.status(500).json({ message: "Error adding video" });
  }
});

//get method with endpoint GET /api/videos
//Retrieve all uploaded videos

app.get("/api/videos", async (req, res) => {
  try {
    const videos = await video.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: videos });
  } catch (err) {
    return res.status(500).json({success: false,
         message: "Server error while fetching videos" });
  }
});

//delete method with endpoint DELETE /api/videos/:id
//delete a specific video by id

app.delete("/api/videos/:id", async (req, res) => {
  try {
    //extracting the id parameter from the URL
    const { id } = req.params;

    //finding and deleting the video by its id
    const videos = await video.findByIdAndDelete(id);

    //if video does not exist
    if (!videos) return res.status(404).json({ success: false, message: "video not found" });

    //if deletion successful
    res.json({success: true, message: "video deleted successfully" });
  } catch (err) {
    res.status(500).json({success: false, message: "Error deleting video" });
  }
});

//put method with endpoint PUT /api/videos/:id
//update a specific video by id

app.put("/api/videos/:id", async (req, res) => {
  try {
    //extracting the id parameter from the URL
    const { id } = req.params;

    //extracting updated data from the request body
    const { title, description, videoUrl } = req.body;

    //finding the video by its id
    const videos = await video.findById(id);

    //if no video exists with that id
    if (!videos) return res.status(404).json({ success: false, message: "video not found" });

    //updating the video fields only if they are provided in request
    if (title !== undefined) videos.title = title;
    if (description !== undefined) videos.description = description;
    if (videoUrl !== undefined) videos.videoUrl = videoUrl;

    //updating updation date
    videos.updatedAt = Date.now();

    //saving changes
    await videos.save();

    //sending success response with updated data
    res.json({ success: true, message: "video updated successfully",data: videos });
  } catch (err) {
    //if any error occurs during update
    res.status(500).json({ success: false, message: "Error updating video" });
  }
});

//global error handling (fallback)
app.use((err, req, res, next) => {
  console.error("Error: ", err.stack);
  res.status(500).json({ success: false, message: "Internal server error" });
});

//Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});