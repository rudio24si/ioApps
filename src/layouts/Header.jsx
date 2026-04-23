import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div
      id="header-container"
      className="flex justify-between items-center p-4 bg-white border-b border-gray-100 sticky top-0 z-50"
    >
      {/* Search Bar: Dibuat lebih soft dan elegan */}
      <div id="search-bar" className="relative w-full max-w-md group">
        <input
          id="search-input"
          type="text"
          placeholder="Search analytics or orders..."
          className="w-full bg-gray-50 border border-gray-200 p-2.5 pl-11 rounded-xl outline-none focus:bg-white focus:ring-2 focus:ring-hijau/20 focus:border-hijau transition-all duration-300"
        />
        <FaSearch
          id="search-icon"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-hijau transition-colors"
        />
      </div>

      {/* Right Section: Icons & Profile */}
      <div id="right-section" className="flex items-center space-x-6">
        {/* Action Icons: Konsistensi warna dan hover effect */}
        <div id="icons-group" className="flex items-center space-x-2">
          {/* Notification */}
          <div
            id="notification-icon"
            className="relative p-2.5 text-gray-500 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors"
          >
            <FaBell className="text-xl" />
            <span
              id="notification-badge"
              className="absolute top-2 right-2 w-4 h-4 bg-red-500 border-2 border-white text-white text-[10px] font-bold flex items-center justify-center rounded-full"
            >
              3
            </span>
          </div>

          {/* Settings */}
          <div
            id="settings-icon"
            className="p-2.5 text-gray-500 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors"
          >
            <SlSettings className="text-xl" />
          </div>

          {/* Chart (Opsional, dibuat lebih menyatu) */}
          <div
            id="chart-icon"
            className="p-2.5 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors"
          >
            <FcAreaChart className="text-xl" />
          </div>
        </div>

        {/* Profile Section: Diperbaiki tata letaknya */}
        <div
          id="profile-container"
          className="flex items-center space-x-3 border-l pl-6 border-gray-200"
        >
          <div className="flex flex-col text-right hidden sm:flex">
            <span className="text-xs text-gray-400 font-medium">
              Welcome back,
            </span>
            <span id="profile-name" className="text-sm font-bold text-gray-800">
              Rudio
            </span>
          </div>
          <div className="relative group cursor-pointer">
            <img
              id="profile-avatar"
              src="https://avatar.iran.liara.run/public/28"
              alt="User Avatar"
              className="w-10 h-10 rounded-xl object-cover border-2 border-transparent group-hover:border-hijau transition-all"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
