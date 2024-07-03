const express = require("express");
const {
    getSuppliers,
    createSuppliers,
    updateSuppliers,
    deleteSuppliers,
    oneSuppliers,
    bySuppliers
} = require("../controllers/suppliersController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: Quản lý API nhà cung cấp
 */

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Lấy tất cả các nhà cung cấp
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Danh sách các nhà cung cấp
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   supplier_id:
 *                     type: integer
 *                   supplier_name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 */
router.route("/").get(getSuppliers);

/**
 * @swagger
 * /suppliers:
 *   post:
 *     summary: Tạo một nhà cung cấp mới
 *     tags: [Suppliers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               supplier_name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Nhà cung cấp đã được tạo
 *       400:
 *         description: Tạo nhà cung cấp thất bại
 */
router.route("/").post(createSuppliers);

/**
 * @swagger
 * /suppliers/{id}:
 *   put:
 *     summary: Cập nhật một nhà cung cấp dựa trên ID
 *     tags: [Suppliers]
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
 *               supplier_name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Nhà cung cấp đã được cập nhật
 *       400:
 *         description: Cập nhật nhà cung cấp thất bại
 */
router.route("/:id").put(updateSuppliers);

/**
 * @swagger
 * /suppliers/{id}:
 *   delete:
 *     summary: Xóa một nhà cung cấp dựa trên ID
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Nhà cung cấp đã được xóa
 *       400:
 *         description: Xóa nhà cung cấp thất bại
 */
router.route("/:id").delete(deleteSuppliers);

/**
 * @swagger
 * /suppliers/{id}:
 *   get:
 *     summary: Lấy một nhà cung cấp cụ thể dựa trên ID
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Nhà cung cấp cụ thể
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 supplier_id:
 *                   type: integer
 *                 supplier_name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 phone:
 *                   type: string
 *       404:
 *         description: Không tìm thấy nhà cung cấp
 */
router.route("/:id").get(oneSuppliers);

/**
 * @swagger
 * /suppliers/by/{id}:
 *   get:
 *     summary: Tìm kiếm nhà cung cấp theo tên
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Danh sách nhà cung cấp
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   supplier_id:
 *                     type: integer
 *                   supplier_name:
 *                     type: string
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *       404:
 *         description: Không tìm thấy nhà cung cấp
 */
router.route("/by/:id").get(bySuppliers);

module.exports = router;
