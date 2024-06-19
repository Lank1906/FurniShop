import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./component/nav";
import Footer from "./component/footer";
// thank you
import Hero from "./component/hero";
import Thankyou from "./component/thankyou";
//about us
import HeroAbout from "./component/hero_about";
import WhyChoseUs from "./component/why_chose_us";
import Team from "./component/team";
import SlideAbout from "./component/slide_about";
//blog
import Blog from "./component/blog";
//contact
import Contact from "./component/contact";
//CheckOut
import CheckOut from "./component/checkout";
//index+ whychoseus
import ProductFirst from "./component/product_index";
//Services+productfirst
import Service from "./component/service";
import WeHelp from "./component/we_help";
//product
import Product from "./component/product";
//cart
import Cart from "./component/cart";
//login
import Login from "./component/login";
//detail
import Detail from "./component/detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./admin_component/admin-layout";
import Dashboard from "./admin_component/dashboard";
import Supplier from "./admin_component/supplier";
import Furni from "./admin_component/Furni";
import User from "./admin_component/user";
import Sale from "./admin_component/sale";
import Order from "./admin_component/order";
import Purchase from "./admin_component/purchase";
import Category from "./admin_component/category";
import "./scss/style.scss";
import "./css/bootstrap.min.css";
import "./css/login.css";
import "./css/style.css";
import "./admin/css/style.css";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/guest/*"
        element={
          <React.Fragment>
            <Nav />
            <Routes>
              <Route
                path="/"
                index
                element={
                  <React.Fragment>
                    <HeroAbout title="Home" />
                    <ProductFirst />
                    <WhyChoseUs />
                  </React.Fragment>
                }
              />
              <Route
                path="/shop"
                index
                element={
                  <React.Fragment>
                    <HeroAbout title="Shop" />
                    <Product title="Newest Products" />
                  </React.Fragment>
                }
              />
              <Route
                path="/about"
                index
                element={
                  <React.Fragment>
                    <HeroAbout />
                    <WhyChoseUs />
                    <Team />
                  </React.Fragment>
                }
              />
              <Route
                path="/service"
                index
                element={
                  <React.Fragment>
                    <HeroAbout title="Service" />
                    <Service />
                    <WeHelp />
                  </React.Fragment>
                }
              />
              <Route
                path="/blog"
                index
                element={
                  <React.Fragment>
                    <HeroAbout title="Blog" />
                    <Blog />
                  </React.Fragment>
                }
              />
              <Route
                path="/contact"
                index
                element={
                  <React.Fragment>
                    <HeroAbout title="Contact" />
                    <Contact />
                  </React.Fragment>
                }
              />
              <Route
                path="/cart"
                index
                element={
                  <React.Fragment>
                    <Hero />
                    <Cart />
                  </React.Fragment>
                }
              />
              <Route
                path="/detail/:id"
                index
                element={
                  <React.Fragment>
                    <Detail />
                    <ProductFirst />
                  </React.Fragment>
                }
              />
              <Route
                path="/checkout/:ids"
                index
                element={
                  <React.Fragment>
                    <CheckOut />
                  </React.Fragment>
                }
              />
              <Route
                path="/thankyou"
                index
                element={
                  <React.Fragment>
                    <HeroAbout title="Thank You" />
                    <Thankyou />
                  </React.Fragment>
                }
              />
              <Route
                path="/login"
                index
                element={
                  <React.Fragment>
                    <Login />
                  </React.Fragment>
                }
              />
            </Routes>
            <Footer />
          </React.Fragment>
        }
      />
      {/* admin */}
      <Route
        path="/admin/*"
        element={
          <React.Fragment>
            <Routes>
              {/* route admin list */}
              <Route
                path="/login"
                index
                element={
                  <React.Fragment>
                    <Login />
                  </React.Fragment>
                }
              />
              <Route
                path="/dashboard"
                element={
                  <AdminLayout>
                    <Dashboard />
                  </AdminLayout>
                }
              />
              <Route
                path="/category"
                element={
                  <AdminLayout>
                    <Category />
                  </AdminLayout>
                }
              />
              <Route
                path="/product"
                element={
                  <AdminLayout>
                    <Furni />
                  </AdminLayout>
                }
              />
              <Route
                path="/supplier"
                element={
                  <AdminLayout>
                    <Supplier />
                  </AdminLayout>
                }
              />
              <Route
                path="/user"
                element={
                  <AdminLayout>
                    <User />
                  </AdminLayout>
                }
              />
              <Route
                path="/sale"
                element={
                  <AdminLayout>
                    <Sale />
                  </AdminLayout>
                }
              />
              <Route
                path="/order"
                element={
                  <AdminLayout>
                    <Order />
                  </AdminLayout>
                }
              />
              <Route
                path="/purchase"
                element={
                  <AdminLayout>
                    <Purchase />
                  </AdminLayout>
                }
              />
            </Routes>
          </React.Fragment>
        }
      />
    </Routes>
  </BrowserRouter>
);
