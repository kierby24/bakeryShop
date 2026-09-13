import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app">
      <SidebarLayout />
    </div>
  );
}

function SidebarLayout() {
  return <Dashboard />;
}

export default App;