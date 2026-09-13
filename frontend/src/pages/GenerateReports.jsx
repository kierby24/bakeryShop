import {
    FileText,
    Download,
    CalendarDays,
    TrendingUp,
    ShoppingCart,
    Package,
    Users
  } from "lucide-react";
  
  function GenerateReports() {
    const reports = [
      {
        title: "Sales Report",
        description: "View detailed sales and revenue information.",
        icon: TrendingUp,
        type: "sales"
      },
      {
        title: "Order Report",
        description: "Review completed, pending, and cancelled orders.",
        icon: ShoppingCart,
        type: "orders"
      },
      {
        title: "Inventory Report",
        description: "Check current stock levels and inventory status.",
        icon: Package,
        type: "inventory"
      },
      {
        title: "Customer Report",
        description: "View customer information and purchasing activity.",
        icon: Users,
        type: "customers"
      }
    ];
  
    return (
      <section className="reports-content">
  
        <div className="reports-header">
          <div>
            <h1>Generate Reports</h1>
            <p>Create and download reports for your bakery operations.</p>
          </div>
  
          <button className="report-date-btn">
            <CalendarDays size={19} />
            September 2026
          </button>
        </div>
  
        <div className="report-summary">
          <div className="report-summary-card">
            <div className="report-summary-icon">
              <FileText size={22} />
            </div>
            <div>
              <span>Available Reports</span>
              <strong>4</strong>
            </div>
          </div>
  
          <div className="report-summary-card">
            <div className="report-summary-icon">
              <TrendingUp size={22} />
            </div>
            <div>
              <span>Monthly Sales</span>
              <strong>$12,845.75</strong>
            </div>
          </div>
  
          <div className="report-summary-card">
            <div className="report-summary-icon">
              <ShoppingCart size={22} />
            </div>
            <div>
              <span>Total Orders</span>
              <strong>328</strong>
            </div>
          </div>
        </div>
  
        <div className="reports-panel">
  
          <div className="reports-panel-header">
            <div>
              <h2>Report Center</h2>
              <p>Select a report to generate and download.</p>
            </div>
          </div>
  
          <div className="reports-grid">
  
            {reports.map((report) => {
              const Icon = report.icon;
  
              return (
                <div className="report-card" key={report.type}>
  
                  <div className="report-card-icon">
                    <Icon size={26} />
                  </div>
  
                  <div className="report-card-content">
                    <h3>{report.title}</h3>
                    <p>{report.description}</p>
                  </div>
  
                  <button className="generate-report-btn">
                    <Download size={18} />
                    Generate
                  </button>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
  
        <div className="custom-report-panel">
  
          <div className="custom-report-icon">
            <FileText size={25} />
          </div>
  
          <div className="custom-report-text">
            <h2>Custom Report</h2>
            <p>
              Generate a report based on a specific date range and report type.
            </p>
          </div>
  
          <button className="custom-report-btn">
            Create Custom Report
          </button>
  
        </div>
  
      </section>
    );
  }
  
  export default GenerateReports;