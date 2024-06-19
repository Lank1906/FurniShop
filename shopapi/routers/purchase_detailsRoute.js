const express=require("express")
const {getPurchase_details,createPurchase_details,updatePurchase_details,deletePurchase_details,onePurchase_details,byPurchase_details}=require("../controllers/purchase_detailsController")
const router=express.Router()

router.route("/").get(getPurchase_details)
router.route("/").post(createPurchase_details)
router.route("/:id").put(updatePurchase_details)
router.route("/:id").delete(deletePurchase_details)
router.route("/:id").get(onePurchase_details)
router.route("/by/:id").get(byPurchase_details)

module.exports = router