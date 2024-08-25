const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')
const auth = require('../controllers/auth.middleware');


router.post("/login", userController.login)

//admin
router.post("/addUser", auth, userController.addUser);
// router.get("/", userController.getAllUsers)
// router.patch("/:id", userController.updateUser)
// router.delete("/:id", userController.deleteUser)



module.exports = router;