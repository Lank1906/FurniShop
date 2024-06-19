const connection=require("./connect.js");

const createproduct_reviews = (product_reviews) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO product_reviews(product_reviews.product_id,product_reviews.customer_id,product_reviews.rating,product_reviews.comment,product_reviews.review_date,product_reviews.image) VALUES(?,?,?,?,?,?)";
        connection.query(sql, [product_reviews.product_id,product_reviews.customer_id,product_reviews.rating,product_reviews.comment,product_reviews.review_date,product_reviews.image], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating product_reviews:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getproduct_reviews = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT product_reviews.review_id,product_reviews.product_id,product_reviews.customer_id,product_reviews.rating,product_reviews.comment,product_reviews.review_date,product_reviews.image FROM product_reviews';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching product_reviews:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updateproduct_reviews = (product_reviews,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE product_reviews SET product_reviews.product_id=?,product_reviews.customer_id=?,product_reviews.rating=?,product_reviews.comment=?,product_reviews.review_date=?,product_reviews.image=? WHERE product_reviews.review_id = ?';
        connection.query(sql, [product_reviews.product_id,product_reviews.customer_id,product_reviews.rating,product_reviews.comment,product_reviews.review_date,product_reviews.image, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating product_reviews:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deleteproduct_reviews = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM product_reviews WHERE product_reviews.review_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const oneproduct_reviews = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT product_reviews.review_id,product_reviews.product_id,product_reviews.customer_id,product_reviews.rating,product_reviews.comment,product_reviews.review_date,product_reviews.image FROM product_reviews WHERE product_reviews.review_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching product_reviews:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const byproduct_reviews = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT product_reviews.review_id,product_reviews.product_id,product_reviews.customer_id,product_reviews.rating,product_reviews.comment,product_reviews.review_date,product_reviews.image FROM product_reviews WHERE product_reviews.customer_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching product_reviews:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createproduct_reviews, getproduct_reviews, updateproduct_reviews, deleteproduct_reviews, oneproduct_reviews, byproduct_reviews };
    