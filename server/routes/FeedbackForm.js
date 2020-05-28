const express = require("express");
const router = express.Router();
const { emailFeedback } = require("../controllers/feedbackForm");

router.post("/", emailFeedback);

module.exports = router;
