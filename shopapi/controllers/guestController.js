const { getlist, getdetail, getrelated, getbuytogether, getbyroom, getbycategory, search, createcart, updatecart, deletecart, getcart, createbill, destroybill, signup, login, getrandom, getsubcart } = require("../models/guestModel")

//@desc Get all product
//@route GET /list/:offset
//@access public
const getList = async (req, res) => {
    data = await getlist(req.params.offset);
    if (data.length > 0) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: "failed" })
    }
}

//@desc Get all product
//@route GET /list/:offset
//@access public
const getRandom = async (req, res) => {
    data = await getrandom();
    if (data.length > 0) {
        res.status(200).json(data)
    } else {
        res.status(400).json({ message: "failed" })
    }
}

//@desc Get one product
//@route GET /detail/:id
//@access public
const getDetail = async (req, res) => {
    data = await getdetail(req.params.id);
    if (data) {
        res.status(200).json(data)
    }
    else{
        res.status(400).json({ message: "failed" }) 
    }
}

//@desc Get product buy together
//@route GET /together/:id
//@access public
const getBuyTogether = async (req, res) => {
    data = await getbuytogether(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data)
    }
    else{
        res.status(400).json({ message: "failed" })
    }
}

//@desc Get product related
//@route GET /related/:id
//@access public
const getRelated = async (req, res) => {
    data = await getrelated(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data)
    }
    else{
        res.status(400).json({ message: "failed" })
    }
}

//@desc Get follow room
//@route GET /room/:room/:offset
//@access public
const getByRoom = async (req, res) => {
    data = await getbyroom(req.params.room, req.params.offset);
    if (data.length > 0) {
        res.status(200).json(data)
    }
    else{
        res.status(400).json({ message: "failed" })
    }
}

//@desc Get follow category
//@route GET /category/:id/:offset
//@access public
const getByCategory = async (req, res) => {
    data = await getbycategory(req.params.id, req.params.offset);
    if (data.length > 0) {
        res.status(200).json(data)
    }
    else{
        res.status(400).json({ message: "failed" })
    }
}

//@desc search product
//@route GET /search/:key/:offset
//@access public
const getSearch = async (req, res) => {
    data = await search(req.params.key, req.params.offset);
    if (data.length > 0) {
        res.status(200).json(data)
    }
    else{
        res.status(400).json({ message: "failed" })
    }
}

//@desc Create cart
//@route POST /cart
//@access public
const createCart = async (req, res) => {
    try {
        const data = await createcart(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}
//@desc Create bill
//@route POST /bill/ids
//@access public
const createBill = async (req, res) => {
    try {
        const data = await createbill(req.params.ids);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Update cart
//@route PUT /cart/:id
//@access public
const updateCart = async (req, res) => {
    try {
        const data = await updatecart(req.body, req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Delete cart
//@route DELETE /cart/:id
//@access public
const deleteCart = async (req, res) => {
    try {
        const data = await deletecart(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Get cart
//@route GET /cart/:id
//@access public
const getCart = async (req, res) => {
    data = await getcart(req.params.id);
    if (data.length > 0) {
        res.status(200).json(data)
    }
    else{
        res.status(400).json({ message: "failed" })
    }
}
//@desc Get sub cart
//@route GET /cart/:id
//@access public
const getSubCart = async (req, res) => {
    data = await getsubcart(req.params.ids);
    if (data.length > 0) {
        res.status(200).json(data)
    }
    else{
        res.status(400).json({ message: "failed" })
    }
}

//@desc Create user
//@route POST /user
//@access public
const Signup = async (req, res) => {
    try {
        const data = await signup(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

//@desc Login
//@route POST /cart
//@access public
const Login = async (req, res) => {
    try {
        const data = await login(req.body);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ message: "failed" });
    }
}

module.exports = { getList, getDetail, getRelated, getByCategory, getByRoom, getBuyTogether, createCart, updateCart, deleteCart, getCart, getSearch, Signup, Login, getRandom, getSubCart, createBill }