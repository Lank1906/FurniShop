const { createorder_details, getorder_details, updateorder_details, deleteorder_details, oneorder_details, byorder_details } = require("../models/order_detailsModel")
//@desc Get all Order_details
//@route GET /Order_details
//@access public
const getOrder_details = async (req, res) => {
    const data = await getorder_details();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Order_details
//@route POST /Order_details
//@access public
const createOrder_details = async (req, res) => {
    try {
        const data = await createorder_details(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Order_details
//@route PUT /Order_details/id
//@access public
const updateOrder_details = async (req, res) =>{
    try {
        const data = await updateorder_details(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Order_details
//@route DELETE /Order_details/id
//@access public
const deleteOrder_details = async (req, res) => {
    try{
        const data = await deleteorder_details(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Order_details
//@route GET /Order_details/id
//@access public
const oneOrder_details = async (req, res) => {
    const data = await oneorder_details(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Order_details
//@route GET /Order_details/by/id
//@access public
const byOrder_details = async (req, res) => {
    const data = await byorder_details(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getOrder_details, createOrder_details, updateOrder_details, deleteOrder_details, oneOrder_details, byOrder_details };
