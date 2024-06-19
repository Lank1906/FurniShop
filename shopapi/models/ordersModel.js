const connection=require("./connect.js");

const createorders = (orders) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO orders(orders.customer_id,orders.order_date,orders.total) VALUES(?,?,?)";
        connection.query(sql, [orders.customer_id,orders.order_date,orders.total], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating orders:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getorders = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT orders.order_id,orders.customer_id,orders.order_date,orders.total,customer_name FROM orders left join customers on customers.customer_id = orders.customer_id';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching orders:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updateorders = (orders,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE orders SET orders.customer_id=?,orders.order_date=?,orders.total=? WHERE orders.order_id = ?';
        connection.query(sql, [orders.customer_id,orders.order_date,orders.total, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating orders:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deleteorders = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM orders WHERE orders.order_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const oneorders = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT orders.order_id,orders.customer_id,orders.order_date,orders.total,customer_name FROM orders left join customers on customers.customer_id = orders.customer_id WHERE orders.order_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching orders:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const byorders = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT orders.order_id,orders.customer_id,orders.order_date,orders.total,customer_name FROM orders left join customers on customers.customer_id = orders.customer_id WHERE customer_name LIKE ?';
        connection.query(sql, ['%'+id+'%'], (err, result) => {
            if (err) {
                console.error('Error fetching orders:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createorders, getorders, updateorders, deleteorders, oneorders, byorders };
    