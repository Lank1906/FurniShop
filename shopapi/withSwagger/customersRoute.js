const express = require("express");
const {
    getCustomers,
    createCustomers,
    updateCustomers,
    deleteCustomers,
    oneCustomers,
    byCustomers
} = require("../controllers/customersController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: Quản lý API khách hàng
 */

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Lấy tất cả các khách hàng
 *     tags: [Customers]
 *     responses:
 *       200:
 *         description: Danh sách các khách hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   customer_id:
 *                     type: integer
 *                   customer_name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   address:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   password:
 *                     type: string
 *                   search:
 *                     type: string
 */
router.route("/").get(getCustomers);

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Tạo một khách hàng mới
 *     tags: [Customers]
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
 *         description: Khách hàng đã được tạo
 *       400:
 *         description: Tạo khách hàng thất bại
 */
router.route("/").post(createCustomers);

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Cập nhật một khách hàng dựa trên ID
 *     tags: [Customers]
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
 *       200:
 *         description: Khách hàng đã được cập nhật
 *       400:
 *         description: Cập nhật khách hàng thất bại
 */
router.route("/:id").put(updateCustomers);

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Xóa một khách hàng dựa trên ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Khách hàng đã được xóa
 *       400:
 *         description: Xóa khách hàng thất bại
 */
router.route("/:id").delete(deleteCustomers);

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Lấy một khách hàng cụ thể dựa trên ID
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Khách hàng cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 customer_id:
 *                   type: integer
 *                 customer_name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 address:
 *                   type: string
 *                 phone:
 *                   type: string
 *                 password:
 *                   type: string
 *                 search:
 *                   type: string
 *       404:
 *         description: Không tìm thấy khách hàng
 */
router.route("/:id").get(oneCustomers);

/**
 * @swagger
 * /customers/by/{name}:
 *   get:
 *     summary: Tìm kiếm khách hàng theo tên
 *     tags: [Customers]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Khách hàng phù hợp
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   customer_id:
 *                     type: integer
 *                   customer_name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   address:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   password:
 *                     type: string
 *                   search:
 *                     type: string
 *       404:
 *         description: Không tìm thấy khách hàng
 */
router.route("/by/:name").get(byCustomers);

module.exports = router;
