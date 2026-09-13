import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import SalesSummary from "../components/SalesSummary";
import QuickOrder from "../components/QuickOrder";
import LowStock from "../components/LowStock";
import RecentActivity from "../components/RecentActivity";

function ManageProducts() {
  return (
    <div className="dashboard-layout">

      {/* SIDEBAR - DON'T CHANGE */}

      {/* MAIN CONTENT */}
      <main className="main-content">

        <section className="dashboard-content">

          {/* WELCOME */}
          <div className="welcome-section">
            <h1>Welcome back, Alex!</h1>
            <p>Bakery Management Dashboard</p>
          </div>

          {/* SUMMARY CARDS */}
          <div className="summary-cards">

            <div className="summary-card">
              <div className="summary-icon brown">
                📋
              </div>

              <div>
                <span>Total Orders Today</span>
                <h2>48</h2>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon blue">
                💵
              </div>

              <div>
                <span>Today's Sales</span>
                <h2>$1,250.75</h2>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon yellow">
                ⚠️
              </div>

              <div>
                <span>Low Stock Alerts</span>
                <h2>5 Items</h2>
              </div>
            </div>

            <div className="summary-card">
              <div className="summary-icon light-blue">
                👥
              </div>

              <div>
                <span>New Customers</span>
                <h2>8</h2>
              </div>
            </div>

          </div>


          {/* LOWER CONTENT */}
          <div className="dashboard-bottom">

            {/* RECENT ORDERS */}
            <div className="dashboard-panel recent-orders">

              <div className="panel-header">
                <h2>Recent Orders</h2>
                <button>View All</button>
              </div>

              <div className="table-container">

                <table>
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Customer</th>
                      <th>Items</th>
                      <th>Status</th>
                      <th>Total</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>#1430310</td>
                      <td>Sarah Enrith</td>
                      <td>2 Items</td>
                      <td>
                        <span className="status completed">
                          Completed
                        </span>
                      </td>
                      <td>$48.00</td>
                    </tr>

                    <tr>
                      <td>#1430312</td>
                      <td>Sarah Armes</td>
                      <td>1 Item</td>
                      <td>
                        <span className="status pending">
                          Pending
                        </span>
                      </td>
                      <td>$250.00</td>
                    </tr>

                    <tr>
                      <td>#1430313</td>
                      <td>Sarah Nanmy</td>
                      <td>2 Items</td>
                      <td>
                        <span className="status pending">
                          Pending
                        </span>
                      </td>
                      <td>$1,250.00</td>
                    </tr>

                    <tr>
                      <td>#1430314</td>
                      <td>Sarah Ecwith</td>
                      <td>2 Items</td>
                      <td>
                        <span className="status completed">
                          Completed
                        </span>
                      </td>
                      <td>$470.00</td>
                    </tr>

                    <tr>
                      <td>#1430315</td>
                      <td>Sarah Moniaw</td>
                      <td>2 Items</td>
                      <td>
                        <span className="status completed">
                          Completed
                        </span>
                      </td>
                      <td>$350.00</td>
                    </tr>

                    <tr>
                      <td>#1430316</td>
                      <td>Sarah Bierney</td>
                      <td>1 Item</td>
                      <td>
                        <span className="status pending">
                          Pending
                        </span>
                      </td>
                      <td>$80.00</td>
                    </tr>

                  </tbody>
                </table>

              </div>
            </div>


            {/* INVENTORY STATUS */}
            <div className="dashboard-panel inventory">

              <div className="panel-header">
                <h2>Inventory Status</h2>
                <button>View All</button>
              </div>

              <div className="table-container">

                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Stock</th>
                      <th>Status</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>Chocolate Cake</td>
                      <td>31</td>
                      <td>
                        <span className="status available">
                          Available
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Strawberry Cake</td>
                      <td>30</td>
                      <td>
                        <span className="status available">
                          Available
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Vanilla Cupcake</td>
                      <td>20</td>
                      <td>
                        <span className="status available">
                          Available
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Red Velvet Cake</td>
                      <td>13</td>
                      <td>
                        <span className="status low">
                          Low Stock
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Cheesecake</td>
                      <td>20</td>
                      <td>
                        <span className="status available">
                          Available
                        </span>
                      </td>
                    </tr>

                    <tr>
                      <td>Cookies</td>
                      <td>7</td>
                      <td>
                        <span className="status low">
                          Low Stock
                        </span>
                      </td>
                    </tr>

                  </tbody>
                </table>

              </div>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default ManageProducts;