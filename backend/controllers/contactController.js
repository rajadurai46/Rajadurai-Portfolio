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
    if (!req.userData) {
      return res.status(401).json({ message: "Invalid token data" });
    }

    const { name, email, phone, message } = req.userData;

    // ✅ 1️⃣ Save to DB (FAST)
    await Contact.create({ name, email, phone, message });

    // ✅ 2️⃣ RESPOND IMMEDIATELY
    res.status(201).json({
      success: true,
      message: "Message saved successfully",
    });

    // ✅ 3️⃣ SEND EMAIL ASYNC (NON-BLOCKING)
    Promise.resolve()
      .then(() => sendAutoReply(email, name))
      .then(() => sendAdminNotification(name, email, phone, message))
      .catch((err) =>
        console.error("EMAIL BACKGROUND ERROR 👉", err.message)
      );

  } catch (error) {
    console.error("SAVE CONTACT ERROR 👉", error);
    res.status(500).json({ message: "Server error" });
  }
};





