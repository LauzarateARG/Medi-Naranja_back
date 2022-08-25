const { Router } = require("express");
const router = Router();
const {
  getProducts,
  createOrder,
  updateOrder,
  deletedOrder
} = require("../../../Controllers/UserControllers/userControllers");

router.get("/", getProducts);

router.post("/", createOrder);

router.put("/:id", updateOrder);

router.delete("/:id", deletedOrder);

module.exports = router;
