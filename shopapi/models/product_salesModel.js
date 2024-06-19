const connection=require("./connect.js");

const createproduct_sales = (product_sales) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO product_sales(product_sales.product_id,product_sales.sale_id) VALUES(?,?)";
        connection.query(sql, [product_sales.product_id,product_sales.sale_id], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating product_sales:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getproduct_sales = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT product_sales.product_sale_id,product_sales.product_id,product_sales.sale_id,product_name FROM product_sales left join products on products.product_id = product_sales.product_id';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching product_sales:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updateproduct_sales = (product_sales,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE product_sales SET product_sales.product_id=?,product_sales.sale_id=? WHERE product_sales.product_sale_id = ?';
        connection.query(sql, [product_sales.product_id,product_sales.sale_id, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating product_sales:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deleteproduct_sales = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM product_sales WHERE product_sales.product_sale_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const oneproduct_sales = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT product_sales.product_sale_id,product_sales.product_id,product_sales.sale_id,product_name FROM product_sales left join products on products.product_id = product_sales.product_id WHERE product_sales.product_sale_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching product_sales:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const byproduct_sales = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT product_sales.product_sale_id,product_sales.product_id,product_sales.sale_id,product_name FROM product_sales left join products on products.product_id = product_sales.product_id WHERE product_sales.sale_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching product_sales:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createproduct_sales, getproduct_sales, updateproduct_sales, deleteproduct_sales, oneproduct_sales, byproduct_sales };
    