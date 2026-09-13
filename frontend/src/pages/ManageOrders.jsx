import {
    Search,
    ShoppingCart,
    Eye,
    Pencil,
    Trash2
  } from "lucide-react";
  
  function ManageOrders() {
    const orders = [
      {
        id: "#ORD-1001",
        customer: "Maria Santos",
        date: "Sep 13, 2026",
        items: "Chocolate Cake",
        total: "$45.00",
        status: "Completed"
      },
      {
        id: "#ORD-1002",
        customer: "John Reyes",
        date: "Sep 13, 2026",
        items: "6 Cupcakes",
        total: "$24.00",
        status: "Pending"
      },
      {
        id: "#ORD-1003",
        customer: "Angela Cruz",
        date: "Sep 12, 2026",
        items: "Butter Croissant",
        total: "$18.50",
        status: "Processing"
      },
      {
        id: "#ORD-1004",
        customer: "Daniel Garcia",
        date: "Sep 12, 2026",
        items: "Chocolate Cookies",
        total: "$15.00",
        status: "Completed"
      },
      {
        id: "#ORD-1005",
        customer: "Sofia Martinez",
        date: "Sep 11, 2026",
        items: "Birthday Cake",
        total: "$65.00",
        status: "Completed"
      },
      {
        id: "#ORD-1006",
        customer: "Michael Torres",
        date: "Sep 11, 2026",
        items: "French Bread",
        total: "$12.50",
        status: "Cancelled"
      }
    ];
  
    return (
      <section className="orders-content">
  
        {/* HEADER */}
        <div className="orders-header">
          <div>
            <h1>Manage Orders</h1>
            <p>
              View, monitor, and manage customer orders.
            </p>
          </div>
  
          <div className="orders-total">
            <ShoppingCart size={20} />
            <span>48 Orders Today</span>
          </div>
        </div>
  
        {/* SUMMARY */}
        <div className="orders-summary">
  
          <div className="order-summary-card">
            <span>Total Orders</span>
            <strong>128</strong>
          </div>
  
          <div className="order-summary-card pending">
            <span>Pending</span>
            <strong>12</strong>
          </div>
  
          <div className="order-summary-card processing">
            <span>Processing</span>
            <strong>8</strong>
          </div>
  
          <div className="order-summary-card completed">
            <span>Completed</span>
            <strong>104</strong>
          </div>
  
        </div>
  
        {/* SEARCH */}
        <div className="orders-toolbar">
  
          <div className="order-search">
            <Search size={19} />
  
            <input
              type="text"
              placeholder="Search orders or customers..."
            />
          </div>
  
        </div>
  
        {/* TABLE */}
        <div className="orders-panel">
  
          <div className="orders-panel-title">
            <div>
              <h2>Order List</h2>
              <p>
                View customer orders and their current status.
              </p>
            </div>
          </div>
  
          <div className="orders-table-wrapper">
  
            <table className="orders-table">
  
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Items</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
  
              <tbody>
  
                {orders.map((order) => (
  
                  <tr key={order.id}>
  
                    <td>
                      <strong className="order-id">
                        {order.id}
                      </strong>
                    </td>
  
                    <td>
                      <div className="order-customer">
                        <div className="order-avatar">
                          {order.customer.charAt(0)}
                        </div>
  
                        <strong>
                          {order.customer}
                        </strong>
                      </div>
                    </td>
  
                    <td>
                      <span className="order-date">
                        {order.date}
                      </span>
                    </td>
  
                    <td>
                      <span className="order-items">
                        {order.items}
                      </span>
                    </td>
  
                    <td>
                      <strong className="order-total">
                        {order.total}
                      </strong>
                    </td>
  
                    <td>
                      <span
                        className={`order-status ${
                          order.status === "Completed"
                            ? "completed"
                            : order.status === "Pending"
                            ? "pending"
                            : order.status === "Processing"
                            ? "processing"
                            : "cancelled"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
  
                    <td>
                      <div className="order-actions">
  
                        <button
                          className="order-view-btn"
                          title="View Order"
                        >
                          <Eye size={17} />
                        </button>
  
                        <button
                          className="order-edit-btn"
                          title="Edit Order"
                        >
                          <Pencil size={17} />
                        </button>
  
                        <button
                          className="order-delete-btn"
                          title="Delete Order"
                        >
                          <Trash2 size={17} />
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
  
  export default ManageOrders;