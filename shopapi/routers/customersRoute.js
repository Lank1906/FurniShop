const express=require("express")
const {getCustomers,createCustomers,updateCustomers,deleteCustomers,oneCustomers,byCustomers}=require("../controllers/customersController")
const router=express.Router()

router.route("/").get(getCustomers)
router.route("/").post(createCustomers)
router.route("/:id").put(updateCustomers)
router.route("/:id").delete(deleteCustomers)
router.route("/:id").get(oneCustomers)
router.route("/by/:id").get(byCustomers)

module.exports = router