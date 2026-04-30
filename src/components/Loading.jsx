export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#1a0a00] relative overflow-hidden">
      {/* Ambient rings */}
      <div className="fixed w-[500px] h-[500px] -top-36 -right-36 rounded-full border-[50px] border-[#c47f2c]/[0.07] pointer-events-none animate-pulse" />
      <div className="fixed w-[340px] h-[340px] -bottom-24 -left-24 rounded-full border-[35px] border-[#c47f2c]/[0.05] pointer-events-none" />

      {/* Cup + steam */}
      <div className="relative flex flex-col items-center mb-8">
        {/* Steam lines */}
        <div className="flex gap-2.5 mb-2 h-10 items-end">
          {[
            { h: 28, delay: "0s" },
            { h: 40, delay: "0.35s" },
            { h: 22, delay: "0.7s" },
          ].map((s, i) => (
            <div
              key={i}
              className="w-[3px] rounded-full bg-gradient-to-t from-[#f5e6c8]/50 to-transparent"
              style={{
                height: s.h,
                animation: `steam 2.2s ease-in-out ${s.delay} infinite`,
                opacity: 0,
              }}
            />
          ))}
        </div>

        {/* Coffee cup SVG */}
        <svg width="80" height="66" viewBox="0 0 64 52" fill="none">
          <ellipse cx="30" cy="45" rx="23" ry="5" fill="rgba(92,51,23,0.5)" />
          <path
            d="M9 19 Q11 46 30 46 Q49 46 51 19 Z"
            fill="#3d1f08"
            stroke="rgba(196,127,44,0.45)"
            strokeWidth="1"
          />
          <path
            d="M51 23 Q60 23 60 31 Q60 40 51 38"
            stroke="rgba(196,127,44,0.55)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          <ellipse cx="30" cy="19" rx="21" ry="5.5" fill="#4a2510" />
          <ellipse
            cx="30"
            cy="19"
            rx="17"
            ry="4"
            fill="rgba(196,127,44,0.25)"
          />
          <path
            d="M23 19 Q30 15 37 19"
            stroke="rgba(245,230,200,0.35)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/* Spinning ring around cup */}
        <div
          className="absolute -bottom-4 w-24 h-24 rounded-full border-2 border-transparent"
          style={{
            borderTopColor: "#c47f2c",
            borderRightColor: "rgba(196,127,44,0.3)",
            animation: "spin 1.2s linear infinite",
          }}
        />
      </div>

      {/* Brand */}
      <p
        className="text-[#f5e6c8] text-2xl font-bold mb-1 tracking-wide"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <span className="text-[#c47f2c]">Papi</span> Coffee
      </p>

      {/* Animated dots */}
      <div className="flex items-center gap-1 mt-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#c47f2c]"
            style={{
              animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
              opacity: 0.7,
            }}
          />
        ))}
      </div>
      <p className="text-[#f5e6c8]/30 text-[11px] tracking-[3px] uppercase mt-3">
        Menyeduh...
      </p>

      {/* Keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        @keyframes steam {
          0%   { opacity: 0; transform: translateY(0) scaleX(1); }
          45%  { opacity: 0.75; }
          100% { opacity: 0; transform: translateY(-36px) scaleX(1.6); }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
