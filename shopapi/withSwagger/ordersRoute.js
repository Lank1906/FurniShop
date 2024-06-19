const express = require("express");
const {
    getOrders,
    createOrders,
    updateOrders,
    deleteOrders,
    oneOrders,
    byOrders
} = require("../controllers/ordersController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Quản lý API đơn hàng
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Lấy tất cả các đơn hàng
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Danh sách các đơn hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   order_id:
 *                     type: integer
 *                   customer_id:
 *                     type: integer
 *                   order_date:
 *                     type: string
 *                     format: date
 *                   total:
 *                     type: number
 *                   customer_name:
 *                     type: string
 */
router.route("/").get(getOrders);

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Tạo một đơn hàng mới
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               order_date:
 *                 type: string
 *                 format: date
 *               total:
 *                 type: number
 *     responses:
 *       201:
 *         description: Đơn hàng đã được tạo
 *       400:
 *         description: Tạo đơn hàng thất bại
 */
router.route("/").post(createOrders);

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Cập nhật một đơn hàng dựa trên ID
 *     tags: [Orders]
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
 *               customer_id:
 *                 type: integer
 *               order_date:
 *                 type: string
 *                 format: date
 *               total:
 *                 type: number
 *     responses:
 *       200:
 *         description: Đơn hàng đã được cập nhật
 *       400:
 *         description: Cập nhật đơn hàng thất bại
 */
router.route("/:id").put(updateOrders);

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Xóa một đơn hàng dựa trên ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Đơn hàng đã được xóa
 *       400:
 *         description: Xóa đơn hàng thất bại
 */
router.route("/:id").delete(deleteOrders);

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Lấy một đơn hàng cụ thể dựa trên ID
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Đơn hàng cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order_id:
 *                   type: integer
 *                 customer_id:
 *                   type: integer
 *                 order_date:
 *                   type: string
 *                   format: date
 *                 total:
 *                   type: number
 *                 customer_name:
 *                   type: string
 *       404:
 *         description: Không tìm thấy đơn hàng
 */
router.route("/:id").get(oneOrders);

/**
 * @swagger
 * /orders/by/{id}:
 *   get:
 *     summary: Tìm kiếm đơn hàng theo tên khách hàng
 *     tags: [Orders]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Danh sách đơn hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   order_id:
 *                     type: integer
 *                   customer_id:
 *                     type: integer
 *                   order_date:
 *                     type: string
 *                     format: date
 *                   total:
 *                     type: number
 *                   customer_name:
 *                     type: string
 *       404:
 *         description: Không tìm thấy đơn hàng
 */
router.route("/by/:id").get(byOrders);

module.exports = router;
