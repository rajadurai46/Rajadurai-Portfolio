const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();


const app = express();

/* DB */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(console.error);

/* Middlewares */
app.use(cors());
app.use(express.json());

/* Static folder (optional) */
app.use("/public", express.static(path.join(__dirname, "public")));

/* Routes */
app.use("/api/resume", require("./routes/resumeRoutes"));
app.use("/api/contact", require("./routes/contactRoutes"));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

