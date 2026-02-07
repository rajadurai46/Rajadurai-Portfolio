const path = require("path");

/* Download Resume */
const downloadResume = (req, res) => {
  const filePath = path.join(__dirname, "..", "uploads", "resume.pdf");

  res.download(filePath, "Resume.pdf", (err) => {
    if (err) {
      res.status(500).json({ message: "Download failed" });
    }
  });
};

module.exports = {
  downloadResume,
};
