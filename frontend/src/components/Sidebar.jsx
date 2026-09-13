import {
  CakeSlice,
  Tag,
  Package,
  Users,
  ShoppingCart,
  CircleDollarSign,
  FileChartColumnIncreasing,
  LogOut
} from "lucide-react";

function Sidebar({ onNavigate, currentPage }) {
  const menuItems = [
    {
      name: "Manage Products",
      page: "products",
      icon: CakeSlice
    },
    {
      name: "Manage Categories",
      page: "categories",
      icon: Tag
    },
    {
      name: "Manage Inventory",
      page: "inventory",
      icon: Package
    },
    {
      name: "Manage Customers",
      page: "customers",
      icon: Users
    },
    {
      name: "Manage Orders",
      page: "orders",
      icon: ShoppingCart
    },
    {
      name: "View Sales",
      page: "sales",
      icon: CircleDollarSign
    },
    {
      name: "Generate Reports",
      page: "reports",
      icon: FileChartColumnIncreasing
    }
  ];

  return (
    <aside className="sidebar">

      {/* LOGO */}
      <div className="logo-section">
        <div className="logo-icon">🧁</div>

        <div className="logo-text">
          <h2>Sweet Cravings</h2>
          <span>Bakery</span>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="sidebar-navigation">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.page}
              className={`nav-item ${
                currentPage === item.page ? "active" : ""
              }`}
              onClick={() => onNavigate(item.page)}
            >
              <Icon size={22} strokeWidth={2} />
              <span>{item.name}</span>
            </button>
          );
        })}

      </nav>

      {/* USER */}
      <div className="sidebar-user">
        <div className="profile-picture">👩🏻</div>

        <div className="profile-info">
          <h3>Sarah</h3>
        </div>
      </div>

      {/* LOGOUT */}
      <button className="logout-button">
        <LogOut size={22} />
        <span>Logout</span>
      </button>

    </aside>
  );
}

export default Sidebar;