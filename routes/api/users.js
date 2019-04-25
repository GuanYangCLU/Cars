const express = require("express");
const router = express.Router();

// '/test' routes is localhost:5000/api/users/test    the relative folder path
// @route   GET api/users/test
// @desc    Tests user route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "users works" }));

module.exports = router;
