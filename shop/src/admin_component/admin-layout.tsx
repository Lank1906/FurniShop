import React from "react";
export default function AdminLayout({ children }: any) {
  return (
    <>
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile" />
          <span className="text">AdminHub</span>
        </a>
        <ul className="side-menu top">
          <li>
            <a href="/admin/dashboard">
              <i className="bx bxs-dashboard" />
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/admin/category">
              <i className="bx bxs-category" />
              <span className="text">Categories</span>
            </a>
          </li>

          <li>
            <a href="/admin/product">
              <i className="bx bxs-doughnut-chart" />
              <span className="text">Products</span>
            </a>
          </li>
          <li>
            <a href="/admin/order">
              <i className="bx bxs-message-dots" />
              <span className="text">Orders</span>
            </a>
          </li>
          <li>
            <a href="/admin/purchase">
              <i className="bx bxs-doughnut-chart" />
              <span className="text">Purchases</span>
            </a>
          </li>

          <li>
            <a href="/admin/supplier">
              <i className="bx bxs-group" />
              <span className="text">Supplier</span>
            </a>
          </li>
          <li>
            <a href="/admin/user">
              <i className="bx bxs-group" />
              <span className="text">Users</span>
            </a>
          </li>
          <li>
            <a href="/admin/sale">
              <i className="bx bxs-chart" />
              <span className="text">Sales</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-cog" />
              <span className="text">Settings</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle" />
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
      <section id="content">
        <nav>
          <i className="bx bx-menu" />
          <a href="#" className="nav-link">
            Categories
          </a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search" />
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden={true} />
          <label htmlFor="switch-mode" className="switch-mode" />
          <a href="#" className="notification">
            <i className="bx bxs-bell" />
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="./img/people.png" />
          </a>
        </nav>

        <main>{children}</main>
      </section>
    </>
  );
}
