const connection=require("./connect.js");

const createcategories = (categories) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO categories(categories.name,categories.image) VALUES(?,?)";
        connection.query(sql, [categories.name,categories.image], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating categories:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getcategories = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT categories.category_id,categories.name,categories.image FROM categories ';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching categories:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updatecategories = (categories,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE categories SET categories.name=?,categories.image=? WHERE categories.category_id = ?';
        connection.query(sql, [categories.name,categories.image, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating categories:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deletecategories = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM categories WHERE categories.category_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const onecategories = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT categories.category_id,categories.name,categories.image FROM categories  WHERE categories.category_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching categories:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const bycategories = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT categories.category_id,categories.name,categories.image FROM categories  WHERE categories.name LIKE ?';
        connection.query(sql, ['%'+id+'%'], (err, result) => {
            if (err) {
                console.error('Error fetching categories:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createcategories, getcategories, updatecategories, deletecategories, onecategories, bycategories };
    