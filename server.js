const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

// Render provides the PORT via environment variable
const PORT = process.env.PORT || 8080;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "about.html"));
})

app.get("/project", (req, res) =>{
    res.sendFile(path.join(__dirname, "public", "project.html"));
})


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});