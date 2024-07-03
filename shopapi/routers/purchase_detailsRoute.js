const express = require("express");
const {
    getPurchase_details,
    createPurchase_details,
    updatePurchase_details,
    deletePurchase_details,
    onePurchase_details,
    byPurchase_details
} = require("../controllers/purchase_detailsController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: PurchaseDetails
 *   description: Quản lý API chi tiết mua hàng
 */

/**
 * @swagger
 * /purchase_details:
 *   get:
 *     summary: Lấy tất cả các chi tiết mua hàng
 *     tags: [PurchaseDetails]
 *     responses:
 *       200:
 *         description: Danh sách các chi tiết mua hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   purchase_detail_id:
 *                     type: integer
 *                   purchase_id:
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
router.route("/").get(getPurchase_details);

/**
 * @swagger
 * /purchase_details:
 *   post:
 *     summary: Tạo một chi tiết mua hàng mới
 *     tags: [PurchaseDetails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               purchase_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Chi tiết mua hàng đã được tạo
 *       400:
 *         description: Tạo chi tiết mua hàng thất bại
 */
router.route("/").post(createPurchase_details);

/**
 * @swagger
 * /purchase_details/{id}:
 *   put:
 *     summary: Cập nhật một chi tiết mua hàng dựa trên ID
 *     tags: [PurchaseDetails]
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
 *               purchase_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Chi tiết mua hàng đã được cập nhật
 *       400:
 *         description: Cập nhật chi tiết mua hàng thất bại
 */
router.route("/:id").put(updatePurchase_details);

/**
 * @swagger
 * /purchase_details/{id}:
 *   delete:
 *     summary: Xóa một chi tiết mua hàng dựa trên ID
 *     tags: [PurchaseDetails]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chi tiết mua hàng đã được xóa
 *       400:
 *         description: Xóa chi tiết mua hàng thất bại
 */
router.route("/:id").delete(deletePurchase_details);

/**
 * @swagger
 * /purchase_details/{id}:
 *   get:
 *     summary: Lấy một chi tiết mua hàng cụ thể dựa trên ID
 *     tags: [PurchaseDetails]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Chi tiết mua hàng cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 purchase_detail_id:
 *                   type: integer
 *                 purchase_id:
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
 *         description: Không tìm thấy chi tiết mua hàng
 */
router.route("/:id").get(onePurchase_details);

/**
 * @swagger
 * /purchase_details/by/{id}:
 *   get:
 *     summary: Lấy danh sách chi tiết mua hàng theo ID mua hàng
 *     tags: [PurchaseDetails]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách chi tiết mua hàng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   purchase_detail_id:
 *                     type: integer
 *                   purchase_id:
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
 *         description: Không tìm thấy chi tiết mua hàng
 */
router.route("/by/:id").get(byPurchase_details);

module.exports = router;
