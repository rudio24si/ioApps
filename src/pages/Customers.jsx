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

      {/* Placeholder untuk Content Berikutnya (Chart/Tabel) */}
      <div className="px-6 pb-6 mt-3">
        <div className="h-64 bg-white rounded-3xl border border-dashed border-gray-200 flex items-center justify-center text-gray-400 font-medium">
          Ini halaman Customers
        </div>
      </div>
    </div>
  );
}
