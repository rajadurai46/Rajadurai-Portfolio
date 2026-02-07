const path = require("path");

/* Download Resume */
const downloadResume = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "Resume.pdf");

  res.download(filePath, "Rajadurai-Resume.pdf", (err) => {
    if (err) {
      console.log(err);
      res.status(500).json({ message: "Download failed" });
    }
  });
};

module.exports = {
  downloadResume,
};
