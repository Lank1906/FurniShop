const express = require("express");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Author
 *   description: API về tác giả
 */

/**
 * @swagger
 * /lank:
 *   get:
 *     summary: Thông tin về tác giả
 *     tags: [Author]
 *     responses:
 *       200:
 *         description: Thông tin về tác giả
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Title:
 *                   type: string
 *                   example: Created by Lank
 */
router.route("/").get(async (req, res) => {
    res.status(200).json({ Title: "Created by Lank" });
});

module.exports = router;
