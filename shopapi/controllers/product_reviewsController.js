const { createproduct_reviews, getproduct_reviews, updateproduct_reviews, deleteproduct_reviews, oneproduct_reviews, byproduct_reviews } = require("../models/product_reviewsModel")
//@desc Get all Product_reviews
//@route GET /Product_reviews
//@access public
const getProduct_reviews = async (req, res) => {
    const data = await getproduct_reviews();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Product_reviews
//@route POST /Product_reviews
//@access public
const createProduct_reviews = async (req, res) => {
    try {
        const data = await createproduct_reviews(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Product_reviews
//@route PUT /Product_reviews/id
//@access public
const updateProduct_reviews = async (req, res) =>{
    try {
        const data = await updateproduct_reviews(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Product_reviews
//@route DELETE /Product_reviews/id
//@access public
const deleteProduct_reviews = async (req, res) => {
    try{
        const data = await deleteproduct_reviews(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Product_reviews
//@route GET /Product_reviews/id
//@access public
const oneProduct_reviews = async (req, res) => {
    const data = await oneproduct_reviews(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Product_reviews
//@route GET /Product_reviews/by/id
//@access public
const byProduct_reviews = async (req, res) => {
    const data = await byproduct_reviews(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getProduct_reviews, createProduct_reviews, updateProduct_reviews, deleteProduct_reviews, oneProduct_reviews, byProduct_reviews };
