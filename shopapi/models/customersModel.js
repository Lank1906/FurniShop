const connection=require("./connect.js");

const createcustomers = (customers) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO customers(customers.customer_name,customers.email,customers.address,customers.phone,customers.password,customers.search) VALUES(?,?,?,?,?,?)";
        connection.query(sql, [customers.customer_name,customers.email,customers.address,customers.phone,customers.password,customers.search], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating customers:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getcustomers = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT customers.customer_id,customers.customer_name,customers.email,customers.address,customers.phone,customers.password,customers.search FROM customers ';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching customers:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updatecustomers = (customers,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE customers SET customers.customer_name=?,customers.email=?,customers.address=?,customers.phone=?,customers.password=?,customers.search=? WHERE customers.customer_id = ?';
        connection.query(sql, [customers.customer_name,customers.email,customers.address,customers.phone,customers.password,customers.search, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating customers:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deletecustomers = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM customers WHERE customers.customer_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const onecustomers = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT customers.customer_id,customers.customer_name,customers.email,customers.address,customers.phone,customers.password,customers.search FROM customers  WHERE customers.customer_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching customers:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const bycustomers = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT customers.customer_id,customers.customer_name,customers.email,customers.address,customers.phone,customers.password,customers.search FROM customers  WHERE customers.name LIKE ?';
        connection.query(sql, ['%'+id+'%'], (err, result) => {
            if (err) {
                console.error('Error fetching customers:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createcustomers, getcustomers, updatecustomers, deletecustomers, onecustomers, bycustomers };
    