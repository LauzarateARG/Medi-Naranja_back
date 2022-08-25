const { Router } = require("express");
const router = Router();
const {
  getClients,
  updateClients,
  deleteClients,
} = require("../../../Controllers/AdminControllers/clientControllers");

router.get("/", getClients);

router.put("/:id", updateClients);

router.delete("/", deleteClients);

module.exports = router;
