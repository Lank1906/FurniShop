const connection=require("./connect.js");

const getlist = (offset) => {
    return new Promise((resolve, reject) => {
    const sql = `
    select DISTINCT products.product_id,product_name,room_id,description,price,stock,image_url,
	if((Month(now()) BETWEEN Month(date_begin) and Month(date_end)) and (Day(now()) BETWEEN Day(date_begin) and Day(date_end)),discount,null) as discount
    from products 
    left join product_sales on products.product_id=product_sales.product_id 
    left join sales on sales.sale_id = product_sales.sale_id 
    limit 20 OFFSET `+offset;
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        reject({message:"failed"});
      } else {
        resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
      }
    });
  });
};

const getdetail = (id) => {
    return new Promise((resolve, reject) => {
    const sql = `
    select DISTINCT products.product_id,product_name,room_id,description,price,stock,image_url,image_urls,color,size,detail_description,
		if((Month(now()) BETWEEN Month(date_begin) and Month(date_end)) 
           and (Day(now()) BETWEEN Day(date_begin) and Day(date_end)),discount,null) 
           as discount
    from products 
    left join product_sales on products.product_id=product_sales.product_id 
    left join sales on sales.sale_id = product_sales.sale_id 
    where products.product_id=`+id;
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        reject({message:"failed"});
      } else {
        resolve(result[0]); // Chuyển đổi kết quả thành chuỗi JSON
      }
    });
  });
};

const getbuytogether = (id) => {
    return new Promise((resolve, reject) => {
    const sql = `
    select count(order_details.product_id) as tong, order_details.product_id ,product_name,room_id,description,products.price,stock,image_url
    from order_details 
    left join products on order_details.product_id=products.product_id 
    where order_id in (select order_id from order_details where product_id=${id}) 
    GROUP by product_id 
    order by tong desc
    limit 10`;
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        reject({message:"failed"});
      } else {
        resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
      }
    });
  });
};

const getrelated = (id) => {
    return new Promise((resolve, reject) => {
    const sql = `
    select DISTINCT product_related.product_id as id,products.product_id,product_name,room_id,description,price,stock,image_url,
	if((Month(now()) BETWEEN Month(date_begin) and Month(date_end)) and (Day(now()) BETWEEN Day(date_begin) and Day(date_end)),discount,null) as discount
    from product_related
    left join products on product_related.product_related_id=products.product_id
    left join product_sales on products.product_id=product_sales.product_id 
    left join sales on sales.sale_id = product_sales.sale_id 
    where product_related.product_id=${id}
    LIMIT 10`;
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        reject({message:"failed"});
      } else {
        resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
      }
    });
  });
};

const getbyroom = (room,offset) => {
    return new Promise((resolve, reject) => {
    const sql = `
    select DISTINCT products.product_id,product_name,room_id,description,price,stock,image_url,
	if((Month(now()) BETWEEN Month(date_begin) and Month(date_end)) and (Day(now()) BETWEEN Day(date_begin) and Day(date_end)),discount,null) as discount
    from products 
    left join product_sales on products.product_id=product_sales.product_id 
    left join sales on sales.sale_id = product_sales.sale_id 
    where room_id like '%${room}%'
    limit 10 offset `+offset;
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        reject({message:"failed"});
      } else {
        resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
      }
    });
  });
};

const getbycategory = (id,offset) => {
    return new Promise((resolve, reject) => {
    const sql = `
    select DISTINCT products.product_id,product_name,room_id,description,price,stock,image_url,
	if((Month(now()) BETWEEN Month(date_begin) and Month(date_end)) and (Day(now()) BETWEEN Day(date_begin) and Day(date_end)),discount,null) as discount
    from products 
    left join product_sales on products.product_id=product_sales.product_id 
    left join sales on sales.sale_id = product_sales.sale_id 
    where category_id=${id}
    limit 10 offset `+offset;
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        reject({message:"failed"});
      } else {
        resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
      }
    });
  });
};

const search = (key,offset) => {
    return new Promise((resolve, reject) => {
    const sql = `
    select DISTINCT products.product_id,product_name,room_id,description,price,stock,image_url,
	if((Month(now()) BETWEEN Month(date_begin) and Month(date_end)) and (Day(now()) BETWEEN Day(date_begin) and Day(date_end)),discount,null) as discount
    from products 
    left join product_sales on products.product_id=product_sales.product_id 
    left join sales on sales.sale_id = product_sales.sale_id 
    where product_name like '%${key}%'
    limit 10 offset `+offset;
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        reject({message:"failed"});
      } else {
        resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
      }
    });
  });
};

const createcart = (cart) => {
 return new Promise((resolve,reject)=>{
        const sql = "insert into cart(customer_id,product_id,quantity,color) values(?,?,?,?)";
        connection.query(sql, [cart.customer_id,cart.product_id,cart.quantity,cart.color], (err, result) => {
        if (err || result.insertId==0) {
            console.error('Error creating cart:', err);
            reject({message:"failed"})
        }
        resolve(result.insertId);
        });
    })
};

