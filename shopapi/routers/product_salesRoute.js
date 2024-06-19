const express=require("express")
const {getProduct_sales,createProduct_sales,updateProduct_sales,deleteProduct_sales,oneProduct_sales,byProduct_sales}=require("../controllers/product_salesController")
const router=express.Router()

router.route("/").get(getProduct_sales)
router.route("/").post(createProduct_sales)
router.route("/:id").put(updateProduct_sales)
router.route("/:id").delete(deleteProduct_sales)
router.route("/:id").get(oneProduct_sales)
router.route("/by/:id").get(byProduct_sales)

module.exports = router