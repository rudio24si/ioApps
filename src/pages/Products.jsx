import { useState } from "react";
import PageHeader from "../components/PageHeader";
import productsData from "../data/productsData";
import { Link } from "react-router-dom";

const stockStatusStyle = (stock) => {
  if (stock <= 0) return "bg-red-100 text-red-700";
  if (stock <= 10) return "bg-amber-100 text-amber-700";
  return "bg-emerald-100 text-emerald-700";
};

export default function Products() {
  const [products, setProducts] = useState(productsData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    title: "",
    code: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.price || !form.stock || !form.code) return;

    const newProduct = {
      id: products.length + 1,
      title: form.title,
      code: form.code,
      category: form.category,
      brand: form.brand,
      price: Number(form.price),
      stock: Number(form.stock),
    };

    setProducts([newProduct, ...products]);
    setForm({
      title: "",
      code: "",
      category: "",
      brand: "",
      price: "",
      stock: "",
    });
    setShowModal(false);
  };

  return (
    <div id="products-container" className="min-h-screen bg-gray-50/50">
      <PageHeader title="Daftar Produk" onAdd={() => setShowModal(true)} />

      <div className="p-6">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-5 py-4 text-gray-500 font-semibold">
                    Code
                  </th>
                  <th className="px-5 py-4 text-gray-500 font-semibold">
                    Product Title
                  </th>
                  <th className="px-5 py-4 text-gray-500 font-semibold">
                    Brand
                  </th>
                  <th className="px-5 py-4 text-gray-500 font-semibold">
                    Category
                  </th>
                  <th className="px-5 py-4 text-gray-500 font-semibold">
                    Price
                  </th>
                  <th className="px-5 py-4 text-gray-500 font-semibold">
                    Stock
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, i) => (
                  <tr
                    key={product.id}
                    className={`border-b border-gray-50 hover:bg-gray-50/70 transition-colors ${i % 2 === 0 ? "" : "bg-gray-50/30"}`}
                  >
                    <td className="px-5 py-3.5 font-mono text-xs text-blue-600 font-bold">
                      {product.code}
                    </td>

                    <td className="px-5 py-3.5 font-medium">
                      <Link
                        to={`/products/${product.id}`}
                        className="text-emerald-600 hover:text-emerald-800 hover:underline transition-all"
                      >
                        {product.title}
                      </Link>
                    </td>

                    <td className="px-5 py-3.5 text-gray-600">
                      {product.brand}
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-lg text-[10px] uppercase font-bold tracking-wider">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-gray-700 font-semibold">
                      Rp {product.price.toLocaleString("id-ID")}
                    </td>
                    <td className="px-5 py-3.5">
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full ${stockStatusStyle(product.stock)}`}
                      >
                        {product.stock <= 0
                          ? "Out of Stock"
                          : `${product.stock} Unit`}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Add Product */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-5">
              Tambah Produk Baru
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Product Title
                </label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  placeholder="Nama produk..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Product Code
                </label>
                <input
                  name="code"
                  value={form.code}
                  onChange={handleChange}
                  placeholder="PROD-XXX"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Category
                </label>
                <input
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  placeholder="Kategori..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Brand
                </label>
                <input
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  placeholder="Merk..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Stock
                </label>
                <input
                  name="stock"
                  type="number"
                  value={form.stock}
                  onChange={handleChange}
                  placeholder="0"
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
                />
              </div>

              <div className="col-span-2">
                <label className="text-sm font-semibold text-gray-600 block mb-1">
                  Price (Rp)
                </label>
                <input
                  name="price"
                  type="number"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="Harga..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-hijau/30 focus:border-hijau"
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
