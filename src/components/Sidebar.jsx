import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdShoppingCart,
  MdPeople,
  MdWarning,
  MdLock,
  MdBlock,
} from "react-icons/md";

const menuUtama = [
  { to: "/", label: "Dashboard", icon: <MdDashboard className="text-xl" /> },
  {
    to: "/orders",
    label: "Orders",
    icon: <MdShoppingCart className="text-xl" />,
  },
  {
    to: "/customers",
    label: "Customers",
    icon: <MdPeople className="text-xl" />,
  },
];

const menuError = [
  {
    to: "/error/400",
    label: "Error 400",
    icon: <MdWarning className="text-xl" />,
  },
  {
    to: "/error/401",
    label: "Error 401",
    icon: <MdLock className="text-xl" />,
  },
  {
    to: "/error/403",
    label: "Error 403",
    icon: <MdBlock className="text-xl" />,
  },
];

export default function Sidebar() {
  const linkClass = ({ isActive }) =>
    `flex items-center space-x-3 px-4 py-2.5 rounded-xl font-medium transition-all duration-200 ${
      isActive
        ? "bg-hijau text-white shadow-md shadow-hijau/30"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <div
      id="sidebar-container"
      className="w-64 min-h-screen bg-white border-r border-gray-100 flex flex-col py-6 px-4 sticky top-0 h-screen"
    >
      {/* Logo */}
      <div id="sidebar-logo" className="flex items-center space-x-2 px-4 mb-8">
        <div className="w-8 h-8 bg-hijau rounded-lg flex items-center justify-center">
          <span className="text-white font-black text-sm">IO</span>
        </div>
        <span className="text-lg font-black text-gray-900">ioApps</span>
      </div>

      {/* Menu Utama */}
      <div className="mb-6">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-4 mb-3">
          Menu
        </p>
        <nav className="flex flex-col space-y-1">
          {menuUtama.map((item) => (
            <NavLink key={item.to} to={item.to} end className={linkClass}>
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Menu Error Pages */}
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-4 mb-3">
          Error Pages
        </p>
        <nav className="flex flex-col space-y-1">
          {menuError.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
