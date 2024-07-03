const express = require("express");
const {
    getProducts,
    createProducts,
    updateProducts,
    deleteProducts,
    oneProducts,
    byProducts
} = require("../controllers/productsController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Quản lý API sản phẩm
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lấy tất cả các sản phẩm
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Danh sách các sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   product_id:
 *                     type: integer
 *                   category_id:
 *                     type: integer
 *                   room_id:
 *                     type: integer
 *                   product_name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                   stock:
 *                     type: integer
 *                   image_urls:
 *                     type: string
 *                   image_url:
 *                     type: string
 *                   color:
 *                     type: string
 *                   size:
 *                     type: string
 *                   detail_description:
 *                     type: string
 *                   restock_threshold:
 *                     type: integer
 */
router.route("/").get(getProducts);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Tạo một sản phẩm mới
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               category_id:
 *                 type: integer
 *               room_id:
 *                 type: integer
 *               product_name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *               image_urls:
 *                 type: string
 *               image_url:
 *                 type: string
 *               color:
 *                 type: string
 *               size:
 *                 type: string
 *               detail_description:
 *                 type: string
 *               restock_threshold:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Sản phẩm đã được tạo
 *       400:
 *         description: Tạo sản phẩm thất bại
 */
router.route("/").post(createProducts);

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Cập nhật một sản phẩm dựa trên ID
 *     tags: [Products]
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
 *               category_id:
 *                 type: integer
 *               room_id:
 *                 type: integer
 *               product_name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *               image_urls:
 *                 type: string
 *               image_url:
 *                 type: string
 *               color:
 *                 type: string
 *               size:
 *                 type: string
 *               detail_description:
 *                 type: string
 *               restock_threshold:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Sản phẩm đã được cập nhật
 *       400:
 *         description: Cập nhật sản phẩm thất bại
 */
router.route("/:id").put(updateProducts);

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Xóa một sản phẩm dựa trên ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sản phẩm đã được xóa
 *       400:
 *         description: Xóa sản phẩm thất bại
 */
router.route("/:id").delete(deleteProducts);

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Lấy một sản phẩm cụ thể dựa trên ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sản phẩm cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 product_id:
 *                   type: integer
 *                 category_id:
 *                   type: integer
 *                 room_id:
 *                   type: integer
 *                 product_name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 price:
 *                   type: number
 *                 stock:
 *                   type: integer
 *                 image_urls:
 *                   type: string
 *                 image_url:
 *                   type: string
 *                 color:
 *                   type: string
 *                 size:
 *                   type: string
 *                 detail_description:
 *                   type: string
 *                 restock_threshold:
 *                   type: integer
 *       404:
 *         description: Không tìm thấy sản phẩm
 */
router.route("/:id").get(oneProducts);

/**
 * @swagger
 * /products/by/{id}:
 *   get:
 *     summary: Tìm kiếm sản phẩm theo tên
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Danh sách sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   product_id:
 *                     type: integer
 *                   category_id:
 *                     type: integer
 *                   room_id:
 *                     type: integer
 *                   product_name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   price:
 *                     type: number
 *                   stock:
 *                     type: integer
 *                   image_urls:
 *                     type: string
 *                   image_url:
 *                     type: string
 *                   color:
 *                     type: string
 *                   size:
 *                     type: string
 *                   detail_description:
 *                     type: string
 *                   restock_threshold:
 *                     type: integer
 *       404:
 *         description: Không tìm thấy sản phẩm
 */
router.route("/by/:id").get(byProducts);

module.exports = router;
