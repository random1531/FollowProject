const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller')


router.post("/addUser", userController.addUser);
// router.post("/login", userController.login)

//admin
// router.get("/", userController.getAllUsers)
// router.patch("/:id", userController.updateUser)
// router.delete("/:id", userController.deleteUser)



module.exports = router;