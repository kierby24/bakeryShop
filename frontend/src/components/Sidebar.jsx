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

function Sidebar() {

  const menuItems = [
    {
      name: "Manage Products",
      icon: CakeSlice
    },
    {
      name: "Manage Categories",
      icon: Tag
    },
    {
      name: "Manage Inventory",
      icon: Package
    },
    {
      name: "Manage Customers",
      icon: Users
    },
    {
      name: "Manage Orders",
      icon: ShoppingCart
    },
    {
      name: "View Sales",
      icon: CircleDollarSign
    },
    {
      name: "Generate Reports",
      icon: FileChartColumnIncreasing
    }
  ];

  return (
    <aside className="sidebar">

      {/* =========================
          LOGO
      ========================= */}
      <div className="logo-section">

        <div className="logo-icon">
          🧁
        </div>

        <div className="logo-text">
          <h2>Sweet Cravings</h2>
          <span>Bakery</span>
        </div>

      </div>


      {/* =========================
          NAVIGATION
      ========================= */}
      <nav className="sidebar-navigation">

        {menuItems.map((item, index) => {

          const Icon = item.icon;

          return (
            <button
              key={index}
              className="nav-item"
            >

              <Icon
                size={22}
                strokeWidth={2}
              />

              <span>{item.name}</span>

            </button>
          );

        })}

      </nav>


      {/* =========================
          USER PROFILE
      ========================= */}
      <div className="sidebar-user">

        <div className="profile-picture">
          <span>👩🏻</span>
        </div>

        <div className="profile-info">
          <h3>Sarah</h3>
        </div>

      </div>


      {/* =========================
          LOGOUT
      ========================= */}
      <button className="logout-button">

        <LogOut
          size={22}
          strokeWidth={2}
        />

        <span>Logout</span>

      </button>

    </aside>
  );
}

export default Sidebar;