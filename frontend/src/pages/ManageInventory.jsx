import {
    Search,
    Package,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Plus,
    Minus
  } from "lucide-react";
  
  function ManageInventory() {
    const inventory = [
      {
        id: 1,
        product: "Chocolate Cake",
        category: "Cakes",
        stock: 25,
        minimum: 10,
        status: "In Stock"
      },
      {
        id: 2,
        product: "Strawberry Cupcake",
        category: "Cupcakes",
        stock: 8,
        minimum: 10,
        status: "Low Stock"
      },
      {
        id: 3,
        product: "Butter Croissant",
        category: "Pastries",
        stock: 18,
        minimum: 8,
        status: "In Stock"
      },
      {
        id: 4,
        product: "Chocolate Chip Cookie",
        category: "Cookies",
        stock: 5,
        minimum: 10,
        status: "Low Stock"
      },
      {
        id: 5,
        product: "French Bread",
        category: "Bread",
        stock: 0,
        minimum: 5,
        status: "Out of Stock"
      },
      {
        id: 6,
        product: "Iced Coffee",
        category: "Beverages",
        stock: 32,
        minimum: 10,
        status: "In Stock"
      }
    ];
  
    return (
      <section className="inventory-content">
  
        {/* HEADER */}
        <div className="inventory-header">
          <div>
            <h1>Manage Inventory</h1>
            <p>
              Monitor and manage your bakery product stock.
            </p>
          </div>
  
          <button className="add-stock-btn">
            <Plus size={19} />
            Add Stock
          </button>
        </div>
  
        {/* SUMMARY CARDS */}
        <div className="inventory-summary">
  
          <div className="inventory-summary-card">
            <div className="inventory-summary-icon">
              <Package size={22} />
            </div>
  
            <div>
              <span>Total Products</span>
              <strong>48</strong>
            </div>
          </div>
  
          <div className="inventory-summary-card">
            <div className="inventory-summary-icon warning">
              <AlertTriangle size={22} />
            </div>
  
            <div>
              <span>Low Stock</span>
              <strong>5</strong>
            </div>
          </div>
  
          <div className="inventory-summary-card">
            <div className="inventory-summary-icon danger">
              <XCircle size={22} />
            </div>
  
            <div>
              <span>Out of Stock</span>
              <strong>2</strong>
            </div>
          </div>
  
          <div className="inventory-summary-card">
            <div className="inventory-summary-icon success">
              <CheckCircle size={22} />
            </div>
  
            <div>
              <span>In Stock</span>
              <strong>41</strong>
            </div>
          </div>
  
        </div>
  
        {/* TOOLBAR */}
        <div className="inventory-toolbar">
  
          <div className="inventory-search">
            <Search size={19} />
  
            <input
              type="text"
              placeholder="Search inventory..."
            />
          </div>
  
        </div>
  
        {/* INVENTORY TABLE */}
        <div className="inventory-panel">
  
          <div className="inventory-panel-title">
            <div>
              <h2>Inventory List</h2>
              <p>
                Monitor current stock levels of bakery products.
              </p>
            </div>
          </div>
  
          <div className="inventory-table-wrapper">
  
            <table className="inventory-table">
  
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Current Stock</th>
                  <th>Minimum Stock</th>
                  <th>Status</th>
                  <th>Adjust Stock</th>
                </tr>
              </thead>
  
              <tbody>
  
                {inventory.map((item) => (
  
                  <tr key={item.id}>
  
                    <td>
                      <div className="inventory-product">
                        <div className="inventory-product-icon">
                          <Package size={20} />
                        </div>
  
                        <div>
                          <strong>{item.product}</strong>
                          <small>
                            Product #{item.id}
                          </small>
                        </div>
                      </div>
                    </td>
  
                    <td>
                      <span className="inventory-category">
                        {item.category}
                      </span>
                    </td>
  
                    <td>
                      <strong className="stock-number">
                        {item.stock}
                      </strong>
                    </td>
  
                    <td>
                      <span className="minimum-stock">
                        {item.minimum}
                      </span>
                    </td>
  
                    <td>
                      <span
                        className={`inventory-status ${
                          item.status === "In Stock"
                            ? "in-stock"
                            : item.status === "Low Stock"
                            ? "low-stock"
                            : "out-stock"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
  
                    <td>
                      <div className="stock-actions">
  
                        <button
                          className="stock-minus"
                          title="Remove Stock"
                        >
                          <Minus size={16} />
                        </button>
  
                        <button
                          className="stock-plus"
                          title="Add Stock"
                        >
                          <Plus size={16} />
                        </button>
  
                      </div>
                    </td>
  
                  </tr>
  
                ))}
  
              </tbody>
  
            </table>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
  export default ManageInventory;