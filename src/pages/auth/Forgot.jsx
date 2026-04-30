import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Masukkan alamat email kamu.");
      return;
    }

    setLoading(true);
    // TODO: connect to your reset password API
    await new Promise((r) => setTimeout(r, 1500)); // simulasi request
    setLoading(false);
    setSent(true);
  };

  return (
    <>
      {/* Heading */}
      <p
        className="text-center italic text-[#f5e6c8]/60 text-[17px] mb-2"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Lupa Password? 🔑
      </p>
      <p className="text-center text-[#f5e6c8]/35 text-[13px] mb-5 leading-relaxed">
        Masukkan email kamu dan kami akan mengirimkan tautan untuk mereset
        password.
      </p>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c47f2c]/20 to-transparent" />
        <span className="text-[#c47f2c]/40 text-xs">✦</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c47f2c]/20 to-transparent" />
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 bg-red-900/15 border border-red-500/25 text-red-300 text-sm rounded-xl px-4 py-3 mb-4">
          <BsFillExclamationDiamondFill className="text-red-400 flex-shrink-0" />
          {error}
        </div>
      )}

      {/* Success state */}
      {sent ? (
        <div className="text-center py-4">
          <div className="text-4xl mb-4">☕</div>
          <p
            className="text-[#c47f2c] font-bold text-base mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Email Terkirim!
          </p>
          <p className="text-[#f5e6c8]/40 text-[13px] leading-relaxed">
            Cek inbox kamu di <span className="text-[#c47f2c]/70">{email}</span>
            <br />
            Sambil nunggu, minum kopi dulu yuk ☺
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* Loading */}
          {loading && (
            <div className="flex items-center gap-2 bg-[#c47f2c]/10 border border-[#c47f2c]/20 text-[#f5e6c8]/65 text-sm rounded-xl px-4 py-3 mb-4">
              <ImSpinner2 className="animate-spin text-[#c47f2c] flex-shrink-0" />
              Mengirim tautan reset...
            </div>
          )}

          <div className="mb-6">
            <label className="block text-[10px] font-bold tracking-[1.8px] uppercase text-[#c47f2c]/75 mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-[11px] bg-white/[0.035] border border-[#c47f2c]/18 rounded-xl text-[#f5e6c8] text-sm placeholder-[#f5e6c8]/20 outline-none focus:border-[#c47f2c] focus:bg-white/[0.06] focus:ring-2 focus:ring-[#c47f2c]/10 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-[#c47f2c] to-[#9a5e18] text-[#1a0a00] font-bold text-[13px] tracking-[2px] uppercase rounded-xl hover:shadow-[0_10px_28px_rgba(196,127,44,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-55 disabled:cursor-not-allowed"
          >
            Send Reset Link
          </button>
        </form>
      )}
    </>
  );
}
