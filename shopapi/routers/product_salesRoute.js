const express = require("express");
const {
    getProduct_sales,
    createProduct_sales,
    updateProduct_sales,
    deleteProduct_sales,
    oneProduct_sales,
    byProduct_sales
} = require("../controllers/product_salesController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ProductSales
 *   description: Quản lý API bán hàng sản phẩm
 */

/**
 * @swagger
 * /product_sales:
 *   get:
 *     summary: Lấy tất cả các sản phẩm bán
 *     tags: [ProductSales]
 *     responses:
 *       200:
 *         description: Danh sách các sản phẩm bán
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   product_sale_id:
 *                     type: integer
 *                   product_id:
 *                     type: integer
 *                   sale_id:
 *                     type: integer
 *                   product_name:
 *                     type: string
 */
router.route("/").get(getProduct_sales);

/**
 * @swagger
 * /product_sales:
 *   post:
 *     summary: Tạo một sản phẩm bán mới
 *     tags: [ProductSales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *               sale_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Sản phẩm bán đã được tạo
 *       400:
 *         description: Tạo sản phẩm bán thất bại
 */
router.route("/").post(createProduct_sales);

/**
 * @swagger
 * /product_sales/{id}:
 *   put:
 *     summary: Cập nhật một sản phẩm bán dựa trên ID
 *     tags: [ProductSales]
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
 *               product_id:
 *                 type: integer
 *               sale_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Sản phẩm bán đã được cập nhật
 *       400:
 *         description: Cập nhật sản phẩm bán thất bại
 */
router.route("/:id").put(updateProduct_sales);

/**
 * @swagger
 * /product_sales/{id}:
 *   delete:
 *     summary: Xóa một sản phẩm bán dựa trên ID
 *     tags: [ProductSales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sản phẩm bán đã được xóa
 *       400:
 *         description: Xóa sản phẩm bán thất bại
 */
router.route("/:id").delete(deleteProduct_sales);

/**
 * @swagger
 * /product_sales/{id}:
 *   get:
 *     summary: Lấy một sản phẩm bán cụ thể dựa trên ID
 *     tags: [ProductSales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sản phẩm bán cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product_sale_id:
 *                   type: integer
 *                 product_id:
 *                   type: integer
 *                 sale_id:
 *                   type: integer
 *                 product_name:
 *                   type: string
 *       404:
 *         description: Không tìm thấy sản phẩm bán
 */
router.route("/:id").get(oneProduct_sales);

/**
 * @swagger
 * /product_sales/by/{id}:
 *   get:
 *     summary: Lấy danh sách sản phẩm bán theo ID sản phẩm
 *     tags: [ProductSales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm bán
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   product_sale_id:
 *                     type: integer
 *                   product_id:
 *                     type: integer
 *                   sale_id:
 *                     type: integer
 *                   product_name:
 *                     type: string
 *       404:
 *         description: Không tìm thấy sản phẩm bán
 */
router.route("/by/:id").get(byProduct_sales);

module.exports = router;
