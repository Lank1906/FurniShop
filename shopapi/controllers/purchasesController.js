const { createpurchases, getpurchases, updatepurchases, deletepurchases, onepurchases, bypurchases } = require("../models/purchasesModel")
//@desc Get all Purchases
//@route GET /Purchases
//@access public
const getPurchases = async (req, res) => {
    const data = await getpurchases();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Purchases
//@route POST /Purchases
//@access public
const createPurchases = async (req, res) => {
    try {
        const data = await createpurchases(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Purchases
//@route PUT /Purchases/id
//@access public
const updatePurchases = async (req, res) =>{
    try {
        const data = await updatepurchases(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Purchases
//@route DELETE /Purchases/id
//@access public
const deletePurchases = async (req, res) => {
    try{
        const data = await deletepurchases(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Purchases
//@route GET /Purchases/id
//@access public
const onePurchases = async (req, res) => {
    const data = await onepurchases(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Purchases
//@route GET /Purchases/by/id
//@access public
const byPurchases = async (req, res) => {
    const data = await bypurchases(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getPurchases, createPurchases, updatePurchases, deletePurchases, onePurchases, byPurchases };
