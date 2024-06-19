const { createsales, getsales, updatesales, deletesales, onesales, bysales } = require("../models/salesModel")
//@desc Get all Sales
//@route GET /Sales
//@access public
const getSales = async (req, res) => {
    const data = await getsales();
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Create Sales
//@route POST /Sales
//@access public
const createSales = async (req, res) => {
    try {
        const data = await createsales(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update Sales
//@route PUT /Sales/id
//@access public
const updateSales = async (req, res) =>{
    try {
        const data = await updatesales(req.body,req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete Sales
//@route DELETE /Sales/id
//@access public
const deleteSales = async (req, res) => {
    try{
        const data = await deletesales(req.params.id);
        res.status(200).json(data);
    }catch (error){
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get one Sales
//@route GET /Sales/id
//@access public
const oneSales = async (req, res) => {
    const data = await onesales(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get by Sales
//@route GET /Sales/by/id
//@access public
const bySales = async (req, res) => {
    const data = await bysales(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data);
    } else {
        res.status(400).json({message: "failed"});
    }
}

module.exports = { getSales, createSales, updateSales, deleteSales, oneSales, bySales };
