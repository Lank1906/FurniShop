const express=require("express")
const {getOrders,createOrders,updateOrders,deleteOrders,oneOrders,byOrders}=require("../controllers/ordersController")
const router=express.Router()

router.route("/").get(getOrders)
router.route("/").post(createOrders)
router.route("/:id").put(updateOrders)
router.route("/:id").delete(deleteOrders)
router.route("/:id").get(oneOrders)
router.route("/by/:id").get(byOrders)

module.exports = router