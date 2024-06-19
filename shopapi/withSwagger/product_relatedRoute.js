const express = require("express");
const {
    getProduct_related,
    createProduct_related,
    updateProduct_related,
    deleteProduct_related,
    oneProduct_related,
    byProduct_related
} = require("../controllers/product_relatedController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ProductRelated
 *   description: Quản lý API sản phẩm liên quan
 */

/**
 * @swagger
 * /product_related:
 *   get:
 *     summary: Lấy tất cả các sản phẩm liên quan
 *     tags: [ProductRelated]
 *     responses:
 *       200:
 *         description: Danh sách các sản phẩm liên quan
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   product_id:
 *                     type: integer
 *                   product_related_id:
 *                     type: integer
 *                   product_name:
 *                     type: string
 */
router.route("/").get(getProduct_related);

/**
 * @swagger
 * /product_related:
 *   post:
 *     summary: Tạo một sản phẩm liên quan mới
 *     tags: [ProductRelated]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *               product_related_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Sản phẩm liên quan đã được tạo
 *       400:
 *         description: Tạo sản phẩm liên quan thất bại
 */
router.route("/").post(createProduct_related);

/**
 * @swagger
 * /product_related/{id}:
 *   put:
 *     summary: Cập nhật một sản phẩm liên quan dựa trên ID
 *     tags: [ProductRelated]
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
 *               product_related_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Sản phẩm liên quan đã được cập nhật
 *       400:
 *         description: Cập nhật sản phẩm liên quan thất bại
 */
router.route("/:id").put(updateProduct_related);

/**
 * @swagger
 * /product_related/{id}:
 *   delete:
 *     summary: Xóa một sản phẩm liên quan dựa trên ID
 *     tags: [ProductRelated]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sản phẩm liên quan đã được xóa
 *       400:
 *         description: Xóa sản phẩm liên quan thất bại
 */
router.route("/:id").delete(deleteProduct_related);

/**
 * @swagger
 * /product_related/{id}:
 *   get:
 *     summary: Lấy một sản phẩm liên quan cụ thể dựa trên ID
 *     tags: [ProductRelated]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sản phẩm liên quan cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product_id:
 *                   type: integer
 *                 product_related_id:
 *                   type: integer
 *                 product_name:
 *                   type: string
 *       404:
 *         description: Không tìm thấy sản phẩm liên quan
 */
router.route("/:id").get(oneProduct_related);

/**
 * @swagger
 * /product_related/by/{id}:
 *   get:
 *     summary: Lấy danh sách sản phẩm liên quan theo ID sản phẩm
 *     tags: [ProductRelated]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm liên quan
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   product_id:
 *                     type: integer
 *                   product_related_id:
 *                     type: integer
 *                   product_name:
 *                     type: string
 *       404:
 *         description: Không tìm thấy sản phẩm liên quan
 */
router.route("/by/:id").get(byProduct_related);

module.exports = router;
