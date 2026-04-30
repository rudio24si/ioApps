import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

export default function Register() {
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [strength, setStrength] = useState(0);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
    if (name === "password") checkStrength(value);
  };

  const checkStrength = (val) => {
    let score = 0;
    if (val.length >= 8) score++;
    if (/[A-Z]/.test(val)) score++;
    if (/[0-9]/.test(val)) score++;
    if (/[^A-Za-z0-9]/.test(val)) score++;
    setStrength(score);
  };

  const strengthMeta = [
    { label: "", color: "" },
    { label: "Lemah", color: "bg-red-600" },
    { label: "Cukup", color: "bg-orange-500" },
    { label: "Bagus", color: "bg-[#c47f2c]" },
    { label: "Kuat", color: "bg-green-500" },
  ];

  const passwordMatch =
    dataForm.confirmPassword.length > 0
      ? dataForm.password === dataForm.confirmPassword
      : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!dataForm.email || !dataForm.password || !dataForm.confirmPassword) {
      setError("Semua field harus diisi.");
      return;
    }
    if (dataForm.password !== dataForm.confirmPassword) {
      setError("Password tidak cocok.");
      return;
    }

    // TODO: connect to your register API
    console.log("Register:", dataForm);
    setSuccess(
      "Akun berhasil dibuat! Selamat datang di keluarga Papi Coffee ☕",
    );
  };

  return (
    <>
      {/* Welcome */}
      <p
        className="text-center italic text-[#f5e6c8]/60 text-[17px] mb-5"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Join the family ✨
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

      {/* Success */}
      {success && (
        <div className="flex items-center gap-2 bg-green-900/15 border border-green-500/25 text-green-300 text-sm rounded-xl px-4 py-3 mb-4">
          <span>✓</span> {success}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div className="mb-4">
          <label className="block text-[10px] font-bold tracking-[1.8px] uppercase text-[#c47f2c]/75 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-[11px] bg-white/[0.035] border border-[#c47f2c]/18 rounded-xl text-[#f5e6c8] text-sm placeholder-[#f5e6c8]/20 outline-none focus:border-[#c47f2c] focus:bg-white/[0.06] focus:ring-2 focus:ring-[#c47f2c]/10 transition-all"
          />
        </div>

        {/* Password + strength bar */}
        <div className="mb-4">
          <label className="block text-[10px] font-bold tracking-[1.8px] uppercase text-[#c47f2c]/75 mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full px-4 py-[11px] bg-white/[0.035] border border-[#c47f2c]/18 rounded-xl text-[#f5e6c8] text-sm placeholder-[#f5e6c8]/20 outline-none focus:border-[#c47f2c] focus:bg-white/[0.06] focus:ring-2 focus:ring-[#c47f2c]/10 transition-all"
          />
          {/* Strength bar */}
          {dataForm.password.length > 0 && (
            <div className="mt-2">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`flex-1 h-[3px] rounded-full transition-all duration-300 ${
                      i <= strength
                        ? strengthMeta[strength].color
                        : "bg-white/[0.08]"
                    }`}
                  />
                ))}
              </div>
              <p className="text-[10px] text-[#f5e6c8]/35 mt-1 tracking-wide">
                {strengthMeta[strength].label}
              </p>
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-[10px] font-bold tracking-[1.8px] uppercase text-[#c47f2c]/75 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="••••••••"
            className={`w-full px-4 py-[11px] bg-white/[0.035] border rounded-xl text-[#f5e6c8] text-sm placeholder-[#f5e6c8]/20 outline-none focus:bg-white/[0.06] focus:ring-2 transition-all ${
              passwordMatch === false
                ? "border-red-500/50 focus:ring-red-500/10 focus:border-red-500/50"
                : "border-[#c47f2c]/18 focus:border-[#c47f2c] focus:ring-[#c47f2c]/10"
            }`}
          />
          {/* Match hint */}
          {passwordMatch !== null && (
            <p
              className={`text-[10px] mt-1.5 tracking-wide ${passwordMatch ? "text-green-400/70" : "text-red-400/70"}`}
            >
              {passwordMatch ? "✓ Password cocok" : "✗ Password tidak cocok"}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#c47f2c] to-[#9a5e18] text-[#1a0a00] font-bold text-[13px] tracking-[2px] uppercase rounded-xl hover:shadow-[0_10px_28px_rgba(196,127,44,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all"
        >
          Create Account
        </button>
      </form>
    </>
  );
}
