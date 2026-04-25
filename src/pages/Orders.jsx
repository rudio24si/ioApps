import { useState } from "react";
import PageHeader from "../components/PageHeader";
import ordersData from "../data/ordersData";

const statusStyle = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-amber-100 text-amber-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    status: "Pending",
    totalPrice: "",
    orderDate: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.customerName || !form.totalPrice || !form.orderDate) return;
    const newOrder = {
      id: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
      customerName: form.customerName,
      status: form.status,
      totalPrice: Number(form.totalPrice),
      orderDate: form.orderDate,
    };
    setOrders([newOrder, ...orders]);
    setForm({ customerName: "", status: "Pending", totalPrice: "", orderDate: "" });
    setShowModal(false);
  };

  return (
    <div id="orders-container" className="min-h-screen bg-gray-50/50">
      <PageHeader onAdd={() => setShowModal(true)} />

      <div className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold">Order ID</th>
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold">Customer Name</th>
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold">Status</th>
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold">Total Price</th>
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold">Order Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <tr key={order.id} className={`border-b border-gray-50 hover:bg-gray-50/70 transition-colors ${i % 2 === 0 ? "" : "bg-gray-50/30"}`}>
                    <td className="px-5 py-3.5 font-mono text-gray-500 text-xs">{order.id}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-800">{order.customerName}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-700">
                      Rp {order.totalPrice.toLocaleString("id-ID")}
                    </td>
                    <td className="px-5 py-3.5 text-gray-500">{order.orderDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Add Order */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Add New Order</h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">Customer Name</label>
                <input
                  name="customerName"
                  value={form.customerName}
                  onChange={handleChange}
                  placeholder="Masukkan nama customer"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">Status</label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau bg-white"
                >
                  <option>Pending</option>
                  <option>Completed</option>
                  <option>Cancelled</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">Total Price (Rp)</label>
                <input
                  name="totalPrice"
                  type="number"
                  value={form.totalPrice}
                  onChange={handleChange}
                  placeholder="Contoh: 250000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">Order Date</label>
                <input
                  name="orderDate"
                  type="date"
                  value={form.orderDate}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
                />
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 border border-gray-200 text-gray-600 py-2.5 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-hijau text-white py-2.5 rounded-xl font-semibold shadow-lg shadow-hijau/20 hover:bg-opacity-90 transition-colors"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
