import {
    Search,
    Users,
    UserPlus,
    Mail,
    Phone,
    Pencil,
    Trash2
  } from "lucide-react";
  
  function ManageCustomers() {
    const customers = [
      {
        id: 1,
        name: "Maria Santos",
        email: "maria.santos@email.com",
        phone: "0917 123 4567",
        orders: 18,
        totalSpent: "$425.50",
        status: "Active"
      },
      {
        id: 2,
        name: "John Reyes",
        email: "john.reyes@email.com",
        phone: "0918 234 5678",
        orders: 12,
        totalSpent: "$286.75",
        status: "Active"
      },
      {
        id: 3,
        name: "Angela Cruz",
        email: "angela.cruz@email.com",
        phone: "0919 345 6789",
        orders: 8,
        totalSpent: "$174.25",
        status: "Active"
      },
      {
        id: 4,
        name: "Daniel Garcia",
        email: "daniel.garcia@email.com",
        phone: "0920 456 7890",
        orders: 5,
        totalSpent: "$98.50",
        status: "Inactive"
      },
      {
        id: 5,
        name: "Sofia Martinez",
        email: "sofia.martinez@email.com",
        phone: "0921 567 8901",
        orders: 21,
        totalSpent: "$512.00",
        status: "Active"
      },
      {
        id: 6,
        name: "Michael Torres",
        email: "michael.torres@email.com",
        phone: "0922 678 9012",
        orders: 9,
        totalSpent: "$215.25",
        status: "Active"
      }
    ];
  
    return (
      <section className="customers-content">
  
        {/* HEADER */}
        <div className="customers-header">
          <div>
            <h1>Manage Customers</h1>
            <p>
              View and manage your bakery customers.
            </p>
          </div>
  
          <button className="add-customer-btn">
            <UserPlus size={19} />
            Add Customer
          </button>
        </div>
  
        {/* SUMMARY */}
        <div className="customers-summary">
  
          <div className="customer-summary-card">
            <div className="customer-summary-icon">
              <Users size={22} />
            </div>
  
            <div>
              <span>Total Customers</span>
              <strong>128</strong>
            </div>
          </div>
  
          <div className="customer-summary-card">
            <div className="customer-summary-icon success">
              <Users size={22} />
            </div>
  
            <div>
              <span>Active Customers</span>
              <strong>116</strong>
            </div>
          </div>
  
          <div className="customer-summary-card">
            <div className="customer-summary-icon orders">
              <Users size={22} />
            </div>
  
            <div>
              <span>New This Month</span>
              <strong>12</strong>
            </div>
          </div>
  
        </div>
  
        {/* SEARCH */}
        <div className="customers-toolbar">
  
          <div className="customer-search">
            <Search size={19} />
  
            <input
              type="text"
              placeholder="Search customers..."
            />
          </div>
  
        </div>
  
        {/* CUSTOMER TABLE */}
        <div className="customers-panel">
  
          <div className="customers-panel-title">
            <div>
              <h2>Customer List</h2>
              <p>
                View customer information and purchase activity.
              </p>
            </div>
          </div>
  
          <div className="customers-table-wrapper">
  
            <table className="customers-table">
  
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Contact</th>
                  <th>Orders</th>
                  <th>Total Spent</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
  
              <tbody>
  
                {customers.map((customer) => (
  
                  <tr key={customer.id}>
  
                    {/* CUSTOMER */}
                    <td>
                      <div className="customer-name">
  
                        <div className="customer-avatar">
                          {customer.name.charAt(0)}
                        </div>
  
                        <div>
                          <strong>{customer.name}</strong>
                          <small>
                            Customer #{customer.id}
                          </small>
                        </div>
  
                      </div>
                    </td>
  
                    {/* CONTACT */}
                    <td>
                      <div className="customer-contact">
  
                        <span>
                          <Mail size={14} />
                          {customer.email}
                        </span>
  
                        <span>
                          <Phone size={14} />
                          {customer.phone}
                        </span>
  
                      </div>
                    </td>
  
                    {/* ORDERS */}
                    <td>
                      <span className="customer-orders">
                        {customer.orders} Orders
                      </span>
                    </td>
  
                    {/* TOTAL */}
                    <td>
                      <strong className="customer-spent">
                        {customer.totalSpent}
                      </strong>
                    </td>
  
                    {/* STATUS */}
                    <td>
                      <span
                        className={`customer-status ${
                          customer.status === "Active"
                            ? "active"
                            : "inactive"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>
  
                    {/* ACTIONS */}
                    <td>
                      <div className="customer-actions">
  
                        <button
                          className="customer-edit-btn"
                          title="Edit Customer"
                        >
                          <Pencil size={17} />
                        </button>
  
                        <button
                          className="customer-delete-btn"
                          title="Delete Customer"
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
  
  export default ManageCustomers;