const express = require("express");
const decodeToken = require("../middleware/decodeToken");
const {
  tokenizeContact,
  saveContact,
} = require("../controllers/contactController");

const router = express.Router();

// Step 1: create token (NO middleware)
router.post("/tokenize", tokenizeContact);

// Step 2: save using token (WITH middleware)
router.post("/save", decodeToken, saveContact);

module.exports = router;

