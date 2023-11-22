const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const path = require('path')

const PORT = 8080;

const app = express();

require("dotenv").config();
const dbConfig = require("./config/dbConfig");

// adding routes
const ImageRoutes = require("./routes/ImageBlockRoutes");
const VideoRoutes = require("./routes/VideoBlockRoutes");
const PublishedRoutes = require("./routes/PublishedBlocksRoutes");
const AnalyticRoutes = require("./routes/AnalyticsRoutes");
const SurveyRoutes = require("./routes/SurveyRoutes");

app.use(express.static("./public"));

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

app.use("/api/image", ImageRoutes);
app.use("/api/video", VideoRoutes);
app.use("/api/published", PublishedRoutes);
app.use("/api/analytics", AnalyticRoutes);
app.use("/api/survey", SurveyRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Your server is working fine on ${PORT}, keep working`);
});

// app.get("/", (req, res) => {
//   res.send("Hello, server is working fine, keep working");
// });
