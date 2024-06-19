const express = require("express");
const {
    getPurchases,
    createPurchases,
    updatePurchases,
    deletePurchases,
    onePurchases,
    byPurchases
} = require("../controllers/purchasesController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Purchases
 *   description: Quản lý API mua hàng
 */

/**
 * @swagger
 * /purchases:
 *   get:
 *     summary: Lấy tất cả các mua hàng
 *     tags: [Purchases]
 *     responses:
 *       200:
 *         description: Danh sách các mua hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   purchase_id:
 *                     type: integer
 *                   supplier_id:
 *                     type: integer
 *                   purchase_date:
 *                     type: string
 *                     format: date
 *                   total:
 *                     type: number
 *                   supplier_name:
 *                     type: string
 */
router.route("/").get(getPurchases);

/**
 * @swagger
 * /purchases:
 *   post:
 *     summary: Tạo một mua hàng mới
 *     tags: [Purchases]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               supplier_id:
 *                 type: integer
 *               total:
 *                 type: number
 *     responses:
 *       201:
 *         description: Mua hàng đã được tạo
 *       400:
 *         description: Tạo mua hàng thất bại
 */
router.route("/").post(createPurchases);

/**
 * @swagger
 * /purchases/{id}:
 *   put:
 *     summary: Cập nhật một mua hàng dựa trên ID
 *     tags: [Purchases]
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
 *               supplier_id:
 *                 type: integer
 *               purchase_date:
 *                 type: string
 *                 format: date
 *               total:
 *                 type: number
 *     responses:
 *       200:
 *         description: Mua hàng đã được cập nhật
 *       400:
 *         description: Cập nhật mua hàng thất bại
 */
router.route("/:id").put(updatePurchases);

/**
 * @swagger
 * /purchases/{id}:
 *   delete:
 *     summary: Xóa một mua hàng dựa trên ID
 *     tags: [Purchases]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mua hàng đã được xóa
 *       400:
 *         description: Xóa mua hàng thất bại
 */
router.route("/:id").delete(deletePurchases);

/**
 * @swagger
 * /purchases/{id}:
 *   get:
 *     summary: Lấy một mua hàng cụ thể dựa trên ID
 *     tags: [Purchases]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mua hàng cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 purchase_id:
 *                   type: integer
 *                 supplier_id:
 *                   type: integer
 *                 purchase_date:
 *                   type: string
 *                   format: date
 *                 total:
 *                   type: number
 *                 supplier_name:
 *                   type: string
 *       404:
 *         description: Không tìm thấy mua hàng
 */
router.route("/:id").get(onePurchases);

/**
 * @swagger
 * /purchases/by/{id}:
 *   get:
 *     summary: Tìm kiếm mua hàng theo tên nhà cung cấp
 *     tags: [Purchases]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Danh sách mua hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   purchase_id:
 *                     type: integer
 *                   supplier_id:
 *                     type: integer
 *                   purchase_date:
 *                     type: string
 *                     format: date
 *                   total:
 *                     type: number
 *                   supplier_name:
 *                     type: string
 *       404:
 *         description: Không tìm thấy mua hàng
 */
router.route("/by/:id").get(byPurchases);

module.exports = router;
