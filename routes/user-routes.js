const userRoutes = require("express").Router();
const userController = require("../controllers/user-controller");
const { userAuth } = require("../middelware/middelware");
userRoutes.post("/register", userController.addUser);
userRoutes.post("/login", userController.login);
userRoutes.get("/userProfile", userAuth, userController.userProfile);
userRoutes.patch("/editProfile", userAuth, userController.editProfile);
userRoutes.get("/logout", userAuth, userController.logout);
userRoutes.delete("/deleteUser", userAuth, userController.deleteUser);
userRoutes.patch("/changePassword", userAuth, userController.changePassword);
module.exports = userRoutes;