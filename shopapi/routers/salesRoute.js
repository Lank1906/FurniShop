const express = require("express");
const {
    getSales,
    createSales,
    updateSales,
    deleteSales,
    oneSales,
    bySales
} = require("../controllers/salesController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Sales
 *   description: Quản lý API khuyến mãi
 */

/**
 * @swagger
 * /sales:
 *   get:
 *     summary: Lấy tất cả các khuyến mãi
 *     tags: [Sales]
 *     responses:
 *       200:
 *         description: Danh sách các khuyến mãi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   sale_id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   date_begin:
 *                     type: string
 *                     format: date
 *                   date_end:
 *                     type: string
 *                     format: date
 *                   discount:
 *                     type: number
 */
router.route("/").get(getSales);

/**
 * @swagger
 * /sales:
 *   post:
 *     summary: Tạo một khuyến mãi mới
 *     tags: [Sales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               date_begin:
 *                 type: string
 *                 format: date
 *               date_end:
 *                 type: string
 *                 format: date
 *               discount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Khuyến mãi đã được tạo
 *       400:
 *         description: Tạo khuyến mãi thất bại
 */
router.route("/").post(createSales);

/**
 * @swagger
 * /sales/{id}:
 *   put:
 *     summary: Cập nhật một khuyến mãi dựa trên ID
 *     tags: [Sales]
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
 *               title:
 *                 type: string
 *               date_begin:
 *                 type: string
 *                 format: date
 *               date_end:
 *                 type: string
 *                 format: date
 *               discount:
 *                 type: number
 *     responses:
 *       200:
 *         description: Khuyến mãi đã được cập nhật
 *       400:
 *         description: Cập nhật khuyến mãi thất bại
 */
router.route("/:id").put(updateSales);

/**
 * @swagger
 * /sales/{id}:
 *   delete:
 *     summary: Xóa một khuyến mãi dựa trên ID
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Khuyến mãi đã được xóa
 *       400:
 *         description: Xóa khuyến mãi thất bại
 */
router.route("/:id").delete(deleteSales);

/**
 * @swagger
 * /sales/{id}:
 *   get:
 *     summary: Lấy một khuyến mãi cụ thể dựa trên ID
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Khuyến mãi cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sale_id:
 *                   type: integer
 *                 title:
 *                   type: string
 *                 date_begin:
 *                   type: string
 *                   format: date
 *                 date_end:
 *                   type: string
 *                   format: date
 *                 discount:
 *                   type: number
 *       404:
 *         description: Không tìm thấy khuyến mãi
 */
router.route("/:id").get(oneSales);

/**
 * @swagger
 * /sales/by/{id}:
 *   get:
 *     summary: Tìm kiếm khuyến mãi theo tên
 *     tags: [Sales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Danh sách khuyến mãi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   sale_id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   date_begin:
 *                     type: string
 *                     format: date
 *                   date_end:
 *                     type: string
 *                     format: date
 *                   discount:
 *                     type: number
 *       404:
 *         description: Không tìm thấy khuyến mãi
 */
router.route("/by/:id").get(bySales);

module.exports = router;
