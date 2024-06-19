const { createcustomers, getcustomers, updatecustomers, deletecustomers, onecustomers, bycustomers } = require("../models/customersModel")
//@desc Get all Customers
//@route GET /Customers
//@access public
const getCustomers = async (req, res) => {
    const data = await getcustomers();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Customers
//@route POST /Customers
//@access public
const createCustomers = async (req, res) => {
    try {
        const data = await createcustomers(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Customers
//@route PUT /Customers/id
//@access public
const updateCustomers = async (req, res) =>{
    try {
        const data = await updatecustomers(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Customers
//@route DELETE /Customers/id
//@access public
const deleteCustomers = async (req, res) => {
    try{
        const data = await deletecustomers(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Customers
//@route GET /Customers/id
//@access public
const oneCustomers = async (req, res) => {
    const data = await onecustomers(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Customers
//@route GET /Customers/by/id
//@access public
const byCustomers = async (req, res) => {
    const data = await bycustomers(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getCustomers, createCustomers, updateCustomers, deleteCustomers, oneCustomers, byCustomers };
