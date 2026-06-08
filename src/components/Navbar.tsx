import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-8 py-4 flex items-center justify-between">
      <span className="text-xl font-bold text-blue-600">💰 FinanceBoard</span>
      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-600"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/transactions"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-600"
          }
        >
          Transactions
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
