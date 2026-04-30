import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1a0a00] relative overflow-hidden">

      {/* Dekorasi cincin kopi ambient */}
      <div className="fixed w-[500px] h-[500px] -top-36 -right-36 rounded-full border-[50px] border-[#c47f2c]/[0.07] pointer-events-none animate-pulse" />
      <div className="fixed w-[340px] h-[340px] -bottom-24 -left-24 rounded-full border-[35px] border-[#c47f2c]/[0.06] pointer-events-none" />
      <div className="fixed w-[200px] h-[200px] top-[60%] left-[60%] rounded-full border-[20px] border-[#c47f2c]/[0.04] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[420px] bg-gradient-to-br from-[#2c1503] to-[#1f0e04] border border-[#c47f2c]/20 rounded-[28px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.75)]">

        {/* Garis emas atas */}
        <div className="absolute top-0 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-transparent via-[#c47f2c] to-transparent" />

        {/* Header — Logo & Brand */}
        <div className="px-10 pt-9 pb-7 text-center border-b border-[#c47f2c]/10">

          {/* Steam animasi */}
          <div className="flex justify-center gap-2.5 mb-3 h-9 items-end">
            {[28, 36, 22].map((h, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-gradient-to-t from-[#f5e6c8]/50 to-transparent"
                style={{
                  height: h,
                  animation: `steam 2.2s ease-in-out ${i * 0.35}s infinite`,
                  opacity: 0,
                }}
              />
            ))}
          </div>

          {/* Coffee cup icon */}
          <div className="flex justify-center mb-4">
            <svg width="64" height="52" viewBox="0 0 64 52" fill="none">
              <ellipse cx="30" cy="45" rx="23" ry="5" fill="rgba(92,51,23,0.5)" />
              <path d="M9 19 Q11 46 30 46 Q49 46 51 19 Z" fill="#3d1f08" stroke="rgba(196,127,44,0.45)" strokeWidth="1" />
              <path d="M51 23 Q60 23 60 31 Q60 40 51 38" stroke="rgba(196,127,44,0.55)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <ellipse cx="30" cy="19" rx="21" ry="5.5" fill="#4a2510" />
              <ellipse cx="30" cy="19" rx="17" ry="4" fill="rgba(196,127,44,0.25)" />
              <path d="M23 19 Q30 15 37 19" stroke="rgba(245,230,200,0.35)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          <h1
            className="text-[32px] font-bold text-[#f5e6c8] leading-none"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-[#c47f2c]">Papi</span> Coffee
          </h1>
          <p className="text-[10px] tracking-[3.5px] uppercase text-[#f5e6c8]/30 mt-2">
            Est. 2024 · Your Daily Ritual
          </p>
        </div>

        {/* Outlet (Login / Register / dll) */}
        <div className="px-10 py-8">
          <Outlet />
        </div>

        {/* Footer */}
        <div className="px-10 pb-6 pt-1 border-t border-[#c47f2c]/[0.08] text-center">
          <p className="text-[11px] text-[#f5e6c8]/20">
            © 2025 <span className="text-[#c47f2c]/40">Papi Coffee</span> Admin Dashboard. All rights reserved.
          </p>
        </div>
      </div>

      {/* Tambahkan style steam di global CSS atau index.html */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@300;400;700&display=swap');
        @keyframes steam {
          0%   { opacity: 0; transform: translateY(0) scaleX(1); }
          45%  { opacity: 0.75; }
          100% { opacity: 0; transform: translateY(-36px) scaleX(1.6); }
        }
      `}</style>
    </div>
  );
}