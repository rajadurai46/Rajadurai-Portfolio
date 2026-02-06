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
    const { name, email, phone, message } = req.userData;

    await Contact.create({
      name,
      email,
      phone,
      message,
    });

    await sendAutoReply(email, name);
    await sendAdminNotification(name, email, phone, message);

    res.status(201).json({
      success: true,
      message: "Token verified. Data stored securely.",
    });
  } catch (error) {
    console.error("SAVE CONTACT ERROR 👉", error);
    res.status(500).json({ message: "Server error" });
  }
};



