import frameworkData from "./framework.json";

export default function FrameworkList() {
    return (
        <div className="min-h-screen bg-[#020d08] p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {frameworkData.map((item) => (
                /* Container Utama dengan Border Bergerak */
                <div
                    key={item.id}
                    className="relative group p-[1.5px] rounded-2xl overflow-hidden"
                >
                    {/* Efek Border Gradient Berputar (Hijau Emerald ke Mint) */}
                    <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#064e3b_0%,#10b981_50%,#064e3b_100%)] group-hover:duration-2000" />

                    {/* Isi Kartu (Content) */}
                    <div className="relative h-full w-full bg-[#051610]/95 backdrop-blur-3xl p-7 rounded-[15px] flex flex-col justify-between border border-white/5">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                                    {/* Icon Placeholder (Ganti dengan icon sesuai framework) */}
                                    <div className="w-5 h-5 rounded-sm bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                                </div>
                                <span className="text-[10px] font-mono tracking-[0.2em] text-emerald-500/60 uppercase">
                                    Release: {item.details.releaseYear}
                                </span>
                            </div>

                            <h2 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                {item.name}
                            </h2>

                            <p className="text-emerald-100/60 text-sm leading-relaxed mb-6 font-light">
                                {item.description}
                            </p>

                            <div className="flex items-center gap-2 mb-8">
                                <div className="h-[1px] w-4 bg-emerald-500/50"></div>
                                <span className="text-xs text-emerald-400 font-medium italic">
                                    by {item.details.developer}
                                </span>
                            </div>
                        </div>

                        <div>
                            {/* Tags dengan gaya modern */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {item.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="bg-emerald-950/50 border border-emerald-800/30 text-emerald-300 px-3 py-1 text-[10px] rounded-md backdrop-blur-md"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Action Button */}
                            <a
                                href={item.details.officialWebsite}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative inline-flex items-center justify-center w-full py-3 px-4 rounded-xl overflow-hidden font-semibold transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-emerald-600 group-hover/btn:bg-emerald-500 transition-colors duration-300"></div>
                                <span className="relative text-white text-sm flex items-center gap-2">
                                    View Documentation
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}