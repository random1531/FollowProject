const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller')
const userController = require('../controllers/user.controller')
// Exemple de route
router.post("/register", authController.signUp)
router.get("/", userController.getAllUsers)


module.exports = router;
