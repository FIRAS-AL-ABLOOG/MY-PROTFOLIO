const express = require("express");

const {
  createConsultation,
} = require("../controllers/consultationController");

const router = express.Router();

// إرسال استشارة جديدة
router.post("/", createConsultation);

module.exports = router;