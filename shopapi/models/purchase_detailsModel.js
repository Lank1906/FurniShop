const connection=require("./connect.js");

const createpurchase_details = (purchase_details) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO purchase_details(purchase_details.purchase_id,purchase_details.product_id,purchase_details.quantity,purchase_details.price) VALUES(?,?,?,?)";
        connection.query(sql, [purchase_details.purchase_id,purchase_details.product_id,purchase_details.quantity,purchase_details.price], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating purchase_details:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getpurchase_details = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT purchase_details.purchase_detail_id,purchase_details.purchase_id,purchase_details.product_id,purchase_details.quantity,purchase_details.price,product_name FROM purchase_details left join products on products.product_id = purchase_details.product_id';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching purchase_details:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updatepurchase_details = (purchase_details,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE purchase_details SET purchase_details.purchase_id=?,purchase_details.product_id=?,purchase_details.quantity=?,purchase_details.price=? WHERE purchase_details.purchase_detail_id = ?';
        connection.query(sql, [purchase_details.purchase_id,purchase_details.product_id,purchase_details.quantity,purchase_details.price, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating purchase_details:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deletepurchase_details = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM purchase_details WHERE purchase_details.purchase_detail_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const onepurchase_details = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT purchase_details.purchase_detail_id,purchase_details.purchase_id,purchase_details.product_id,purchase_details.quantity,purchase_details.price,product_name FROM purchase_details left join products on products.product_id = purchase_details.product_id WHERE purchase_details.purchase_detail_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching purchase_details:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const bypurchase_details = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT purchase_details.purchase_detail_id,purchase_details.purchase_id,purchase_details.product_id,purchase_details.quantity,purchase_details.price,product_name FROM purchase_details left join products on products.product_id = purchase_details.product_id WHERE purchase_details.purchase_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching purchase_details:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createpurchase_details, getpurchase_details, updatepurchase_details, deletepurchase_details, onepurchase_details, bypurchase_details };
    