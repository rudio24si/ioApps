import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";

export default function ErrorPage({ kodeError, deskripsiError, gambarError }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
            {/* Gambar Error */}
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-hijau/10 blur-3xl rounded-full scale-150"></div>
                <img
                    src={gambarError}
                    alt={`Error ${kodeError}`}
                    className="w-40 h-40 object-contain relative z-10"
                />
            </div>

            {/* Kode Error */}
            <h1 className="text-8xl font-black text-gray-900 tracking-tighter mb-2">
                {kodeError}
            </h1>

            {/* Deskripsi Error */}
            <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed text-lg">
                {deskripsiError}
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
