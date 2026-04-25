import { FaPlus, FaHome, FaChevronRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function PageHeader({ onAdd }) {
  const location = useLocation();
  const pageConfig = {
    "/": { title: "Dashboard", breadcrumb: "Dashboard", buttonLabel: null },
    "/orders": {
      title: "Orders",
      breadcrumb: "Order List",
      buttonLabel: "Add Orders",
    },
    "/customers": {
      title: "Customers",
      breadcrumb: "Customer List",
      buttonLabel: "Add Customer",
    },
  };
  const config = pageConfig[location.pathname] || pageConfig["/"];
  return (
    <div
      id="pageheader-container"
      className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border-b border-gray-100 shadow-sm"
    >
      <div id="pageheader-left" className="space-y-1">
        <h1
          id="page-title"
          className="text-2xl font-bold text-gray-800 tracking-tight"
        >
          {config.title}
        </h1>
        <nav
          id="breadcrumb-links"
          className="flex items-center text-sm font-medium"
        >
          <div className="flex items-center text-gray-400 hover:text-hijau transition-colors cursor-pointer">
            <FaHome className="mr-1.5" />
            <span>{config.title}</span>
          </div>
          <FaChevronRight className="mx-3 text-[10px] text-gray-300" />
          <span
            id="breadcrumb-current"
            className="text-hijau bg-hijau/10 px-2 py-0.5 rounded"
          >
            {config.breadcrumb}
          </span>
        </nav>
      </div>

      {config.buttonLabel && (
        <div id="action-button" className="mt-4 md:mt-0">
          <button
            id="add-button"
            onClick={onAdd}
            className="group flex items-center bg-hijau hover:bg-opacity-90 text-white px-5 py-2.5 rounded-xl shadow-lg shadow-hijau/20 transition-all duration-300 active:scale-95"
          >
            <FaPlus className="mr-2 text-sm group-hover:rotate-90 transition-transform duration-300" />
            <span className="font-semibold">{config.buttonLabel}</span>
          </button>
        </div>
      )}
    </div>
  );
}
