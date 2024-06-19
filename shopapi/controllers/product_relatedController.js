const { createproduct_related, getproduct_related, updateproduct_related, deleteproduct_related, oneproduct_related, byproduct_related } = require("../models/product_relatedModel")
//@desc Get all Product_related
//@route GET /Product_related
//@access public
const getProduct_related = async (req, res) => {
    const data = await getproduct_related();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Product_related
//@route POST /Product_related
//@access public
const createProduct_related = async (req, res) => {
    try {
        const data = await createproduct_related(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Product_related
//@route PUT /Product_related/id
//@access public
const updateProduct_related = async (req, res) =>{
    try {
        const data = await updateproduct_related(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Product_related
//@route DELETE /Product_related/id
//@access public
const deleteProduct_related = async (req, res) => {
    try{
        const data = await deleteproduct_related(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Product_related
//@route GET /Product_related/id
//@access public
const oneProduct_related = async (req, res) => {
    const data = await oneproduct_related(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Product_related
//@route GET /Product_related/by/id
//@access public
const byProduct_related = async (req, res) => {
    const data = await byproduct_related(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getProduct_related, createProduct_related, updateProduct_related, deleteProduct_related, oneProduct_related, byProduct_related };
