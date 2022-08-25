const { Router } = require("express");
const router = Router();
const {
  getOrders,
  createOrders,
  updateOrder,
  deletedOrder,
} = require("../../../Controllers/AdminControllers/orderControllers");

router.get("/",getOrders);

router.post("/",createOrders);

router.put("/:id",updateOrder);

router.delete("/",deletedOrder);

module.exports = router;
