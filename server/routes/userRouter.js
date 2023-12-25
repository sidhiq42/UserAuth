const express = require("express");

const { RegisetrUser, LoginUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", RegisetrUser);
router.post("/login", LoginUser);

module.exports = router;
