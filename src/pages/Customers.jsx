import { useState } from "react";
import PageHeader from "../components/PageHeader";
import customersData from "../data/customersData";

const loyaltyStyle = {
  Gold: "bg-amber-100 text-amber-700",
  Silver: "bg-gray-100 text-gray-600",
  Bronze: "bg-orange-100 text-orange-700",
};

export default function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    customerName: "",
    email: "",
    phone: "",
    loyalty: "Bronze",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.customerName || !form.email || !form.phone) return;
    const newCustomer = {
      id: `CST-${String(customers.length + 1).padStart(3, "0")}`,
      customerName: form.customerName,
      email: form.email,
      phone: form.phone,
      loyalty: form.loyalty,
    };
    setCustomers([newCustomer, ...customers]);
    setForm({ customerName: "", email: "", phone: "", loyalty: "Bronze" });
    setShowModal(false);
  };

  return (
    <div id="customers-container" className="min-h-screen bg-gray-50/50">
      <PageHeader onAdd={() => setShowModal(true)} />

      <div className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold">Customer ID</th>
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold">Customer Name</th>
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold">Email</th>
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold">Phone</th>
                  <th className="text-left px-5 py-4 text-gray-500 font-semibold">Loyalty</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((c, i) => (
                  <tr key={c.id} className={`border-b border-gray-50 hover:bg-gray-50/70 transition-colors ${i % 2 === 0 ? "" : "bg-gray-50/30"}`}>
                    <td className="px-5 py-3.5 font-mono text-gray-500 text-xs">{c.id}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-800">{c.customerName}</td>
                    <td className="px-5 py-3.5 text-gray-600">{c.email}</td>
                    <td className="px-5 py-3.5 text-gray-600">{c.phone}</td>
                    <td className="px-5 py-3.5">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${loyaltyStyle[c.loyalty]}`}>
                        {c.loyalty}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Add Customer */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-5">Add New Customer</h2>

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
                <label className="text-sm font-semibold text-gray-600 block mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="contoh@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">Loyalty</label>
                <select
                  name="loyalty"
                  value={form.loyalty}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau bg-white"
                >
                  <option>Bronze</option>
                  <option>Silver</option>
                  <option>Gold</option>
                </select>
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
