const {getAllUsers, createUser} = require("./controllers/user.controller");
const router = require("express").Router();

router.get("/users", getAllUsers);
router.post("/users", createUser);

module.exports = router;
