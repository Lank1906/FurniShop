const { createpurchase_details, getpurchase_details, updatepurchase_details, deletepurchase_details, onepurchase_details, bypurchase_details } = require("../models/purchase_detailsModel")
//@desc Get all Purchase_details
//@route GET /Purchase_details
//@access public
const getPurchase_details = async (req, res) => {
    const data = await getpurchase_details();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Purchase_details
//@route POST /Purchase_details
//@access public
const createPurchase_details = async (req, res) => {
    try {
        const data = await createpurchase_details(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Purchase_details
//@route PUT /Purchase_details/id
//@access public
const updatePurchase_details = async (req, res) =>{
    try {
        const data = await updatepurchase_details(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Purchase_details
//@route DELETE /Purchase_details/id
//@access public
const deletePurchase_details = async (req, res) => {
    try{
        const data = await deletepurchase_details(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Purchase_details
//@route GET /Purchase_details/id
//@access public
const onePurchase_details = async (req, res) => {
    const data = await onepurchase_details(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Purchase_details
//@route GET /Purchase_details/by/id
//@access public
const byPurchase_details = async (req, res) => {
    const data = await bypurchase_details(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getPurchase_details, createPurchase_details, updatePurchase_details, deletePurchase_details, onePurchase_details, byPurchase_details };
