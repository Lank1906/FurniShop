const connection=require("./connect.js");

const createorder_details = (order_details) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO order_details(order_details.order_id,order_details.product_id,order_details.quantity,order_details.price) VALUES(?,?,?,?)";
        connection.query(sql, [order_details.order_id,order_details.product_id,order_details.quantity,order_details.price], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating order_details:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getorder_details = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT order_details.order_detail_id,order_details.order_id,order_details.product_id,order_details.quantity,order_details.price,product_name FROM order_details left join products on order_details.product_id = products.product_id';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching order_details:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updateorder_details = (order_details,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE order_details SET order_details.order_id=?,order_details.product_id=?,order_details.quantity=?,order_details.price=? WHERE order_details.order_detail_id = ?';
        connection.query(sql, [order_details.order_id,order_details.product_id,order_details.quantity,order_details.price, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating order_details:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deleteorder_details = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM order_details WHERE order_details.order_detail_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const oneorder_details = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT order_details.order_detail_id,order_details.order_id,order_details.product_id,order_details.quantity,order_details.price,product_name FROM order_details left join products on order_details.product_id = products.product_id WHERE order_details.order_detail_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching order_details:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const byorder_details = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT order_details.order_detail_id,order_details.order_id,order_details.product_id,order_details.quantity,order_details.price,product_name FROM order_details left join products on order_details.product_id = products.product_id WHERE order_details.order_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching order_details:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createorder_details, getorder_details, updateorder_details, deleteorder_details, oneorder_details, byorder_details };
    