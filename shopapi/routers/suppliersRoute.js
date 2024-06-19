const express=require("express")
const {getSuppliers,createSuppliers,updateSuppliers,deleteSuppliers,oneSuppliers,bySuppliers}=require("../controllers/suppliersController")
const router=express.Router()

router.route("/").get(getSuppliers)
router.route("/").post(createSuppliers)
router.route("/:id").put(updateSuppliers)
router.route("/:id").delete(deleteSuppliers)
router.route("/:id").get(oneSuppliers)
router.route("/by/:id").get(bySuppliers)

module.exports = router