const connection=require("./connect.js");

const createpurchases = (purchases) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO purchases(purchases.supplier_id,purchases.total) VALUES(?,?)";
        connection.query(sql, [purchases.supplier_id,purchases.total], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating purchases:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getpurchases = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT purchases.purchase_id,purchases.supplier_id,purchases.purchase_date,purchases.total,supplier_name FROM purchases left join suppliers on suppliers.supplier_id = purchases.supplier_id';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching purchases:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updatepurchases = (purchases,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE purchases SET purchases.supplier_id=?,purchases.purchase_date=?,purchases.total=? WHERE purchases.purchase_id = ?';
        connection.query(sql, [purchases.supplier_id,purchases.purchase_date,purchases.total, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating purchases:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deletepurchases = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM purchases WHERE purchases.purchase_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const onepurchases = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT purchases.purchase_id,purchases.supplier_id,purchases.purchase_date,purchases.total,supplier_name FROM purchases left join suppliers on suppliers.supplier_id = purchases.supplier_id WHERE purchases.purchase_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching purchases:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const bypurchases = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT purchases.purchase_id,purchases.supplier_id,purchases.purchase_date,purchases.total,supplier_name FROM purchases left join suppliers on suppliers.supplier_id = purchases.supplier_id WHERE purchases.name LIKE ?';
        connection.query(sql, ['%'+id+'%'], (err, result) => {
            if (err) {
                console.error('Error fetching purchases:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createpurchases, getpurchases, updatepurchases, deletepurchases, onepurchases, bypurchases };
    