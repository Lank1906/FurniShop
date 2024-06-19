const express = require("express");
const {
    getProduct_reviews,
    createProduct_reviews,
    updateProduct_reviews,
    deleteProduct_reviews,
    oneProduct_reviews,
    byProduct_reviews
} = require("../controllers/product_reviewsController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: ProductReviews
 *   description: Quản lý API đánh giá sản phẩm
 */

/**
 * @swagger
 * /product_reviews:
 *   get:
 *     summary: Lấy tất cả các đánh giá sản phẩm
 *     tags: [ProductReviews]
 *     responses:
 *       200:
 *         description: Danh sách các đánh giá sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   review_id:
 *                     type: integer
 *                   product_id:
 *                     type: integer
 *                   customer_id:
 *                     type: integer
 *                   rating:
 *                     type: integer
 *                   comment:
 *                     type: string
 *                   review_date:
 *                     type: string
 *                     format: date
 *                   image:
 *                     type: string
 */
router.route("/").get(getProduct_reviews);

/**
 * @swagger
 * /product_reviews:
 *   post:
 *     summary: Tạo một đánh giá sản phẩm mới
 *     tags: [ProductReviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product_id:
 *                 type: integer
 *               customer_id:
 *                 type: integer
 *               rating:
 *                 type: integer
 *               comment:
 *                 type: string
 *               review_date:
 *                 type: string
 *                 format: date
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Đánh giá sản phẩm đã được tạo
 *       400:
 *         description: Tạo đánh giá sản phẩm thất bại
 */
router.route("/").post(createProduct_reviews);

/**
 * @swagger
 * /product_reviews/{id}:
 *   put:
 *     summary: Cập nhật một đánh giá sản phẩm dựa trên ID
 *     tags: [ProductReviews]
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
 *               customer_id:
 *                 type: integer
 *               rating:
 *                 type: integer
 *               comment:
 *                 type: string
 *               review_date:
 *                 type: string
 *                 format: date
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Đánh giá sản phẩm đã được cập nhật
 *       400:
 *         description: Cập nhật đánh giá sản phẩm thất bại
 */
router.route("/:id").put(updateProduct_reviews);

/**
 * @swagger
 * /product_reviews/{id}:
 *   delete:
 *     summary: Xóa một đánh giá sản phẩm dựa trên ID
 *     tags: [ProductReviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Đánh giá sản phẩm đã được xóa
 *       400:
 *         description: Xóa đánh giá sản phẩm thất bại
 */
router.route("/:id").delete(deleteProduct_reviews);

/**
 * @swagger
 * /product_reviews/{id}:
 *   get:
 *     summary: Lấy một đánh giá sản phẩm cụ thể dựa trên ID
 *     tags: [ProductReviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Đánh giá sản phẩm cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 review_id:
 *                   type: integer
 *                 product_id:
 *                   type: integer
 *                 customer_id:
 *                   type: integer
 *                 rating:
 *                   type: integer
 *                 comment:
 *                   type: string
 *                 review_date:
 *                   type: string
 *                   format: date
 *                 image:
 *                   type: string
 *       404:
 *         description: Không tìm thấy đánh giá sản phẩm
 */
router.route("/:id").get(oneProduct_reviews);

/**
 * @swagger
 * /product_reviews/by/{id}:
 *   get:
 *     summary: Lấy danh sách đánh giá sản phẩm theo ID khách hàng
 *     tags: [ProductReviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh sách đánh giá sản phẩm
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   review_id:
 *                     type: integer
 *                   product_id:
 *                     type: integer
 *                   customer_id:
 *                     type: integer
 *                   rating:
 *                     type: integer
 *                   comment:
 *                     type: string
 *                   review_date:
 *                     type: string
 *                     format: date
 *                   image:
 *                     type: string
 *       404:
 *         description: Không tìm thấy đánh giá sản phẩm
 */
router.route("/by/:id").get(byProduct_reviews);

module.exports = router;
