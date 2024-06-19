const express=require("express")
const {getProduct_reviews,createProduct_reviews,updateProduct_reviews,deleteProduct_reviews,oneProduct_reviews,byProduct_reviews}=require("../controllers/product_reviewsController")
const router=express.Router()

router.route("/").get(getProduct_reviews)
router.route("/").post(createProduct_reviews)
router.route("/:id").put(updateProduct_reviews)
router.route("/:id").delete(deleteProduct_reviews)
router.route("/:id").get(oneProduct_reviews)
router.route("/by/:id").get(byProduct_reviews)

module.exports = router