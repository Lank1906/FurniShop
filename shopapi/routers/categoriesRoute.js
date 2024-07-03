const express = require("express");
const {
    getCategories,
    createCategories,
    updateCategories,
    deleteCategories,
    oneCategories,
    byCategories
} = require("../controllers/categoriesController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Danh mục quản lý API
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Lấy tất cả các danh mục
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: Danh sách các danh mục
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   category_id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   image:
 *                     type: string
 */
router.route("/").get(getCategories);

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Tạo một danh mục mới
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       201:
 *         description: Danh mục đã được tạo
 *       400:
 *         description: Tạo danh mục thất bại
 */
router.route("/").post(createCategories);

/**
 * @swagger
 * /categories/{id}:
 *   put:
 *     summary: Cập nhật một danh mục dựa trên ID
 *     tags: [Category]
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
 *               name:
 *                 type: string
 *               image:
 *                 type: string
 *     responses:
 *       200:
 *         description: Danh mục đã được cập nhật
 *       400:
 *         description: Cập nhật danh mục thất bại
 */
router.route("/:id").put(updateCategories);

/**
 * @swagger
 * /categories/{id}:
 *   delete:
 *     summary: Xóa một danh mục dựa trên ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh mục đã được xóa
 *       400:
 *         description: Xóa danh mục thất bại
 */
router.route("/:id").delete(deleteCategories);

/**
 * @swagger
 * /categories/{id}:
 *   get:
 *     summary: Lấy một danh mục cụ thể dựa trên ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Danh mục cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 category_id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 image:
 *                   type: string
 *       404:
 *         description: Không tìm thấy danh mục
 */
router.route("/:id").get(oneCategories);

/**
 * @swagger
 * /categories/by/{name}:
 *   get:
 *     summary: Tìm kiếm danh mục theo tên
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Danh mục phù hợp
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   category_id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   image:
 *                     type: string
 *       404:
 *         description: Không tìm thấy danh mục
 */
router.route("/by/:name").get(byCategories);

module.exports = router;
