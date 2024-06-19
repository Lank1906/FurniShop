const express = require("express");
const {
    getOrder_details,
    createOrder_details,
    updateOrder_details,
    deleteOrder_details,
    oneOrder_details,
    byOrder_details
} = require("../controllers/order_detailsController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: OrderDetails
 *   description: Quản lý API chi tiết đơn hàng
 */

/**
 * @swagger
 * /order_details:
 *   get:
 *     summary: Lấy tất cả các chi tiết đơn hàng
 *     tags: [OrderDetails]
 *     responses:
 *       200:
 *         description: Danh sách các chi tiết đơn hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   order_detail_id:
 *                     type: integer
 *                   order_id:
 *                     type: integer
 *                   product_id:
 *                     type: integer
 *                   quantity:
 *                     type: integer
 *                   price:
 *                     type: number
 *                   product_name:
 *                     type: string
 */
router.route("/").get(getOrder_details);

/**
 * @swagger
 * /order_details:
 *   post:
 *     summary: Tạo một chi tiết đơn hàng mới
 *     tags: [OrderDetails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               order_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Chi tiết đơn hàng đã được tạo
 *       400:
 *         description: Tạo chi tiết đơn hàng thất bại
 */
router.route("/").post(createOrder_details);

/**
 * @swagger
 * /order_details/{id}:
 *   put:
 *     summary: Cập nhật một chi tiết đơn hàng dựa trên ID
 *     tags: [OrderDetails]
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
 *               order_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Chi tiết đơn hàng đã được cập nhật
 *       400:
 *         description: Cập nhật chi tiết đơn hàng thất bại
 */
router.route("/:id").put(updateOrder_details);

/**
 * @swagger
 * /order_details/{id}:
 *   delete:
 *     summary: Xóa một chi tiết đơn hàng dựa trên ID
 *     tags: [OrderDetails]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chi tiết đơn hàng đã được xóa
 *       400:
 *         description: Xóa chi tiết đơn hàng thất bại
 */
router.route("/:id").delete(deleteOrder_details);

/**
 * @swagger
 * /order_details/{id}:
 *   get:
 *     summary: Lấy một chi tiết đơn hàng cụ thể dựa trên ID
 *     tags: [OrderDetails]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chi tiết đơn hàng cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 order_detail_id:
 *                   type: integer
 *                 order_id:
 *                   type: integer
 *                 product_id:
 *                   type: integer
 *                 quantity:
 *                   type: integer
 *                 price:
 *                   type: number
 *                 product_name:
 *                   type: string
 *       404:
 *         description: Không tìm thấy chi tiết đơn hàng
 */
router.route("/:id").get(oneOrder_details);

/**
 * @swagger
 * /order_details/by/{id}:
 *   get:
 *     summary: Lấy danh sách chi tiết đơn hàng theo ID đơn hàng
 *     tags: [OrderDetails]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách chi tiết đơn hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   order_detail_id:
 *                     type: integer
 *                   order_id:
 *                     type: integer
 *                   product_id:
 *                     type: integer
 *                   quantity:
 *                     type: integer
 *                   price:
 *                     type: number
 *                   product_name:
 *                     type: string
 *       404:
 *         description: Không tìm thấy chi tiết đơn hàng
 */
router.route("/by/:id").get(byOrder_details);

module.exports = router;
