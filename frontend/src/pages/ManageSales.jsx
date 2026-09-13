import {
    Search,
    TrendingUp,
    ShoppingBag,
    DollarSign,
    Receipt,
    CalendarDays,
    ArrowUpRight
  } from "lucide-react";
  
  function ManageSales() {
    const sales = [
      {
        id: "#SALE-1001",
        date: "Sep 13, 2026",
        orders: 12,
        items: 28,
        amount: "$425.50"
      },
      {
        id: "#SALE-1002",
        date: "Sep 13, 2026",
        orders: 9,
        items: 21,
        amount: "$318.75"
      },
      {
        id: "#SALE-1003",
        date: "Sep 12, 2026",
        orders: 15,
        items: 34,
        amount: "$512.25"
      },
      {
        id: "#SALE-1004",
        date: "Sep 12, 2026",
        orders: 8,
        items: 19,
        amount: "$246.00"
      },
      {
        id: "#SALE-1005",
        date: "Sep 11, 2026",
        orders: 13,
        items: 31,
        amount: "$398.50"
      },
      {
        id: "#SALE-1006",
        date: "Sep 11, 2026",
        orders: 11,
        items: 25,
        amount: "$335.75"
      }
    ];
  
    return (
      <section className="sales-content">
  
        {/* HEADER */}
        <div className="sales-header">
          <div>
            <h1>View Sales</h1>
            <p>
              Monitor your bakery sales and revenue performance.
            </p>
          </div>
  
          <button className="sales-date-btn">
            <CalendarDays size={18} />
            This Month
          </button>
        </div>
  
        {/* SUMMARY CARDS */}
        <div className="sales-summary">
  
          <div className="sales-summary-card">
            <div className="sales-summary-icon">
              <DollarSign size={22} />
            </div>
  
            <div>
              <span>Total Sales</span>
              <strong>$12,845.75</strong>
  
              <small className="sales-growth">
                <ArrowUpRight size={14} />
                12.5% from last month
              </small>
            </div>
          </div>
  
          <div className="sales-summary-card">
            <div className="sales-summary-icon orders">
              <ShoppingBag size={22} />
            </div>
  
            <div>
              <span>Total Orders</span>
              <strong>328</strong>
  
              <small className="sales-growth">
                <ArrowUpRight size={14} />
                8.2% from last month
              </small>
            </div>
          </div>
  
          <div className="sales-summary-card">
            <div className="sales-summary-icon average">
              <Receipt size={22} />
            </div>
  
            <div>
              <span>Average Order</span>
              <strong>$39.16</strong>
  
              <small className="sales-growth">
                <ArrowUpRight size={14} />
                4.8% from last month
              </small>
            </div>
          </div>
  
          <div className="sales-summary-card">
            <div className="sales-summary-icon performance">
              <TrendingUp size={22} />
            </div>
  
            <div>
              <span>Growth Rate</span>
              <strong>12.5%</strong>
  
              <small className="sales-growth">
                <ArrowUpRight size={14} />
                Sales are increasing
              </small>
            </div>
          </div>
  
        </div>
  
        {/* SALES OVERVIEW */}
        <div className="sales-overview">
  
          <div className="sales-overview-header">
            <div>
              <h2>Sales Overview</h2>
              <p>Monthly sales performance</p>
            </div>
          </div>
  
          <div className="sales-chart">
  
            <div className="chart-values">
              <span>$15K</span>
              <span>$10K</span>
              <span>$5K</span>
              <span>$0</span>
            </div>
  
            <div className="chart-area">
  
              <div className="chart-line line-one"></div>
              <div className="chart-line line-two"></div>
              <div className="chart-line line-three"></div>
              <div className="chart-line line-four"></div>
  
              <div className="sales-bars">
                <div className="sales-bar" style={{ height: "45%" }}></div>
                <div className="sales-bar" style={{ height: "58%" }}></div>
                <div className="sales-bar" style={{ height: "50%" }}></div>
                <div className="sales-bar" style={{ height: "72%" }}></div>
                <div className="sales-bar" style={{ height: "65%" }}></div>
                <div className="sales-bar" style={{ height: "82%" }}></div>
                <div className="sales-bar" style={{ height: "90%" }}></div>
              </div>
  
              <div className="chart-labels">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
        {/* SALES TABLE */}
        <div className="sales-panel">
  
          <div className="sales-panel-header">
  
            <div>
              <h2>Recent Sales</h2>
              <p>
                Detailed record of recent sales transactions.
              </p>
            </div>
  
            <div className="sales-search">
              <Search size={18} />
  
              <input
                type="text"
                placeholder="Search sales..."
              />
            </div>
  
          </div>
  
          <div className="sales-table-wrapper">
  
            <table className="sales-table">
  
              <thead>
                <tr>
                  <th>Sale ID</th>
                  <th>Date</th>
                  <th>Orders</th>
                  <th>Items Sold</th>
                  <th>Total Sales</th>
                </tr>
              </thead>
  
              <tbody>
  
                {sales.map((sale) => (
  
                  <tr key={sale.id}>
  
                    <td>
                      <strong className="sale-id">
                        {sale.id}
                      </strong>
                    </td>
  
                    <td>
                      <span className="sale-date">
                        {sale.date}
                      </span>
                    </td>
  
                    <td>
                      <span className="sale-orders">
                        {sale.orders}
                      </span>
                    </td>
  
                    <td>
                      <span className="sale-items">
                        {sale.items}
                      </span>
                    </td>
  
                    <td>
                      <strong className="sale-amount">
                        {sale.amount}
                      </strong>
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
  
  export default ManageSales;