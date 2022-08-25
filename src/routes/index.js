const { Router } = require('express')
const router = Router()

const UserRoutes = require('./Users/users')
const ProductControl = require('./Admin/productsGestion')
const OrderControl = require('./Admin/ordersGestion')
const ClientControl = require('./Admin/clientGestion')
const LogInControl = require('./Users/logIn') 




router.use("/Admin/Product",ProductControl)
router.use("/Admin/Order",OrderControl)
router.use("/Admin/Client",ClientControl)
router.use("/User",UserRoutes)
router.use("/LogIn",LogInControl)

module.exports = router;
