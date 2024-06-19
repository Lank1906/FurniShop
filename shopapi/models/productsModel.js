const connection=require("./connect.js");

const createproducts = (products) => {
    return new Promise((resolve,reject)=>{
        const sql = "INSERT INTO products(products.category_id,products.room_id,products.product_name,products.description,products.price,products.stock,products.image_urls,products.image_url,products.color,products.size,products.detail_description,products.restock_threshold) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)";
        connection.query(sql, [products.category_id,products.room_id,products.product_name,products.description,products.price,products.stock,products.image_urls,products.image_url,products.color,products.size,products.detail_description,products.restock_threshold], (err, result) => {
            if (err || result.insertId==0) {
                console.error('Error creating products:', err);
                reject({message:"failed"});
            }
            resolve(result.insertId);
        });
    });
};

// Đọc dữ liệu
const getproducts = () => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT products.product_id,products.category_id,products.room_id,products.product_name,products.description,products.price,products.stock,products.image_urls,products.image_url,products.color,products.size,products.detail_description,products.restock_threshold,name FROM products left join categories on categories.category_id = products.category_id';
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error fetching products:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

// Cập nhật dữ liệu
const updateproducts = (products,id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'UPDATE products SET products.category_id=?,products.room_id=?,products.product_name=?,products.description=?,products.price=?,products.stock=?,products.image_urls=?,products.image_url=?,products.color=?,products.size=?,products.detail_description=?,products.restock_threshold=? WHERE products.product_id = ?';
        connection.query(sql, [products.category_id,products.room_id,products.product_name,products.description,products.price,products.stock,products.image_urls,products.image_url,products.color,products.size,products.detail_description,products.restock_threshold, id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error updating products:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

// Xóa dữ liệu
const deleteproducts = (id) => {
    return new Promise((resolve,reject)=>{
        const sql = 'DELETE FROM products WHERE products.product_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err || result.affectedRows==0) {
                console.error('Error deleting:', err);
                reject({message:"failed"});
            }
            resolve({message:"ok"});
        });
    });
};

const oneproducts = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT products.product_id,products.category_id,products.room_id,products.product_name,products.description,products.price,products.stock,products.image_urls,products.image_url,products.color,products.size,products.detail_description,products.restock_threshold FROM products left join categories on categories.category_id = products.category_id WHERE products.product_id = ?';
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('Error fetching products:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const byproducts = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT products.product_id,products.category_id,products.room_id,products.product_name,products.description,products.price,products.stock,products.image_urls,products.image_url,products.color,products.size,products.detail_description,products.restock_threshold FROM products left join categories on categories.category_id = products.category_id WHERE products.name LIKE ?';
        connection.query(sql, ['%'+id+'%'], (err, result) => {
            if (err) {
                console.error('Error fetching products:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

module.exports = { createproducts, getproducts, updateproducts, deleteproducts, oneproducts, byproducts };
    