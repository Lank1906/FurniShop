const {getList, getDetail, getRelated, getByCategory, getByRoom, getBuyTogether, createCart, updateCart, deleteCart, getCart, getSearch, Signup, Login, getRandom, getSubCart, createBill} = require("../controllers/guestController");
const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Guests
 *   description: Quản lý API khách
 */

/**
 * @swagger
 * /list/{offset}:
 *   get:
 *     summary: Lấy danh sách sản phẩm với phân trang
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: offset
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm
 */
router.route("/list/:offset").get(getList);

/**
 * @swagger
 * /detail/{id}:
 *   get:
 *     summary: Lấy chi tiết sản phẩm theo ID
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chi tiết sản phẩm
 */
router.route("/detail/:id").get(getDetail);

/**
 * @swagger
 * /together/{id}:
 *   get:
 *     summary: Lấy danh sách sản phẩm thường mua cùng nhau
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm thường mua cùng
 */
router.route("/together/:id").get(getBuyTogether);

/**
 * @swagger
 * /related/{id}:
 *   get:
 *     summary: Lấy danh sách sản phẩm liên quan
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm liên quan
 */
router.route("/related/:id").get(getRelated);

/**
 * @swagger
 * /room/{room}/{offset}:
 *   get:
 *     summary: Lấy danh sách sản phẩm theo phòng với phân trang
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: room
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: offset
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm theo phòng
 */
router.route("/room/:room/:offset").get(getByRoom);

/**
 * @swagger
 * /category/{id}/{offset}:
 *   get:
 *     summary: Lấy danh sách sản phẩm theo danh mục với phân trang
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *       - in: path
 *         name: offset
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm theo danh mục
 */
router.route("/category/:id/:offset").get(getList);

/**
 * @swagger
 * /search/{key}/{offset}:
 *   get:
 *     summary: Tìm kiếm sản phẩm theo từ khóa với phân trang
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: key
 *         required: true
 *         schema:
 *           type: string
 *       - in: path
 *         name: offset
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm tìm kiếm
 */
router.route("/search/:key/:offset").get(getSearch);

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Thêm sản phẩm vào giỏ hàng
 *     tags: [Guests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               color:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sản phẩm đã được thêm vào giỏ hàng
 */
router.route("/cart").post(createCart);

/**
 * @swagger
 * /cart/{id}:
 *   put:
 *     summary: Cập nhật giỏ hàng
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Giỏ hàng đã được cập nhật
 */
router.route("/cart/:id").put(updateCart);

/**
 * @swagger
 * /cart/{id}:
 *   delete:
 *     summary: Xóa sản phẩm khỏi giỏ hàng
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sản phẩm đã được xóa khỏi giỏ hàng
 */
router.route("/cart/:id").delete(deleteCart);

/**
 * @swagger
 * /subcart/{ids}:
 *   get:
 *     summary: Lấy chi tiết các sản phẩm trong giỏ hàng theo IDs
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: ids
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Chi tiết các sản phẩm trong giỏ hàng
 */
router.route("/subcart/:ids").get(getSubCart);

/**
 * @swagger
 * /cart/{id}:
 *   get:
 *     summary: Lấy giỏ hàng theo ID khách hàng
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Giỏ hàng của khách hàng
 */
router.route("/cart/:id").get(getCart);

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Đăng ký tài khoản khách hàng
 *     tags: [Guests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_name:
 *                 type: string
 *               email:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               password:
 *                 type: string
 *               search:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tài khoản khách hàng đã được tạo
 */
router.route("/signup").post(Signup);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Đăng nhập tài khoản khách hàng
 *     tags: [Guests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đăng nhập thành công
 *       401:
 *         description: Đăng nhập thất bại
 */
router.route("/login").post(Login);

/**
 * @swagger
 * /guest/random:
 *   get:
 *     summary: Lấy danh sách sản phẩm ngẫu nhiên
 *     tags: [Guests]
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm ngẫu nhiên
 */
router.route("/random").get(getRandom);

/**
 * @swagger
 * /bill/{ids}:
 *   get:
 *     summary: Tạo hóa đơn từ giỏ hàng
 *     tags: [Guests]
 *     parameters:
 *       - in: path
 *         name: ids
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Hóa đơn đã được tạo
 */
router.route("/bill/:ids").get(createBill);

module.exports = router;
