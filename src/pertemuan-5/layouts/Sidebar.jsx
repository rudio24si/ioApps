import {
  MdDashboard,
  MdOutlineShoppingBag,
  MdPeopleOutline,
  MdAdd,
} from "react-icons/md";

export default function Sidebar() {
  return (
    <div
      id="sidebar"
      className="flex min-h-screen w-80 flex-col bg-white p-8 border-r border-gray-100 shadow-sm sticky top-0"
    >
      {/* Logo Section */}
      <div id="sidebar-logo" className="px-2 mb-10">
        <h1
          id="logo-title"
          className="text-4xl font-black tracking-tighter text-gray-900"
        >
          Sedap
          <span id="logo-dot" className="text-hijau">
            .
          </span>
        </h1>
        <p
          id="logo-subtitle"
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mt-1"
        >
          Modern Admin Dashboard
        </p>
      </div>

      {/* List Menu */}
      <nav id="sidebar-menu" className="flex-1">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 px-4">
          Main Menu
        </p>
        <ul id="menu-list" className="space-y-2">
          {/* Active Menu Item */}
          <li>
            <div className="flex items-center space-x-3 rounded-2xl p-4 bg-hijau text-white shadow-lg shadow-hijau/30 cursor-pointer transition-all">
              <MdDashboard className="text-2xl" />
              <span className="font-bold">Dashboard</span>
            </div>
          </li>

          {/* Inactive Menu Items */}
          {[
            { name: "Orders", icon: <MdOutlineShoppingBag /> },
            { name: "Customers", icon: <MdPeopleOutline /> },
          ].map((item, index) => (
            <li key={index}>
              <div className="group flex items-center space-x-3 rounded-2xl p-4 text-gray-500 hover:bg-gray-50 hover:text-hijau cursor-pointer transition-all duration-300">
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="font-medium">{item.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </nav>

      {/* Upgrade/Ads Card: Dibuat lebih modern */}
      <div id="sidebar-footer" className="mt-auto pt-10">
        <div
          id="footer-card"
          className="relative bg-hijau rounded-3xl p-6 text-white overflow-hidden shadow-xl shadow-hijau/20"
        >
          {/* Aksesori Dekoratif */}
          <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full"></div>

          <p className="text-xs font-medium mb-4 relative z-10 leading-relaxed">
            Please organize your menus through button below!
          </p>

          <button className="w-full flex justify-center items-center py-2.5 bg-white text-hijau rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm">
            <MdAdd className="mr-1 text-lg" /> Add Menus
          </button>
        </div>

        {/* Brand Footer */}
        <div className="mt-8 px-2">
          <p className="text-xs font-bold text-gray-800">
            Sedap Restaurant Admin
          </p>
          <p className="text-[10px] text-gray-400 mt-1 font-medium italic">
            &copy; 2026 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
