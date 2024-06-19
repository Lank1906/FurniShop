const { createsuppliers, getsuppliers, updatesuppliers, deletesuppliers, onesuppliers, bysuppliers } = require("../models/suppliersModel")
//@desc Get all Suppliers
//@route GET /Suppliers
//@access public
const getSuppliers = async (req, res) => {
    const data = await getsuppliers();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Suppliers
//@route POST /Suppliers
//@access public
const createSuppliers = async (req, res) => {
    try {
        const data = await createsuppliers(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Suppliers
//@route PUT /Suppliers/id
//@access public
const updateSuppliers = async (req, res) =>{
    try {
        const data = await updatesuppliers(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Suppliers
//@route DELETE /Suppliers/id
//@access public
const deleteSuppliers = async (req, res) => {
    try{
        const data = await deletesuppliers(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Suppliers
//@route GET /Suppliers/id
//@access public
const oneSuppliers = async (req, res) => {
    const data = await onesuppliers(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Suppliers
//@route GET /Suppliers/by/id
//@access public
const bySuppliers = async (req, res) => {
    const data = await bysuppliers(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getSuppliers, createSuppliers, updateSuppliers, deleteSuppliers, oneSuppliers, bySuppliers };
