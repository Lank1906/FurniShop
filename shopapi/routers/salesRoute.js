const express=require("express")
const {getSales,createSales,updateSales,deleteSales,oneSales,bySales}=require("../controllers/salesController")
const router=express.Router()

router.route("/").get(getSales)
router.route("/").post(createSales)
router.route("/:id").put(updateSales)
router.route("/:id").delete(deleteSales)
router.route("/:id").get(oneSales)
router.route("/by/:id").get(bySales)

module.exports = router