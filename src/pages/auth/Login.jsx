import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { ImSpinner2 } from "react-icons/im";
import { BsFillExclamationDiamondFill } from "react-icons/bs";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({ email: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        // navigate("/");
        console.log("Login successful:", response.data);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "An error occurred");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* Welcome */}
      <p
        className="text-center italic text-[#f5e6c8]/60 text-[17px] mb-5"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Welcome back, friend ☕
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

      {/* Loading */}
      {loading && (
        <div className="flex items-center gap-2 bg-[#c47f2c]/10 border border-[#c47f2c]/20 text-[#f5e6c8]/65 text-sm rounded-xl px-4 py-3 mb-4">
          <ImSpinner2 className="animate-spin text-[#c47f2c] flex-shrink-0" />
          Sedang menyeduh... mohon tunggu
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-[10px] font-bold tracking-[1.8px] uppercase text-[#c47f2c]/75 mb-2">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full px-4 py-[11px] bg-white/[0.035] border border-[#c47f2c]/18 rounded-xl text-[#f5e6c8] text-sm placeholder-[#f5e6c8]/20 outline-none focus:border-[#c47f2c] focus:bg-white/[0.06] focus:ring-2 focus:ring-[#c47f2c]/10 transition-all"
          />
        </div>

        <div className="mb-6">
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
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gradient-to-r from-[#c47f2c] to-[#9a5e18] text-[#1a0a00] font-bold text-[13px] tracking-[2px] uppercase rounded-xl hover:shadow-[0_10px_28px_rgba(196,127,44,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-55 disabled:cursor-not-allowed"
        >
          Sign In
        </button>
      </form>
    </>
  );
}
