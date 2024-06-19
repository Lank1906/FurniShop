const express=require("express")
const {getProducts,createProducts,updateProducts,deleteProducts,oneProducts,byProducts}=require("../controllers/productsController")
const router=express.Router()

router.route("/").get(getProducts)
router.route("/").post(createProducts)
router.route("/:id").put(updateProducts)
router.route("/:id").delete(deleteProducts)
router.route("/:id").get(oneProducts)
router.route("/by/:id").get(byProducts)

module.exports = router