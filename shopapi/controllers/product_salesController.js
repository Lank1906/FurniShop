const { createproduct_sales, getproduct_sales, updateproduct_sales, deleteproduct_sales, oneproduct_sales, byproduct_sales } = require("../models/product_salesModel")
//@desc Get all Product_sales
//@route GET /Product_sales
//@access public
const getProduct_sales = async (req, res) => {
    const data = await getproduct_sales();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Product_sales
//@route POST /Product_sales
//@access public
const createProduct_sales = async (req, res) => {
    try {
        const data = await createproduct_sales(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Product_sales
//@route PUT /Product_sales/id
//@access public
const updateProduct_sales = async (req, res) =>{
    try {
        const data = await updateproduct_sales(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Product_sales
//@route DELETE /Product_sales/id
//@access public
const deleteProduct_sales = async (req, res) => {
    try{
        const data = await deleteproduct_sales(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Product_sales
//@route GET /Product_sales/id
//@access public
const oneProduct_sales = async (req, res) => {
    const data = await oneproduct_sales(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Product_sales
//@route GET /Product_sales/by/id
//@access public
const byProduct_sales = async (req, res) => {
    const data = await byproduct_sales(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getProduct_sales, createProduct_sales, updateProduct_sales, deleteProduct_sales, oneProduct_sales, byProduct_sales };
