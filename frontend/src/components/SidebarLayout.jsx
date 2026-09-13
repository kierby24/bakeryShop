import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import ManageProducts from "../pages/ManageProducts";
import ManageCategories from "../pages/ManageCategories";
import ManageInventory from "../pages/ManageInventory";
import ManageCustomers from "../pages/ManageCustomers";
import ManageOrders from "../pages/ManageOrders";
import ManageSales from "../pages/ManageSales";
import GenerateReports from "../pages/GenerateReports";

function SidebarLayout() {
  const [currentPage, setCurrentPage] = useState("products");

  return (
    <div className="dashboard-layout">

      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      <main className="main-content">

        <Header />

        {currentPage === "products" && (
          <ManageProducts />
        )}

        {currentPage === "categories" && (
          <ManageCategories />
        )}

        {currentPage === "inventory" && (
        <ManageInventory />
        )}

        {currentPage === "customers" && (
        <ManageCustomers />
        )}

        {currentPage === "orders" && (
        <ManageOrders />
        )}

        {currentPage === "sales" && (
        <ManageSales />
        )}

        {currentPage === "reports" && 
        <GenerateReports />
        }

        {currentPage !== "products" &&
        currentPage !== "categories" &&
        currentPage !== "inventory" &&
        currentPage !== "customers" &&
        currentPage !== "orders" &&
        currentPage !== "sales" &&
        currentPage !== "reports" && (
            <div style={{ padding: "40px" }}>
            <h1>Coming Soon</h1>
            <p>This page is currently being developed.</p>
            </div>
        )}

      </main>

    </div>
  );
}

export default SidebarLayout;