const express =require('express')
const cors = require('cors');
const app=express()

app.use(cors()); // Sử dụng middleware CORS

app.use(express.json())
app.use("/",require("./routers/guestRoute"))

app.use("/categories",require("./routers/categoriesRoute"));
app.use("/customers",require("./routers/customersRoute"));
app.use("/order_details",require("./routers/order_detailsRoute"));
app.use("/orders",require("./routers/ordersRoute"));
app.use("/product_related",require("./routers/product_relatedRoute"));
app.use("/product_reviews",require("./routers/product_reviewsRoute"));
app.use("/product_sales",require("./routers/product_salesRoute"));
app.use("/products",require("./routers/productsRoute"));
app.use("/purchase_details",require("./routers/purchase_detailsRoute"));
app.use("/purchases",require("./routers/purchasesRoute"));
app.use("/sales",require("./routers/salesRoute"));
app.use("/suppliers",require("./routers/suppliersRoute"));

app.listen(5000,()=>{
    console.log("Lank")
})
