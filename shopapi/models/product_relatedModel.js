const connection=require("./connect.js");

const createproduct_related = (product_related) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO product_related(product_related.product_id,product_related.product_related_id) VALUES(?,?)";
        connection.query(sql, [product_related.product_id,product_related.product_related_id], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating product_related:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getproduct_related = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT product_related.product_id,product_related.product_related_id,product_name FROM product_related left join products on products.product_id = product_related.product_related_id';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching product_related:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updateproduct_related = (product_related,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE product_related SET product_related.product_related_id=? WHERE product_related.product_id = ?';
        connection.query(sql, [product_related.product_related_id, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating product_related:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deleteproduct_related = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM product_related WHERE product_related.product_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const oneproduct_related = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT product_related.product_id,product_related.product_related_id,product_name FROM product_related left join products on products.product_id = product_related.product_related_id WHERE product_related.product_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching product_related:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const byproduct_related = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT product_related.product_id,product_related.product_related_id,product_name FROM product_related left join products on products.product_id = product_related.product_related_id WHERE product_related.product_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching product_related:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createproduct_related, getproduct_related, updateproduct_related, deleteproduct_related, oneproduct_related, byproduct_related };
    