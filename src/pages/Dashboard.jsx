import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  const stats = [
    {
      id: "orders",
      label: "Total Orders",
      value: "75",
      icon: <FaShoppingCart />,
      color: "bg-hijau",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      id: "delivered",
      label: "Total Delivered",
      value: "175",
      icon: <FaTruck />,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      id: "canceled",
      label: "Total Canceled",
      value: "40",
      icon: <FaBan />,
      color: "bg-red-500",
      lightColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      id: "revenue",
      label: "Total Revenue",
      value: "Rp 128rb",
      icon: <FaDollarSign />,
      color: "bg-amber-500",
      lightColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
  ];

  return (
    <div id="dashboard-container" className="min-h-screen bg-gray-50/50">
      {/* Header Halaman */}
      <PageHeader />

      {/* Grid Stats: Responsif & Terstruktur */}
      <div
        id="dashboard-grid"
        className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((item) => (
          <div
            key={item.id}
            className="group flex items-center p-5 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300 cursor-pointer"
          >
            {/* Wrapper Icon yang lebih estetik */}
            <div
              className={`${item.color} text-white p-4 rounded-2xl shadow-lg shadow-current/20 group-hover:scale-110 transition-transform duration-300`}
            >
              <span className="text-2xl">{item.icon}</span>
            </div>

            {/* Konten Teks */}
            <div className="ml-5">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">
                {item.label}
              </p>
              <div className="flex items-center space-x-2">
                <h2 className="text-2xl font-black text-gray-800">
                  {item.value}
                </h2>
                {/* Badge tambahan untuk improvisasi visual */}
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${item.lightColor} ${item.textColor}`}
                >
                  +2.5%
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder untuk Content Berikutnya (Chart/Tabel) */}
      <div className="px-6 pb-6">
        <div className="h-64 bg-white rounded-3xl border border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">
          Ini halaman dashboard
        </div>
      </div>
    </div>
  );
}
