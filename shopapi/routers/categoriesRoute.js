const express=require("express")
const {getCategories,createCategories,updateCategories,deleteCategories,oneCategories,byCategories}=require("../controllers/categoriesController")
const router=express.Router()

router.route("/").get(getCategories)
router.route("/").post(createCategories)
router.route("/:id").put(updateCategories)
router.route("/:id").delete(deleteCategories)
router.route("/:id").get(oneCategories)
router.route("/by/:id").get(byCategories)

module.exports = router