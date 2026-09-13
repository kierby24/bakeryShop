import { Bell } from "lucide-react";

function Header() {
  return (
    <header className="top-header">

      <div className="header-spacer"></div>

      <div className="user-area">

        <div className="user-avatar">
          👨🏻
        </div>

        <span className="user-name">
          Alex R.
        </span>

        <button className="notification-button">
          <Bell size={19} strokeWidth={1.8} />
          <span className="notification-dot"></span>
        </button>

      </div>

    </header>
  );
}

export default Header;