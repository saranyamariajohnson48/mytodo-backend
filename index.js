const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://alanshaji5450:alanvattamala@cluster0.qjedy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Database connection error:", err));

// Use task routes
app.use("/tasks", taskRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
