import { useState } from "react";
import {
  ChevronDown,
  UserRound,
  LogOut
} from "lucide-react";

function Header({ onLogout }) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLogout = () => {
    setShowProfileMenu(false);

    const confirmed = window.confirm(
      "Are you sure you want to logout?"
    );

    if (confirmed) {
      onLogout();
    }
  };

  const handleManageProfile = () => {
    setShowProfileMenu(false);
    alert("Profile management will be connected soon.");
  };

  return (
    <header className="top-header">

      <div className="header-left">
        <h2>Bakery Management System</h2>
        <p>Manage your bakery operations efficiently.</p>
      </div>

      <div className="header-right">

        <div className="profile-dropdown-wrapper">

          {/* PROFILE BUTTON */}
          <button
            type="button"
            className="header-profile-button"
            onClick={() =>
              setShowProfileMenu((prev) => !prev)
            }
          >
            <div className="header-profile-avatar">
              👩🏻
            </div>

            <div className="header-profile-text">
              <strong>Sarah</strong>
              <span>Administrator</span>
            </div>

            <ChevronDown
              size={18}
              className={
                showProfileMenu
                  ? "chevron-rotate"
                  : ""
              }
            />
          </button>

          {/* DROPDOWN */}
          {showProfileMenu && (
            <div className="profile-dropdown">

              <div className="profile-dropdown-heading">
                <strong>Sarah</strong>
                <span>Administrator</span>
              </div>

              <div className="profile-dropdown-divider" />

              <button
                type="button"
                className="profile-dropdown-item"
                onClick={handleManageProfile}
              >
                <UserRound size={18} />
                <span>Manage Profile</span>
              </button>

              <button
                type="button"
                className="profile-dropdown-item logout-item"
                onClick={handleLogout}
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}

export default Header;