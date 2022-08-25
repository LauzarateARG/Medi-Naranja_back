const { Router } = require("express");
const router = Router();
const {
  signIn,
  signUp,
} = require("../../../Controllers/UserControllers/authControllers");

router.post("/signIn",signIn);
router.post("/signUp",signUp);


module.exports = router;