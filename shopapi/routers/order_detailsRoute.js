const express=require("express")
const {getOrder_details,createOrder_details,updateOrder_details,deleteOrder_details,oneOrder_details,byOrder_details}=require("../controllers/order_detailsController")
const router=express.Router()

router.route("/").get(getOrder_details)
router.route("/").post(createOrder_details)
router.route("/:id").put(updateOrder_details)
router.route("/:id").delete(deleteOrder_details)
router.route("/:id").get(oneOrder_details)
router.route("/by/:id").get(byOrder_details)

module.exports = router