const express=require("express")
const {getPurchases,createPurchases,updatePurchases,deletePurchases,onePurchases,byPurchases}=require("../controllers/purchasesController")
const router=express.Router()

router.route("/").get(getPurchases)
router.route("/").post(createPurchases)
router.route("/:id").put(updatePurchases)
router.route("/:id").delete(deletePurchases)
router.route("/:id").get(onePurchases)
router.route("/by/:id").get(byPurchases)

module.exports = router