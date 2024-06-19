const express=require("express")
const {getProduct_related,createProduct_related,updateProduct_related,deleteProduct_related,oneProduct_related,byProduct_related}=require("../controllers/product_relatedController")
const router=express.Router()

router.route("/").get(getProduct_related)
router.route("/").post(createProduct_related)
router.route("/:id").put(updateProduct_related)
router.route("/:id").delete(deleteProduct_related)
router.route("/:id").get(oneProduct_related)
router.route("/by/:id").get(byProduct_related)

module.exports = router