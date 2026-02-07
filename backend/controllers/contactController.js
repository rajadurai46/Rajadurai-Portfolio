const jwt = require("jsonwebtoken");
const Contact = require("../models/Contact");
const {
  sendAutoReply,
  sendAdminNotification,
} = require("../utils/sendEmail");

/* =========================
   STEP 1: CREATE TOKEN
========================= */
exports.tokenizeContact = (req, res) => {

  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields required" });
  }

  const token = jwt.sign(
    { name, email, phone, message },
    process.env.JWT_SECRET,
    { expiresIn: "5m" }
  );

  // 👈 USER SEES ONLY TOKEN
  res.json({ token });
};

/* =========================
   STEP 2: SAVE USING TOKEN
========================= */
exports.saveContact = async (req, res) => {
  try {
    // 🔐 HARD GUARD (prevents 500 crash)
    if (!req.userData) {
      return res.status(401).json({
        message: "Invalid or missing token data",
      });
    }

    const { name, email, phone, message } = req.userData;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        message: "Incomplete token payload",
      });
    }

    // ✅ DB SAVE
    await Contact.create({
      name,
      email,
      phone,
      message,
    });

    // ⚠️ Email sending can crash — isolate it
    try {
      await sendAutoReply(email, name);
      await sendAdminNotification(name, email, phone, message);
    } catch (mailErr) {
      console.error("EMAIL ERROR 👉", mailErr.message);
      // Do NOT fail the request if email fails
    }

    return res.status(201).json({
      success: true,
      message: "Token verified. Data stored securely.",
    });
  } catch (error) {
    console.error("SAVE CONTACT ERROR 👉", error);
    return res.status(500).json({ message: "Server error" });
  }
};




