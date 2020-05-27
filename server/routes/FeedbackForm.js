const express = require("express");
const router = express.Router();
const { emailFeedback } = require("../controllers/feedbackForm");

router.get("/", emailFeedback);

module.exports = router;
