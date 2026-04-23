import { Link } from "react-router-dom";
import { MdHome, MdWarningAmber } from "react-icons/md";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            {/* Icon Ilustrasi */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-hijau/10 blur-3xl rounded-full scale-150"></div>
                <MdWarningAmber className="text-[120px] text-hijau relative z-10 animate-bounce" />
            </div>

            {/* Teks Utama */}
            <h1 className="text-8xl font-black text-gray-900 tracking-tighter mb-2">
                404
            </h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Oops! Halaman Tidak Ditemukan
            </h2>
            <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
                Sepertinya Anda tersesat. Halaman yang Anda cari tidak ada atau telah dipindahkan ke alamat lain.
            </p>

            {/* Tombol Kembali */}
            <Link
                to="/"
                className="flex items-center space-x-2 bg-hijau text-white px-8 py-3 rounded-2xl font-bold shadow-xl shadow-hijau/30 hover:scale-105 transition-transform active:scale-95"
            >
                <MdHome className="text-xl" />
                <span>Kembali ke Dashboard</span>
            </Link>
        </div>
    );
}