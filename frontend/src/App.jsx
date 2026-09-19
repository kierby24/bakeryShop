import { useState } from "react";
import SidebarLayout from "./components/SidebarLayout";
import AppDataProvider from "./AppDataContext";
import Login from "./pages/Login";
import ClientPanel from "./pages/ClientPanel";
import "./App.css";

function App() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("bakery_current_user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const handleLogin = (userData) => {
    localStorage.setItem(
      "bakery_current_user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("bakery_current_user");
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <AppDataProvider>
      {user.role === "admin" ? (
        <div className="app">
          <SidebarLayout onLogout={handleLogout} />
        </div>
      ) : (
        <ClientPanel
          user={user}
          onLogout={handleLogout}
        />
      )}
    </AppDataProvider>
  );
}

export default App;