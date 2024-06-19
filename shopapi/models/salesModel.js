const connection=require("./connect.js");

const createsales = (sales) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO sales(sales.title,sales.date_begin,sales.date_end,discount) VALUES(?,?,?,?)";
        connection.query(sql, [sales.title,sales.date_begin,sales.date_end,sales.discount], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating sales:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getsales = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT sales.sale_id,sales.title,sales.date_begin,sales.date_end,discount FROM sales ';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching sales:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updatesales = (sales,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE sales SET sales.title=?,sales.date_begin=?,sales.date_end=?,discount=? WHERE sales.sale_id = ?';
        connection.query(sql, [sales.title,sales.date_begin,sales.date_end,sales.discount, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating sales:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deletesales = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM sales WHERE sales.sale_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const onesales = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT sales.sale_id,sales.title,sales.date_begin,sales.date_end,sales.discount FROM sales  WHERE sales.sale_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching sales:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const bysales = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT sales.sale_id,sales.title,sales.date_begin,sales.date_end,sales.discount FROM sales  WHERE sales.name LIKE ?';
        connection.query(sql, ['%'+id+'%'], (err, result) => {
            if (err) {
                console.error('Error fetching sales:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createsales, getsales, updatesales, deletesales, onesales, bysales };
    