const updatecart = (cart,id) => {
  return new Promise((resolve,reject)=>{
      const sql = 'update cart set color=?,quantity=? where cart_id=?';
      connection.query(sql, [cart.color,cart.quantity, id], (err, result) => {
        if (err || result.affectedRows==0) {
          console.error('Error updating cart:', err);
          reject({message:"failed"});
        }
        resolve({message:"ok"});
      });
  })
};

const deletecart = (id) => {
  return new Promise((resolve,reject)=>{
      const sql = 'delete from cart where cart_id =?';
      connection.query(sql, [id], (err, result) => {
        if (err || result.affectedRows==0) {
          console.error('Error deleting:', err);
          reject({message:"failed"});
        }
        resolve({message:"ok"});
      });
  })
};

const getcart = (id) => {
    return new Promise((resolve, reject) => {
    const sql = `
    select DISTINCT cart_id,cart.product_id,product_name,price,stock,image_urls,cart.color as colororder,products.color,cart.quantity,
		if((Month(now()) BETWEEN Month(date_begin) and Month(date_end)) and (Day(now()) BETWEEN Day(date_begin) and Day(date_end)),discount,null) as discount
    from cart 
    left join products on cart.product_id=products.product_id
    left join product_sales on products.product_id=product_sales.product_id 
    left join sales on sales.sale_id = product_sales.sale_id
    where customer_id=`+id;
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

getsubcart=(ids)=>{
    return new Promise((resolve, reject) => {
    const sql = `
    select DISTINCT cart_id,cart.product_id,product_name,price,stock,image_urls,cart.color as colororder,products.color,cart.quantity,
		if((Month(now()) BETWEEN Month(date_begin) and Month(date_end)) and (Day(now()) BETWEEN Day(date_begin) and Day(date_end)),discount,null) as discount
    from cart 
    left join products on cart.product_id=products.product_id
    left join product_sales on products.product_id=product_sales.product_id 
    left join sales on sales.sale_id = product_sales.sale_id
    where cart_id in (`+ids+")";
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

const createbill=(ids)=>{
    return new Promise((resolve,reject)=>{
        const sql = "select cart.*,price from cart left join products on cart.product_id=products.product_id where cart_id in ("+ids+")";
        connection.query(sql, (err, result) => {
            if (err) {
                console.error('Error creating orders:', err);
                reject({message:"failed jj"});
            }
            resolve(result);
        });
    }).then(listcart=>{
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO orders (customer_id, total) VALUES (?, ?)";
            connection.query(sql, [listcart[0].customer_id, 1500], (err, result) => {
                if (err) {
                    console.error('Error creating order:', err);
                    reject({ message: "Failed to create order" });
                } else {
                    listcart[0].order_id = result.insertId;
                    resolve(listcart);
                }
            });
        });
    }).then(listcart=>{
        return new Promise((resolve,reject)=>{
            let sql = "INSERT INTO order_details(order_details.order_id,order_details.product_id,order_details.quantity,order_details.price) VALUES";
            for (let i=0;i<listcart.length;i++){
                sql+="("+listcart[0].order_id+","+listcart[i].product_id+","+listcart[i].quantity+","+listcart[i].price+"),"
            }
            sql=sql.slice(0,-1)
            connection.query(sql, (err, result) => {
                if (err) {
                    console.error('Error creating order_details:', err);
                    reject({message:"failed"});
                }
                resolve(result);
            });
            sql="delete from cart where cart_id in ("+ids+")"
            connection.query(sql, (err, result) => {
                if (err) {
                    console.error('Error deleting order_details:', err);
                    reject({message:"failed"});
                }
                resolve(result);
            });
        });
    });
}
const destroybill=(id)=>{}

const signup = (customers) => {
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

const login = (user) => {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT customers.customer_id,customers.customer_name,customers.email,customers.address,customers.phone,customers.password,customers.search FROM customers  WHERE customers.customer_name = ? and password=?';
        connection.query(sql, [user.username,user.password], (err, result) => {
            if (err) {
                console.error('Error fetching customers:', err);
                reject({message:"failed"});
            } else {
                resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
            }
        });
    });
};

const getrandom = () => {
    return new Promise((resolve, reject) => {
    const sql = `
    select DISTINCT products.product_id,product_name,room_id,description,price,stock,image_url,
	if((Month(now()) BETWEEN Month(date_begin) and Month(date_end)) and (Day(now()) BETWEEN Day(date_begin) and Day(date_end)),discount,null) as discount
    from products 
    left join product_sales on products.product_id=product_sales.product_id 
    left join sales on sales.sale_id = product_sales.sale_id order by Rand()
    limit 6`;
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching data:', err);
        reject({message:"failed"});
      } else {
        resolve(result); // Chuyển đổi kết quả thành chuỗi JSON
      }
    });
  });
};

module.exports={getlist,getdetail,getrelated,getbuytogether,getbyroom,getbycategory,search,createcart,updatecart,deletecart,getcart,createbill,destroybill,signup,login,getrandom,getsubcart}
