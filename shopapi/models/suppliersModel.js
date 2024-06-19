const connection=require("./connect.js");

const createsuppliers = (suppliers) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO suppliers(suppliers.supplier_name,suppliers.email,suppliers.phone) VALUES(?,?,?)";
        connection.query(sql, [suppliers.supplier_name,suppliers.email,suppliers.phone], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating suppliers:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getsuppliers = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT suppliers.supplier_id,suppliers.supplier_name,suppliers.email,suppliers.phone FROM suppliers ';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching suppliers:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updatesuppliers = (suppliers,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE suppliers SET suppliers.supplier_name=?,suppliers.email=?,suppliers.phone=? WHERE suppliers.supplier_id = ?';
        connection.query(sql, [suppliers.supplier_name,suppliers.email,suppliers.phone, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating suppliers:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deletesuppliers = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM suppliers WHERE suppliers.supplier_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const onesuppliers = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT suppliers.supplier_id,suppliers.supplier_name,suppliers.email,suppliers.phone FROM suppliers  WHERE suppliers.supplier_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching suppliers:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const bysuppliers = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT suppliers.supplier_id,suppliers.supplier_name,suppliers.email,suppliers.phone FROM suppliers  WHERE suppliers.name LIKE ?';
        connection.query(sql, ['%'+id+'%'], (err, result) => {
            if (err) {
                console.error('Error fetching suppliers:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createsuppliers, getsuppliers, updatesuppliers, deletesuppliers, onesuppliers, bysuppliers };
    