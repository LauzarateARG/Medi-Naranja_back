const { Router } = require("express");
const {
  getProducts,
  createProducts,
  updateProducts,
  deleteProducts,
} = require("../../../Controllers/AdminControllers/productsControllers");

const router = Router();

router.get("/",getProducts);

router.post("/",createProducts);

router.put("/:id",updateProducts);

router.delete("/:id",deleteProducts);

module.exports = router;
