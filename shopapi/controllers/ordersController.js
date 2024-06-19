const { createorders, getorders, updateorders, deleteorders, oneorders, byorders } = require("../models/ordersModel")
//@desc Get all Orders
//@route GET /Orders
//@access public
const getOrders = async (req, res) => {
    const data = await getorders();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Orders
//@route POST /Orders
//@access public
const createOrders = async (req, res) => {
    try {
        const data = await createorders(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Orders
//@route PUT /Orders/id
//@access public
const updateOrders = async (req, res) =>{
    try {
        const data = await updateorders(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Orders
//@route DELETE /Orders/id
//@access public
const deleteOrders = async (req, res) => {
    try{
        const data = await deleteorders(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Orders
//@route GET /Orders/id
//@access public
const oneOrders = async (req, res) => {
    const data = await oneorders(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Orders
//@route GET /Orders/by/id
//@access public
const byOrders = async (req, res) => {
    const data = await byorders(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getOrders, createOrders, updateOrders, deleteOrders, oneOrders, byOrders };
