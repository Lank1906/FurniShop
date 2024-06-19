const { createcategories, getcategories, updatecategories, deletecategories, onecategories, bycategories } = require("../models/categoriesModel")
//@desc Get all Categories
//@route GET /Categories
//@access public
const getCategories = async (req, res) => {
    const data = await getcategories();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Categories
//@route POST /Categories
//@access public
const createCategories = async (req, res) => {
    try {
        const data = await createcategories(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Categories
//@route PUT /Categories/id
//@access public
const updateCategories = async (req, res) =>{
    try {
        const data = await updatecategories(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Categories
//@route DELETE /Categories/id
//@access public
const deleteCategories = async (req, res) => {
    try{
        const data = await deletecategories(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Categories
//@route GET /Categories/id
//@access public
const oneCategories = async (req, res) => {
    const data = await onecategories(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Categories
//@route GET /Categories/by/id
//@access public
const byCategories = async (req, res) => {
    const data = await bycategories(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getCategories, createCategories, updateCategories, deleteCategories, oneCategories, byCategories };
