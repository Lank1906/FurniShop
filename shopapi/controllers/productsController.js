const { createproducts, getproducts, updateproducts, deleteproducts, oneproducts, byproducts } = require("../models/productsModel")
//@desc Get all Products
//@route GET /Products
//@access public
const getProducts = async (req, res) => {
    const data = await getproducts();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Products
//@route POST /Products
//@access public
const createProducts = async (req, res) => {
    try {
        const data = await createproducts(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Products
//@route PUT /Products/id
//@access public
const updateProducts = async (req, res) =>{
    try {
        const data = await updateproducts(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Products
//@route DELETE /Products/id
//@access public
const deleteProducts = async (req, res) => {
    try{
        const data = await deleteproducts(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Products
//@route GET /Products/id
//@access public
const oneProducts = async (req, res) => {
    const data = await oneproducts(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Products
//@route GET /Products/by/id
//@access public
const byProducts = async (req, res) => {
    const data = await byproducts(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getProducts, createProducts, updateProducts, deleteProducts, oneProducts, byProducts };
